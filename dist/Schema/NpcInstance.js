"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpcMissionList = exports.NpcAttitudeList = void 0;
/**NPC态度 列表 */
exports.NpcAttitudeList = [
    0, // null, NPC可以做自己的事情
    1, // 说话, NPC会尝试接近玩家并与他们交谈
    3, // 跟随, NPC是玩家的好友, 可以被指挥
    7, // 防御, NPC 留在原地防御自己
    10, // 杀死, NPC 试图杀死玩家
    11, // 逃离, NPC逃离玩家
];
/**Npc行为 列表 */
exports.NpcMissionList = [
    0, // null, NPC可以做自己的事情
    3, // 店主, NPC 停留在一处, 但会尝试与玩家进行交易
    7, // 守卫, NPC 留在原地
];
