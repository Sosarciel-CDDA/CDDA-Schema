import { CddaID } from "./GenericDefine";
/**预定义的武器类型ID 列表 */
export declare const DefineWeaponCategoryIDList: readonly ["AUTOMATIC_RIFLES", "AUTOMATIC_PISTOLS", "KNIVES", "BATONS", "FLAILS", "MACES", "MEDIUM_SWORDS", "LONG_SWORDS", "SHORT_SWORDS", "QUARTERSTAVES", "CLAWS", "SHIVS", "HOOKING_WEAPONRY", "SPEARS", "POLEARMS", "FENCING_WEAPONRY", "BIONIC_WEAPONRY", "BIONIC_SWORDS", "MEDIEVAL_SWORDS", "CONSTRUCTED_SWORDS", "JAPANESE_SWORDS", "GREAT_SWORDS", "GREAT_HAMMERS", "GREAT_AXES", "HAND_AXES"];
/**预定义的武器类型 */
export type DefineWeaponCategoryID = typeof DefineWeaponCategoryIDList[number];
/**武器类型ID */
export type WeaponCategoryID = CddaID<"WPCY"> | DefineWeaponCategoryID;
