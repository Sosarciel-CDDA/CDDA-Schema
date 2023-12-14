import { FakeSpell } from "../Enchantment";
import { AnyItem, AnyItemID, ItemCategotyID } from "../Item";
import { MutationID } from "../Mutation";
import { NpcInstanceID } from "../NpcInstance";
import { SoundEffectID, SoundEffectVariantID } from "../SoundEffect";
import { EocID, InlineEoc, TalkerVar } from "./Eoc";
import { BoolObj, CondObj, IDObj, LocObj, NumObj, StrObj } from "./VariableObject";
import { EffectID } from "../Effect";
import { BodyPartParam, DescText, Time } from "../GenericDefine";
import { AssignMissionTarget, MissionDefinitionID } from "../MissionDefinition";
import { ItemGroupID } from "../ItemGroup";
import { ActivityTypeID } from "../ActivityType";
import { MaterialID } from "../Material";
import { FlagID } from "../Flag";
/**Eoc效果 */
export type EocEffect = EocEffectList[number];
/**Eoc效果表 */
export type EocEffectList = [
    MathAssignExp,
    RunEoc,
    QueueEoc,
    EocSelector,
    RunInvEocs,
    RunEocWith,
    RunEocUntil,
    WeightedListEocs,
    LoseTrait,
    AddTrait,
    ConsumeItem,
    RemoveItem,
    SpawnItem,
    SpawnNpc,
    SoundEffect,
    CastSpell,
    Teleport,
    LocalVar,
    Message,
    AddEffect,
    LoseEffect,
    SetHP,
    AddStrVar,
    SetString,
    AddTimeVar,
    AddRandStrVar,
    NoParamEffect,
    AssingMission,
    RemoveActionMission,
    FinishMission,
    SetCond,
    IfElse,
    SwitchCase,
    AssignActivity,
    SetFlag,
    UnsetFlag
];
/**无参效果 */
export type NoParamEffect = [
    "follow_only",
    "leave",
    "drop_weapon",
    NoParamTalkerEffect
][number];
/**双Talker无参效果表 */
export declare const NoParamTalkerEffectList: readonly ["prevent_death"];
/**双Talker无参效果 */
export type NoParamTalkerEffect = `${`u_` | `npc_`}${typeof NoParamTalkerEffectList[number]}`;
/**math赋值表达式 */
type MathAssignExp = {
    math: [string, "=" | "+=" | "-=" | "*=" | "/=", string];
};
/**运行Eoc */
type RunEoc = {
    /**运行Eoc */
    run_eocs: (ParamsEoc);
};
/**循环运行Eoc */
type RunEocUntil = {
    /**循环运行Eoc */
    run_eoc_until: (ParamsEoc);
    /**循环条件, 为真时循环 */
    condition: (CondObj);
    /**最大循环限制, 超过时停止并报错 默认100*/
    iteration?: (NumObj);
};
/**延迟队列eoc */
type QueueEoc = {
    /**运行Eoc 将会丢失beta talker*/
    queue_eocs: (ParamsEoc);
    /**延迟 */
    time_in_future: (Time);
};
/**运行Eoc 并提供参数 */
type RunEocWith = {
    run_eoc_with: (ParamsEoc);
    /**提供的上下文参数表 变量名:值 */
    variables?: Record<string, string | boolean | number>;
    /**将loc所在位置的单位作为beta talker */
    beta_loc?: (LocObj);
};
/**Eoc选项 */
type EocSelector = {
    /**根据选择运行提供的EocID */
    run_eoc_selector: IDObj<EocID>[];
    /**提供的上下文参数表 变量名:值 */
    variables?: Record<string, string | boolean | number>;
    /**每个选项的名称 */
    names?: (StrObj)[];
    /**每个选项的介绍 */
    descriptions?: (DescText)[];
    /**每个选项的键 */
    keys?: string[];
    /**整体选项的标题 */
    title?: (DescText);
    /**为true时对应Eoc的条件如果不满足 则直接隐藏
     * 默认false 显示无法选择
     */
    hide_failing?: boolean;
};
/**生成Npc */
type SpawnNpc = TalkerVar<{
    /**Npc实例ID */
    spawn_npc: NpcInstanceID;
    /**真实数量 */
    real_count?: number;
    /**最小半径 */
    min_radius?: number;
    /**最大半径 */
    max_radius?: number;
}, "spawn_npc">;
/**播放声音 */
type SoundEffect = {
    /**音效ID */
    id: IDObj<SoundEffectID>;
    /**变体ID */
    sound_effect?: IDObj<SoundEffectVariantID>;
    /**如果为true则如果玩家在 地下/地下室 时难以听到 */
    outdoor_event?: boolean;
    /**音量 */
    volume: (NumObj);
};
/**施法 */
type CastSpell = TalkerVar<{
    /**施法 */
    cast_spell: FakeSpell;
    /**默认为 false；如果为 true, 则允许您瞄准施放的法术,
     * 否则将其施放于随机位置, 就像RANDOM_TARGET使用了法术标志一样
     * RANDOM_TARGET法术需要此项目为true才能正常索敌
     */
    targeted?: boolean;
    /**成功施法后运行的eoc */
    true_eocs?: (ParamsEoc);
    /**施法失败后运行的eoc */
    false_eocs?: (ParamsEoc);
    /**施法目标位置 */
    loc?: (LocObj);
}, "cast_spell">;
/**传送 */
type Teleport = TalkerVar<{
    teleport: (LocObj);
    /**成功传送产生的消息 */
    success_message?: (StrObj);
    /**传送失败产生的消息 */
    fail_message?: (StrObj);
    /**强制传送 尽可能传送到目标位置 传送不会失败 */
    force?: boolean;
}, "teleport">;
/**搜索并获取坐标 存入location_variable*/
type LocalVar = TalkerVar<{
    location_variable: (LocObj);
    /**在发起者周围 的最小半径 默认 0 */
    min_radius?: (NumObj);
    /**在发起者周围 的最大半径 默认 0 */
    max_radius?: (NumObj);
    /**如果为 true, 则仅选择室外值 默认为 false */
    outdoor_only?: boolean;
    /**如果使用, 搜索将不是从u_或npc_位置执行,
     * 而是从 执行mission_target。
     * 它使用allocate_mission_target语法
     */
    target_params?: (AssignMissionTarget);
    /**将结果的x值增加 */
    x_adjust?: (NumObj);
    /**将结果的y值增加 */
    y_adjust?: (NumObj);
    /**将结果的z值增加 */
    z_adjust?: (NumObj);
    /**如果为 true, 则不将其累加到z级别,
     * 而是用绝对值覆盖它:"z_adjust": 3将"z_override": true的值z转为3
     * 默认为 false
     */
    z_override?: boolean;
    /**搜索的目标地形 空字符串为任意 */
    terrain?: (StrObj);
    /**搜索的目标家具 空字符串为任意 */
    furniture?: (StrObj);
    /**搜索的目标陷阱 空字符串为任意 */
    trap?: (StrObj);
    /**搜索的目标怪物 空字符串为任意 */
    monster?: (StrObj);
    /**搜索的目标区域 空字符串为任意 */
    zone?: (StrObj);
    /**搜索的目标NPC 空字符串为任意 */
    npc?: (StrObj);
    /**在搜索目标周围的最小半径 */
    target_min_radius?: (NumObj);
    /**在搜索目标周围的最大半径 */
    target_max_radius?: (NumObj);
}, "location_variable">;
/**发送消息 */
type Message = TalkerVar<{
    message: (DescText);
    /**默认中立；消息如何在日志中显示 (通常是指颜色) ；
     * 可以是良好 (绿色) 、中性 (白色) 、不良 (红色) 、
     * 混合 (紫色) 、警告 (黄色) 、信息 (蓝色) 、调试 (仅在调试模式打开时出现) 、
     * 爆头 (紫色) 、临界 (黄色) , 放牧 (蓝色)
     */
    type?: 'good' | 'neutral' | 'bad' | 'mixed' | 'warning' | 'info' | 'debug' | 'headshot' | 'critical' | 'grazing';
    /**如果为true 那么只会在用户没有聋时显示 */
    sound?: boolean;
    /**如果为true 且 sound为真 玩家在 地下/地下室 时难以听到 */
    outdoor_only?: boolean;
    /**如果为 true, 则效果会显示来自的随机片段u_message */
    snippet?: boolean;
    /**如果为 true, 并且snippet为 true, 它将连接讲话者和片段,
     * 并且如果该讲话者使用的话, 将始终提供相同的片段；要求片段设置 id
     */
    same_snippet?: boolean;
    /**如果为真, 该消息将生成一个弹出窗口u_message */
    popup?: boolean;
    /**如果为 true, 并且popup为 true, 则弹出窗口将中断任何发送消息的活动 */
    popup_w_interrupt_query?: boolean;
    /**默认为“中性”；distraction_type, 用于中断, 用于分心管理器
     * 完整列表存在 inactivity_type.cpp
     */
    interrupt_type?: boolean;
}, "message">;
/**添加效果 */
type AddEffect = TalkerVar<{
    add_effect: IDObj<EffectID>;
    /**添加的时间
     * 数字为秒
     */
    duration: (Time) | NumObj;
    /**默认为 whole body 全身 */
    target_part?: BodyPartParam;
    /**效果强度 默认 0
     * 负数强度不产生效果
     */
    intensity?: (NumObj);
    /**是否强制添加忽略豁免 默认 false */
    force?: boolean;
}, "add_effect">;
/**失去效果 */
type LoseEffect = TalkerVar<{
    lose_effect: IDObj<EffectID>;
}, "lose_effect">;
/**变量操作的注释用字段
 * { "u_add_var": "gunsmith_ammo_ammount", "type": "number", "context": "artisans", "value": "800" }
 * 等价于
 * {math: [ "u_number_artisans_gunsmith_ammo_amount", "=", "800" ]}
 * type_context_variable_name
 */
