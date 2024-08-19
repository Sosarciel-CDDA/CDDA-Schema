import { AmmunitionTypeID } from "../AmmiunitionType";
import { EnchantmentID, InlineEnchantment } from "../Enchantment";
import { CustomFlagID, FlagID } from "../Flag";
import { CddaID, CharSymbol, Color, CopyfromVar, DescText, Explosion, Length, MeleeDamage, Phase, PocketData, Price, Time, Volume, Weight } from "../GenericDefine";
import { Ammo, AmmoID } from "./Ammo";
import { Gun, GunID } from "./Gun";
import { WeaponCategoryID } from "../WeaponCategory";
import { MaterialID } from "../Material";
import { Tool, ToolID } from "./Tool";
import { Magazine, MagazineID } from "./Magazine";
import { Comestible } from "./Comestible";
import { Armor } from "./Armor";
import { GunMod } from "./GunMod";
import { UseAction } from "../ItemAction";


/**预定义的通用物品 列表 */
export const DefineGenericIDList = [
    "null"                      ,//空物品
    "afs_biomaterial_1"         ,//afs材料
    "afs_biomaterial_2"         ,
    "afs_biomaterial_3"         ,
    "afs_biomaterial_4"         ,
    "afs_biomaterial_5"         ,
    "afs_circuitry_1"           ,
    "afs_circuitry_2"           ,
    "afs_circuitry_3"           ,
    "afs_circuitry_4"           ,
    "afs_circuitry_5"           ,
    "afs_energy_storage_1"      ,
    "afs_energy_storage_2"      ,
    "afs_energy_storage_3"      ,
    "afs_energy_storage_4"      ,
    "afs_energy_storage_5"      ,
    "afs_heat_2_salvage"        ,
    "afs_heat_1"                ,
    "afs_heat_2"                ,
    "afs_heat_3"                ,
    "afs_heat_4"                ,
    "afs_heat_5"                ,
    "afs_magnet_1"              ,
    "afs_magnet_2"              ,
    "afs_magnet_3"              ,
    "afs_magnet_4"              ,
    "afs_material_1"            ,
    "afs_material_2"            ,
    "afs_material_3"            ,
    "afs_material_4"            ,
    "afs_material_5"            ,
    "afs_neural_io_1"           ,
    "afs_neural_io_2"           ,
    "afs_neural_io_3"           ,
    "afs_neural_io_4"           ,
    "afs_neural_io_5"           ,
    "afs_optics_3"              ,
    "afs_optics_4"              ,
] as const;
/**预定义的通用物品 */
export type DefineGenericID = typeof DefineGenericIDList[number];

/**Generic ID格式  */
export type GenericID = CddaID<"GENERIC">|DefineGenericID;

/**通用物品 */
export type Generic = CopyfromVar<{
    type: "GENERIC";
    id:GenericID;
    flags?: GenericFlag[];
}&GenericBase>;

