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
    flags?: ToolFlag[];
    /**同时作为枪械模组的数据 */
    gunmod_data?: Omit<GunMod, "id" | "type">;
} & GenericBase>;
/**物品的工具品质 [调整值类型, 品质等级] */
export type ItemToolQuality = [ToolQualityID, number];
/**工具可用的flag 列表 */
export declare const ToolFlagList: readonly ["ACT_ON_RANGED_HIT", "ALLOWS_REMOTE_USE", "BELT_CLIP", "BOMB", "CABLE_SPOOL", "CANNIBALISM", "CHARGEDIM", "DIG_TOOL", "FIRESTARTER", "FIRE", "HAS_RECIPE", "IS_UPS", "NO_DROP", "NO_UNLOAD", "POWERED", "RADIOCARITEM", "RADIOSIGNAL_1", "RADIOSIGNAL_2", "RADIOSIGNAL_3", "RADIO_ACTIVATION", "RADIO_CONTAINER", "RADIO_MODABLE", "RADIO_MOD", "RECHARGE", "SAFECRACK", "USES_BIONIC_POWER", "USE_PLAYER_ENERGY", "USE_UPS", "WATER_EXTINGUISH", "WET", "WIND_EXTINGUISH", "WRITE_MESSAGE"];
/**工具可用的flag */
export type ToolFlag = typeof ToolFlagList[number] | `LIGHT_${number}` | GenericFlag;
