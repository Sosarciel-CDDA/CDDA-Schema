import { JArray, JObject } from "@zwa73/utils";
import { CddaID, DescText } from "./GenericDefine";
import { BoolObj, BoolOperateList, Eoc, EocEffect, NoParamCond } from "./Eoc";
import { SkillID } from "./Skill";
import { AnyItemID, ItemCategotyID } from "./Item";



/**TalkTopic ID格式 */
export type TalkTopicID = DefineTopic|CddaID<"TALKTC">;




/**对话选项 */
export type TalkTopic = {
    type: "talk_topic";
    /**此对话的id 或是在哪些对话上扩展选项 */
    id: TalkTopicID|TalkTopicID[];
    /**NPC说的话 独立对话必须有 */
    dynamic_line?: DynamicLine;
    /**生成多个回复 */
    repeat_responses?:{
        /**根据所有存在背包里的 对应ID物品 生成对话  
         * 选择的物品id将存于 topic_item 上下文变量中  
         */
        for_item?:AnyItemID[];
        /**根据所有存在背包里的 对应类型物品 生成对话  
         * 选择的物品id将存于 topic_item 上下文变量中  
         */
        for_category?:ItemCategotyID[];
        /**如果为true则检查npc背包 */
        is_npc?:boolean;
        /**是一个可选的布尔值, 如果为真  
         * 包含项目的 容器 将生成与项目本身不同的响应  
         */
        include_containers?:boolean;
        /**模板回复 利用 <topic_item> 来显示选中物品 */
        response:Resp;
    }
    /**玩家的可选回复 */
    responses: Resp[];
    /**是否覆盖同id的响应选项 默认false */
    replace_built_in_responses?: boolean;
    /**在输出 dynamic_line 之后 玩家回复之前的效果 */
    speaker_effect?:SpeakerEffect|SpeakerEffect[],
};


/**玩家的回复  
 * 等同于无条件技能鉴定成功  
 * 转到 success topic  
*/
export type Resp = (RespShot|RespLong)&RespBase;

/**回复的基本字段 */
type RespBase = {
    /**玩家的文本回复/选项显示文本
     * 目前, 您可以添加 & 作为对话中的第一个字符,   
     * 这会删除输出文本周围的引号, 表示显示文本的描述性性质,   
     * 使用 \" 转义双引号来指示实际对话的开始。  
      */
    text?: (DescText);
    /**对某个条件进行判断 并给出不同的文本  
     * 代替 text 字段  
     */
    truefalsetext?: {
        /**条件 */
        condition: BoolObj;
        /**条件为真时的text */
        true: (DescText);
        /**条件为假时的text */
        false: (DescText);
    };
    /**是一个选项回复 默认false  
     * 仅显示第一个带有"switch": true、和有效条件的响应  
     * 如果为真 则排序与此回复之后的 switch为真的 回复会被屏蔽  
     */
    switch?: boolean;
    /**是选项回复的默认回复 默认false  
     * 如果所有选项回复的条件都不被满足  
     * 则此回复会被显示  
     */
    default?: boolean;
    /**显示此回复的条件 */
    condition?: (BoolObj);
    /**回复的条件不满足时仍然显示选项 但采用此字段而非text  
     * 玩家的文本回复/选项显示文本
     */
    failure_explanation?: (DescText);
    /**回复的条件不满足时 选择此选项将跳转到的对话 */
    failure_topic?: TalkTopicID,
}

/**无需技能鉴定的快速写法 */
type RespShot={
    /**转移到哪个对话 */
    topic: TalkTopicID;
    /**产生的效果 */
    effect?: EocEffect;
}

/**玩家的回复 技能鉴定完整写法 */
type RespLong ={
    /**对社交技能进行技能鉴定 */
    trait: {
        /**基于哪种社交技能 */
        type: RespTraitType;
        /**如果 type 为 CONDITION 则使用条件代替鉴定难度 */
        condition?: (BoolObj);
        /**如果 type 为 SKILL_CHECK 则使用技能鉴定 */
        skill_required?: SkillID;
        /**难度 类型不为 NONE 或 CONDITION时需要设置难度*/
        difficulty?: number;
        /**根据npc的性格或态度进行成功率调整  
         * 结果越高成功率越高  
         */
        mod:[TraitMod,number][]
    };
    /**技能鉴定 成功的效果 */
    success: RespEffect;
    /**技能鉴定 失败的效果 */
    failure?: RespEffect;
};

