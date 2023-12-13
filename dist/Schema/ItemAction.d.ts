import { EocID, IDObj, InlineEoc } from "./Eoc";
import { FieldID } from "./Field";
import { CddaID, Color, DescText, Explosion } from "./GenericDefine";
import { NpcClassID } from "./NpcClass";
import { SpellID } from "./Spell";
/**预定义的物品动作ID 列表 */
export declare const DefineItemActionIDList: readonly ["repair_fabric", "repair_metal", "sew_advanced", "firestarter", "HAMMER", "PICK_LOCK", "deploy_furn", "deploy_appliance", "CROWBAR_WEAK", "CROWBAR", "MAKEMOUND", "DIG_CHANNEL", "PICKAXE", "PACK_CBM", "GEIGER", "HACKSAW", "BOLTCUTTERS", "HOTPLATE", "HOTPLATE_ATOMIC", "TOOLMOD_ATTACH", "GUNMOD_ATTACH", "GUN_REPAIR", "DIRECTIONAL_HOLOGRAM", "ROBOTCONTROL", "METH", "TAZER", "ANTICONVULSANT", "LUMBER", "REMOVE_ALL_MODS", "salvage", "inscribe", "fireweapon_off", "fireweapon_on", "CHANGE_EYES", "CHANGE_SKIN", "transform", "message", "unpack", "learn_spell", "cast_spell", "holster", "attach_molle", "detach_molle", "saw_barrel", "saw_stock", "ACIDBOMB_ACT", "ADRENALINE_INJECTOR", "AFS_TRANSLOCATOR", "ALCOHOL", "ALCOHOL_STRONG", "ALCOHOL_WEAK", "ANTIBIOTIC", "ANTIFUNGAL", "ANTIPARASITIC", "BELL", "BLECH", "BLECH_BECAUSE_UNCLEAN", "C4", "CAMERA", "CAN_GOO", "CAPTURE_MONSTER_ACT", "CAPTURE_MONSTER_VEH", "CARVER_OFF", "CHAINSAW_OFF", "CHEW", "CLEAR_RUBBLE", "COIN_FLIP", "BINDER_ADD_RECIPE", "BINDER_MANAGE_RECIPE", "COKE", "COMBATSAW_OFF", "TOOLWEAPON_DEACTIVATE", "E_COMBATSAW_OFF", "CONTACTS", "DATURA", "DIG", "DIRECTIONAL_ANTENNA", "DOG_WHISTLE", "CALL_OF_TINDALOS", "DOLLCHAT", "ECIG", "EHANDCUFFS", "EINKTABLETPC", "EBOOKSAVE", "EBOOKREAD", "ELEC_CHAINSAW_OFF", "EMF_PASSIVE_ON", "EXTINGUISHER", "MACE", "EYEDROPS", "FILL_PIT", "FIRECRACKER", "FIRECRACKER_PACK", "FIRECRACKER_PACK_ACT", "FISH_ROD", "FISH_TRAP", "FLUMED", "FLUSLEEP", "FLU_VACCINE", "FOODPERSON", "FUNGICIDE", "GRANADE_ACT", "GRENADE_INC_ACT", "detach_gunmods", "modify_gunmods", "HAIRKIT", "HEATPACK", "HEAT_FOOD", "HONEYCOMB", "INHALER", "JACKHAMMER", "JET_INJECTOR", "MAGIC_8_BALL", "PLAY_GAME", "MARLOSS", "MARLOSS_GEL", "MARLOSS_SEED", "MA_MANUAL", "MEDITATE", "MININUKE", "MOLOTOV_LIT", "MOP", "MP3", "MP3_DEACTIVATE", "RPGDIE", "GASMASK_ACTIVATE", "DIVE_TANK_ACTIVATE", "SOLARPACK", "SOLARPACK_OFF", "MULTICOOKER", "MYCUS", "NOISE_EMITTER_ON", "OXYGEN_BOTTLE", "OXYTORCH", "PACK_ITEM", "PETFOOD", "PLANTBLECH", "POISON", "PORTABLE_GAME", "FITNESS_CHECK", "deploy_tent", "PORTAL", "PROZAC", "ELECTRICSTORAGE", "PURIFY_SMART", "RADGLOVE", "RADIOCAR", "RADIOCARON", "RADIOCONTROL", "RADIO_MOD", "RADIO_OFF", "RADIO_ON", "REMOTEVEH", "MANAGE_EXOSUIT", "RM13ARMOR_OFF", "RM13ARMOR_ON", "SEED", "SEWAGE", "SHAVEKIT", "SHOCKTONFA_OFF", "SHOCKTONFA_ON", "SIPHON", "SMOKING", "SPRAY_CAN", "STIMPACK", "TELEPORT", "THORAZINE", "TOWEL", "TRIMMER_OFF", "UNFOLD_GENERIC", "UNPACK_ITEM", "BLOOD_DRAW", "HAND_CRANK", "VIBE", "VORTEX", "WASH_SOFT_ITEMS", "WASH_HARD_ITEMS", "WASH_ALL_ITEMS", "WATER_PURIFIER", "WEATHER_TOOL", "WEED_CAKE", "XANAX", "ammobelt", "consume_drug", "delayed_transform", "explosion", "heal", "link_up", "manualnoise", "musical_instrument", "place_monster", "place_npc", "place_trap", "reveal_map", "change_scent", "install_bionic", "CHOP_TREE", "CHOP_LOGS", "BREAK_STICK", "WEAK_ANTIBIOTIC", "DISASSEMBLE", "STRONG_ANTIBIOTIC", "weigh_self", "CRAFT", "effect_on_conditions", "SEXTANT", "LUX_METER", "DBG_LUX_METER", "CALORIES_INTAKE_TRACKER", "VOLTMETER", "play_instrument", "sound"];
/**预定义的物品动作ID */
export type DefineItemActionID = typeof DefineItemActionIDList[number];
/**物品动作ID
 * 实际可用动作参见 UseAction
 */
