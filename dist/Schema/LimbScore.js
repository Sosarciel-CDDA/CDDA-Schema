"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefineLimbScoreIDList = void 0;
/**预定义的肢体分数ID 列表 */
exports.DefineLimbScoreIDList = [
    "manip", // 修改瞄准速度、重载速度、投掷攻击速度、射程离散度和制作速度。每种肢体类型的操作器得分被汇总, 选择最佳的肢体组进行检查
    "lift", // 修改近战攻击耐力和移动成本, 以及一些STR检查。总和超过0.5符合使用双手武器和类似的检查。低于0.1举重得分的手臂不算作在近战战斗中工作
    "grip", // 抓握力量
    "block", // 通过由符合条件的肢体的阻挡得分加权的滚动选择阻挡肢体, 阻挡效率乘以目标肢体的得分
    "breathing", // 修改耐力恢复速度和喊叫音量
    "vision", // 修改射程离散度, 射程和近战弱点命中机会
    "night_vis", // 修改夜视范围 (计算范围的乘数) 
    "reaction", // 修改闪避机会, 阻挡机会, 近战弱点命中机会
    "movement_speed", // 修改移动成本
    "balance", // 修改投掷攻击速度, 移动成本和近战攻击卷
    "footing", // 修改移动成本
    "swim", // 修改游泳速度
    "crawl", // 攀爬
];
