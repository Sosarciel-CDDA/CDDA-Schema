import { AmmunitionTypeID } from "../AmmiunitionType";
import { AmmoEffectID } from "../AmmoEffect";
import { RangeDamage, Energy, Volume, CddaID, CopyfromVar, Length } from "../GenericDefine";
import { SkillID } from "../Skill";
import { GenericBase, GenericFlag } from "./Generic";
import { GunModID, GunModSlot } from "./GunMod";
/**GUN ID格式 */
export type GunID = CddaID<"GUN">;
/**枪械基础 */
export type GunBase = {
    /**用于射击的技能 */
    skill: SkillID;
    /**接受重新加载的弹药类型 */
    ammo: AmmunitionTypeID[];
    /**发射时的远程伤害 */
    ranged_damage?: RangeDamage | RangeDamage[];
    /**发射时的范围 */
    range?: number;
    /**枪的不准确度, 以角度分钟 (MOA) 的百分之一为单位测量
     * 当枪械模组中存在 sight_dispersion 和 aim_speed 时, 瞄准系统会选择“最佳”
     * 用于每个目标操作的瞄准器, 这是在当前目标阈值下具有分散性的最快瞄准器
     */
    dispersion?: number;
    /**瞄准机构产生的枪支不准确度, 以角度分之一 (MOA) 为单位测量 */
    sight_dispersion?: number;
    /**射击时产生的后坐力, 以角度分钟 (MOA) 的百分之一为单位测量 */
    recoil?: number;
    /**抵抗损坏/生锈, 也决定了失火几率 */
    durability?: number;
    /**发射黑火药弹药时, 有 N 分之一的几率 (每次射击）被堵塞（越高越好)。 可选, 默认为 8 */
    blackpowder_tolerance?: number;
    /**枪发射多颗子弹连射时的最小弹药后坐力。 */
    min_cycle_recoil?: number;
    /**可以装载的最大弹药量 */
    clip_size?: number;
    /**除了普通弹药 (如果有)之外, 枪还需要一些电能。
     * 枪内电池电量耗尽。
     * 使用标志“USE_UPS”和“USES_BIONIC_POWER”来耗尽其他资源。
     * 这也适用于模组。 附加带有 energy_drain 的模组将增加/增加武器的消耗。
     */
    energy_drain?: Energy;
    /**使用的弹药量 默认1 */
    ammo_to_fire?: number;
    /**这把枪的射击模式 DEFAULT,AUTO, MELEE
     * 后面是游戏中显示的模式名称
     * 最后是该模组的射击次数。
     */
    modes?: FireMode[];
    /**重新加载的时间量, 100 = 1 秒 = 1 "turn" */
    reload?: number;
    /**将使用不可拆卸标签集成到武器中的模组数组 */
    built_in_mods?: GunModID[];
    /**将在生成时添加到武器的 mod 数组 */
    default_mods?: GunModID[];
    /**锯开桶时损失的体积量 每英寸大约 250 毫升是一个不错的近似值 */
    barrel_volume?: (Volume);
    /**枪管长度 */
    barrel_length?: (Length);
    /**枪械的有效位置以及该位置的插槽安装量 */
    valid_mod_locations?: ValidMod[];
    /**这把枪射击时产生的噪音量。
     * 如果未定义值, 则根据加载弹药的响度值进行计算。
     * 最终响度计算为枪支响度+枪械响度+弹药响度。
     * 如果最终响度为 0, 则枪声完全静音。
     **/
    loudness?: number;
    /**枪械的flag */
    flags?: GunFlag[];
    /**子弹附加效果 */
    ammo_effects?: AmmoEffectID[];
    /**重装时发出的声音 */
    reload_noise?: string;
    /**重装时发出的声音大小 */
    reload_noise_volume?: number;
    /**可能适用于该枪的故障类型； 通常继承自单个抽象, 例如rifle_base, 但也存在例外 */
    faults?: string[];
    /**武器的处理； 更好的操控性意味着更少的后坐力 */
    handling?: number;
    heat_per_shot?: undefined;
    cooling_value?: undefined;
    overheat_threshold?: undefined;
    hurt_part_when_fired?: undefined;
};
/**枪械 */
export type Gun = CopyfromVar<{
    id: GunID;
    type: "GUN";
} & GunBase & GenericBase>;
/**开火模式 */
export type FireMode = [
    /**基础模式 */
    FireModeName,
    /**模式名称 semi-auto auto */
    FireModeDisplayName,
    /**射击次数 */
    number,
    /**额外flag */
    (FireModeFlag | FireModeFlag[])?
];
/**开火模式名 */
export type FireModeName = [
    "DEFAULT",
    "AUTO",
    "MELEE",
    "BURST",
    "MULTI"
][number];
/** 开火模式显示名 */
export type FireModeDisplayName = [
    "semi-auto",
    "revolver",
    "single",
    "auto",
    "double",
    "multi",
    "high auto",
    `${number} rd.`,
    `${number}s sequence`,
    `pulse`
][number];
export type FireModeFlag = [
    "NPC_AVOID",
    "MELEE",
    "SIMULTANEOUS"
][number];
/**有效枪械组件 */
export type ValidMod = [
    /**组件类型/位置 "brass catcher" "grip" */
    GunModSlot,
    /**可安装数 */
    number
];
/**枪械可用的flag 列表 */
export declare const GunFlagList: readonly ["BACKBLAST", "BIPOD", "BRASS_CATCHER", "CHARGE", "CHOKE", "COLLAPSED_STOCK", "COLLAPSIBLE_STOCK", "CONSUMABLE", "DISABLE_SIGHTS", "EASY_CLEAN", "FIRE_TWOHAND", "FOLDED_STOCK", "INSTALL_DIFFICULT", "IRREMOVABLE", "IS_ARMOR", "LASER_SIGHT", "MECH_BAT", "MOUNTED_GUN", "NEEDS_NO_LUBE", "NEVER_JAMS", "NON_FOULING", "NO_TURRET", "NO_UNLOAD", "PRIMITIVE_RANGED_WEAPON", "PUMP_ACTION", "PUMP_RAIL_COMPATIBLE", "RELOAD_AND_SHOOT", "RELOAD_EJECT", "RELOAD_ONE", "REMOVED_STOCK", "STR_DRAW", "STR_RELOAD", "UNDERWATER_GUN", "WATERPROOF_GUN", "WONT_TRAIN_MARKSMANSHIP"];
/**枪械可用的flag */
export type GunFlag = typeof GunFlagList[number] | GenericFlag;