/**玩家回复产生的效果 */
export type RespEffect = {
    /**转移到哪个对话 */
    topic: TalkTopicID;
    /**产生的效果 */
    effect?: EocEffect;
    /**态度调整 */
    opinion?: {
        /**信任 */
        trust?: number;
        /**恐惧 */
        fear?: number;
        /**重视 */
        value?: number;
        /**愤怒 */
        anger?: number;
        /**赊欠 */
        owed?: number;
        /**已售 */
        favors?: number;
    };
};
/**可用的社交技能 列表 */
export const RespTraitTypeList = [
    "NONE"        , // 无
    "LIE"         , // 说谎
    "PERSUADE"    , // 说服
    "INTIMIDATE"  , // 恐吓
    "CONDITION"   , // 条件
    "SKILL_CHECK" , // 技能
] as const;
/**可用的社交技能 */
export type RespTraitType = typeof RespTraitTypeList[number];

/**预定义的对话 列表 */
export const DefineTopicList = [
    "TALK_DONE"                , // 结束对话
    "TALK_NONE"                , // 进入之前谈到的话题。
    "TALK_FRIEND"              , // 与 追随者 NPC 交谈                            NPC含有字段 talk_friend 时显示
    "TALK_RADIO"               , // 使用双向无线电与 追随者 NPC 交谈            NPC含有字段 talk_radio 时显示
    "TALK_LEADER"              , // 与拥有 5  = NPCATT_LEAD 的 NPC 交谈            NPC含有字段 talk_leader 时显示
    "TALK_STOLE_ITEM"          , // 与拥有 18 = NPCATT_RECOVER_GOODS 的 NPC 交谈    NPC含有字段 talk_stole_item 时显示
    "TALK_WAKE_UP"             , // 与熟睡的 NPC 交谈        NPC含有字段 talk_wake_up 时显示
    "TALK_FRIEND_GUARD"        , // 派系营地守卫            NPC含有字段 talk_friend_guard 时显示
    "TALK_MUG"                 , // 参见“成功与失败”部分    NPC含有字段 talk_mug 时显示
    "TALK_STRANGER_AGGRESSIVE" , // 参见“成功与失败”部分    NPC含有字段 talk_stranger_aggressive 时显示
    "TALK_STRANGER_SCARED"     , // 参见“成功与失败”部分    NPC含有字段 talk_stranger_scared 时显示
    "TALK_STRANGER_WARY"       , // 参见“成功与失败”部分    NPC含有字段 talk_stranger_wary 时显示
    "TALK_STRANGER_FRIENDLY"   , // 参见“成功与失败”部分    NPC含有字段 talk_stranger_friendly 时显示
    "TALK_STRANGER_NEUTRAL"    , // 参见“成功与失败”部分    NPC含有字段 talk_stranger_neutral 时显示
] as const;
/**预定义的对话 */
export type DefineTopic = typeof DefineTopicList[number];


/**动态回复构造器  
 * 如果是数组 则为随机选择其中一条回复  
 * 以字符 & 开头的对话将会删除引号
 */
export type DynamicLine = DynmaicLineOpera[number][]|DynmaicLineOpera[number];

/**动态回复构造器操作符 */
export type DynmaicLineOpera = [
    DescText      ,
    NpcSexResp    , // 根据Npc性别产生不同对话
    AvatarSexResp , // 根据玩家性别产生不同对话
    Concatenate   , // 拼接回复
    EocCond       , //Eoc条件
]

/**根据Npc性别产生不同对话 */
type NpcSexResp = {
    /**如果npc是女性 */
    npc_female: DynamicLine;
    /**如果npc是男性 */
    npc_male: DynamicLine;
}
/**根据玩家性别产生不同对话 */
type AvatarSexResp = {
    /**如果npc是女性 */
    u_female: DynamicLine;
    /**如果npc是男性 */
    u_male: DynamicLine;
}
/**多条链接 */
type Concatenate = {concatenate:DynamicLine[]};



/**任意EocBool条件 */
type EocCond = TransEocCond&{
    /**条件为真时的选项 */
    yes:DynamicLine;
    /**条件为假时的选项 */
    no:DynamicLine;
}
/**将BoolObj转换为适用于TalkTopic的条件 */
type TransEocCond = Exclude<BoolObj,NoParamCond>|
    Partial<Record<NoParamCond,boolean>>;


/**说话者效果 */
export type SpeakerEffect = {
    /**唯一ID 确保只会运行一次 */
    sentinel?: string;
    /**条件 */
    condition?: BoolObj;
    /**效果 */
    effect: EocEffect[]|EocEffect;
}

/**技能鉴定时可用的调整类型 列表 */
export const TraitModList = [
    "ANGER"               , //愤怒
    "FEAR"                , //恐惧
    "TRUST"               , //信任
    "VALUE"               , //重视
    "AGGRESSION"          , //攻击性
    "ALTRUISM"            , //乐于助人
    "BRAVERY"             , //勇气
    "COLLECTOR"           , //收集癖
    "POS_FEAR"            , //恐惧 低于0时视为0
    "TOTAL"               , //所有调整值乘此倍率
] as const;
/**技能鉴定时可用的调整类型 */
export type TraitMod = typeof TraitModList[number];


