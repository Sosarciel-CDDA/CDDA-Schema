import { CddaID } from "./GenericDefine";
import { MonsterID } from "./Monster";
import { TerrainID } from "./Terrain";
export type PaletteID = CddaID<"PALETTE">;
type PaletteTerrainMap = {
    [key: string]: TerrainID | (TerrainID | [TerrainID, number])[];
};
type PaletteFurnitureMap = {
    [key: string]: string | (string | [string, number])[];
};
type PaletteLiquidsMap = {
    [key: string]: {
        liquid: string;
        amount: [number, number];
    };
};
type PaletteMonstersMap = {
    [key: string]: {
        monster: MonsterID;
    };
};
/**地图符号定义 */
export type Palette = {
    type: "palette";
    id: PaletteID;
    terrain?: PaletteTerrainMap;
    furniture?: PaletteFurnitureMap;
    liquids?: PaletteLiquidsMap;
    monster?: PaletteMonstersMap;
};
export {};
