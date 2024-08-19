import { CddaID, CharSymbol, Color, DescText } from "./GenericDefine";
import { MonsterGroupID } from "./MonsterGroup";

/**大地图地块ID */
export type OvermapTerrainID = CddaID<"OMTERR">;

type OMSpawn = {
    group: MonsterGroupID;
    population: [number, number];
    chance: number;
};
/**大地图地块显示设置
 * 生成设置位于mapgen
 */
export type OvermapTerrain = {
    type: "overmap_terrain";
    id: OvermapTerrainID | OvermapTerrainID[];
    "copy-from"?: OvermapTerrainID;
    name: DescText;
    sym: CharSymbol;
    color: Color;
    spawns: OMSpawn;
};
