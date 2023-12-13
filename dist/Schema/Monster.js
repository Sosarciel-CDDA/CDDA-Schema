"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterFlagList = exports.MonsterBPList = void 0;
/**怪物的身体类型 列表 */
exports.MonsterBPList = [
    "angel", // 一个有翅膀的人
    "bear", // 一种可以站立在后腿上的四足动物
    "bird", // 一种有两只翅膀的两足动物
    "blob", // 一团物质
    "crab", // 一种有两只大臂的多足动物
    "dog", // 一种头部高于身体线的四足动物, 颈部较短
    "elephant", // 一种非常大的四足动物, 头部和躯干大, 四肢等长
    "fish", // 一种体型流线型, 有鳍的水生动物
    "flying insect", // 一种有头部和两个身体部分以及翅膀的六足动物
    "frog", // 一种有颈部的四足动物, 后腿非常大, 前腿较小
    "gator", // 一种身体非常长, 腿短的四足动物
    "horse", // 一种头部高于身体线的四足动物, 颈部较长
    "human", // 一种有两只手臂的双足动物
    "insect", // 一种有头部和两个身体部分的六足动物
    "kangaroo", // 一种利用大尾巴保持稳定的五足动物, 后腿非常大, 前臂较小
    "lizard", // 'gator' 的小型形式
    "migo", // migo 的任何形式
    "pig", // 一种头部与身体在同一线上的四足动物
    "spider", // 一种头部小, 腹部大的八足动物
    "snake", // 一种身体长, 无肢体的动物
];
/**怪物可用的Flag 列表 */
exports.MonsterFlagList = [
    "SEES", //拥有视觉
    "HEARS", //拥有听觉
    "NOHEAD", //没有脑袋
    "HARDTOSHOOT", //不易被远程攻击命中
    "FLIES", //这个怪物会飞
    "PRIORITIZE_TARGETS", //这个怪物会依据威胁程度处理目标
    "NO_BREATHE", //这个怪物不需要呼吸
    "NOGIB", //这个怪物被超量伤害杀死时不会爆成碎块
];