/**通用物品基础 */
export type GenericBase = {
    /**物品flag */
    flags?: string[];
    /**物品类型 */
    type: string;
    /**物品唯一ID */
    id: string;
    /**物品显示名 */
    name: (DescText);
    /**物品分类 */
    category?:ItemCategotyID;
    /**该项目应在哪个容器 (如果有)中生成 */
    container?:AnyItemID;
    /**如果该物品没有配方, 则修复该物品时等同于配方 */
    repairs_like?: AnyItemID,
    /**提示图块集, 如果该项目没有图块 使用looks_like图块 */
    looks_like?: string,
    /**描述 */
    description: (DescText);
    /**用于该项目的 asci_art 的 ID */
    ascii_picture?:string;
    /**默认的状态 默认为固态 */
    phase?: Phase;
    /**重量 0重量物品需要添加 ZERO_WEIGHT标签 */
    weight: (Weight);
    /**体积 0体积物品需要添加 ZERO_WEIGHT标签*/
    volume: (Volume);
    /**当物品集成到另一个物品中时添加到基础物品的体积  
     * 例如, 集成到枪支的枪械 体积会添加到基础物品上。  
     * 默认值与音量相同。 */
    integral_volume?: (Volume);
    /**当物品集成到另一个物品中时  
     * 例如, 集成到枪中的枪械 重量会添加到基础物品上。  
     * 默认值与重量相同。 */
    integral_weight?: (Weight);
    /**最长物品尺寸的长度。 默认为体积的立方根 */
    longest_side?: (Length);
    /**对于非刚性物品体积 (以及磨损物品负担)与内容成比例增加 */
    rigid?: boolean;
    /** (可选, 默认 = 1)如果是容器或车辆部件, 它应为内容物提供多少绝缘程度 */
    insulation?:number;
    /**物品价格 */
    price?: (Price);
    /**大灾变后的物品价格 */
    price_postapoc?: (Price);
    /**控制物品在受到伤害时退化的速度。 0 = 无退化。  
     * 默认为 1.0  
     */
    degradation_multiplier?: number;
    /**ascii显示符号 */
    symbol: CharSymbol;
    /**颜色 */
    color?: Color;
    /**材质 */
    material?: ItemMaterial[];
    /**材质 可用哪些材料修复 */
    repairs_with?: AmmunitionTypeID[];
    /**属于什么类型的武器 */
    weapon_category?: WeaponCategoryID[];
    /**作为近战武器的伤害 */
    melee_damage?:MeleeDamage;
    /**使用效果 */
    use_action?: UseAction|UseAction[];
    /**口袋数据 */
    pocket_data?: PocketData[];
    /**命中数据 */
    to_hit?: ToHit;
    /**超过该体积杂志开始从物品中突出并增加额外的体积 */
    magazine_well?: number;
    /**每种弹药类型 (如果有)的杂志类型, 可用于重新加载该物品 */
    magazines?: GenericMagazines[];
    /**掉进火里会爆炸 */
    explode_in_fire?: boolean;
    /**爆炸数据 */
    explosion?: Explosion;
    /**定时激活 一旦定时器的持续时间过去, 就会"countdown_action"执行 至少1 */
    countdown_interval?: (Time);
    /**定时激活的动作 */
    countdown_action?: UseAction;
    /**附魔数据 */
    relic_data?: RelicData,
    /**最小力量需求 */
    min_strength?: number;
    /**最小敏捷需求 */
    min_dexterity?: number;
    /**最小智力需求 */
    min_intelligence?: number;
    /**最小感知需求 */
    min_perception?: number;
};

/**魔法物品数据 */
export type RelicData = {
    /**自动充能 */
    charge_info?: {
        regenerate_ammo: true;
        /**回复方式 periodic 为周期 */
        recharge_type: "lunar"|"periodic"|"solar_cloudy"|"solar_sunny"|"none";
        /**每次回复的间隔 */
        time: (Time);
    },
    /**被动附魔效果 */
    passive_effects?: ({
        /**引用附魔 */
        id: EnchantmentID
    }|InlineEnchantment)[];
}

/**内置弹夹 */
export type GenericMagazines = [
    /**弹药类型 */
    AmmunitionTypeID,
    /**具体弹药 默认为首个 */
    [AmmoID,...AmmoID[]]
]

/**命中数据 */
export type ToHit ={
    /**物品的抓握类型 */
    grip: "bad"|"none"|"solid"|"weapon";
    /**项目的长度值 */
    length: "hand"|"short"|"long";
    /**物品的供给表面 */
    surface: "point"|"line"|"any"|"every";
    /**项目的余额值 */
    balance: "clumsy"|"uneven"|"neutral"|"good";
} | number;



