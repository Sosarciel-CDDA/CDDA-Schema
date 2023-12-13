import { MutationID } from "../Mutation";
import { AnyItemID } from "../Item";
import { Flag, FlagID } from "../Flag";
import { EffectID } from "../Effect";
import { BodyPartID, DescText, Time } from "../GenericDefine";
import { TalkerVar } from "./Eoc";
import { WeaponCategoryID } from "../WeaponCategory";
import { VarComment } from "./EocEffect";
import { MissionDefinitionID } from "../MissionDefinition";
import { FieldID } from "../Field";





/**数字对象 */
export type NumObj = NumOperateList[number];
/**Eoc数字对象操作符 */
export type NumOperateList = [
    GenericObjOperateList[number]       ,//
    number                              ,//
    NumMathExp                          ,//
    Arithmetic                          ,//
]

/**npc属性技能专用的数字对象 */
export type NpcNumObj = NpcNumOperateList[number];
/**npc属性技能专用的数字对象操作符 */
export type NpcNumOperateList = [
    NumOperaRng                         ,// >=[0] ~ <=[1] 之间的随机数
    NumOperaOneIn                       ,//表示在 [0] 次尝试中出现 1 次的随机确定机会为 1, 否则为 0。
    NumOperaDice                        ,//表示通过将 [0] 个随机确定的数字与 1 到 [1] 之间的值相加而生成的随机确定的数字
    NumOperaSum                         ,//所有数字加
    NumOperaMul                         ,//所有数字乘
    {constant: number}                  ,//常量
];

export type NumOperaRng     = {rng: [ NpcNumObj, NpcNumObj ] };
export type NumOperaOneIn   = {one_in: NpcNumObj };
export type NumOperaDice    = {dice: [ NpcNumObj, NpcNumObj ] };
export type NumOperaSum     = {sum: NpcNumObj[] };
export type NumOperaMul     = {mul: NpcNumObj[] };
/**Math数字表达式 */
export type NumMathExp = {math:[string]};
/**算术表达式 */
export type Arithmetic = {arithmetic:(CalcOpera|NumObj)[]}

/**计算运算符 */
type CalcOpera = "+"|"-"|"*"|"/";

/**比较运算符 */
type CompareOpera = "=="|"!="|">="|"<="|">"|"<";

/**Eoc Bool 对象 */
export type BoolObj = BoolOperateList[number];
/**Eoc Bool 对象操作符 */
export type BoolOperateList = [
    BoolOperaNot            ,//非
    BoolOperaOr             ,//或
    BoolOperaAnd            ,//与
    BoolOperaCompStr        ,//比较两个字符串
    MathCompareExp          ,//
    HasWieldFlag            ,//手中的物品有某个flag
    HasWieldWeaponCategoty  ,//手中的物品有某个武器分类
    HasItem                 ,//携带/穿戴/持握/背包里有某个物品
    HasItems                ,//携带/穿戴/持握/背包里有N个某物品
    HasTrait                ,//有某个变异
    HasEffect               ,//有某个效果
    HasFlag                 ,//有某个Flag
    OneInChance             ,//1/n的概率返回true
    NoParamCond             ,//无参条件
    CompareTime             ,//比较时间变量
    HasStrVar               ,//有某个变量
    HasTimeVar              ,//有某个变量
    ModIsLoad               ,//某个mod是否加载
    HasMission              ,//有某个任务
    IsInField               ,//在某个地块附着物上
    GetCond                 ,//获取条件
    QueryTile               ,//选择地块
];
/**无参条件 */
export type NoParamCond = [
    NoParamTalkerCond,
][number];
/**双Talker无参条件列表 */
export const NoParamTalkerCondList = [
    "female"              ,//是女性
    "male"                ,//是男性
    "can_drop_weapon"     ,//可以丢弃手中的物品
    "is_alive"            ,//还活着
    "has_weapon"          ,//挥舞着任意物品
] as const;
/**双Talker无参条件 */
export type NoParamTalkerCond = `${`u_`|`npc_`}${typeof NoParamTalkerCondList[number]}`

/**math比较表达式 */
type MathCompareExp = {
    math:[string,CompareOpera,string]
};

/**获取条件 */
type GetCond = {
    /**获取条件 */
    get_condition: (CondObj);
}

/**有某个效果 */
type HasEffect = TalkerVar<{
    /**有某个效果  
     * 武术static_buffs可以通过形式来检查mabuff:buff_id  
     */
    has_effect:IDObj<EffectID>;
    /**要求的效果强度 */
    intensity?: (NumObj);
    /**检查哪个肢体 */
    bodypart?: BodyPartID;
},"has_effect">;

