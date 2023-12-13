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
    ranged_damage?: RangeDamage|RangeDamage[];
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
    ammo_effects?: AmmoEffectID[],
    /**重装时发出的声音 */
    reload_noise?: string;
    /**重装时发出的声音大小 */
    reload_noise_volume?: number;
    /**可能适用于该枪的故障类型； 通常继承自单个抽象, 例如rifle_base, 但也存在例外 */
    faults?:string[];
    /**武器的处理； 更好的操控性意味着更少的后坐力 */
    handling?:number;
    heat_per_shot?:undefined;
    cooling_value?:undefined;
    overheat_threshold?:undefined;
    hurt_part_when_fired?:undefined;
};

/**枪械 */
export type Gun = CopyfromVar<{
    id:GunID;
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
    (FireModeFlag|FireModeFlag[])?
]

/**开火模式名 */
export type FireModeName = [
    "DEFAULT"   , // 默认模式
    "AUTO"      , // 全自动模式
    "MELEE"     , // 近战模式
    "BURST"     , // 无意义 用于额外标识
    "MULTI"     , // 无意义 用于额外标识
][number];

/** 开火模式显示名 */
export type FireModeDisplayName =[
    "semi-auto"             , // 半自动     对于发射一发子弹并在发射后立即弹出弹壳的枪支
    "revolver"              , // 左轮       用于在玩家重新装弹时发射单发子弹并弹出弹壳的轮式枪
    "single"                , // 单发       对于其他任何东西, 包括单发或断动枪
    "auto"                  , // 全自动     用于全自动武器
    "double"                , // 散射       用于霰弹枪或其他可以同时从多个枪管发射的武器
    "multi"                 , // 并射       用于同时从两个以上枪管发射的武器 如多管火箭筒
    "high auto"             , // 高速自动   用于机枪
    `${number} rd.`         , // n连发      仅适用于具有附加连发模式的枪支, 不应用于代替auto
    `${number}s sequence`   , // n秒连射    激光枪的 n连发
    `pulse`                 , // 脉冲       激光枪的 半自动
][number];

/*开火模式额外flag */
export type FireModeFlag = [
    "NPC_AVOID"     ,//禁止 NPC 使用
    "MELEE"         ,//近战攻击的第三个参数指定到达距离 使用枪或辅助枪械的属性进行近战攻击。
    "SIMULTANEOUS"  ,//多发子弹同时发射, 最后施加后坐力
][number];

/**有效枪械组件 */
export type ValidMod = [
    /**组件类型/位置 "brass catcher" "grip" */
    GunModSlot,
    /**可安装数 */
    number
];


/**枪械可用的flag 列表 */
export const GunFlagList      = [
    "BACKBLAST"               , // 在射击的人后面产生小爆炸。目前还没有实现？
    "BIPOD"                   , // 操控加成只适用于MOUNTABLE地图/车辆瓦片。不包括挥舞时间惩罚（参见SLOW_WIELD）
    "BRASS_CATCHER"           , // 这个枪械改装件是弹壳收集器, 可以储存你射出的所有弹壳
    "CHARGE"                  , // 必须充电才能射击。更高的电荷会造成更多的伤害
    "CHOKE"                   , // 这个枪械改装件是一个消音器, 防止你射出猪鼻子
    "COLLAPSED_STOCK"         , // 减少枪的长度20厘米；与FOLDED_STOCK相同；出于某种原因现在不起作用
    "COLLAPSIBLE_STOCK"       , // 根据枪的基础大小（不包括任何改装件）成比例地减少武器体积。不包括挥舞时间惩罚（参见NEEDS_UNFOLD）
    "CONSUMABLE"              , // 使枪部有一定几率根据射出的弹药受损, 可定义字段'consume_chance'和'consume_divisor'
    "DISABLE_SIGHTS"          , // 阻止使用基础武器瞄准器
    "EASY_CLEAN"              , // 这种武器相对简单, 你花费的清洁和润滑时间减半
    "FIRE_TWOHAND"            , // 枪只能在玩家有两只空手时射击
    "FOLDED_STOCK"            , // 减少枪的长度20厘米；与COLLAPSED_STOCK相同
    "INSTALL_DIFFICULT"       , // 这个枪械改装件很难安装, 如果你失败, 可能会损坏你的枪
    "IRREMOVABLE"             , // 使枪械改装件不能被移除
    "IS_ARMOR"                , // 这个枪械改装件可以使用装甲语法, 并且可以穿戴（与你安装这个改装件的武器相同）
    "LASER_SIGHT"             , // 这个枪械改装件是一个激光瞄准器, 如果满足特定条件（目标接近, 而且不是太亮）提供瞄准加成
    "MECH_BAT"                , // 这是一个设计用来为军用机甲供电的异种电池
    "MOUNTED_GUN"             , // 枪只能在带有MOUNTABLE标志的地形/家具上使用
    "NEEDS_NO_LUBE"           , // 这种武器不需要润滑剂就能正常工作
    "NEVER_JAMS"              , // 永不卡壳
    "NON_FOULING"             , // 枪不会变脏或积黑火药
    "NO_TURRET"               , // 阻止为这把枪生成车辆炮塔原型
    "NO_UNLOAD"               , // 不能卸载
    "PRIMITIVE_RANGED_WEAPON" , // 允许使用非枪匠工具修理（但不能加固）它
    "PUMP_ACTION"             , // 枪的泵动作上有导轨, 允许在下挂槽上安装只有PUMP_RAIL_COMPATIBLE标志的改装件
    "PUMP_RAIL_COMPATIBLE"    , // 改装件可以安装在带有泵动作导轨的枪的下挂槽上
    "RELOAD_AND_SHOOT"        , // 射击自动重装然后射击
    "RELOAD_EJECT"            , // 在重装时从枪中弹出弹壳, 而不是在射击时
    "RELOAD_ONE"              , // 一次只重装一发子弹
    "REMOVED_STOCK"           , // 减少枪的长度26厘米, 当你锯掉枪托时应用
    "STR_DRAW"                , // 除非角色至少有所需最小力量的两倍, 否则使用这种武器的范围会减少
    "STR_RELOAD"              , // 重装速度受力量影响
    "UNDERWATER_GUN"          , // 枪是为水下使用优化的, 在水外表现不佳
    "WATERPROOF_GUN"          , // 枪不会生锈, 可以在水下使用
    "WONT_TRAIN_MARKSMANSHIP" , // 射击这把枪不会训练你的射击技巧
] as const;
/**枪械可用的flag */
export type GunFlag = typeof GunFlagList[number]|GenericFlag;