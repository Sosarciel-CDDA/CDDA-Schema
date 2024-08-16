import { EocEffect, IDObj, LocObj, NumObj, StrObj } from "./Eoc";
import { CddaID, DescText } from "./GenericDefine";
import { AnyItemID } from "./Item";
import { OvermapTerrainID } from "./Mapgen";
import { OverMapSpecialID } from "./OvermapSpecial";


/**任务定义ID */
export type MissionDefinitionID = CddaID<"MISDEF">;

/**任务定义 */
export type MissionDefinition = {
    id: MissionDefinitionID;
    type: "mission_definition";
    /**任务名 */
    name: (DescText);
    /**任务说明 */
    description: (DescText);
    /**任务目标 */
    goal: MissionGoal;
    /**任务难度 */
    difficulty: number;
    /**未知 */
    value: number;
    /**如果目标是寻找道具, 目标的道具ID */
    item?: AnyItemID;
    /**可选布尔值, 默认为 false。 如果为 true,   
     * 则此任务完成后, 它将不会显示在已完成的任务或失败的任务列表中。  
     */
    invisible_on_complete?: boolean;
    /**任务开始的效果 */
    start?: MissionEffect;
    /**任务结束的效果 */
    end?: MissionEffect;
    /**任务来源 */
    origins?: MissionOrigin[];
    /**下一段任务 */
    followup?: MissionDefinitionID;
    /**任务对话文本
     * 如果是npc来源的任务必须设置
     */
    dialogue?: MissionDialog;
};

/**任务目标 列表*/
const MissionGoalList = [
    "MGOAL_GO_TO"             , // 到达特定的覆盖地图图块
    "MGOAL_GO_TO_TYPE"        , // 到达指定覆盖图图块类型的任何实例
    "MGOAL_COMPUTER_TOGGLE"   , // 激活正确的终端将完成任务
    "MGOAL_FIND_ITEM"         , // 查找 1 个或多个给定类型的项目
    "MGOAL_FIND_ANY_ITEM"     , // 找到 1 个或多个给定类型的物品, 并标记为此任务
    "MGOAL_FIND_MONSTER"      , // 找到并找回友好的怪物
    "MGOAL_FIND_NPC"          , // 寻找特定的NPC
    "MGOAL_TALK_TO_NPC"       , // 与特定 NPC 交谈
    "MGOAL_RECRUIT_NPC"       , // 招募特定NPC
    "MGOAL_RECRUIT_NPC_CLASS" , // 招募特定职业的NPC
    "MGOAL_ASSASSINATE"       , // 杀死特定的NPC
    "MGOAL_KILL_MONSTER"      , // 杀死特定的敌对怪物
    "MGOAL_KILL_MONSTERS"     , // 杀死一些特定的敌对怪物
    "MGOAL_KILL_MONSTER_TYPE" , // 杀死一定数量的特定怪物类型
    "MGOAL_KILL_MONSTER_SPEC" , // 杀死一定数量的特定物种的怪物
    "MGOAL_CONDITION"         , // 满足动态创建的条件并与任务赋予者交谈
] as const;
/**任务目标 */
type MissionGoal = typeof MissionGoalList[number];

/**任务来源 列表 */
const MissionOriginList = [
    "ORIGIN_GAME_START" , // 比赛开始时给出
    "ORIGIN_OPENER_NPC" , // 游戏开始时NPC会出现在你面前
    "ORIGIN_ANY_NPC"    , // 任意NPC
    "ORIGIN_SECONDARY"  , // 在另一个任务结束时给出
    "ORIGIN_COMPUTER"   , // 阅读调查后在计算机终端中引发条目
] as const;
/**任务来源 */
type MissionOrigin = typeof MissionOriginList[number];

