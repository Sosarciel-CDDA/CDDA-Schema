import { CddaID, DescText } from "./GenericDefine";





/**预定义的肢体分数ID 列表 */
export const DefineLimbScoreIDList = [
    "manip"         , // 修改瞄准速度、重载速度、投掷攻击速度、射程离散度和制作速度。每种肢体类型的操作器得分被汇总, 选择最佳的肢体组进行检查
    "lift"          , // 修改近战攻击耐力和移动成本, 以及一些STR检查。总和超过0.5符合使用双手武器和类似的检查。低于0.1举重得分的手臂不算作在近战战斗中工作
    "grip"          , // 抓握力量
    "block"         , // 通过由符合条件的肢体的阻挡得分加权的滚动选择阻挡肢体, 阻挡效率乘以目标肢体的得分
    "breathing"     , // 修改耐力恢复速度和喊叫音量
    "vision"        , // 修改射程离散度, 射程和近战弱点命中机会
    "night_vis"     , // 修改夜视范围 (计算范围的乘数) 
    "reaction"      , // 修改闪避机会, 阻挡机会, 近战弱点命中机会
    "movement_speed", // 修改移动成本
    "balance"       , // 修改投掷攻击速度, 移动成本和近战攻击卷
    "footing"       , // 修改移动成本
    "swim"          , // 修改游泳速度
    "crawl"         , // 攀爬
] as const;
/**预定义的肢体分数ID */
export type DefineLimbScoreID = typeof DefineLimbScoreIDList[number];
/**肢体分数ID */
export type LimbScoreID = CddaID<"LS">|DefineLimbScoreID;

/**肢体分数 */
export type LimbScore = {
    /** 类型: 始终为 "limb_score" */
    type: "limb_score";
    /** 标识此肢体得分 */
    id: LimbScoreID;
    /** 必填。定义将在用户界面中显示的此肢体得分的可翻译名称 */
    name: (DescText);
    /**(可选, 默认为 true) 确定此肢体得分是否受角色的肢体健康影响。肢体健康越低 => 得分越低 */
    affected_by_wounds?: boolean;
    /**(可选, 默认为 true) 确定此肢体得分是否受角色的肢体负担影响。负担越重 => 得分越低 */
    affected_by_encumb?: boolean;
}


//character_mod值类型
type list = [
    "limb_score"        , // 指的是一个 limb_score id, 或者一个 limb_score id 的数组 (可以是一个加权列表) 。这些是从中派生出此修饰符的肢体得分。对于加法计算 (limb_score_op: "+") , 得分乘以权重, 对于乘法计算 (limb_score_op: "x") , 它被提升到权重的幂
    "limb_score_op"     , // (可选) 当定义了多个肢体得分时要应用的操作 (加 + 或乘 x) 。例如: x => score1 x score2 x score3 .... (默认为 x)
    "limb_type"         , // (可选) 指的是在 body_part 中定义的 limb_type。如果存在, 只使用具有该 limb_type 的身体部位的肢体得分
    "override_encumb"   , // (可选) 布尔值 (true/false) 。如果指定, 这将强制肢体得分受/不受肢体负担影响 (如果为 true/false) 。(覆盖 limb_score 中的 affected_by_encumb)
    "override_wounds"   , // (可选) 布尔值 (true/false) 。如果指定, 这将强制肢体得分受/不受肢体健康影响 (如果为 true/false) 。 (覆盖 limb_score 中的 affected_by_wounds) 
    "min"               , // (可选) 为此修饰符定义一个最小值。通常只用于提供收益的"奖金"乘数。不应与 max 一起使用
    "max"               , // (可选) 为此修饰符定义一个最大值。通常用于提供 malus 的"成本"乘数。不应与 min 一起使用。此值可以定义为小数或特殊值 "max_move_cost"
    "nominator"         , // (可选) 导致肢体得分除以指定的值, 即 nominator / ( limb_score * denominator )
    "denominator"       , // (可选) 将肢体得分 (或 nominator, 如果指定) 除以指定的值, 即 limb_score / denominator
    "subtract"          , // (可选) 定义从结果修饰符中减去的值, 即 mod - subtract
    "builtin"           , // 而不是肢体得分, 值对象可以定义一个内置函数来处理修饰符的计算
]


