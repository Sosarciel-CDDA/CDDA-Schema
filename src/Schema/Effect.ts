import { ParamsEnchantment } from "./Enchantment";
import { EocID } from "./Eoc";
import { FlagID } from "./Flag";
import { BodyPartID, CddaID, DescText, EffectRatType, Time } from "./GenericDefine";
import { LimbScoreID } from "./LimbScore";
import { MutationID } from "./Mutation";
import { VitaminsID } from "./Vitamins";





/**预定义的EffectID 列表 */
export const DefineEffectIDList = [
    "npc_run_away"      , // npc的AI标签, 让NPC开始逃跑
    "npc_suspend"       , // npc的AI标签, 暂停AI
    "incorporeal"       , // 无形体 让所有穿戴物品掉落
    "stunned"           , // 眩晕
    "downed"            , // 击倒
    "grabbed"           , // 被抓住
    "cureall"           , // 清除负面效果
    "corroding"         , // 被腐蚀
    "onfire"            , // 着火
    "dazed"             , // 被震晕
    "stunned"           , // 被眩晕
    "venom_blind"       , // 魂不守舍
    "formication"       , // 皮下有虫
    "blisters"          , // 水泡
    "frostbite"         , // 冻伤
    "frostbite_recovery", // 解冻
    "wet"               , // 潮湿
    "slimed"            , // 沾满黏液
    "migo_atmosphere"   , // 迷惑空气
    "fetid_goop"        , // 沾满恶臭黏液
    "sap"               , // 沾满汁液
    "nausea"            , // 极度恶心
    "bleed"             , // 流血
] as const;
/**预定义的EffectID */
export type DefineEffectID = typeof DefineEffectIDList[number];

/**效果ID */
export type EffectID = CddaID<"EFF">|DefineEffectID;

