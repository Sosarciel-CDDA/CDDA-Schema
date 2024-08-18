import { FurnitureID } from "./Furniture";
import { CddaID } from "./GenericDefine";
import { AnyItemID } from "./Item";
import { ItemGroupID } from "./ItemGroup";
import { MonsterID } from "./Monster";
import { OvermapTerrainID } from "./OvermapTerrain";
import { Palette, PaletteID } from "./Palette";
import { TerrainID } from "./Terrain";
import { VehicleID } from "./Vehicle";
/**嵌套地块 */
export type NestedMapgenID = CddaID<"NESTMPG">;
type Place<T> = T & {
    /**放置的x坐标 固定值或范围随机 */
    x: number | [number, number];
    /**放置的y坐标 固定值或范围随机 */
    y: number | [number, number];
    /**重复放置n次 */
    repeat: number | [number, number];
    /**放置概率 */
    chance: number;
};
export type FurnPlace = Place<{
    furn: FurnitureID;
}>;
export type ItemPlace = Place<{
    item: AnyItemID;
}>;
export type GroupPlace = Place<{
    group: ItemGroupID;
    magazine: number;
}>;
export type MonsterPlace = Place<{
    monster: MonsterID;
    density: number;
}>;
export type VehiclePlace = Place<{
    vehicle: VehicleID;
    chance: number;
    /**车辆状态 */
    status: 1 | -1;
    /**角度 0~360 */
    rotation: number;
    /**燃料 0~100 */
    fuel: number;
}>;
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
        place_furniture?: FurnPlace[];
        place_item?: ItemPlace[];
        place_loot?: GroupPlace[];
        place_monsters?: MonsterPlace[];
        place_vehicles?: VehiclePlace[];
    } & Omit<Palette, 'id' | 'type'>;
};
/**任意地图生成定义 */
export type AnyMapgen = Mapgen | NestMapgen;
export {};
