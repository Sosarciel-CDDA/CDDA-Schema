import { CddaID, DescText } from "./GenericDefine";
/**TalkTopic ID格式 */
export type TerrainID = CddaID<"TERRAIN">;
/**对话选项 */
export type Terrain = {
    type: "terrain";
    id: TerrainID;
    name: (DescText);
    /**ascii显示符号 */
    symbol: string;
};
