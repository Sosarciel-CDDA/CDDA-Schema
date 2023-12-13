import { EocID } from "./Eoc";
import { CddaID, DefineNpcFaction, DescText } from "./GenericDefine";
import { NpcClassID } from "./NpcClass";
import { TalkTopicID } from "./TalkTopic";



/**NpcInstance ID格式 */
export type NpcInstanceID = CddaID<"NPC">;

/**Npc实例 */
export type NpcInstance = {
    type: "npc";
    id: NpcInstanceID;
    /**独特名称 */
    name_unique?: (DescText);
    /**名称后缀 */
    name_suffix?: (DescText);
    /**职业 */
    class: NpcClassID;
    /**初始态度 */
    attitude: NpcAttitude;
    /**初始行为 */
    mission: NpcMission;
    /**初始的聊天 talktopic */
    chat: TalkTopicID;
    /**阵营 */
    faction?: DefineNpcFaction;
    /**死亡触发的eoc */
    death_eocs?: EocID[];
    /**性别 */
    gender?: NpcGender;
    /**年龄 */
    age?: number;
    /**身高 */
    height?: number;
    /**npc的力量 */
    str?: number;
    /**npc的敏捷 */
    dex?: number;
    /**npc的智力 */
    int?: number;
    /**npc的感知 */
    per?: number;
    /**npc的性格 */
    personality?: {
        /**攻击性 */
        aggression?  : number;
        /**勇气 */
        bravery?     : number;
        /**收集癖 */
        collector?   : number;
        /**乐于助人 */
        altruism?    : number;
    }
}

/**NPC态度 列表 */
export const NpcAttitudeList = [
    0   ,// null, NPC可以做自己的事情
    1   ,// 说话, NPC会尝试接近玩家并与他们交谈
    3   ,// 跟随, NPC是玩家的好友, 可以被指挥
    7   ,// 防御, NPC 留在原地防御自己
    10  ,// 杀死, NPC 试图杀死玩家
    11  ,// 逃离, NPC逃离玩家
] as const;
/**NPC态度 */
export type NpcAttitude = typeof NpcAttitudeList[number];

/**Npc行为 列表 */
export const NpcMissionList = [
    0 ,// null, NPC可以做自己的事情
    3 ,// 店主, NPC 停留在一处, 但会尝试与玩家进行交易
    7 ,// 守卫, NPC 留在原地
] as const;
/**Npc行为 */
export type NpcMission = typeof NpcMissionList[number];

/**性别 */
export type NpcGender = "male"|"female";