/**武器Flag 列表 */
export const WeaponFlagList = [
    "ALLOWS_BODY_BLOCK", //即使在挥舞带有旗帜的物品时也可以触发身体块 (手臂和腿块)。与刀和手枪等小物品一起使用, 不会干扰您身体的阻挡能力。仅当您当前的武术也允许身体阻挡时才有效。
    "ALWAYS_TWOHAND"   , //物品总是用两只手挥舞。如果没有这个, 则使用物品的体积和重量来计算。
    "BIONIC_WEAPON"    , //无法正常使用该物品。它必须连接到仿生设备上并通过激活仿生设备来装备。
    "DIAMOND"          , //金刚石涂层使切割和穿刺伤害增加 30%。
    "MESSY"            , //制浆时会造成更多混乱。
    "NO_CVD"           , //物品永远不能与 CVD 机器一起使用。
    "NO_RELOAD"        , //物品永远无法重新装载 (即使具有有效的弹药类型)。
    "NO_UNWIELD"       , //无法解开该物品。使用仿生学的假武器和工具将自动添加此标志。
    "NONCONDUCTIVE"    , //由于某些特征 (手柄或整个物品的非导电材料), 该物品不导电, 因此可以安全地用于对抗以电力为主题的怪物, 而没有回击的风险。对面CONDUCTIVE。
    "POLEARM"          , //该物品近距离时很笨拙, 会对相邻目标造成 70% 的正常伤害。应与REACH_ATTACK. 像长矛这样的简单的穿刺武器不应该得到这个旗帜。
    "REACH_ATTACK"     , //允许在 2 格距离内进行近战攻击。
    "REACH3"           , //允许在 3 格距离内进行近战攻击。
    "SHEATH_AXE"       , //物品可以装在斧鞘中。
    "SHEATH_GOLF"      , //物品可以装在高尔夫球袋中。
    "SHEATH_KNIFE"     , //物品可以套在刀套中, 适用于中小型刀具 (容量不大于2)。
    "SHEATH_SWORD"     , //物品可以装在剑鞘中。
    "SPEAR"            , //当进行攻击时, THIN_OBSTACLE地形不会成为障碍。应与REACH_ATTACK.
    //"UNARMED_WEAPON" , //挥舞该物品进行战斗仍然算作徒手战斗。
    "WHIP"             , //有一定几率解除对手的武装。
] as const;
/**武器Flag */
export type WeaponFlag = typeof WeaponFlagList[number];



/**近战武器的Flag列表 */
export const MeleeItemFlagList = [
    "ALLOWS_BODY_BLOCK" , // 即使在挥舞带有旗帜的物品时也可以触发身体格挡 (手臂和腿块)。与刀和手枪等小物品一起使用, 不会干扰您身体的阻挡能力。仅当您当前的武术也允许身体阻挡时才有效。
    "ALWAYS_TWOHAND"    , // 物品总是用两只手挥舞。如果没有这个, 则使用物品的体积和重量来计算。
    "BIONIC_WEAPON"     , // 无法正常使用该物品。它必须连接到仿生设备上并通过激活仿生设备来装备。
    "DIAMOND"           , // 金刚石涂层使切割和穿刺伤害增加 30%。
    "MESSY"             , // 制浆时会造成更多混乱。
    "NO_CVD"            , // 物品永远不能与 CVD 机器一起使用。
    "NO_RELOAD"         , // 物品永远无法重新装载 (即使具有有效的弹药类型)。
    "NO_UNWIELD"        , // 无法解开该物品。使用仿生学的假武器和工具将自动添加此标志。
    "NONCONDUCTIVE"     , // 由于某些特征 (手柄或整个物品的非导电材料), 该物品不导电, 因此可以安全地用于对抗以电力为主题的怪物, 而没有回击的风险。对面CONDUCTIVE。
    "POLEARM"           , // 该物品近距离时很笨拙, 会对相邻目标造成 70% 的正常伤害。应与REACH_ATTACK. 像长矛这样的简单的穿刺武器不应该得到这个旗帜。
    "REACH_ATTACK"      , // 允许在 2 格距离内进行近战攻击。
    "REACH3"            , // 允许在 3 格距离内进行近战攻击。
    "SHEATH_AXE"        , // 物品可以装在斧鞘中。
    "SHEATH_GOLF"       , // 物品可以装在高尔夫球袋中。
    "SHEATH_KNIFE"      , // 物品可以套在刀套中, 适用于中小型刀具 (容量不大于2)。
    "SHEATH_SWORD"      , // 物品可以装在剑鞘中。
    "SPEAR"             , // 当进行攻击时, THIN_OBSTACLE地形不会成为障碍。应与REACH_ATTACK.
    "UNARMED_WEAPON"    , // 挥舞该物品进行战斗仍然算作徒手战斗。
    "WHIP"              , // 有一定几率解除对手的武装。
] as const;

