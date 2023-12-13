import { AnyItemID } from "./Item";
import { MutationID } from "./Mutation";
import { SpellID } from "./Spell";
/** 显示角色的装备物品 */
export declare const YRWP = "<yrwp>";
/** 显示npc的装备物品 */
export declare const MYWP = "<mywp>";
/** 显示角色的名字 */
export declare const U_NAME = "<u_name>";
/** 显示npc的名字 */
export declare const NPC_NAME = "<npc_name>";
/** 显示角色的弹药 */
export declare const AMMO = "<ammo>";
/** 显示npc的当前活动 */
export declare const CURRENT_ACTIVITY = "<current_activity>";
/** 显示随机的标点符号: ., …, ! */
export declare const PUNC = "<punc>";
/** 显示npc的代词 */
export declare const MYPRONOUN = "<mypronoun>";
/** 参考物品 */
export declare const TOPIC_ITEM = "<topic_item>";
/** 参考物品的单价 */
export declare const TOPIC_ITEM_PRICE = "<topic_item_price>";
/** TODO 添加 */
export declare const TOPIC_ITEM_MY_TOTAL_PRICE = "<topic_item_my_total_price>";
/** TODO 添加 */
export declare const TOPIC_ITEM_YOUR_TOTAL_PRICE = "<topic_item_your_total_price>";
/** 显示直到补货剩余的时间 */
export declare const INTERVAL = "<interval>";
/** 用户变量VAR */
export declare const U_VAL_VAR: (id: string) => string;
/** npc变量VAR */
export declare const NPC_VAL_VAR: (id: string) => string;
/** 上下文变量VAR */
export declare const CONTEXT_VAL_VAR: (id: string) => string;
/** 全局变量VAR */
export declare const GLOBAL_VAL_VAR: (id: string) => string;
/** 来自ID的物品的名字 */
export declare const ITEM_NAME_ID: (id: AnyItemID) => string;
/** 来自ID的物品的描述 */
export declare const ITEM_DESCRIPTION_ID: (id: AnyItemID) => string;
/** 来自ID的特性的名字 */
export declare const TRAIT_NAME_ID: (id: MutationID) => string;
/** 来自ID的特性的描述 */
export declare const TRAIT_DESCRIPTION_ID: (id: MutationID) => string;
/** 来自ID的法术的名字 */
export declare const SPELL_NAME_ID: (id: SpellID) => string;
/** 来自ID的法术的描述 */
export declare const SPELL_DESCRIPTION_ID: (id: SpellID) => string;
