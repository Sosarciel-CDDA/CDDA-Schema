import { AmmunitionTypeID } from "../AmmiunitionType";
import { CddaID, CopyfromVar, Power, DescText } from "../GenericDefine";
import { ToolQualityID } from "../ToolQuality";
import { GenericBase, GenericFlag } from "./Generic";
import { GunMod } from "./GunMod";


/**TOOL ID格式 */
export type ToolID = CddaID<"TOOL">;

/**工具 */
export type Tool = CopyfromVar<{
    id: ToolID;
    type: "TOOL";
    /**随着时间的推移消耗的费用, 不推荐使用 power_draw */
    turns_per_charge?: number;
    /**当与 UPS 结合使用时, 该项目将燃烧燃料以获得给定的能量值,   
     * 以产生具有所提供效率的能量。  
     * 需要 > 0 才能正常工作  
     */
    fuel_efficiency?: number;
    /**固有的工具品质, 如锤击、锯切、拧紧 (参见 tool_qualities.json) */
    quality?: ItemToolQuality[];
    /**如果工具至少还剩 charges_per_use 费用, 则可用的工具品质 */
    charged_qualities?: ItemToolQuality[];
    /**用于装弹的弹药类型 */
    ammo?: AmmunitionTypeID[];
    /**此工具对配方中所需的每次充电使用 charge_factor 费用  
     * 适用于具有 sub 字段但使用与原始工具不同的弹药的工具  
     */
    charge_factor?: number;
    /**每次使用工具消耗的费用 */
    charges_per_use?: number;
    /**生成时充能 */
    initial_charges?: number;
    /**最大充能 */
    max_charges?: number;
    /**生成时随机化充能。  
     * [10, 15, 25] 此示例有 50% 的机会发生 rng(10, 15) 费用,   
     * 也有 50% 的机会发生 rng(15, 25)  
     */
    rand_charges?: number[];
    /**每秒电能消耗 */
    power_draw?: Power;
    /**充能消耗后转化为物品 */
    revert_to?: ToolID;
    /**revert_to 触发时产生的信息 */
    revert_msg?: (DescText);
    /**该工具与其他工具具有相同的功能 */
    sub?: ToolID;
    /**变体 */
    variables?: {
        /**该工具是可折叠车辆, 可以绕过默认的可折叠规则； 这是将展开的车辆的名称 */
        vehicle_name?: "Wheelchair";
        /**这是这辆车拥有的部件 - 它使用自己的语法,  
         * 与 `"type": "vehicle"` 不同, 所以最好阅读 `unfoldable.json` 中的示例
         */
        folded_parts?: "folded_parts_syntax";
    };
    /**工具的Flag */
    flags?:ToolFlag[];
    /**同时作为枪械模组的数据 */
    gunmod_data?: Omit<GunMod,"id"|"type">;
} & GenericBase>;

/**物品的工具品质 [调整值类型, 品质等级] */
export type ItemToolQuality = [ToolQualityID,number];


/**工具可用的flag 列表 */
export const ToolFlagList = [
    "ACT_ON_RANGED_HIT"               , //该物品应在投掷或发射时激活, 如果它在地面上生成, 则立即得到处理。
    "ALLOWS_REMOTE_USE"               , //该物品可以从相邻的方块中激活或重新加载, 而无需拿起它。
    "BELT_CLIP"                       , //该物品可以夹在或挂在适当尺寸的皮带环上 (皮带环受其 max_volume 和 max_weight 属性的限制)
    "BOMB"                            , //它可以是遥控炸弹。
    "CABLE_SPOOL"                     , //该物品是一卷电缆, 必须按原样进行处理。它通常应该有一个“link_up”iuse_action, 它有特殊的行为。
    "CANNIBALISM"                     , //该物品是一种含有人肉的食物, 食用后会应用所有适用的效果。
    "CHARGEDIM"                       , //如果发光, 光强度会随着电量而减弱, 从剩余电量 20% 开始。
    "DIG_TOOL"                        , //如果使用, 当玩家走进岩石和墙壁等地形时, 会挖掘它们。如果物品也有POWERED旗帜, 那么它挖掘得更快, 但会消耗物品的弹药, 就像激活它一样。
    "FIRESTARTER"                     , //物品会遇到一些困难而着火。
    "FIRE"                            , //物品会立即起火。
    "HAS_RECIPE"                      , //电子墨水平板电脑使用它来指示它当前正在显示菜谱。
    "IS_UPS"                          , //项目是统一电源。用于活动项目处理。
    //"LIGHT_[X]"                       , //用光强度照亮区域, [X]其中[X]是强度值。 (例如LIGHT_4或LIGHT_100)。注意: 此标志设置itype::light_emission字段, 然后被删除 (无法使用 找到has_flag)；
    "NO_DROP"                         , //项目永远不应该作为离散项目存在于地图图块上 (必须包含在另一个项目中)。
    "NO_UNLOAD"                       , //无法卸载。
    "POWERED"                         , //如果打开, 项目将使用自己的电源, 而不是依赖用户的电源。
    "RADIOCARITEM"                    , //物品可以放入遥控车中。
    "RADIOSIGNAL_1"                   , //根据无线电信号 1 激活。
    "RADIOSIGNAL_2"                   , //根据无线电信号 2 激活。
    "RADIOSIGNAL_3"                   , //根据无线电信号 3 激活。
    "RADIO_ACTIVATION"                , //通过遥控器激活 (也需要RADIOSIGNAL_*)。
    "RADIO_CONTAINER"                 , //它是一个装有无线电控制的东西的容器。
    "RADIO_MODABLE"                   , //表示该物品可以制成无线电激活物品。
    "RADIO_MOD"                       , //该物品已被制成无线电激活物品。
    "RECHARGE"                        , //放置在带有充电站的货物区域时会获得费用。
    "SAFECRACK"                       , //该物品可用于解锁保险箱。
    "USES_BIONIC_POWER"               , //允许物品使用来自玩家仿生力量的能量来满足其需求energy_drain。工具还可以消耗仿生能量而不是电池弹药。
    "USE_PLAYER_ENERGY"               , //具有use_action消耗cast_spell指定base_energy_cost.
    "USE_UPS"                         , //允许项目使用 UPS 的能源来满足其需求energy_drain。工具也可以消耗 UPS 而不是电池弹药。
    "WATER_EXTINGUISH"                , //在水中或降水下可熄灭。转换项目 (需要设置“reverts_to”或use_action“transform”)。
    "WET"                             , //物品是湿的, 会慢慢变干 (例如毛巾)。
    "WIND_EXTINGUISH"                 , //该物品将被风吹灭。
    "WRITE_MESSAGE"                   , //该物品可用于在标牌上书写信息。
] as const;
/**工具可用的flag */
export type ToolFlag = typeof ToolFlagList[number]|`LIGHT_${number}`|GenericFlag;
