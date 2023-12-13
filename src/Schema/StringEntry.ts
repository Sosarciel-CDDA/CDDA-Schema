import { AnyItemID } from "./Item";
import { MutationID } from "./Mutation";
import { SpellID } from "./Spell";

/** 显示角色的装备物品 */
export const YRWP = "<yrwp>";
/** 显示npc的装备物品 */
export const MYWP = "<mywp>";
/** 显示角色的名字 */
export const U_NAME = "<u_name>";
/** 显示npc的名字 */
export const NPC_NAME = "<npc_name>";
/** 显示角色的弹药 */
export const AMMO = "<ammo>";
/** 显示npc的当前活动 */
export const CURRENT_ACTIVITY = "<current_activity>";
/** 显示随机的标点符号: ., …, ! */
export const PUNC = "<punc>";
/** 显示npc的代词 */
export const MYPRONOUN = "<mypronoun>";
/** 参考物品 */
export const TOPIC_ITEM = "<topic_item>";
/** 参考物品的单价 */
export const TOPIC_ITEM_PRICE = "<topic_item_price>";
/** TODO 添加 */
export const TOPIC_ITEM_MY_TOTAL_PRICE = "<topic_item_my_total_price>";
/** TODO 添加 */
export const TOPIC_ITEM_YOUR_TOTAL_PRICE = "<topic_item_your_total_price>";
/** 显示直到补货剩余的时间 */
export const INTERVAL = "<interval>";
/** 用户变量VAR */
export const U_VAL_VAR = (id:string)=>`<u_val:${id}>`;
/** npc变量VAR */
export const NPC_VAL_VAR = (id:string)=>`<npc_val:${id}>`;
/** 上下文变量VAR */
export const CONTEXT_VAL_VAR = (id:string)=>`<context_val:${id}>`;
/** 全局变量VAR */
export const GLOBAL_VAL_VAR = (id:string)=>`<global_val:${id}>`;
/** 来自ID的物品的名字 */
export const ITEM_NAME_ID = (id:AnyItemID)=>`<item_name:${id}>`;
/** 来自ID的物品的描述 */
export const ITEM_DESCRIPTION_ID = (id:AnyItemID)=>`<item_description:${id}>`;
/** 来自ID的特性的名字 */
export const TRAIT_NAME_ID = (id:MutationID)=>`<trait_name:${id}>`;
/** 来自ID的特性的描述 */
export const TRAIT_DESCRIPTION_ID = (id:MutationID)=>`<trait_description:${id}>`;
/** 来自ID的法术的名字 */
export const SPELL_NAME_ID = (id:SpellID)=>`<spell_name:${id}>`;
/** 来自ID的法术的描述 */
export const SPELL_DESCRIPTION_ID = (id:SpellID)=>`<spell_description:${id}>`;
