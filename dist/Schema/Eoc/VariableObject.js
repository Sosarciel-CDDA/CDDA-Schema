"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoParamTalkerCondList = void 0;
/**双Talker无参条件列表 */
exports.NoParamTalkerCondList = [
    "female", //是女性
    "male", //是男性
    "can_drop_weapon", //可以丢弃手中的物品
    "is_alive", //还活着
    "has_weapon", //挥舞着任意物品
    "is_avatar", //是主角
    "is_npc", //是npc
    "is_character", //是角色
    "is_monster", //是怪物
    "is_item", //是物品
    "is_furnitur", //是家具
    "driving", //正在驾驶
];
/**选择地块的模式 列表 */
const QueryTileTypeList = [
    "anywhere", //与"look around" UI相同
    "line_of_sight", //此刻可见的唯一瓷砖（范围是强制性的）
    "around", //与点燃火源相同, 你只能选择紧邻的9个瓷砖
];
