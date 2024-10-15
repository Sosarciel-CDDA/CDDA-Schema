import { MutationID } from "../Mutation";
import { AnyItemID } from "../Item";
import { FlagID } from "../Flag";
import { EffectID } from "../Effect";
import { BodyPartID, DescText, Time } from "../GenericDefine";
import { TalkerVar } from "./Eoc";
import { WeaponCategoryID } from "../WeaponCategory";
import { VarComment } from "./EocEffect";
import { MissionDefinitionID } from "../MissionDefinition";
import { FieldID } from "../Field";
import { MonsterID } from "../Monster";
/**数字对象 */
export type NumObj = NumOperateList[number];
/**Eoc数字对象操作符 */
export type NumOperateList = [
    GenericObjOperateList[number],
    number,
    NumMathExp,
    Arithmetic
];
/**npc属性技能专用的数字对象 */
export type NpcNumObj = NpcNumOperateList[number];
/**npc属性技能专用的数字对象操作符 */
export type NpcNumOperateList = [
    NumOperaRng,
    NumOperaOneIn,
    NumOperaDice,
    NumOperaSum,
    NumOperaMul,
    {
        constant: number;
    }
];
export type NumOperaRng = {
    rng: [NpcNumObj, NpcNumObj];
};
export type NumOperaOneIn = {
    one_in: NpcNumObj;
};
export type NumOperaDice = {
    dice: [NpcNumObj, NpcNumObj];
};
export type NumOperaSum = {
    sum: NpcNumObj[];
};
export type NumOperaMul = {
    mul: NpcNumObj[];
};
/**Math数字表达式 */
export type NumMathExp = {
    math: [string];
};
/**算术表达式 */
export type Arithmetic = {
    arithmetic: (CalcOpera | NumObj)[];
};
/**计算运算符 */
type CalcOpera = "+" | "-" | "*" | "/";
/**比较运算符 */
type CompareOpera = "==" | "!=" | ">=" | "<=" | ">" | "<";
/**Eoc Bool 对象 */
export type BoolObj = BoolOperateList[number];
/**Eoc Bool 对象操作符 */
export type BoolOperateList = [
    BoolOperaNot,
    BoolOperaOr,
    BoolOperaAnd,
    BoolOperaCompStr,
    MathCompareExp,
    HasWieldFlag,
    HasWieldWeaponCategoty,
    HasItem,
    HasItems,
    HasTrait,
    HasEffect,
    HasFlag,
    OneInChance,
    NoParamCond,
    CompareTime,
    HasStrVar,
    HasTimeVar,
    ModIsLoad,
    HasMission,
    IsInField,
    GetCond,
    QueryTile,
    SurvivalNeed
];
/**无参条件 */
export type NoParamCond = [
    NoParamTalkerCond,
    "is_by_radio"
][number];
/**双Talker无参条件列表 */
export declare const NoParamTalkerCondList: readonly ["female", "male", "can_drop_weapon", "is_alive", "has_weapon", "is_avatar", "is_npc", "is_character", "is_monster", "is_item", "is_furnitur", "driving", "exists"];
/**双Talker无参条件 */
export type NoParamTalkerCond = `${`u_` | `npc_`}${typeof NoParamTalkerCondList[number]}`;
/**math比较表达式 */
type MathCompareExp = {
    math: [string, CompareOpera, string];
};
/**获取条件 */
type GetCond = {
    /**获取条件 */
    get_condition: (CondObj);
};
/**有某个效果 */
type HasEffect = TalkerVar<{
    /**有某个效果
     * 武术static_buffs可以通过形式来检查mabuff:buff_id
     */
    has_effect: IDObj<EffectID>;
    /**要求的效果强度 */
    intensity?: (NumObj);
    /**检查哪个肢体 */
    bodypart?: BodyPartID;
}, "has_effect">;
/**有某个Flag */
type HasFlag = TalkerVar<{
    /**有某个Flag */
    has_flag: IDObj<FlagID>;
}, "has_flag">;
/**有某个文本变量 */
type HasStrVar = TalkerVar<{
    /**有某个文本变量 */
    has_var: string;
    /**要求的内容 */
    value: (StrObj);
}, "has_var"> & VarComment;
/**有某个时间变量 */
type HasTimeVar = TalkerVar<{
    /**有某个时间变量 */
    has_var: string;
    /**表示是时间变量 */
    time: true;
}, "has_var"> & VarComment;
/**携带/穿戴/持握/背包里有某个物品 */
type HasItem = TalkerVar<{
    /**携带/穿戴/持握/背包里有某个物品 */
    has_item: IDObj<AnyItemID>;
}, "has_item">;
/**包里有N个某物品 */
type HasItems = TalkerVar<{
    /**包里有N个某物品 */
    has_items: {
        /**目标物品 */
        item: IDObj<AnyItemID>;
        /**要求数量 */
        count: (NumObj);
    };
}, "has_items">;
/**有某个变异 */
type HasTrait = TalkerVar<{
    /**有某个变异 */
    has_trait: IDObj<MutationID>;
}, "has_trait">;
/**手中的物品有某个flag */
type HasWieldFlag = TalkerVar<{
    /**手中的物品有某个flag */
    has_wielded_with_flag: IDObj<FlagID>;
}, "has_wielded_with_flag">;
/**手中的物品有某个武器分类 */
type HasWieldWeaponCategoty = TalkerVar<{
    /**手中的物品有某个武器分类 */
    has_wielded_with_weapon_category: IDObj<WeaponCategoryID>;
}, "has_wielded_with_weapon_category">;
/**站在某个地块附着物上 */
type IsInField = TalkerVar<{
    /**手中的物品有某个武器分类 */
    is_in_field: IDObj<FieldID>;
}, "is_in_field">;
/**1/n的概率返回true */
type OneInChance = {
    /**1/n的概率返回true */
    one_in_chance: (NumObj);
};
/**某个mod是否加载 */
type ModIsLoad = {
    /**目标mod的ID */
    mod_is_loaded: string;
};
/**有某个任务 */
type HasMission = TalkerVar<{
    /**有某个任务 */
    has_mission: IDObj<MissionDefinitionID>;
}, "has_mission">;
/**获取 时间变量自创建以来经过的时间 并比较 */
type CompareTime = TalkerVar<{
    compare_time_since_var: string;
    /**变量的 type 注释 */
    type?: string;
    /**变量的 context 注释 */
    context?: string;
    /**操作符 */
    op: CompareOpera;
    /**比较的时间 */
    time: (Time);
}, "compare_time_since_var">;
/**选择地块的模式 列表 */
declare const QueryTileTypeList: readonly ["anywhere", "line_of_sight", "around"];
/**选择地块的模式 列表 */
type QueryTileType = typeof QueryTileTypeList[number];
/**选择地块 */
type QueryTile = TalkerVar<{
    /**选择地块 */
    query_tile: QueryTileType;
    /**包含所选瓷砖坐标的变量对象（强制性） */
    target_var: (LocObj);
    /**定义line_of_sight的可选范围（对于line_of_sight是强制性的, 否则不需要） */
    range?: (NumObj);
    /**定义是否允许为anywhere选择其他z-level */
    z_level?: (NumObj);
    /**选择时显示的消息 */
    message?: (DescText);
}, "query_tile">;
/**生存需求 */
export type SurvivalNeed = TalkerVar<{
    need: "thirst" | "hunger" | "fatigue";
    amount?: number;
    level?: "TIRED";
}, "need">;
/**非操作 */
export type BoolOperaNot = {
    /**非操作 */
    not: (BoolObj);
};
/**或操作 */
export type BoolOperaOr = {
    /**或操作 */
    or: (BoolObj)[];
};
/**与操作 */
export type BoolOperaAnd = {
    /**与操作 */
    and: (BoolObj)[];
};
/**比较字符串是否相等 */
export type BoolOperaCompStr = {
    /**比较字符串是否相等 可以用'yes'进行空值判断 */
    compare_string: [AnyObj, AnyObj];
};
/**专用于某种ID的字符串对象  */
export type IDObj<T extends string> = Exclude<StrObj, string> | T;
/**Eoc字符串对象 */
export type StrObj = StrOperateList[number];
/**Eoc字符串对象操作符 */
export type StrOperateList = [
    GenericObj,
    string,
    LocObj,
    MutatorsMonFaction,
    MutatorsGameOption,
    MutatorsMaTechName,
    MutatorsMaTechDesc,
    MutatorsVaildTech,
    MutatorsLocRelative,
    MutatorsTopicItem
];
/**怪物阵营mutator */
export type MutatorsMonFaction = {
    /** 返回具有mtype_id的怪物的派系 */
    mutator: "mon_faction";
    /** 怪物的id */
    mtype_id: IDObj<MonsterID>;
};
/**游戏设置mutator */
export type MutatorsGameOption = {
    /** 返回选项的值作为字符串，对于数值选项，你应该使用数学函数 */
    mutator: "game_option";
    /** 选项 */
    option: string;
};
/**武术名称mutator */
export type MutatorsMaTechName = {
    /** 返回具有ID matec_id的武术技术的名称 */
    mutator: "ma_technique_name";
    /** 武术ID */
    matec_id: string;
};
/**武术简介mutator */
export type MutatorsMaTechDesc = {
    /** 返回具有ID matec_id的武术技术的描述 */
    mutator: "ma_technique_description";
    /** 武术ID */
    matec_id: string;
};
/**随机武术mutator */
export type MutatorsVaildTech = {
    /** 返回alpha talker可以根据提供的规格对beta talker使用的随机有效技术 */
    mutator: "valid_technique";
    blacklist: StrObj[];
    crit: boolean;
    dodge_counter: boolean;
    block_counter: boolean;
};
/**相对坐标mutator */
export type MutatorsLocRelative = {
    /** target应该是一个字符串，如"(x,y,z)"，其中x,y,z是相对于玩家的坐标。返回提供的点相对于玩家的abs_ms坐标作为字符串（准备存储为位置变量），形式为"(x,y,z)"。所以"target":"(0,1,0)"将返回玩家南边的点 */
    mutator: "loc_relative_u";
    /** 目标位置 */
    target: `(${number},${number},${number})` | Exclude<StrObj, string>;
};
/**选项物品mutator */
export type MutatorsTopicItem = {
    /** 返回当前topic_item作为字符串 */
    mutator: "topic_item";
};
/**任何Obj */
export type AnyObj = AnyObjOperateList[number];
/**任何Obj操作符 */
export type AnyObjOperateList = [
    BoolObj,
    StrObj,
    NumObj
];
/**通用Obj操作符 */
export type GenericObjOperateList = [
    {
        global_val: string;
    },
    {
        u_val: string;
    },
    {
        npc_val: string;
    },
    {
        context_val: string;
    },
    {
        var_val: string;
    }
];
/**通用Obj操作符 */
export type GenericObj = GenericObjOperateList[number];
/**位置Obj */
export type LocObj = GenericObj;
/**条件Obj */
export type CondObj = GenericObj | string;
export {};