/**效果 */
export type Effect = {
    type: "effect_type";
    id: EffectID;
    /**用于后面的许多字段, 默认为 1 */
    max_intensity?: number;
    /**将累积效果的最大强度级别。  
     * 其他强度级别只会增加持续时间。  
     */
    max_effective_intensity?: number;
    /**如果“max_intensity”> 1 并且“name”中的条目数>=“max_intensity”, 那么它将尝试使用正确的强度名称。  
     * ["ABC","XYZ","123"]  
     * 在这种情况下, 这意味着强度 1 将给出名称“ABC”, 2 将给出“XYZ”, 3 将给出“123”。  
     * 如果“max_intensity”== 1或“name”中的条目数小于“max_intensity”,   
     * 则如果当前强度> 1, 则将使用第一个条目,   
     * 后跟括号中的强度, 即“ABC”, “ABC [2]”、“ABC [3]”。  
     * 如果所需的“名称”条目是空字符串 (“”)或缺少“名称”,   
     * 则该效果将不会在状态屏幕中向玩家显示。  
     * 按效果强度应用不同成员  
     */
    name?: (DescText)[];
    /**同name  
     * 按效果强度应用不同成员  
     */
    desc?: (DescText)[];
    /**被抵抗时产生的描述  
     * 按效果强度应用不同成员  
     */
    reduced_desc?: (DescText)[];
    /**如果“part_descs”== true, 则描述前面带有“您的 X”,   
     * 其中 X 是身体部位名称, 这意味着先前的描述将显示为“您的左臂 ABC”。  
     */
    part_descs?: true;
    /**效果评价 */
    rating?: EffectRatType;
    /**效果被添加时产生的消息 */
    apply_message?: (DescText)|[DescText,EffectRatType][];
    /**效果结束或移除时产生的消息 */
    remove_message?: (DescText)|[DescText,EffectRatType][];
    /**默认 false；如果为 true, 则当您检查另一个 NPC 或怪物时会显示该效果  
     * 如果为true玩家可以从怪物简介中查看到效果  
     */
    show_in_info?:boolean;
    /**效果被添加时产生的log */
    apply_memorial_log? : (DescText);
    /**效果被移除时产生的log */
    remove_memorial_log?: (DescText);
    /**可 抵抗 此效果的变异 */
    resist_traits?: MutationID;
    /**可 抵抗 此效果的效果 */
    resist_effects?: EffectID[];
    /**可免疫此效果的Flag */
    immune_flags?: FlagID[];
    /**可免疫此效果的身体部位  
     * 效果直接施加于这些身体部位时将会被免疫  
     */
    immune_bp_flags?: BodyPartID[];
    /**获得此效果时会移除这些效果  
     * 这里的任何值也会自动计入“blocks_effects”, 无需在那里重复它们。  
     */
    removes_effects?: EffectID[];
    /**获得此效果时以下效果将会被免疫 */
    blocks_effects?: EffectID[];
    /**效果的最大持续时间 默认365 d */
    max_duration?: (Time);
    /**在已有效果的情况下再次添加效果时  
     * 所增加时间的修正值  
     * duration = duration + (dur_add_perc/100) * max_duration  
     * 默认 100  
     */
    dur_add_perc?: number;
    /**在已有效果的情况下再次添加效果时  
     * 所增加的强度  
     * 默认 0  
     */
    int_add_val?: number;
    /**强度衰减量  
     * 每经过int_decay_tick 的时间后  
     * 效果强度将会调整此数值  
     * 默认-1  
     */
    int_decay_step?: number;
    /**强度衰减间隔  
     * 效果做出自然增减的间隔 秒  
     * 默认0 即不会改变  
     */
    int_decay_tick?: number;
    /**强度衰减移除  
     * 在强度衰减为0时移除效果  
     * 默认false */
    int_decay_remove?: boolean;
    /**时间强度系数  
     * 覆盖其他三个强度字段,   
     * 并强制强度为定义为 强度=持续时间/int_dur_factor 向上舍入的数字  
     * (因此从0到“int_dur_factor”是强度1)。  
     */
    int_dur_factor?: number;
    /**这允许或禁止在“效果”选项卡中给定效果的名称旁边显示强度值。  
     * 例如显示“弱点[142]”或简单的“弱点”文本。  
     * 默认true  
     */
    show_intensity?: boolean;
    /**豁免效果时产生的消息  
     * [消息,发送此消息的权重][]  
     * 按效果强度应用不同成员  
     */
    miss_messages?: [DescText,number][];
    /**效果产生自然调整时产生的消息  
     * [消息,效果评价][]  
     * 按效果强度应用不同成员  
     */
    decay_messages?: [DescText,EffectRatType][];
    /**这个效果是否只能应用于主肢体  
     * 默认false  
     */
    main_parts_only?: boolean;
    /**使玩家对止痛药的成瘾减少了给他们带来更多 pkill 效果的机会  
     * 默认false  
     */
    pkill_addict_reduces?: boolean;
    /**大型/巨大 体型提高疼痛效果触发的机会  
     * 默认false  
     */
    pain_sizing?   : boolean;
    /**大型/巨大 体型提高伤害效果触发的机会  
     * 默认false  
     */
    hurt_sizing?   : boolean;
    /**表示该效果引起的咳嗽会伤害玩家。  
     * 默认false  
     */
    harmful_cough? : boolean;
    /**维生素调节 */
    vitamins?:EffectVitaminsMod[];
    /**每回合有 [0]/[1] 的概率杀死玩家
     * 按效果强度应用不同成员  
     */
    chance_kill?: [number,number][];
    /**在玩家 抵抗 此效果时  
     * 每回合有 [0]/[1] 的概率杀死玩家
     * 按效果强度应用不同成员  
     */
    chance_kill_resist?: [number,number][];
    /**因此效果而死亡时产生的消息 */
    death_msg?: (DescText);
    /**因此效果而死亡时产生的事件 */
    death_event?: string;
    /**效果肢体能力修正 */
    limb_score_mods?:EffectLimbMod[];
    /**效果的基础调整 */
    base_mods?: EffectMod;
    /**效果的每个强度等级的额外调整 */
    scaling_mods?: EffectMod;
    /**此效果所应用的附魔列表 值可以是附魔 id 或附魔的内联定义  
     * 按效果强度应用不同成员  
     */
    enchantments?:ParamsEnchantment[];
    /**拥有此效果时进行血液分析可得出的说明 */
    blood_analysis_description?: (DescText);
};


/**效果维生素修正 */
export type EffectVitaminsMod ={
    /**维生素ID */
    vitamin: VitaminsID;
    /**每隔[0]~[1] tick 将会应用一次调整  
     * 按效果强度应用不同成员  
     */
    rate?: [ number, number ][];
    /**在玩家 抵抗 此效果时  
     * 每隔 [0]~[1] tick将会应用一次调整  
     * 按效果强度应用不同成员  
     */
    resist_rate?: [ number, number ][];
    /**吸收维生素时的调整值  
     * 维生素 = 维生素 + (将要获得的维生素*absorb_mult)  
     * 按效果强度应用不同成员  
     */
    absorb_mult?: number[];
    /**在玩家 抵抗 此效果时  
     * 吸收维生素时的调整值  
     * 维生素 = 维生素 + (将要获得的维生素*absorb_mult)  
     * 按效果强度应用不同成员  
     */
    resist_absorb_mult?: number[];
    /**rate的基础单位  
     * 按效果强度应用不同成员  
     */
    tick?: (Time)[];
    /**在玩家 抵抗 此效果时  
     * rate的基础单位  
     * 按效果强度应用不同成员  
     */
    resist_tick?: (Time)[];
};
/**效果肢体能力修正 */
export type EffectLimbMod ={
    /**目标能力 */
    limb_score: LimbScoreID,
    /**乘数调整值 默认1 */
    modifier?: number,
    /**在玩家 抵抗 此效果时  
     * 乘数调整值 默认1  
     */
    resist_modifier?: number,
    /**每个强度等级添加到 modifier的值 默认0 */
    scaling?: number;
    /**在玩家 抵抗 此效果时  
     * 每个强度等级添加到 modifier的值 默认0  
     */
    resist_scaling?: number;
}



