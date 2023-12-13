import { FieldID } from "./Field";
import { CddaID, Explosion } from "./GenericDefine";
/**定义的子弹效果 列表 */
export declare const DefineAmmoEffectIDList: readonly ["NO_PENETRATE_OBSTACLES", "BEANBAG", "LARGE_BEANBAG", "DRAW_AS_LINE", "APPLY_SAP", "BLINDS_EYES", "BOUNCE", "BURST", "SPECIAL_COOKOFF", "COOKOFF", "BLACKPOWDER", "HEAVY_HIT", "INCENDIARY", "IGNITE", "JET", "MATCHHEAD", "MAGIC", "MUZZLE_SMOKE", "NEVER_MISFIRES", "NO_DAMAGE_SCALING", "NO_EMBED", "NOGIB", "NO_ITEM_DAMAGE", "NON_FOULING", "NO_OVERSHOOT", "NPC_AVOID", "NULL_SOURCE", "PARALYZEPOISON", "ROBOT_DAZZLE", "RECOVER_X", "RECYCLED", "SHATTER_SELF", "SHOT", "WIDE"];
/**定义的子弹效果 */
export type DefineAmmoEffectID = typeof DefineAmmoEffectIDList[number];
/**弹药效果ID */
export type AmmoEffectID = CddaID<"AEFF"> | DefineAmmoEffectID;
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
    trail?: AmmoTrail;
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
    trigger_chance?: number;
};
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
};
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
};
