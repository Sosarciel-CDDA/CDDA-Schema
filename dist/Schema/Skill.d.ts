import { CddaID } from "./GenericDefine";
/**预定义的技能ID 列表 */
export declare const DefineSkillList: readonly ["speech", "computer", "firstaid", "mechanics", "traps", "driving", "swimming", "fabrication", "cooking", "tailor", "survival", "electronics", "archery", "gun", "launcher", "pistol", "rifle", "shotgun", "smg", "throw", "melee", "bashing", "cutting", "dodge", "stabbing", "unarmed", "chemistry"];
/**技能 */
export type SkillID = CddaID<"SKILL"> | typeof DefineSkillList[number];
