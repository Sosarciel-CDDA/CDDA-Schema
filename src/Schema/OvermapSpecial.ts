import { CddaID } from "./GenericDefine";
import { OvermapTerrainID } from "./Mapgen";

/**大地图特殊地点 */
export type OverMapSpecialID = CddaID<"OMSPEC">;

type Direction = 'north' | 'south' | 'east' | 'west';
type OmTerrainIDWithDirection = `${OvermapTerrainID}_${Direction}`;

type GenPos = {point: [number, number, number];}
type OverMapGen = GenPos&{
    overmap: OmTerrainIDWithDirection;
}

export type OverMapSpecial = {
    type: "overmap_special";
    id: OverMapSpecialID;
    overmaps: OverMapGen[];
    locations: ["field"];
    connections: GenPos[];
    city_distance: [number, number];
    city_sizes: [number, number];
    occurrences: [number, number];
    flags: ["MILITARY", "UNIQUE", "MAN_MADE"];
};