/**通用物品的flag列表 */
export const GenericFlagList = [
    ...MeleeItemFlagList     , 
    "ACTIVATE_ON_PLACE"      , //放置时激活
    "SINGLE_USE"             , //使用后删除
    "ZERO_WEIGHT"            , //允许0重量/体积
    "TARDIS"                 , //跳过容器大小检查
    "TRADER_KEEP"            , //商人不会售卖这个物品
    "NO_RELOAD"              , //无法重载
    "UNBREAKABLE"            , //不会损坏
    "DURABLE_MELEE"          , //坚固的近战武器
    "NO_SALVAGE"             , //无法拆分
] as const;
/**预定义的通用物品的flag */
export type DefineGenericFlag = typeof GenericFlagList[number];

/**动态产生的Flag 列表 */
export const TechFlagList = [
    "COLD"                , //物品是冷的。另请参阅EATEN_COLD。
    "DIRTY"               , //物品（液体）被丢在地上，现在已经无法修复的脏了。
    "FIELD_DRESS_FAILED"  , //尸体被不熟练的现场处理损坏。影响屠宰结果。
    "FIELD_DRESS"         , //尸体被现场处理。影响屠宰结果。
    "FIT"                 , //减少一点负重。
    "FROZEN"              , //物品被冻结（由冰箱使用）。
    "HIDDEN_ITEM"         , //这个物品在AIM中看不到。
    "HOT"                 , //物品是热的。另请参阅EATEN_HOT。
    "IRRADIATED"          , //物品已被辐射，将以大大降低的速度变质。
    "LITCIG"              , //标记点燃的吸烟物品（香烟，烟斗等）。
    "MUSHY"               , //FREEZERBURN物品被冻结，现在是糊状的，没有味道，再次冻结后会变坏。
    "NO_PARASITES"        , //使食物 - >类型 - >可食用 - >寄生虫的寄生虫计数无效
    "QUARTERED"           , //尸体被切成四份。影响屠宰结果，重量，体积。
    "REVIVE_SPECIAL"      , //尸体在玩家附近时复活。
    "WARM"                , //用于跟踪物品从/到热的旅程的隐藏标志，在HOT和COLD之间缓冲。
    "WET"                 , //物品是湿的，会慢慢干掉（例如毛巾）。
] as const;
/**动态产生的Flag */
export type TechFlag = typeof TechFlagList[number];

/**通用物品的flag */
export type GenericFlag = DefineGenericFlag|WeaponFlag|TechFlag|CustomFlagID;

/**物品的材质 字符串时为材质类型 */
export type ItemMaterial = MaterialID|{
    /**材质类型 */
    type:MaterialID;
    /**材质占比 */
    portion?:number;
}

/**任何物品 */
export type AnyItem = Generic|Ammo|Gun|Tool|Magazine|Comestible|Armor|GunMod;
/**任何物品ID */
export type AnyItemID = AnyItem["id"];
/**任何物品的Flag */
export type AnyItemFlag = Exclude<AnyItem['flags'],undefined>[number];

/**预定义的物品类别 列表 */
export const DefineItemCategoryList = [
    "guns"                          , //
    "magazines"                     , //
    "ammo"                          , //
    "weapons"                       , //
    "tools"                         , //
    "clothing"                      , //衣物
    "food"                          , //
    "drugs"                         , //
    "manuals"                       , //
    "books"                         , //
    "maps"                          , //
    "mods"                          , //
    "mutagen"                       , //
    "bionics"                       , //
    "currency"                      , //
    "veh_parts"                     , //
    "other"                         , //
    "fuel"                          , //
    "seeds"                         , //
    "ma_manuals"                    , //
    "traps"                         , //
    "chems"                         , //
    "spare_parts"                   , //
    "container"                     , //
    "artifacts"                     , //
    "keys"                          , //
    "corpses"                       , //
    "tool_magazine"                 , //
    "armor"                         , //盔甲
    "exosuit"                       , //
    "ITEMS_WORN"                    , //
    "INTEGRATED"                    , //
    "BIONIC_FUEL_SOURCE"            , //
    "WEAPON_HELD"                   , //
] as const;
/**预定义的物品类别 */
export type DefineItemCategory = typeof DefineItemCategoryList[number];
/**物品类别 */
export type ItemCategotyID = DefineItemCategory;


