import * as path from 'path';
import { JObject, UtilFT, UtilFunc } from "@zwa73/utils";
/**
// optionally pass argument to schema generator
const settings: TJS.PartialArgs = {
    required: true,
    aliasRef: true,
};

// optionally pass ts compiler options
const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: true,
};

//const basePath = path.join(process.cwd(),"src");
//const fillPathList = Object.values(UtilFT.fileSearch(basePath,"\\.ts$"))
//    .filter(filePath=>!filePath.includes("StaticData"));
//console.log("files",fillPathList);

// 你的TypeScript程序
const program = TJS.getProgramFromFiles(
    [path.join(process.cwd(),"tsconfig.json")],
    compilerOptions
);

// We can either get the schema for one file and one type...
const schema = TJS.generateSchema(program, "*", settings);

UtilFT.writeJSONFile(path.join(process.cwd(),"schemas"),schema as any);
*/


function isPathValid(filePath:string){
    if(filePath.length>255) return false;
    const invalidCharacters = ['<', '>', ':', '"', '|', '?', '*'];
    for (let i = 0; i < invalidCharacters.length; i++) {
        if (filePath.includes(invalidCharacters[i]))
            return false;
    }
    return true;
}

/**展开schema以供使用 */
export async function expandSchema(schemasPath:string,withOutTypes:string[]=[]){
    let schema = UtilFT.loadJSONFileSync(schemasPath) as any;
    //替换SchemaString标识符
    schema = JSON.parse(JSON.stringify(schema).replace(/\^\.\*SchemaString\$/g,'^.*$'));
    UtilFT.writeJSONFile(schemasPath,schema);

    const definitions = schema["definitions"] as Record<string,JObject>;
    //展开定义
    for(const typeName in definitions){
        const schema = definitions[typeName];
        //展开所有object与忽略检测的类型
        if(schema.type != "object" && schema.type != undefined && !withOutTypes.includes(typeName)) continue;
        if((/^.+_[0-9]/).test(typeName) || (/^{./).test(typeName)) continue;

        const tpath = path.join(path.dirname(schemasPath),`${typeName}.schema.json`);
        if(!isPathValid(tpath)) continue;
        UtilFT.writeJSONFile(path.join(path.dirname(schemasPath),`${typeName}.schema.json`),{
            "$schema": "http://json-schema.org/draft-07/schema#",
            "$ref": `schemas.json#/definitions/${typeName}`
        });
    }
}

export async function buildCddaSchema(outPath?:string){
    outPath = outPath??path.join(process.cwd(),"CddaSchema");
    const configPath = path.join(__dirname,"..","tsconfig.json");
    //编译schema
    //await UtilFunc.exec("npm run generate-schema");
    await UtilFunc.exec(`typescript-json-schema ${configPath} * --out ${outPath}/CddaSchemas.json --required --strictNullChecks --aliasRefs`);
    //await UtilFunc.exec("typescript-json-schema tsconfig.json * --out schema/schemas.json --required --strictNullChecks");
    //展开
    const schemasPath = path.join(outPath,"CddaSchemas.json");
    await expandSchema(schemasPath,["AnyCddaJsonList"]);
}

