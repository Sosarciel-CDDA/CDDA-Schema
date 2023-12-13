import { FieldID } from "./Field";
import { CddaID, Explosion } from "./GenericDefine";

/**定义的子弹效果 列表 */
export const DefineAmmoEffectIDList = [
    "NO_PENETRATE_OBSTACLES", // 防止投射物穿过带有障碍物的瓷砖, 如链条围栏或梳妆台。硬编码
    "BEANBAG"               , // 使目标晕眩。硬编码
    "LARGE_BEANBAG"         , // 严重使目标晕眩。硬编码
    "DRAW_AS_LINE"          , // 不经过常规子弹动画；而是在一帧内画一条线和它的末端的子弹。硬编码
    "APPLY_SAP"             , // 命中时应用涂有树液的效果, 用于特殊的硬编码怪物攻击。硬编码
    "BLINDS_EYES"           , // 如果击中头部, 会使目标失明。硬编码
    "BOUNCE"                , // 使目标受到`反弹`效果, 并反弹到附近没有此效果的目标。硬编码
    "BURST"                 , // 应用于投掷的投射物, 当定义了'burst_when_filled'时, 会在命中时溢出内容。硬编码, 可能不能作为实际的弹药效果使用
    "SPECIAL_COOKOFF"       , // 当点燃时, 弹药物品会爆炸, 其弹药效果。爆炸的力量不会随着弹药量的增加而增加。如果同时使用COOKOFF和SPECIAL_COOKOFF, 只会使用SPECIAL_效果。硬编码
    "COOKOFF"               , // 当点燃时, 弹药物品会产生爆炸。爆炸的力量随着弹药量的增加而增加。硬编码
    "BLACKPOWDER"           , // 这种弹药可能会因黑火药污垢堵塞枪口, 这也会导致生锈。硬编码
    "HEAVY_HIT"             , // 自动应用于任何重于500g的投射物, 以增加其噪音 (当前只在投射物落入水中时使用)。硬编码
    "INCENDIARY"            , // 被这种投射物击中的生物会被点燃一段时间, 最多4秒 (如果生物由易燃材料或蔬菜制成, 则为6秒)。硬编码
    "IGNITE"                , // 与INCENDIARY相同, 被这种投射物击中的生物会被点燃一段时间, 最多6秒 (如果生物由易燃材料或蔬菜制成, 则为10秒)。硬编码
    "JET"                   , // 对于诅咒构建, 将一个`*`符号作为飞行的投射物绘制 (不同于通常的`#`符号)。硬编码
    "MATCHHEAD"             , // 子弹有可能因超压而损坏枪支, 无论污垢级别如何, 都用在用火柴重新装载的弹药中。硬编码
    "MAGIC"                 , // 总是最好可能的命中, 没有伤害倍数。硬编码
    "MUZZLE_SMOKE"          , // 在源头产生一小团烟雾。硬编码
    "NEVER_MISFIRES"        , // 发射没有这个标志的弹药可能会引发误火, 这与武器标志无关。硬编码
    "NO_DAMAGE_SCALING"     , // 总是设置100%伤害由于命中弱点。硬编码
    "NO_EMBED"              , // 当一个项目将从投射物产生时, 它总是在地面上产生, 而不是在怪物的库存中。对于活动的投掷物暗示。在不掉落物品的投射物上不做任何事情。硬编码
    "NOGIB"                 , // 防止目标过度伤害 (目标不会爆炸成碎片, 与怪物的标志`NOGIB`相同)。硬编码
    "NO_ITEM_DAMAGE"        , // 即使它试图这样做, 也不会损坏地图上的物品。硬编码
    "NON_FOULING"           , // 当发射时, 这种弹药不会在枪上造成污垢或黑火药污垢。硬编码
    "NO_OVERSHOOT"          , // 带有此效果的投射物不会飞过玩家设置的目标瓷砖。硬编码
    "NPC_AVOID"             , // NPC不会使用装载有此效果弹药的枪或枪械改装件。硬编码
    "NULL_SOURCE"           , // 带有此效果的投射物没有发射它们的生物；只应用于爆炸物的碎片。硬编码
    "PARALYZEPOISON"        , // 在造成伤害的命中时应用麻痹毒效果。硬编码
    "ROBOT_DAZZLE"          , // 对机器人应用传感器晕眩效果。硬编码
    "RECOVER_X"             , // 有[(X-1)/X]概率在命中点创建一次使用的弹药。将X更改为任何数字, 如'RECOVER_2'表示50%的机会。硬编码
    "RECYCLED"              , // 有时会引发枪支误火, 用于手动装载弹药；这与武器标志无关。硬编码
    "SHATTER_SELF"          , // 在命中时摧毁自己并创建碎片。应用于任何投射物 (通常是投掷物), 如果它作为材料有玻璃, 并且不活动。硬编码
    "SHOT"                  , // 多个较小的颗粒；对护甲效果较差, 但增加命中几率和近距离无惩罚。硬编码
    "WIDE"                  , // 防止HARDTOSHOOT怪物标志产生任何效果；自动应用于带有`SHOT`标志的弹药或具有液态相的弹药。硬编码
] as const;