export type ItemActionID = CddaID<"IACT"> | DefineItemActionID;
/**使用效果 */
export type UseAction = [
    UAPlaceNpc,
    UARunEoc,
    UAExplosion,
    UALearnSpell,
    UACastSpell,
    UseActionHardcode
][number];
/**硬编码效果 */
type UseActionHardcode = [
    "ALCOHOL_STRONG",
    "ALCOHOL_WEAK",
    "ALCOHOL",
    "ANTIBIOTIC",
    "BANDAGE",
    "BIRDFOOD",
    "BLECH",
    "BLECH_BECAUSE_UNCLEAN",
    "CATFOOD",
    "CATTLEFODDER",
    "CHEW",
    "CIG",
    "COKE",
    "CRACK",
    "DISINFECTANT",
    "DOGFOOD",
    "FIRSTAID",
    "FLUMED",
    "FLUSLEEP",
    "FUNGICIDE",
    "HALLU",
    "HONEYCOMB",
    "INHALER",
    "IODINE",
    "MARLOSS",
    "METH",
    "NONE",
    "PKILL",
    "PLANTBLECH",
    "POISON",
    "PROZAC",
    "PURIFIER",
    "SEWAGE",
    "SLEEP",
    "THORAZINE",
    "VITAMINS",
    "WEED",
    "XANAX"
][number];
/**放置NPC */
type UAPlaceNpc = {
    /**在地图上放置一个NPC */
    type: "place_npc";
    /**npc职业ID */
    npc_class_id: NpcClassID;
    /**生成时播报的消息 */
    summon_msg?: (DescText);
    /**将 npc 随机放置在玩家周围, 如果 false: 让玩家决定将其放置在哪里 (默认值: false)  */
    place_randomly?: boolean;
    /**该动作需要多少移动点 */
    moves?: number;
    /**随机 NPC 放置的最大半径。 */
    radius?: number;
};
/**运行Eoc */
type UARunEoc = {
    /**执行某个ECO */
    type: "effect_on_conditions";
    /**说明 */
    description: (DescText);
    /**在菜单中显示的名称 */
    menu_text: (DescText);
    /**eoc列表 */
    effect_on_conditions: (IDObj<EocID> | InlineEoc)[];
};
/**产生爆炸 */
type UAExplosion = {
    /**产生爆炸 */
    type: "explosion";
    /**爆炸数据 */
    explosion: Explosion;
    /**绘制爆炸半径的大小 */
    draw_explosion_radius?: number;
    /**绘制爆炸时使用的颜色。 */
    draw_explosion_color?: (Color);
    /**是否做闪光弹效果 */
    do_flashbang?: boolean;
    /**玩家是否免疫闪光弹效果 */
    flashbang_player_immune?: boolean;
    /**产生的地形效果的传播半径 */
    fields_radius?: number;
    /**产生的地形效果 */
    fields_type?: (FieldID);
    /**产生的地形效果的最小强度 */
    fields_min_intensity?: number;
    /**产生的地形效果的最大强度 */
    fields_max_intensity?: number;
    /**爆炸产生的 EMP 爆炸半径 */
    emp_blast_radius?: number;
    /**爆炸产生的扰频器爆炸半径 */
    scrambler_blast_radius?: number;
};
/**学习法术 */
type UALearnSpell = {
    /**学习法术 */
    type: "learn_spell";
    /**学习的法术列表 */
    spells: SpellID[];
};
/**施法 */
type UACastSpell = {
    /**施法 */
    type: "cast_spell";
    /**法术ID */
    spell_id: SpellID;
    /**不会失败 */
    no_fail?: boolean;
    /**法术等级 */
    level: number;
    /**需要穿戴此物品才能施法 */
    need_worn?: boolean;
};
export {};