/**任务对话字典 */
type MissionDialog = {
    /**NPC 对任务的总体描述 */
    describe   : (DescText);
    /**当玩家选择该任务时给出的任务细节 */
    offer      : (DescText);
    /**玩家接受任务后 NPC 的反应 */
    accepted   : (DescText);
    /**玩家拒绝任务时NPC的反应 */
    rejected   : (DescText);
    /**如果玩家询问如何完成任务的建议, 他们会听到以下内容 */
    advice     : (DescText);
    /**如果 NPC 询问玩家任务进展如何, 则使用此选项 */
    inquire    : (DescText);
    /**NPC 对任务成功报告的回应 */
    success    : (DescText);
    /**如果 NPC 发现玩家在任务成功的问题上撒谎, 他们会做出什么反应 */
    success_lie: (DescText);
    /**如果玩家报告任务失败, NPC 的反应 */
    failure    : (DescText);
};
/**空的任务对话字典 */
export const EmptyMissionDialog:MissionDialog = {
    describe   : "",
    offer      : "",
    accepted   : "",
    rejected   : "",
    advice     : "",
    inquire    : "",
    success    : "",
    success_lie: "",
    failure    : "",
} as const;

/**任务效果 */
type MissionEffect = {
    /**eoc效果 */
    effect?: EocEffect|EocEffect[];
    /**寻找大地图地形目标 */
    assign_mission_target?: (AssignMissionTarget);
};

/**寻找大地图目标 */
export type AssignMissionTarget = {
    /**将被选为目标的覆盖图地形的 ID */
    om_terrain?: IDObj<OvermapTerrainID>;
    /**与 om_terrain 一起使用的匹配规则。默认为TYPE */
    om_terrain_match_type?:OMTMatchType;
    /**包含覆盖图地形的覆盖图特殊 ID */
    om_special?:IDObj<OverMapSpecialID>;
    /**要查找的覆盖地图地形的 ID, 如果om_terrain找不到则替换。*/
    om_terrain_replace?:IDObj<OvermapTerrainID>;
    /**要显示的覆盖地图地形坐标中的半径。 */
    reveal_radius: (NumObj);
    /**如果属实, 那om_terrain肯定已经被看到了。 */
    must_see?:boolean;
    /**如果属实, 那么om_terrain一定还没有被看到。 */
    cant_see?:boolean;
    /**如果为 true, 则使用随机匹配​​。如果为 false, 则使用最接近的om_terrain */
    random?:boolean;
    /**在覆盖地图地形坐标中寻找匹配的范围om_terrain。 */
    search_range: (NumObj);
    /**覆盖地图地形坐标中的范围。此范围内的实例om_terrain将被忽略。 */
    min_distance?: (NumObj);
    /**从 NPC 的当前位置 (而不是玩家的当前位置) 开始搜索。 */
    origin_npc?:boolean;
    /**如果指定, 搜索时将使用而不是玩家或 NPC 的 z */
    z?: (NumObj);
    /**一个variable_object (参见variable_objectdoc ) , 如果设置了该变量的值将被使用。 */
    var?: (LocObj);
    /**找到或创建 后om_terrain, 将任务目标地形偏移覆盖地图地形坐标中的偏移量。 */
    offset_x?: number;
    /**同offset_x */
    offset_y?: number;
    /**同offset_x */
    offset_z?: number;
}

/**地块匹配类型 列表 */
export const OMTMatchTypeList =[
    "EXACT"    , // 提供的字符串必须与覆盖地图地形 ID 完全匹配, 包括线性地形类型的线性方向后缀或旋转地形类型的旋转后缀。
    "TYPE"     , // 提供的字符串必须与覆盖地图地形 ID 的基本类型 ID 完全匹配, 这意味着旋转和线性地形类型的后缀将被忽略。
    "PREFIX"   , // 提供的字符串必须是覆盖地图地形 ID 的完整前缀 (附加部分由下划线分隔) 。例如, “forest”将匹配“forest”或“forest_thick”, 但不匹配“forestcabin”。
    "CONTAINS" , // 提供的字符串必须包含在覆盖地图地形 ID 中, 但可以出现在开头、结尾或中间, 并且没有任何关于下划线分隔的规则。
] as const;
/**地块匹配类型  
 * 如果未指定, 则默认为 TYPE  
 */
export type OMTMatchType = typeof OMTMatchTypeList[number];