/**有某个Flag */
type HasFlag = TalkerVar<{
    /**有某个Flag */
    has_flag:IDObj<FlagID>;
},"has_flag">;

/**有某个文本变量 */
type HasStrVar = TalkerVar<{
    /**有某个文本变量 */
    has_var:string;
    /**要求的内容 */
    value: (StrObj);
},"has_var">&VarComment;
/**有某个时间变量 */
type HasTimeVar = TalkerVar<{
    /**有某个时间变量 */
    has_var:string;
    /**表示是时间变量 */
    time:true;
},"has_var">&VarComment;

/**携带/穿戴/持握/背包里有某个物品 */
type HasItem  = TalkerVar<{
    /**携带/穿戴/持握/背包里有某个物品 */
    has_item:IDObj<AnyItemID>;
},"has_item">;

/**包里有N个某物品 */
type HasItems = TalkerVar<{
    /**包里有N个某物品 */
    has_items:{
        /**目标物品 */
        item: IDObj<AnyItemID>;
        /**要求数量 */
        count: (NumObj);
    };
},"has_items">;

/**有某个变异 */
type HasTrait = TalkerVar<{
    /**有某个变异 */
    has_trait:IDObj<MutationID>;
},"has_trait">;

/**手中的物品有某个flag */
type HasWieldFlag = TalkerVar<{
    /**手中的物品有某个flag */
    has_wielded_with_flag:IDObj<FlagID>;
},"has_wielded_with_flag">;

/**手中的物品有某个武器分类 */
type HasWieldWeaponCategoty = TalkerVar<{
    /**手中的物品有某个武器分类 */
    has_wielded_with_weapon_category:IDObj<WeaponCategoryID>;
},"has_wielded_with_weapon_category">;

/**站在某个地块附着物上 */
type IsInField = TalkerVar<{
    /**手中的物品有某个武器分类 */
    is_in_field:IDObj<FieldID>;
},"is_in_field">;

/**1/n的概率返回true */
type OneInChance = {
    /**1/n的概率返回true */
    one_in_chance: (NumObj);
}

/**某个mod是否加载 */
type ModIsLoad = {
    /**目标mod的ID */
    mod_is_loaded: string;
}

/**有某个任务 */
type HasMission = TalkerVar<{
    /**有某个任务 */
    has_mission: IDObj<MissionDefinitionID>;
},"has_mission">;

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
},"compare_time_since_var">;

/**选择地块的模式 列表 */
const QueryTileTypeList = [
    "anywhere"      , //与"look around" UI相同
    "line_of_sight" , //此刻可见的唯一瓷砖（范围是强制性的）
    "around"        , //与点燃火源相同, 你只能选择紧邻的9个瓷砖
] as const;
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
},"query_tile">


/**非操作 */
export type BoolOperaNot = {
    /**非操作 */
    not: (BoolObj);
};
/**或操作 */
export type BoolOperaOr = {
    /**或操作 */
    or: (BoolObj)[]
};
/**与操作 */
export type BoolOperaAnd = {
    /**与操作 */
    and: (BoolObj)[]
};
/**比较字符串是否相等 */
export type BoolOperaCompStr = {
    /**比较字符串是否相等 */
    compare_string: [AnyObj,AnyObj]
};




/**专用于某种ID的字符串对象  */
export type IDObj<T extends string> = Exclude<StrObj,string>|T;
/**Eoc字符串对象 */
export type StrObj = StrOperateList[number];
/**Eoc字符串对象操作符 */
export type StrOperateList = [
    GenericObj, //
    string    , 
    LocObj    , //
]

/**任何Obj */
export type AnyObj = AnyObjOperateList[number];
/**任何Obj操作符 */
export type AnyObjOperateList = [
    BoolObj, //
    StrObj , //
    NumObj , //
]

/**通用Obj操作符 */
export type GenericObjOperateList = [
    { global_val : string } , //全局变量
    { u_val      : string } , //alpha talker的变量
    { npc_val    : string } , //beta talker的变量
    { context_val: string } , //上下文变量 存于对话中的变量
    { var_val    : string } , //获得某个上下文变量的值 然后以值作为 全局/角色变量名 获得全局/角色值
];
/**通用Obj操作符 */
export type GenericObj = GenericObjOperateList[number];

/**位置Obj */
export type LocObj = GenericObj;


/**条件Obj */
export type CondObj = GenericObj;