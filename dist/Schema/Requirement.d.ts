import { CddaID } from "./GenericDefine";
import { AnyItemID, ToolID } from "./Item";
/**需求组ID */
export type RequirementID = CddaID<"REQ">;
/**需求组 */
export type Requirement = {
    type: "requirement";
    /**定义物品质量, 如 CUT 或 HAMMER, 以及制作所需的质量等级 */
    qualities: {
        /**工具ID */
        id: ToolID;
        /**要求等级 */
        level: number;
    }[];
    /**列出制作配方所需的工具 (或几种可选工具) 的物品 id
     * [ [ 工具, 消耗的充能 ] ]
     */
    tools: [AnyItemID, number][];
    /**列出物品或需求 id, 主要用于材料成分
     * [ [ 可选的物品1, 可选的物品2 ], [ 必须的物品1 ] ]
     */
    components: ReqComponents;
    /**给出需求 id；需求可能有嵌套的工具、质量或组件 */
    using: ReqUsing;
};
/**需求格式
 * [ID , 消耗的数量]
 * NO_RECOVER为不可恢复
 * LIST为标记其是一个需求组
 */
type ReqFormat = [
    RequirementID,
    number,
    "LIST"
] | [
    AnyItemID,
    number,
    "NO_RECOVER"?
];
/**using格式的需求 */
export type ReqUsing = [RequirementID, number][];
/**Components格式的需求 */
export type ReqComponents = ReqFormat[][];
export {};
