import { FurnitureID } from "./Furniture";
import { CddaID } from "./GenericDefine";
import { AnyItemID } from "./Item";
import { NestedMapgenID } from "./Mapgen";
import { MonsterID } from "./Monster";
import { TerrainID } from "./Terrain";
import { VehicleID } from "./Vehicle";
export type PaletteID = CddaID<"PALETTE">;
/**地形映射 */
type PaletteTerrainMap = {
    [key: string]: TerrainID | (TerrainID | [TerrainID, number])[];
};
/**家具映射 */
type PaletteFurnitureMap = {
    [key: string]: FurnitureID | (FurnitureID | [FurnitureID, number])[];
};
/**液体映射 */
type PaletteLiquidsMap = {
    [key: string]: {
        liquid: string;
        amount: [number, number];
    };
};
/**怪物映射 */
type PaletteMonstersMap = {
    [key: string]: {
        monster: MonsterID;
    };
};
/**嵌套地图映射 */
type PaletteNestMap = {
    [key: string]: {
        chunks: [
            /**嵌套生产子地图的ID */
            "null" | NestedMapgenID,
            /**生成权重 */
            number
        ][];
    };
};
/**载具映射 */
type PaletteVehiclesMap = {
    [key: string]: {
        vehicle: VehicleID;
        chance: number;
    };
};
/**物品映射 */
export type PaletteItemMap = {
    [key: string]: {
        /**重复n次 */
        repeat: number | [number, number];
        item: AnyItemID;
        chance: number;
    }[];
};
/**地图符号定义 */
export type Palette = {
    type: "palette";
    id: PaletteID;
    /**地形映射 */
    terrain?: PaletteTerrainMap;
    /**家具映射 */
    furniture?: PaletteFurnitureMap;
    /**液体映射 */
    liquids?: PaletteLiquidsMap;
    /**嵌套地图映射 */
    nested?: PaletteNestMap;
    /**怪物映射 */
    monster?: PaletteMonstersMap;
    /**载具映射 */
    vehicles?: PaletteVehiclesMap;
    /**物品映射 */
    items?: PaletteItemMap;
};
export {};
