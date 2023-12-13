import { CddaID } from "./GenericDefine";



/**预定义的武器类型ID 列表 */
export const DefineWeaponCategoryIDList = [
    "AUTOMATIC_RIFLES"      , //自动步枪
    "AUTOMATIC_PISTOLS"     , //自动手枪
    "KNIVES"                , //刀
    "BATONS"                , //警棍
    "FLAILS"                , //连枷
    "MACES"                 , //狼牙棒
    "MEDIUM_SWORDS"         , //中剑
    "LONG_SWORDS"           , //长剑
    "SHORT_SWORDS"          , //短剑
    "QUARTERSTAVES"         , //长杖
    "CLAWS"                 , //爪
    "SHIVS"                 , //匕首
    "HOOKING_WEAPONRY"      , //钩形武器
    "SPEARS"                , //矛
    "POLEARMS"              , //长柄武器
    "FENCING_WEAPONRY"      , //击剑武器
    "BIONIC_WEAPONRY"       , //仿生武器
    "BIONIC_SWORDS"         , //仿生剑
    "MEDIEVAL_SWORDS"       , //中世纪剑
    "CONSTRUCTED_SWORDS"    , //构造剑
    "JAPANESE_SWORDS"       , //日本剑
    "GREAT_SWORDS"          , //大剑
    "GREAT_HAMMERS"         , //大锤
    "GREAT_AXES"            , //大斧
    "HAND_AXES"             , //手斧
] as const;
/**预定义的武器类型 */
export type DefineWeaponCategoryID = typeof DefineWeaponCategoryIDList[number];
/**武器类型ID */
export type WeaponCategoryID = CddaID<"WPCY"> | DefineWeaponCategoryID;