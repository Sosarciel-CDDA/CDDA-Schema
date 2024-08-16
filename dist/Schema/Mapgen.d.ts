import { CddaID } from "./GenericDefine";
import { AnyItemID } from "./Item";
import { ItemGroupID } from "./ItemGroup";
import { MonsterID } from "./Monster";
import { Palette, PaletteID } from "./Palette";
import { TerrainID } from "./Terrain";
import { VehicleID } from "./Vehicle";
/**大地图地块 */
export type OvermapTerrainID = CddaID<"OMTERR">;
/**嵌套地块 */
export type NestedMapgenID = CddaID<"NESTMPG">;
export type GroupPlace = {
    /**重复n次 */
    repeat: number | [number, number];
    group: ItemGroupID;
    chance: number;
    x: number;
    y: number;
    magazine: number;
};
export type ItemPlace = {
    /**重复n次 */
    repeat: number | [number, number];
    item: AnyItemID;
    chance: number;
};
export type MonsterPlace = {
    monster: MonsterID;
    x: [number, number];
    y: [number, number];
    repeat: number | [number, number];
    density: number;
};
export type VehiclePlace = {
    vehicle: VehicleID;
    x: number;
    y: number;
    chance: number;
    status: 1;
    rotation: number;
};
/**嵌套生成子地图生成定义 */
export type NestMapgen = {
    nested_mapgen_id: NestedMapgenID;
    object: {
        mapgensize: [number, number];
        rotation: [number, number];
    };
} & Omit<Mapgen, 'om_terrain'>;
/**地图生成定义 */
export type Mapgen = {
    type: "mapgen";
    method: "json";
    om_terrain: OvermapTerrainID | OvermapTerrainID[] | OvermapTerrainID[][];
    weight: number;
    object: {
        fill_ter?: TerrainID;
        rows: string[];
        palettes?: PaletteID[];
        items?: {
            [key: string]: ItemPlace[];
        };
        place_loot?: GroupPlace[];
        place_monsters?: MonsterPlace[];
        place_vehicles?: VehiclePlace[];
    } & Omit<Palette, 'id' | 'type'>;
};
/**任意地图生成定义 */
export type AnyMapgen = Mapgen | NestMapgen;
