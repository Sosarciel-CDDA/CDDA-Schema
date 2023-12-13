"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPELL_DESCRIPTION_ID = exports.SPELL_NAME_ID = exports.TRAIT_DESCRIPTION_ID = exports.TRAIT_NAME_ID = exports.ITEM_DESCRIPTION_ID = exports.ITEM_NAME_ID = exports.GLOBAL_VAL_VAR = exports.CONTEXT_VAL_VAR = exports.NPC_VAL_VAR = exports.U_VAL_VAR = exports.INTERVAL = exports.TOPIC_ITEM_YOUR_TOTAL_PRICE = exports.TOPIC_ITEM_MY_TOTAL_PRICE = exports.TOPIC_ITEM_PRICE = exports.TOPIC_ITEM = exports.MYPRONOUN = exports.PUNC = exports.CURRENT_ACTIVITY = exports.AMMO = exports.NPC_NAME = exports.U_NAME = exports.MYWP = exports.YRWP = void 0;
/** 显示角色的装备物品 */
exports.YRWP = "<yrwp>";
/** 显示npc的装备物品 */
exports.MYWP = "<mywp>";
/** 显示角色的名字 */
exports.U_NAME = "<u_name>";
/** 显示npc的名字 */
exports.NPC_NAME = "<npc_name>";
/** 显示角色的弹药 */
exports.AMMO = "<ammo>";
/** 显示npc的当前活动 */
exports.CURRENT_ACTIVITY = "<current_activity>";
/** 显示随机的标点符号: ., …, ! */
exports.PUNC = "<punc>";
/** 显示npc的代词 */
exports.MYPRONOUN = "<mypronoun>";
/** 参考物品 */
exports.TOPIC_ITEM = "<topic_item>";
/** 参考物品的单价 */
exports.TOPIC_ITEM_PRICE = "<topic_item_price>";
/** TODO 添加 */
exports.TOPIC_ITEM_MY_TOTAL_PRICE = "<topic_item_my_total_price>";
/** TODO 添加 */
exports.TOPIC_ITEM_YOUR_TOTAL_PRICE = "<topic_item_your_total_price>";
/** 显示直到补货剩余的时间 */
exports.INTERVAL = "<interval>";
/** 用户变量VAR */
const U_VAL_VAR = (id) => `<u_val:${id}>`;
exports.U_VAL_VAR = U_VAL_VAR;
/** npc变量VAR */
const NPC_VAL_VAR = (id) => `<npc_val:${id}>`;
exports.NPC_VAL_VAR = NPC_VAL_VAR;
/** 上下文变量VAR */
const CONTEXT_VAL_VAR = (id) => `<context_val:${id}>`;
exports.CONTEXT_VAL_VAR = CONTEXT_VAL_VAR;
/** 全局变量VAR */
const GLOBAL_VAL_VAR = (id) => `<global_val:${id}>`;
exports.GLOBAL_VAL_VAR = GLOBAL_VAL_VAR;
/** 来自ID的物品的名字 */
const ITEM_NAME_ID = (id) => `<item_name:${id}>`;
exports.ITEM_NAME_ID = ITEM_NAME_ID;
/** 来自ID的物品的描述 */
const ITEM_DESCRIPTION_ID = (id) => `<item_description:${id}>`;
exports.ITEM_DESCRIPTION_ID = ITEM_DESCRIPTION_ID;
/** 来自ID的特性的名字 */
const TRAIT_NAME_ID = (id) => `<trait_name:${id}>`;
exports.TRAIT_NAME_ID = TRAIT_NAME_ID;
/** 来自ID的特性的描述 */
const TRAIT_DESCRIPTION_ID = (id) => `<trait_description:${id}>`;
exports.TRAIT_DESCRIPTION_ID = TRAIT_DESCRIPTION_ID;
/** 来自ID的法术的名字 */
const SPELL_NAME_ID = (id) => `<spell_name:${id}>`;
exports.SPELL_NAME_ID = SPELL_NAME_ID;
/** 来自ID的法术的描述 */
const SPELL_DESCRIPTION_ID = (id) => `<spell_description:${id}>`;
exports.SPELL_DESCRIPTION_ID = SPELL_DESCRIPTION_ID;
