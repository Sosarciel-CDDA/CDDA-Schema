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




/**Schema构造器 */
export class SchemaBuilder{
    /**将会覆盖 definitions 对应内容的表 */
    covetDefinitionsTable:JObject={}
    /**构造Schema
     * @param configPath    tsconfig路径
     * @param outDir        schema文件夹路径 如 ./schema/
     */
    async builSchema(configPath:string,outDir:string){
        outDir = path.join(outDir,"schemas.json");
        const log = await UtilFunc.exec(`typescript-json-schema ${configPath} * --out ${outDir} --required --strictNullChecks --aliasRefs`);
        console.log(log);

        //进行预处理并展开
        await this.expandSchema(outDir);
    }
    /**展开schema以供使用 */
    async expandSchema(schemasPath:string){
        let schema = UtilFT.loadJSONFileSync(schemasPath) as any;
        //覆盖
        this.coverObj(schema["definitions"],this.covetDefinitionsTable);
        //替换SchemaString标识符
        schema = JSON.parse(JSON.stringify(schema).replace(/\^\.\*SchemaString\$/g,'^.*$'));
        UtilFT.writeJSONFile(schemasPath,schema);

        const definitions = schema["definitions"] as Record<string,JObject>;
        //展开定义
        for(const typeName in definitions){
            const schema = definitions[typeName];
            //展开所有object与忽略检测的类型
            if(!(schema.type == "object" || schema.type == "array" || schema.type == undefined)) continue;
            if((/^.+_[0-9]/).test(typeName) || (/^{./).test(typeName)) continue;

            const basename = path.basename(schemasPath);
            const tpath = path.join(path.dirname(schemasPath),`${typeName}.schema.json`);
            if(!this.isPathValid(tpath)) continue;
            UtilFT.writeJSONFile(tpath,{
                "$schema": "http://json-schema.org/draft-07/schema#",
                "$ref": `${basename}#/definitions/${typeName}`
            });
        }
    }
    /**路径有效 */
    private isPathValid(filePath:string){
        if(filePath.length>255) return false;
        const invalidCharacters = ['<', '>', '"', '|', '?', '*'];
        for (let i = 0; i < invalidCharacters.length; i++) {
            if (filePath.includes(invalidCharacters[i]))
                return false;
        }
        return true;
    }
    /**覆盖object */
    private coverObj(base:JObject,cover:JObject){
        for(const k in cover){
            const v = cover[k];
            if( typeof v === "object" && !Array.isArray(v) &&
                typeof base[k] === "object" && !Array.isArray(base[k]) )
                this.coverObj(base[k] as JObject,v as JObject);
            else
                base[k] = v;
        }
    }
}





export async function buildCddaSchema(outPath?:string){
    const builder = new SchemaBuilder();

    outPath = outPath??path.join(process.cwd(),"schema");
    const configPath = path.join(__dirname,"..","tsconfig.json");

    await builder.builSchema(configPath,outPath)
}