/**
ACT_IN_FIRE                              如果掉落在带有火的瓷砖上, 该物品将被激活
ALLERGEN_MILK                            该产品含有牛奶, 乳糖不耐症人士不可食用
ANIMAL_PRODUCT                           该物品不能被素食主义者佩戴或食用, 尽管它的材料没有被列入黑名单, 或者它没有其他标志来限制它
BAD_TASTE这                              种食物的味道为-5, 无法通过烹饪来覆盖
BANK_NOTE_SHAPED                        该物品可像钞票一样放入钱包的折叠套中。
BANK_NOTE_STRAP_SHAPED                该物品可放入用于放钱带的口袋中 (如收银机)。
BATTERY_HEAVY                        该商品为重型电池, 可放入有重型电池限制的口袋中
BATTERY_LIGHT                        该商品为轻型电池, 可放入有轻型电池限制的口袋中
BATTERY_MEDIUM                        该商品为中型电池, 可放入有中型电池限制的口袋中
BATTERY_ULTRA_LIGHT                    该产品为超轻电池, 可放入有超轻电池限制的口袋中
BIONIC_ARMOR_INTERFACE                这种仿生学可以为动力装甲提供动力。
BIONIC_FUEL_SOURCE                    该物品的内容用于为仿生学提供燃料
BIONIC_NPC_USABLENPC                可以使用安全的 CBM, 无需大量 NPC 重写即可利用切换 CBM。
BIONIC_POWER_SOURCE                    这种仿生是仿生力量的来源。
BIONIC_SLEEP_FRIENDLY                如果玩家在其活动时尝试睡觉, 该仿生不会发出警告。
BIONIC_TOGGLED                        该仿生设备仅在激活时才具有功能, 而不是每回合都会产生效果。
BIONIC_WEAPON_MELEE                    该武器是仿生近战武器, 用于 EoC 中的不同检查
BIRD                                食物, 只有BIRD阈值突变的玩家才能吃；看INEDIBLE
BURNOUT                                您可以目视检查烧毁的程度 (蜡烛、火炬)
CALORIES_INTAKE                        此项目可让您在消耗菜单中查看有关今天和明天的卡路里摄入量的详细信息。CALORIES_INTAKE_TRACKER可以与显示相同信息的 use 操作一起使用
CAMERA_PRO                            此产品是专业相机, 可提高所拍照片的质量
CAN_HAVE_CHARGES                    该标志不再有用, 应该被废弃
CAN_HAVE_CHARGES                    该标志不再有用, 应该被废弃
CATTLE                                食物, 只有CATTLE阈值突变的玩家才能吃；看INEDIBLE
CBM                                    该项目为CBM, 分别工作
COIN_SHAPED                            该商品形状像硬币, 适合放入钱包的零钱包中。
COLLAPSE_CONTENTS                    该项目的内容默认隐藏, 您需要使用> show/hide content按钮手动显示它
CONDUCTIVE                            即使其制成的材料不导电, 该物品也被视为导电。对面NONCONDUCTIVE。
COOP_CARD                            让您可以进入工匠作坊
CORPSE                                用于在地图生成期间生成各种人类尸体的旗帜。
CREDIT_CARD_SHAPED                    该物品的形状像信用卡, 可放入钱包和类似口袋的卡槽中。
CRUTCHES                            带有此标志的物品可以帮助角色在腿折断时不至于跌倒。
CUSTOM_EXPLOSION                    标记, 自动应用于explosion在定义中已定义数据的项目。看JSON_INFO.md
CUT_HARVEST                            你需要像镰刀这样的割草工具来收割这种植物
DANGEROUSNPC                        不会接受该物品。爆炸 iuse actor 暗示了这个标志。意味着NPC_THROW_NOW。
DETERGENT                            该产品可用作洗衣机中的清洁剂。
DISCOUNT_VALUE_1                    该商品为在自动燃气控制台购买的燃料提供小额折扣
DISCOUNT_VALUE_2                    该商品提供在自动燃气控制台购买的燃料的平均折扣
DISCOUNT_VALUE_3                    该商品为在自动燃气控制台购买的燃料提供了很大的折扣
DROP_ACTION_ONLY_IF_LIQUID            drop_action仅当物品处于液相时才会引起
DURABLE_MELEE                        该物品是为了击中物体而设计的, 而且效果很好, 因此它被认为比由相同材料制成的其他武器坚韧得多。
ELECTRONIC                            该物品包含敏感电子设备, 可以被附近的电磁脉冲爆炸炸毁。
FAKE_MILLItem                        是一个假物品, 表示 @ref Item::process_fake_mill 的部分研磨产品, 其中设置了移除条件。
FAKE_SMOKEItem                        是一个产生烟雾的假物品, 可通过 @ref item::process_fake_smoke 识别, 其中设置了其移除条件。
FELINE                                食物, 只有FELINE阈值突变的玩家才能吃；看INEDIBLE
FIREWOOD                            该物品可以用作柴火。带有此标志的物品会被分类到“战利品: 木材”区域
FLAMING                                该物品着火了, 你使用它会造成额外的火焰伤害
FRAGILE_MELEE                        由于结构质量差, 用作武器时容易散架的易碎物品, 破损后会碎成部件。
FRESH_GRAIN                            该产品是鲜切谷物, 可以在炉子上干燥
GASFILTER_MED                        这是一个中型气体过滤筒, 用作各种防毒面具的弹匣
GASFILTER_SM                        这是一个小尺寸的气体过滤筒, 用作各种防毒面具的弹匣
GAS_DISCOUNT                        自动加油站的折扣卡。
GAS_TANK                            该物品可以储存气体
GEMSTONE                            这是宝石, 你可以把它放在一些首饰里
HARD                                在没有填充的情况下覆盖项目检查, 使之变得坚硬、僵硬且不舒服；SOFT与旗帜相反
HELMET_HEAD_ATTACHMENT                该产品可以固定在安全帽上；目前仅用于手电筒
HURT_WHEN_WIELDED                    武器对你的右臂造成伤害 (如果武器是双手, 则对双臂造成伤害), 等于其伤害
INDUSTRIAL_CARD                        用于工业ID卡, 开启工业读卡器t_card_industrial
IRREPLACEABLE_CONSUMABLE            灾难持续的时间越长, 该物品的价格就会上涨。目前未使用
IS_PET_ARMOR                        是宠物怪的铠甲, 不是人的铠甲。
ITEM_BROKEN                            物品已损坏, 无法再激活。
JAVELIN                                该物品为标枪, 可放入标枪袋中
LEAK_ALWAYS                            泄漏 (可与 结合使用RADIOACTIVE)。
LEAK_DAM                            损坏时泄漏 (可与 结合使用RADIOACTIVE)。
LUPINE                                食物, 只有LUPINE阈值突变的玩家才能吃 (比如狗粮)；看INEDIBLE
MC_MOBILE,MC_HAS_DATA                存储卡相关标志, 参见einktabletpc和相机相关函数
METHANOL_TANK                        该物品为甲醇罐, 用作各种甲醇动力工具的弹匣
MILITARY_CARD                        用于军人身份证, 打开军卡读卡器t_card_military
MISSION_ITEM                        该物品的生成几率不受世界物品生成比例因子的影响。
MOP                                    该物品可用于清除溢出的液体, 例如血液或水。
MOUSE                                食物, 只有MOUSE阈值突变的玩家才能吃；看INEDIBLE
MUNDANE                                该物品使用与魔法相关的功能, 但本身不是魔法 - 对于结界来说, 这意味着该物品的颜色不会更改为粉红色, 而对于法术来说, 物品描述将从“该物品在咒语级别施放咒语名称”更改为“该项目激活后: spell_name “。of可以单独使用这个功能, 使用 booleanuse_action"type": "cast_spell""mundane": true
MUTAGEN_SAMPLE                        该物品为诱变剂样品, 并Used in the creation of mutagenic drugs在物品描述中显示消息
NANOFAB_REPAIR                        该物品可以使用 nanofabricator 修复
NANOFAB_TEMPLATE                    本项为nanofabricator模板, 可以使用相关语法
NEEDS_UNFOLD                        挥舞时会受到额外的时间惩罚。对于近战武器和枪支, 这会被相关技能所抵消。与 堆叠SLOW_WIELD。
NO_CLEAN                            该物品无法清洁
NO_PACKED                            该物品无法防止污染, 也无法保持无菌状态。仅适用于 CBM。
NO_REPAIR                            即使存在其他合适的工具, 也会阻止修复该物品。
NO_SALVAGE                            物品不能通过抢救过程被分解。最好在某些东西不能被分解时使用 (即基本组件, 如皮革补丁)。
NO_STERILE                            该物品不是无菌的。仅适用于 CBM。
NPC_ACTIVATENPC                     可以激活该物品作为替代攻击。目前是在激活后立即扔掉它来完成的。由 暗示BOMB。
NPC_ALT_ATTACK                        不应该直接设置。NPC_ACTIVATE由和隐含NPC_THROWN。
NPC_SAFE                            如果你给NPC, 无论对你的信任程度如何, 他们都会消耗掉这个物品
NPC_THROWNNPC                         将抛出此物品 (无需先激活它)作为替代攻击。
NPC_THROW_NOWNPC                     会尝试扔掉该物品, 最好是扔给敌人。意味着TRADER_AVOID和NPC_THROWN。
OLD_CURRENCY                        在大灾变之前, 纸币和硬币曾经是法定货币, 但仍然可以被一些自动化系统接受。
PALS_LARGE                            该物品可以连接到 MOLLE 肩带上, 并且会消耗 3 个插槽
PALS_MEDIUM                            该物品可以连接到 MOLLE 肩带上, 并且会消耗 2 个插槽
PALS_SMALL                            该物品可以连接到 MOLLE 肩带上, 并且会消耗 1 个插槽
PAPER_SHAPED                该产品呈薄纸状, 可存放在皮革日记本中
PERFECT_LOCKPICK            该物品是一个完美的开锁器。只需 5 秒就可以开锁, 而且永远不会失败, 但使用它只能获得少量的开锁经验值。该物品的LOCKPICK品质至少为 1。
PLANTABLE_SEED                该物品是种子, 您可以种植它
PRESERVE_SPAWN_OMT            该项目将在项目 var 中存储它生成的 OMT spawn_location_omt。
PSEUDO                        在内部用于标记工艺库存中提到的但实际上不是物品的物品。它们可以用作工具, 但不能用作组件。意味着TRADER_AVOID。
RABBIT                        食物, 只有RABBIT阈值突变的玩家才能吃；看INEDIBLE
RADIOACTIVE                    具有放射性 (可与 一起使用LEAK_*)。
RADIO_INVOKE_PROC            该物品可以接收信号, 使其引爆
RAD_DETECT                    该物品是辐射徽章, 可以根据玩家周围的辐射水平打印其颜色变化。硬编码
RAIN_PROTECT                使用时可防晒、防雨。
RAT                            食物, 只有RAT阈值突变的玩家才能吃；看INEDIBLE
REBREATHER_CART                这是一个循环呼吸器盒, 用作各种循环呼吸器面罩的弹匣
REBREATHER                    如果您佩戴此物品, 您的氧气含量不会低于 12 (默认值约为 50)
REDUCED_BASHING                Gunmod 旗帜；使物品的猛击伤害降低 50%。
REDUCED_WEIGHT                Gunmod 旗帜；使物品的基本重量减少 25%。
REQUIRES_TINDER                要求该物品试图在其上起火的瓷砖上存在火种。
ROBOFAC_ROBOT_MEDIUM        该物品是中型 Hub 01 无人机, 您可以将其存放在无人机技术线束的特定插槽中
ROBOFAC_ROBOT_SMALL            该物品是小型 Hub 01 无人机, 您可以将其存放在无人机技术线束的特定插槽中
SCIENCE_CARD_MAINTENANCE_BLUE
SCIENCE_CARD_MAINTENANCE_BLUE
SCIENCE_CARD_MAINTENANCE_GREEN
SCIENCE_CARD_MAINTENANCE_YELLOW
SCIENCE_CARD_MEDICAL_RED
SCIENCE_CARD_MUTAGEN_CYAN
SCIENCE_CARD_MUTAGEN_GREEN
SCIENCE_CARD_MUTAGEN_PINK
SCIENCE_CARD_MU_UNIVERSAL
SCIENCE_CARD_SECURITY_BLACK
SCIENCE_CARD_SECURITY_MAGENTA
SCIENCE_CARD_SECURITY_YELLOW
SCIENCE_CARD_TRANSPORT_1
SCIENCE_CARD_VISITOR        这个和上面都是用来打开TCL的相关门的
SHEATH_BOW                    该产品可装入弓形吊带中
SHEATH_SPEAR                该物品可以连接到矛带上
SINGLE_USE                    该项目在使用后将被删除。按费用计数的项目不需要此操作, 因为它们会在费用用完时被删除。
SLEEP_AID_CONTAINER            该产品内部装有助眠剂, 有助于睡眠。 (例如, 这是一个枕套)。
SLEEP_AID                    该项目有助于睡眠。
SLEEP_IGNORE                该项目不显示为睡前警告。
SLOW_WIELD                    挥舞时会受到额外的时间惩罚。对于近战武器和枪支, 这会被相关技能所抵消。与 堆叠NEEDS_UNFOLD。
SOFT                        覆盖项目检查以柔软、不僵硬且舒适；HARD与旗帜相反
SOLARPACK_ON                该产品开启太阳能背包, 在阳光下可以为不同的东西充电
SPAWN_ACTIVE                该项目始终处于活动状态, 无需手动激活
SPLINT                        此物品是夹板, 戴在身体破损部位时, 会慢慢修复
STRICT_HUMANITARIANISM        标记, 如果食物是用亚人肉烹制的, 则自动应用于食物, 并允许在名称中进行不同的食物相互作用
TACK                        物品可以用作安装座的大头钉。
TANGLE                        当该物品被投掷并击中目标时, 有机会将其缠住并使其无法动弹。
TARDIS                        带有此标志的容器项目会绕过对口袋数据的内部检查, 因此内部可能比外部更大, 并且可以容纳不适合其尺寸的项目。
TIE_UP                        物品可以用来束缚生物。
TINDER                        该物品可用作火种, 用带有REQUIRES_TINDER标记的引火物来点燃火。
TOBACCO                        该物品是点燃的雪茄或香烟, 佩戴时会产生吸烟效果
TOURNIQUET                    该物品是止血带, 它可以暂时降低出血强度并增加您的有效压缩极限
TOW_CABLE                    该产品是牵引电缆, 可以牵引车辆
TRADER_AVOIDNPC                不会从该物品开始。将此用于活动物品 (例如手电筒 (打开)）、危险物品 (例如活动炸弹)、假物品或不寻常物品（例如独特的任务物品)。
TRADER_KEEP_EQUIPPED        NPC 仅在当前未佩戴或挥舞该物品时才会交易该物品。
TRADER_KEEP                    NPC    在任何情况下都不会交易该物品。
TWO_WAY_RADIO                该项目是双向无线电, 并相应地工作
UNBREAKABLE_MELEE            用作近战武器时永远不会受到损坏。
UNBREAKABLE                    该物品无论是作为盔甲穿着还是用作近战武器时都不会被直接损坏。
UNRECOVERABLE                无法从拆卸中恢复。
USE_POWER_WHEN_HIT            当你被击中时, 该护甲会消耗能量, 等于所造成的伤害 (能量消耗发生在护甲缓解之前)
WATER_BREAK_ACTIVE            如果处于活动状态, 物品可能会被弄湿并在水中破裂。
WATER_BREAK                    物品在水中破损。
WATER_DISSOLVE                物品溶解在水中。
ZERO_WEIGHT                    通常重量为零的物品会产生错误。使用此标志来指示零权重是故意的并抑制该错误。
 */




