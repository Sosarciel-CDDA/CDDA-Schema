import { CddaID, Color, DescText, Volume, Weight } from "./GenericDefine";
/**家具ID */
export type FurnitureID = CddaID<"FURN">;
/**家具 */
export type Furniture = {
    type: "furniture";
    id: FurnitureID;
    name: (DescText);
    symbol: string;
    looks_like: "chair";
    color: Color;
    /**当这个家具在范围内时
     * 可用于制作的物品 (工具）的 ID（家具充当该类型的物品)
     */
    crafting_pseudo_item?: "anvil";
    /**可以在这里制作。
     * 超过这些限制的质量/体积会导致速度惩罚。
     * 必须与 "workbench" examine_action 配对才能工作。
     **/
    workbench?: {
        /**制作加速倍率 */
        multiplier: 1.1;
        /**允许的质量 */
        mass: Weight;
        /**允许的体积 */
        volume: Volume;
    };
};
