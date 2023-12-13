import { AmmunitionTypeID } from "../AmmiunitionType";
import { AmmoEffectID } from "../AmmoEffect";
import { Energy, CddaID, CopyfromVar, Length, Time, DescText } from "../GenericDefine";
import { SkillID } from "../Skill";
import { GenericBase } from "./Generic";
import { FireMode, GunBase } from "./Gun";
import { MagazineID } from "./Magazine";
/**Gun Mod ID格式 */
export type GunModID = CddaID<"GMOD">;
/**枪械模组 */
export type GunMod = CopyfromVar<{
    id: GunModID;
    /** 定义这个为GUNMOD */
    type: "GUNMOD";
    /** 必填。这个枪械改装件安装在哪里？ */
    location: GunModSlot;
    /** 必填。这个枪械改装件可以用于哪种武器？ */
    mod_targets: SkillID[];
    /** 必填。安装需要多长时间？一个整数将被读取为移动, 或者可以使用时间字符串 */
    install_time: (Time);
    /** (可选) 限制改装件到那些基础（在修饰符之前）弹药类型的枪 */
    acceptable_ammo?: AmmunitionTypeID[];
    /** (可选) 如果指定, 修改父枪使用这些弹药类型 */
    ammo_modifier?: AmmunitionTypeID[];
    /** (可选) 改变父枪接受的弹药类型 [弹药ID, 弹夹约束[]][] */
    magazine_adaptor?: [AmmunitionTypeID, MagazineID[]][];
    /** (可选) 增加或减少基础枪伤害的字段 */
    damage_modifier?: number;
    /** (可选) 增加或减少基础枪弹散的字段 */
    dispersion_modifier?: number;
    /** (可选) 增加或减少基础枪噪音的字段 */
    loudness_modifier?: number;
    /** (可选) 增加或减少基础枪范围的字段 */
    range_modifier?: number;
    /** (可选) 乘以基础枪范围的字段 */
    range_multiplier?: number;
    /** 安装此改装件时, 枪械增加的长度 */
    integral_longest_side?: (Length);
    /** 使用此字段将覆盖枪的min_cycle_recoil */
    overwrite_min_cycle_recoil?: number;
    /** 当你用这个改装件重装枪时, 会产生的信息；似乎不起作用  */
    reload_noise?: (DescText);
    /** 当你用这个改装件重装枪时, 产生的噪音量 */
    reload_noise_volume?: number;
    /** 改变你用这个改装件瞄准枪的速度 */
    aim_speed_modifier?: number;
    /** 如果这个改装件安装了, 将这个数量的枪械改装件添加到枪上 */
    add_mod?: [GunModSlot, number][];
    /** 如果武器使用`energy_drain`, 将其乘以这个数量 */
    energy_drain_multiplier?: number;
    /**#53180有它的图片, 但它表示了瞄准镜的视场有多大 -
     * 当角色开始瞄准时, 它根本不使用瞄准镜, 而是瞄准"一般方向",
     * 然后转用瞄准镜来精确定位目标。视场越大, 角色就越早能够使用瞄准镜
     * （用更高倍数的瞄准镜进行目标获取非常非常困难）；
     * 简单地说: 视场越大, 玩家瞄准的速度就越快, 到某种程度；以MOA（角分）为单位
     */
    field_of_view?: number;
    /** 安装这个枪械改装件所需的最低技能等级 */
    min_skills?: [SkillID, number][];
    /** 对于霰弹枪, 改变弹丸的散布。给定一个默认的乘数1.0(100%),
     * 一个乘数修饰符-0.8导致0.2(20%)的弹丸散布。
     * 所有改装件的乘数都被加起来, 但在原版游戏中,
     * 只有choke应该能够操纵弹丸散布 - **霰弹枪的枪管长度不影响弹丸散布**
     */
    shot_spread_multiplier_modifier?: number;
    /** (可选) 通过添加给定值增加或减少基础枪能量消耗（每发）。这个增加不会被energy_drains_multiplier乘以 */
    energy_drain_modifier?: Energy;
    /** (可选) 通过乘以给定值增加或减少基础枪能量消耗（每发） */
    energy_drains_multiplier?: number;
    /** (可选) 以百分比增加或减少基础枪重装时间 */
    reload_modifier?: number;
    /** (可选) 增加或减少使用枪所需的最小力量 */
    min_str_required_mod?: number;
    /** 瞄准的速度, 以每点弹散的移动数为单位 */
    aim_speed?: number;
    /** 弹药效果类型的ID列表 */
    ammo_effects?: AmmoEffectID[];
    /** 枪械发射时消耗改装件被销毁的几率（默认1/10000） */
    consume_chance?: number;
    /** 将对改装件的伤害除以此数量 (默认 1) */
    consume_divisor?: number;
    /** 提高枪械的操控性。例如, 前握把可能有6, 两脚架有18 */
    handling_modifier?: number;
    /** 修改枪的射击模式, 例如给出AUTO或REACH */
    mode_modifier?: FireMode[];
    /** 为这个枪械改装件指定一个直接的枪管长度。如果使用, 只有第一个带有枪管长度的改装件会被计算 */
    barrel_length?: (Length);
    /** 在枪的"overheat_threshold"上添加一个固定的数量；
     * 如果阈值是100, 修饰符是10, 结果是110；如果修饰符是-25, 结果是75
     */
    overheat_threshold_modifier?: number;
    /** 通过这个数字乘以枪的"overheat_threshold"；
     * 如果阈值是100, 乘数是1.5, 结果是150；如果乘数是0.8, 结果是80
     */
    overheat_threshold_multiplier?: number;
    /** 在枪的"cooling_value"上添加一个固定的数量；
     * 与overheat_threshold_modifier工作方式相同
     */
    cooling_value_modifier?: number;
    /** 通过这个数字乘以枪的"cooling_value"；
     * 与overheat_threshold_multiplier工作方式相同
     */
    cooling_value_multiplier?: number;
    /** 在枪的"heat_per_shot"上添加一个固定的数量；
     * 与overheat_threshold_modifier工作方式相同
     */
    heat_per_shot_modifier?: number;
    /** 通过这个数字乘以枪的"heat_per_shot"；
     * 与overheat_threshold_multiplier工作方式相同
     */
    heat_per_shot_multiplier?: number;
    /** 如果枪上存在指定的插槽, 阻止安装枪械改装件 */
    blacklist_slot?: GunModSlot[];
    /** 如果枪上存在指定的改装件, 阻止安装枪械改装件 */
    blacklist_mod?: GunModID[];
} & Partial<GunBase> & GenericBase>;
/**枪械模组槽位 */
export type GunModSlot = string;
