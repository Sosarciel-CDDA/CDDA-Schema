import { JObject } from "@zwa73/utils";
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
export declare class SchemaBuilder {
    /**将会覆盖 definitions 对应内容的表 */
    covetDefinitionsTable: JObject;
    /**构造Schema
     * @param configPath    tsconfig路径
     * @param outDir        schema文件夹路径 如 ./schema/
     */
    builSchema(configPath: string, outDir: string): Promise<void>;
    /**展开schema以供使用 */
    expandSchema(schemasPath: string): Promise<void>;
    /**路径有效 */
    private isPathValid;
    /**覆盖object */
    private coverObj;
}
export declare function buildCddaSchema(outPath?: string): Promise<void>;