/**定义的子弹效果 */
export type DefineAmmoEffectID = typeof DefineAmmoEffectIDList[number];

/**弹药效果ID */
export type AmmoEffectID = CddaID<"AEFF">|DefineAmmoEffectID;
/**弹药效果 */
export type AmmoEffect = {
    /**效果ID */
    id: AmmoEffectID;
    /**类型 */
    type: "ammo_effect";
    /**命中区域  
     * 这个地块附着物将在投射物命中的瓷砖上产生  
     */
    aoe?: AmmoAoe;
    /**轨迹  
     * 这个地块附着物将在整个投射物路径上产生  
     */
    trail?: AmmoTrail,
    /**爆炸  
     * 在投射物命中的瓷砖上会发生爆炸  
     */
    explosion?: Explosion;
    /**做闪光弹  
     * 在命中位置产生一次性EMP爆炸；默认 false  
     */
    do_flashbang?: boolean;
    /**做电磁脉冲爆炸  
     * 产生硬编码的闪光弹爆炸；默认 false  
     */
    do_emp_blast?: boolean;
    /**泡沫混凝土建筑  
     * 在命中位置产生泡沫混凝土地块附着物和墙壁, 用于aftershock；默认 false  
     */
    foamcrete_build?: boolean;
    /**触发概率  
     * 应用这个效果的概率  
     * 单位为 1/x  
     */
    trigger_chance?:number;
}

/**弹药AOE效果 */
export type AmmoAoe = {
    /**地块附着物类型  
     * 将在投射物中心周围产生的地块附着物；默认 "fd_null"  
     */
    field_type?: FieldID;
    /**最小强度  
     * 地块附着物的最小强度；默认 0  
     */
    intensity_min?: number;
    /**最大强度  
     * 地块附着物的最大强度；默认 0  
     */
    intensity_max?: number;
    /**半径
     * 要产生的地块附着物的半径；默认 1
     */
    radius?: number;
    /**Z轴半径  
     * Z级别的半径；默认 0
     */
    radius_z?: number;
    /**概率  
     * 产生1个单位地块附着物的概率, 从0到100；默认100
     */
    chance?: number;
    /**大小  
     * 似乎是阈值, 当自动炮塔停止射击武器以防止友军伤害时；默认 0  
     */
    size?: number;
    /**检查可通过性  
     * 如果为false, 投射物能够穿透不可穿透的地形,  
     * 如果定义了穿透 (如墙和窗户)；如果为true,  
     * 投射物不能穿透甚至一片玻璃；默认 false  
     */
    check_passable?: boolean;
    /**检查视线  
     * 如果为false, 地块附着物可以在不透明的墙后产生(例如, 在混凝土墙后面);  
     * 如果为true, 它不能；默认 false  
     */
    check_sees?: boolean;
    /**检查视线半径  
     * 如果 "check_sees" 为 true, 并且此值小于 "radius", 则此值用作半径。  
     * 目的和推理未知, 可能是微型核弹的一些遗留物, 所以就不要使用它了；默认 0  
     */
    check_sees_radius?: number;
}

/**弹药轨迹效果 */
export type AmmoTrail = {
    /**地块附着物类型  
     * 将产生的地块附着物；默认 "fd_null"  
     */
    field_type?: FieldID;
    /**最小强度  
     * 地块附着物的最小强度；默认 0  
     */
    intensity_min?: number;
    /**最大强度  
     * 地块附着物的最大强度；默认 0  
     */
    intensity_max?: number;
    /**概率  
     *  产生1个单位地块附着物的概率, 从0到100；默认100  
     */
    chance?: number;
}