export type VarComment = {
    /**注释用字段 type */
    type?: string;
    /**注释用字段 context */
    context?: string;
};
/**添加文本变量 */
type AddStrVar = TalkerVar<{
    add_var: string;
    /**变量值 */
    value: string;
}, "add_var"> & VarComment;
/**赋值文本变量 */
type SetString = {
    /**文本值 */
    set_string_var: StrObj | StrObj[];
    /**赋值目标 */
    target_var: StrObj;
    /**格式化文本标签 */
    parse_tags?: boolean;
};
/**添加时间变量 */
type AddTimeVar = TalkerVar<{
    add_var: string;
    /**时间变量 将当前时间存于变量中 */
    time: true;
}, "add_var"> & VarComment;
/**添加随机文本变量 */
type AddRandStrVar = TalkerVar<{
    add_var: string;
    /**可能的变量值 */
    possible_values: string[];
}, "add_var"> & VarComment;
/**设置生命 */
type SetHP = TalkerVar<{
    set_hp: (NumObj);
    /**默认为 whole body 全身
     * 如果使用, HP调整将仅应用于该身体部位
     */
    target_part?: BodyPartParam;
    /**仅增加 默认false
     * 如果属实, HP只能增加
     */
    only_increase?: boolean;
    /**只影响主要肢体 默认 false */
    main_only?: boolean;
    /**只影响次要肢体 默认 false */
    minor_only?: boolean;
    /**忽略数值 设置为满值 默认 false */
    max?: boolean;
}, "set_hp">;
/**失去变异 */
type LoseTrait = TalkerVar<{
    lose_trait: IDObj<MutationID>;
}, "lose_trait">;
/**获得变异 */
type AddTrait = TalkerVar<{
    add_trait: IDObj<MutationID>;
}, "add_trait">;
/**生成物品 */
type SpawnItem = TalkerVar<{
    spawn_item: IDObj<AnyItemID> | IDObj<ItemGroupID>;
    /**数量 */
    count?: (NumObj);
    /**容器 */
    container?: IDObj<AnyItemID>;
    /**使用物品组 默认false*/
    use_item_group?: boolean;
    /**不显示消息 默认false*/
    suppress_message?: boolean;
}, "spawn_item">;
/**使用物品 */
type ConsumeItem = TalkerVar<{
    consume_item: IDObj<AnyItemID>;
    /**数量 */
    count?: (NumObj);
    /**充能数量 */
    charges?: (NumObj);
    /**为true时将显示消息给予npc物品 */
    popup?: boolean;
}, "consume_item">;
/**删除物品 */
type RemoveItem = TalkerVar<{
    /**删除物品 */
    remove_item_with: IDObj<AnyItemID>;
}, "remove_item_with">;
/**给玩家添加任务 */
type AssingMission = {
    /**给玩家添加目标ID任务 */
    assign_mission: IDObj<MissionDefinitionID>;
};
/**将从玩家的活动任务列表中删除任务而不失败。 */
type RemoveActionMission = {
    /**给玩家删除目标ID任务 */
    remove_active_mission: IDObj<MissionDefinitionID>;
};
/**使玩家完成任务 */
type FinishMission = {
    /**使玩家完成目标ID任务 */
    finish_mission: IDObj<MissionDefinitionID>;
    /**不为true则视为失败 */
    success?: boolean;
    /**完成相当于step值的任务步骤 */
    step?: number;
};
/**将条件Obj保存为变量 */
type SetCond = {
    /**将条件Obj保存为变量 */
    set_condition: (CondObj);
    /**将要保存的条件 */
    condition: (BoolObj);
};
/**条件控制 */
type IfElse = {
    /**对话条件（强制性） */
    if: BoolObj;
    /**满足条件时执行的效果（强制性） */
    then: EocEffect[];
    /**不满足条件时执行的效果（可选） */
    else?: EocEffect[];
};
/**开始活动 */
type AssignActivity = TalkerVar<{
    assign_activity: ActivityTypeID;
    /**活动的持续时间 */
    duration: (Time);
}, "assign_activity">;
/**在背包物品上运行EOC */
type RunInvEocs = TalkerVar<{
    /**物品的选择方式;
     * 可选值包括:
     * all          - 所有符合条件的物品都会被选中;
     * random       - 从所有符合条件的物品中随机选择一个;
     * manual       - 打开一个菜单, 列出所有可以选择的物品, 你可以从中选择一个;
     * manual_mult  - 与manual相同, 但可以选择多个物品
     */
    run_inv_eocs: "all" | "random" | "manual" | "manual_mult";
    /**设置目标物品的条件;
     * 缺少search_data意味着可以选择任何物品;
     * 条件可以是:
     * id           - 特定物品的id;
     * category     - 物品的类别 (区分大小写, 应始终使用小写);
     * flags        - 物品具有的标志
     * material     - 物品的材料;
     * worn_only    - 如果为true, 只返回穿着的物品;
     * wielded_only - 如果为true, 只返回手持的物品
     */
    search_data?: InvSearchData;
    /**如果使用了manual或manual_mult, 将显示的菜单的名称 */
    title?: (StrObj);
    /**如果物品被成功选中, 所有true_eocs都会运行, 否则所有false_eocs都会运行;
     * 选中的物品作为npc返回;
     * 例如, n_hp()返回物品的hp
     */
    true_eocs?: (ParamsEoc);
    /**如果未选择物品, 将运行的eoc */
    false_eocs?: (ParamsEoc);
}, "run_inv_eocs">;
/**背包筛选数据 */
type InvSearchData = {
    /**特定物品的id */
    id?: IDObj<AnyItemID>;
    /**物品的类别 (区分大小写, 应始终使用小写) */
    category?: (ItemCategotyID);
    /**物品具有的标志 */
    flags?: Exclude<AnyItem["flags"], undefined>[number][];
    /**物品的材料 */
    material?: (MaterialID);
    /**如果为true, 只返回穿着的物品 */
    worn_only?: boolean;
    /** 如果为true, 只返回手持的物品 */
    wielded_only?: boolean;
}[];
/**根据权重运行EOC */
type WeightedListEocs = {
    /**根据权重运行EOC */
    weighted_list_eocs: ((InlineEoc | EocID) | [(InlineEoc | EocID), NumObj])[];
};
/**添加flag */
type SetFlag = TalkerVar<{
    set_flag: IDObj<FlagID>;
}, "set_flag">;
/**移除flag */
type UnsetFlag = TalkerVar<{
    unset_flag: IDObj<FlagID>;
}, "unset_flag">;
/**switch控制 */
type SwitchCase = {
    /**switch控制 */
    switch: NumObj;
    /**cases合集 */
    cases: {
        /**case的值 */
        case: number;
        /**case值与switch传入NumObj相等时运行的效果 */
        effect: EocEffect | EocEffect[];
    }[];
};
/**参数Eoc */
export type ParamsEoc = (IDObj<EocID> | InlineEoc) | (IDObj<EocID> | InlineEoc)[];
export {};
