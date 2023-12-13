"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OMTMatchTypeList = exports.EmptyMissionDialog = void 0;
/**任务目标 列表*/
const MissionGoalList = [
    "MGOAL_GO_TO", // 到达特定的覆盖地图图块
    "MGOAL_GO_TO_TYPE", // 到达指定覆盖图图块类型的任何实例
    "MGOAL_COMPUTER_TOGGLE", // 激活正确的终端将完成任务
    "MGOAL_FIND_ITEM", // 查找 1 个或多个给定类型的项目
    "MGOAL_FIND_ANY_ITEM", // 找到 1 个或多个给定类型的物品, 并标记为此任务
    "MGOAL_FIND_MONSTER", // 找到并找回友好的怪物
    "MGOAL_FIND_NPC", // 寻找特定的NPC
    "MGOAL_TALK_TO_NPC", // 与特定 NPC 交谈
    "MGOAL_RECRUIT_NPC", // 招募特定NPC
    "MGOAL_RECRUIT_NPC_CLASS", // 招募特定职业的NPC
    "MGOAL_ASSASSINATE", // 杀死特定的NPC
    "MGOAL_KILL_MONSTER", // 杀死特定的敌对怪物
    "MGOAL_KILL_MONSTERS", // 杀死一些特定的敌对怪物
    "MGOAL_KILL_MONSTER_TYPE", // 杀死一定数量的特定怪物类型
    "MGOAL_KILL_MONSTER_SPEC", // 杀死一定数量的特定物种的怪物
    "MGOAL_CONDITION", // 满足动态创建的条件并与任务赋予者交谈
];
/**任务来源 列表 */
const MissionOriginList = [
    "ORIGIN_GAME_START", // 比赛开始时给出
    "ORIGIN_OPENER_NPC", // 游戏开始时NPC会出现在你面前
    "ORIGIN_ANY_NPC", // 任意NPC
    "ORIGIN_SECONDARY", // 在另一个任务结束时给出
    "ORIGIN_COMPUTER", // 阅读调查后在计算机终端中引发条目
];
/**空的任务对话字典 */
exports.EmptyMissionDialog = {
    describe: "",
    offer: "",
    accepted: "",
    rejected: "",
    advice: "",
    inquire: "",
    success: "",
    success_lie: "",
    failure: "",
};
/**地块匹配类型 列表 */
exports.OMTMatchTypeList = [
    "EXACT", // 提供的字符串必须与覆盖地图地形 ID 完全匹配, 包括线性地形类型的线性方向后缀或旋转地形类型的旋转后缀。
    "TYPE", // 提供的字符串必须与覆盖地图地形 ID 的基本类型 ID 完全匹配, 这意味着旋转和线性地形类型的后缀将被忽略。
    "PREFIX", // 提供的字符串必须是覆盖地图地形 ID 的完整前缀 (附加部分由下划线分隔) 。例如, “forest”将匹配“forest”或“forest_thick”, 但不匹配“forestcabin”。
    "CONTAINS", // 提供的字符串必须包含在覆盖地图地形 ID 中, 但可以出现在开头、结尾或中间, 并且没有任何关于下划线分隔的规则。
];
