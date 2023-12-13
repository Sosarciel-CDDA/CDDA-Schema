import * as TJS from "typescript-json-schema";
import * as path from 'path';

const settings: TJS.PartialArgs = {
    required: true,
    strictNullChecks: true,
    ignoreErrors: true,
    constAsEnum:true,
};

// optionally pass ts compiler options
const compilerOptions: TJS.CompilerOptions = {
    required: true,
    strictNullChecks: true,
    ignoreErrors: true,
    preserveConstEnums:true,
    constAsEnum:true,
};

const basePath = path.join(process.cwd(),"src","SchemaTest.ts");

// 你的TypeScript程序
const program = TJS.getProgramFromFiles(
    [basePath],
    compilerOptions
);

// We can either get the schema for one file and one type...
const schema = TJS.generateSchema(program, "*", settings);
console.log(JSON.stringify(schema,null,2))


/**自定义的ID  
 * @TJS-type string  
 */
export type CddaID<T extends string> = `${`${string}_`|''}${T}_${string}`;

/**自定义的ID  
 * @TJS-type string  
 */
export type OR<T1 extends string> = `${string}JustString`;

/**测试1  
 */
type TestFlag = CddaID<`Flag`>;




/**自定义的ID  
 */
type AnyString = String&string|"1111111"|"nnnnnn"


/**测试2  
 */
type TestFlag2 = OR<AnyString>|DefineGenericFlag;

/**通用物品的flag列表 */
export const GenericFlagList = [
    "ACTIVATE_ON_PLACE" , // 放置时激活
    "SINGLE_USE"        , // 使用后删除
    "ZERO_WEIGHT"       , // 允许0重量/体积
    "TARDIS"            , // 跳过容器大小检查
    "TRADER_KEEP"       , // 商人不会售卖这个物品
    "NO_RELOAD"         , // 无法重载
    "UNBREAKABLE"       , // 不会损坏
    "DURABLE_MELEE"     , // 坚固的近战武器
] as const;
/**预定义的通用物品的flag */
export type DefineGenericFlag = typeof GenericFlagList[number];







