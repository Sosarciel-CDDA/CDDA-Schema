import { CddaID, Color, DescText } from "./GenericDefine";

/**大地图地块ID */
export type OvermapTerrainID = CddaID<"OMTERR">;
/**大地图地块显示设置  
 * 生成设置位于mapgen  
 */
export type OvermapTerrain = {
    type: "overmap_terrain";
    id: OvermapTerrainID[];
    "copy-from"?: OvermapTerrainID;
    name: (DescText);
    sym: string;
    color: Color;
};
