"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRatTypeList = exports.EffectRatTypeList = exports.SocialTypeList = exports.StatusSimpleList = exports.StatusList = exports.DefineMonFactionList = exports.DefineNpcFactionList = exports.BodyPartList = exports.SubBPList = exports.LimbBPList = exports.VitalBPList = exports.ColorList = void 0;
/**可用的颜色列表 */
exports.ColorList = [
    "black",
    "red",
    "green",
    "brown",
    "blue",
    "magenta",
    "cyan",
    "light_gray",
    "dark_gray",
    "light_red",
    "light_green",
    "yellow",
    "light_blue",
    "pink",
    "light_cyan",
    "white",
];
/**必要的肢体组 */
exports.VitalBPList = [
    "torso",
    "head",
];
/**四肢/主要肢体组 */
exports.LimbBPList = [
    "leg_l", "leg_r",
    "arm_l", "arm_r",
    ...exports.VitalBPList,
];
/**子肢体组 */
exports.SubBPList = [
    "foot_l", "foot_r",
    "hand_l", "hand_r",
];
/**组肢体 */
exports.BodyPartList = [...exports.LimbBPList, ...exports.SubBPList];
/**npc阵营 列表 */
exports.DefineNpcFactionList = [
    "your_followers",
    "no_faction",
];
/**怪物阵营 列表 */
exports.DefineMonFactionList = [
    "player",
    "human",
    "zombie",
    "passive_machine",
];
/**属性 列表 */
exports.StatusList = [
    'strength',
    'dexterity',
    'intelligence',
    'perception',
];
/**属性简写 列表 */
exports.StatusSimpleList = [
    'str',
    'dex',
    'int',
    'per',
];
/**社交技能 列表 */
exports.SocialTypeList = [
    "intimidate", //威胁
    "lie", //说谎
    "persuade", //说服
];
/**效果评价 列表 */
exports.EffectRatTypeList = [
    "good", //好
    "neutral", //中等
    "bad", //坏
    "mixed", //混合
];
/**消息评价 列表 */
exports.MessageRatTypeList = [
    'good', //良好 (绿色)
    'neutral', //中性 (白色)
    'bad', //不良 (红色)
    'mixed', //混合 (紫色)
    'warning', //警告 (黄色)
    'info', //信息 (蓝色)
    'debug', //调试 (仅在调试模式打开时出现)
    'headshot', //爆头 (紫色)
    'critical', //临界 (黄色)
    'grazing', //放牧 (蓝色)
];
