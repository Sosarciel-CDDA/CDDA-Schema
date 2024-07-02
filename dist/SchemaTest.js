"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericFlagList = void 0;
const TJS = __importStar(require("typescript-json-schema"));
const path = __importStar(require("path"));
const settings = {
    required: true,
    strictNullChecks: true,
    ignoreErrors: true,
    constAsEnum: true,
};
// optionally pass ts compiler options
const compilerOptions = {
    required: true,
    strictNullChecks: true,
    ignoreErrors: true,
    preserveConstEnums: true,
    constAsEnum: true,
};
const basePath = path.join(process.cwd(), "src", "SchemaTest.ts");
// 你的TypeScript程序
const program = TJS.getProgramFromFiles([basePath], compilerOptions);
// We can either get the schema for one file and one type...
const schema = TJS.generateSchema(program, "*", settings);
console.log(JSON.stringify(schema, null, 2));
/**通用物品的flag列表 */
exports.GenericFlagList = [
    "ACTIVATE_ON_PLACE", // 放置时激活
    "SINGLE_USE", // 使用后删除
    "ZERO_WEIGHT", // 允许0重量/体积
    "TARDIS", // 跳过容器大小检查
    "TRADER_KEEP", // 商人不会售卖这个物品
    "NO_RELOAD", // 无法重载
    "UNBREAKABLE", // 不会损坏
    "DURABLE_MELEE", // 坚固的近战武器
];