/**
assign_guard    让NPC变成守卫。如果结盟并且在一个营地, 他们将被分配到该营地。
stop_guard    解除 NPC 的警卫职责 (另请参阅assign_guard)。友好的 NPC 将恢复跟随。
start_camp    NPC将与玩家建立派系阵营。
wake_up    唤醒熟睡但未服用镇静剂的 NPC。
reveal_stats    根据玩家评估 NPC 的技能来显示 NPC 的统计数据。
end_conversation    结束对话并让 NPC 从此不再理你。
insult_combat    结束对话并使 NPC 产生敌意, 添加一条消息, 表明角色开始与 NPC 打斗。
hostile    使 NPC 产生敌意并结束对话。
flee    让 NPC 逃离你的角色。
follow    让NPC追随你的角色, 加入“你的追随者”阵营。
leave    让NPC离开“你的追随者”阵营并停止追随你的角色。
follow_only    让 NPC 跟随你的角色而不改变派系。
stop_following    使 NPC 不再跟随你的角色而不改变派系。
npc_thankful    让 NPC 对你的角色产生积极的倾向。
drop_weapon    让 NPC 放下武器。
stranger_neutral    将 NPC 的态度改为中立。
start_mugging    NPC 会接近你的角色并从你的角色身上偷东西, 如果你的角色抵抗就会攻击。
lead_to_safety    NPC 将获得 LEAD 态度并赋予你的角色到达安全的使命。
start_training    NPC 会训练你的角色的技能或武术。注意: 当前代码要求您通过引导玩家"topic": "TALK_TRAIN"选择要训练的内容来启动训练。在“TALK_TRAIN”之外启动训练将给出错误。
start_training_npc    NPC将接受玩家的技能或武术训练。
start_training_seminar    打开一个对话框来选择哪些角色将参加该 NPC 主办的培训研讨会。
companion_mission: role_string    NPC 将根据 NPC 的角色为您的盟友 NPC 提供任务列表。
basecamp_mission    NPC 将为您的盟友 NPC 提供一份任务列表, 具体取决于当地的大本营。
bionic_install    NPC 使用非常高的技能从你的角色库存中将仿生装置安装到你的角色上, 并根据操作的难度向你收费。
bionic_remove    NPC 使用非常高的技能从你的角色中移除仿生生物, 并根据操作的难度向你收费。
npc_class_change: 字符串或变量对象    将 NPC 的类别更改为新值。
npc_faction_change: 字符串或变量对象    将 NPC 的派系成员更改为新值。
u_faction_rep: int 或变量对象    提高您在 NPC 当前派系中的声望, 如果值为负则降低声望。
toggle_npc_rule: 字符串或变量对象    切换布尔 NPC 追随者 AI 规则的值, 例如"use_silent"或"allow_bash"
set_npc_rule: 字符串或变量对象    设置布尔 NPC 追随者 AI 规则的值, 例如"use_silent"或"allow_bash"
clear_npc_rule: 字符串或变量对象    清除布尔 NPC 追随者 AI 规则的值, 例如"use_silent"或"allow_bash"
set_npc_engagement_rule: 字符串或变量对象    将 NPC 追随者 AI 规则的交战距离设置为 的值rule_string。
set_npc_aim_rule: 字符串或变量对象    将 NPC 追随者 AI 规则的瞄准速度设置为 的值rule_string。
npc_die    对话结束后NPC就会死亡。
u_set_goal, npc_set_goal:assign_mission_target_object, (可选 true_eocs: eocs_array), (可选 false_eocs: eocs_array)    NPC将步行至assign_mission_target_object。有关参数, 请参阅任务文档assign_mission_target。如果指定了目标, 则运行中的所有effect_on_conditions , 否则运行true_eocs中的所有effect_on_conditions 。false_eocs
u_set_guard_pos,npc_set_guard_pos: 变量对象,  (可选 unique_id: 布尔)    将 NPC 的守卫位置设置为 的内容_set_guard_pos。如果 NPC 具有该RETURN_TO_START_POS特征, 那么当他们空闲时, 他们会尝试移动到这个位置。如果unique_id (默认为 false)为 true, 则 NPCunique_id将作为前缀添加到变量名称中。例如, 带有unique_id=的守卫将检查以下 json 语句中的 GUARD1变量: GUARD1_First{ "u_set_guard_pos": { "global_val": "_First" }, "unique_id": true }
 */