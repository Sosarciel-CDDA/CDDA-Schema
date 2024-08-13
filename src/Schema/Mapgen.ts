import { CddaID } from "./GenericDefine";
import { AnyItemID } from "./Item";
import { ItemGroupID } from "./ItemGroup";
import { MonsterID } from "./Monster";
import { PaletteID } from "./Palette";
import { TerrainID } from "./Terrain";
import { VehicleID } from "./Vehicle";

export type OmTerrainID = CddaID<"OMT">;


export type GroupPlace = {
    /**重复n次 */
    repeat: number|[number, number];
    group: ItemGroupID;
    chance: number;
    x:number;
    y:number;
    magazine:number;
};
export type ItemPlace = {
    /**重复n次 */
    repeat: number|[number, number];
    item: AnyItemID;
    chance: number;
};
export type MonsterPlace = {
    monster: MonsterID;
    x: [number, number];
    y: [number, number];
    repeat: number|[number, number];
    density: number;
}

export type VehiclePlace = {
    vehicle: VehicleID;
    x: number;
    y: number;
    chance: number;
    status: 1;
    rotation: number;
}

export type Mapgen = {
    type: "mapgen";
    method: "json";
    om_terrain: OmTerrainID[][];
    weight: number;
    object: {
        fill_ter: TerrainID;
        rows: string[];
        palettes: PaletteID[];
        items: {
            [key: string]: ItemPlace[];
        };
        place_loot: GroupPlace[];
        place_monsters: MonsterPlace[];
        place_vehicles: VehiclePlace[];
    };
};