/**
 * X_amount       - 当效果被放置时, X的应用量。像应用消息一样, 它只会在新效果上触发  
 * X_min          - 当滚动触发时, 应用的X的最小量 “X_max” - 当滚动触发时, 应用的X的最大量 (没有条目意味着它每次都会给出精确的X_min, 而不是rng(min, max))  
 * X_min_val      - 效果将推动你到的最小值, 0表示无上限！对于某些X不存在！  
 * X_max_val      - 效果将推动你到的最大值, 0表示无上限！对于某些X不存在！  
 * X_chance       - X每次触发的基本概率, 取决于 “X_chance_bot” 的确切公式  
 * X_chance_bot   - 如果这个不存在, 那么触发概率是 (1 in “X_chance”)。如果这个存在, 那么概率是 (“X_chance” in “X_chance_bot”)  
 * X_tick         - 每Y tick, 效果滚动以触发X  
 */

/**效果调整类型 列表  
 * chance_bot 如果不存在, 则触发机会为 1/X_chance
 * 如果确实存在, 那么机会是 X_chance/X_chance_bot
 */
export const EffectModTypeList = [
"str_mod"                 , // 正值提高统计数据, 负值降低统计数据
"dex_mod"                 , // 正值提高统计数据, 负值降低统计数据
"per_mod"                 , // 正值提高统计数据, 负值降低统计数据
"int_mod"                 , // 正值提高统计数据, 负值降低统计数据
"speed_mod"               , // 正值提高统计数据, 负值降低统计数据

"pain_amount"             , // 积极因素会引起疼痛, 消极因素不会产生任何影响。 不要把它设得太高。
"pain_min"                , // 最小程度的疼痛, 会给予/采取一定的效果
"pain_max"                , // 如果 0 或缺失值将恰好是“pain_min”
"pain_max_val"            , // 默认为 0, 表示无上限
"pain_chance"             , // 获得更多疼痛的机会
"pain_chance_bot"         , // 
"pain_tick"               , // 默认为每个刻度。

"hurt_amount"             , // 正面会造成伤害, 负面会治愈。 不要把它设得太高。
"hurt_min"                , // 最小伤害量, 会给予/承受某些效果
"hurt_max"                , // 如果 0 或缺失值将恰好是“hurt_min”
"hurt_chance"             , // 造成伤害的几率
"hurt_chance_bot"         , // 
"hurt_tick"               , // 默认为每个刻度

"sleep_amount"            , // 睡眠轮数。
"sleep_min"               , // 轮流最少的睡眠量, 可以给出一定的效果
"sleep_max"               , // 如果 0 或缺失值将恰好是“sleep_min”
"sleep_chance"            , // 入睡的机会
"sleep_chance_bot"        , // 
"sleep_tick"              , // 默认为每个刻度

"pkill_amount"            , // 止痛药效果的量。 不要太高调。
"pkill_min"               , // 最少量的止痛药, 一定效果
"pkill_max"               , // 如果 0 或缺失值将恰好是“pkill_min”
"pkill_max_val"           , // 默认为 0, 表示无上限
"pkill_chance"            , // 有机会产生止痛效果 (减轻疼痛)
"pkill_chance_bot"        , // 
"pkill_tick"              , // 默认为每个刻度

"stim_amount"             , // 负面因素导致抑制剂作用, 正面因素导致兴奋剂作用。
"stim_min"                , // 最小量的兴奋剂, 会产生一定的效果。
"stim_max"                , // 如果 0 或缺失值将恰好是“stim_min”
"stim_min_val"            , // 默认为 0, 这意味着无上限
"stim_max_val"            , // 默认为 0, 这意味着无上限
"stim_chance"             , // 有机会引起两种刺激效果之一
"stim_chance_bot"         , // 
"stim_tick"               , // 默认为每个刻度

"health_amount"           , // 负面因素会降低健康状况, 正面因素会增加健康状况。 它是半隐藏的统计数据, 会影响治疗效果。
"health_min"              , // 最小的生命值, 会给予/获取一定的效果。
"health_max"              , // 如果 0 或缺失值将恰好是“health_min”
"health_min_val"          , // 默认为 0, 这意味着无上限
"health_max_val"          , // 默认为 0, 表示无上限
"health_chance"           , // 改变健康状况的机会
"health_chance_bot"       , // 
"health_tick"             , // 默认为每个刻度

"h_mod_amount"            , // 影响健康统计增长, 积极增加它, 消极减少它
"h_mod_min"               , // 最小数量的 health_modifier, 会给予/采取某些效果
"h_mod_max"               , // 如果 0 或缺失值将恰好是“h_mod_min”
"h_mod_min_val"           , // 默认为 0, 表示无上限
"h_mod_max_val"           , // 默认为 0, 表示无上限
"h_mod_chance"            , // 更改 health_modifier 的机会
"h_mod_chance_bot"        , // 
"h_mod_tick"              , // 默认为每个刻度

"rad_amount"              , // 它可以发出/接受的辐射量。 请注意, 任何高于 [50] 的内容都是致命的。
"rad_min"                 , // 最小辐射量, 会给予/采取一定的效果
"rad_max"                 , // 如果 0 或缺失值将恰好是“rad_min”
"rad_max_val"             , // 默认为 0, 表示无上限
"rad_chance"              , // 有机会获得更多辐射
"rad_chance_bot"          , // 
"rad_tick"                , // 默认为每个刻度

"hunger_amount"           , // 它可以给予/承受的饥饿量。
"hunger_min"              , // 最小的饥饿量, 会给予/采取一定的效果
"hunger_max"              , // 如果 0 或缺失值将恰好是“hunger_min”
"hunger_min_val"          , // 默认为 0, 表示无上限
"hunger_max_val"          , // 默认为 0, 表示无上限
"hunger_chance"           , // 变得更加饥饿的机会
"hunger_chance_bot"       , // 
"hunger_tick"             , // 默认为每个刻度

"thirst_amount"           , // 它可以给予/承受的口渴量。
"thirst_min"              , // 最小程度的口渴, 会给予/采取一定的效果
"thirst_max"              , // 如果 0 或缺失值将恰好是“thirst_min”
"thirst_min_val"          , // 默认为 0, 表示无上限
"thirst_max_val"          , // 默认为 0, 表示无上限
"thirst_chance"           , // 变得更加口渴的机会
"thirst_chance_bot"       , // 
"thirst_tick"             , // 默认为每个刻度

"perspiration_amount"     , // 它可以提供/吸收的排汗量。
"perspiration_min"        , // 最小出汗量, 会产生一定的效果
"perspiration_max"        , // 如果为 0 或缺失值, 则恰好是“perspiration_min”
"perspiration_min_val"    , // 默认为 0, 表示无上限
"perspiration_max_val"    , // 默认为 0, 表示无上限
"perspiration_chance"     , // 出汗的机会
"perspiration_chance_bot" , // 
"perspiration_tick"       , // 默认为每个刻度

"fatigue_amount"          , // 它可以给予/承受的疲劳量。 经过一定时间后, 角色将需要睡觉。
"fatigue_min"             , // 最小程度的疲劳, 会给予/采取一定的效果
"fatigue_max"             , // 如果 0 或缺失值将恰好是“fatigue_min”
"fatigue_min_val"         , // 默认为 0, 表示无上限
"fatigue_max_val"         , // 默认为 0, 表示无上限
"fatigue_chance"          , // 有机会变得更累
"fatigue_chance_bot"      , // 
"fatigue_tick"            , // 默认为每个刻度

"stamina_amount"          , // 它可以给予/获取的耐力量。
"stamina_min"             , // 最小耐力, 会给予/采取某些效果
"stamina_max"             , // 如果 0 或缺失值将恰好是“stamina_min”
"stamina_min_val"         , // 默认为 0, 表示无上限
"stamina_max_val"         , // 默认为 0, 表示无上限
"stamina_chance"          , // 获得耐力变化的机会
"stamina_chance_bot"      , // 
"stamina_tick"            , // 默认为每个刻度

"cough_chance"            , // 引起咳嗽的几率
"cough_chance_bot"        , // 
"cough_tick"              , // 默认为每个刻度

// 重要的是不要在突变中 vomit_chance 与 vomit_multiplier 交互, 因此是硬编码的。 基本呕吐几率为强度/ (基本呕吐几率 + 缩放呕吐几率)。
"vomit_chance"            , // 引起呕吐的几率
"vomit_chance_bot"        , // 
"vomit_tick"              , // 默认为每个刻度

"healing_rate"            , // 每天的治愈率
"healing_head"            , // 头部治疗值的百分比
"healing_torso"           , // 躯干的治疗值百分比

"dodge_mod"               , // 有效闪避几率
"hit_mod"                 , // 有效的近战技能
"bash_mod"                , // 额外的 bash 奖励/惩罚
] as const;


/**效果调整类型  
 * "enchantments" 不为数字类型  
 */
export type EffectModType = typeof EffectModTypeList[number];

/**效果的调整值格式  
 * {字段: [加成,被抵抗时的加成]}  
 */
export type EffectMod = Partial<Record<EffectModType,number[]>>;