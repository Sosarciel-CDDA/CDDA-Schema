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
        aggression?: number;
        /**勇气 */
        bravery?: number;
        /**收集癖 */
        collector?: number;
        /**乐于助人 */
        altruism?: number;
    };
};
/**NPC态度 列表 */
export declare const NpcAttitudeList: readonly [0, 1, 3, 7, 10, 11];
/**NPC态度 */
export type NpcAttitude = typeof NpcAttitudeList[number];
/**Npc行为 列表 */
export declare const NpcMissionList: readonly [0, 3, 7];
/**Npc行为 */
export type NpcMission = typeof NpcMissionList[number];
/**性别 */
export type NpcGender = "male" | "female";
