import { ParamsEoc } from "../Eoc";
import { CddaID, CopyfromVar, Time, Weight } from "../GenericDefine";
import { MaterialID } from "../Material";
import { VitaminsID } from "../Vitamins";
import { AnyItemID, GenericBase, GenericFlag } from "./Generic";

/**Comestible ID格式   */
export type ComestibleID = CddaID<"COME">;

/**Comestible 消耗品 */
export type Comestible = CopyfromVar<{
    id: ComestibleID;
    /**定义为COMESTIBLE */
    type: "COMESTIBLE";
    /**一个时间持续期: 食品保质期。0 = 不会变质 */
    spoils_in?: (Time);
    /**刺激效果 */
    stim?: number;
    /**这种食品可以消除多少疲劳。 (负值增加疲劳)  */
    fatigue_mod?: number;
    /**食品类型, 用于库存排序。'FOOD', 'DRINK', 'MED'或'INVALID'之一 (如果使用INVALID, 考虑使用与COMESTIBLE不同的“type”)  */
    comestible_type?: ComestibleType;
    /**消费后运行的条件影响。支持内联或字符串id */
    consumption_effect_on_conditions?: (ParamsEoc);
    /**解渴程度 */
    quench?: number;
    /**健康效果 (用于生病的机会)  */
    healthy?: number;
    /**此物品引起成瘾的默认强度 */
    addiction_potential?: number;
    /**成瘾类型 (如果没有给出潜力, 将使用"addiction_potential"字段来确定该成瘾的强度)  */
    addiction_type?: ["crack", { addiction: "cocaine"; potential: number }];
    /** (可选, 默认: 2) 在过去的48小时内, 每消费一个, 乐趣就减少这个数值。除非食品也有"NEGATIVE_MONOTONY_OK"标志, 否则不能将乐趣降低到0以下。 */
    monotony_penalty?: number;
    /**满足的饥饿感 (以千卡计)  */
    calories?: number;
    /**满足的饥饿感 (已过时)  */
    nutrition?: number;
    /**需要吃/喝的工具 */
    tool?: AnyItemID;
    /**生成时的使用次数 */
    charges?: number;
    /** (可选) 在上述定义的体积中有多少使用次数。如果省略, 与'charges'相同 */
    stack_size?: number;
    /**使用时的士气效果 */
    fun?: number;
    /** (可选) 物品冻结的温度, 以摄氏度为单位, 默认为水 (32F/0C)  */
    freezing_point?: number;
    /** (可选) 如果该物品在配方中被使用, 将其替换为cooks_like */
    cooks_like?: "meat_cooked";
    /** (可选) 吃东西时变成寄生虫的概率 */
    parasites?: number;
    /** (可选) 此食品携带的疾病列表及其相关概率。值必须在[0, 100]范围内。 */
    contamination?: [{ disease: "bad_food"; probability: number }];
    /**通过消费此物品的一次 (部分) 提供的维生素。某些维生素 ("calcium", "iron", "vitC") 可以用该食品中维生素的重量来指定。按重量指定的维生素可以是克 ("g") , 毫克 ("mg") 或微克 ("μg", "ug", "mcg") 。如果维生素未按重量指定, 则按"单位"指定, 含义根据维生素定义而定。营养维生素 ("calcium", "iron", "vitC") 是理想每日价值平均的整数百分比。维生素数组键包括以下内容: calcium, iron, vitC, mutant_toxin, bad_food, blood和redcells。 */
    vitamins?: [VitaminsID, Weight][];
    /**此食品由所有材料 (ID) 制成 */
    material?: {
        /**材料 */
        type: MaterialID;
        /**组成占比 */
        portion: number;
    }[];
    /**主要材料ID是什么。材料决定了比热。 */
    primary_material?: MaterialID;
    /**食品变质时产生的怪物组 (用于孵化蛋)  */
    rot_spawn: string;
    /**食品腐烂时怪物组生成的百分比机会。最大100。 */
    rot_spawn_chance?: number;
    /**在烟熏器中烘干此食品后得到的食品 */
    smoking_result?: ComestibleID;
    /** (可选) 此物品所在的宠物食品类别 */
    petfood?: string[];
    /**消耗品的flag */
    flags?: ComestibleFlag[];
} & GenericBase>;

/**消耗品类型 列表*/
export const  ComestibleTypeList = [
    'FOOD'      ,
    'DRINK'     ,
    'MED'       ,
    'INVALID'   ,
] as const;
/**消耗品类型*/
export type ComestibleType = typeof ComestibleTypeList[number];

/**消耗品Flag 列表*/
export const ComestibleFlagList = [
    "ACID"                  , // 使用 BLECH 功能消耗时, 如果角色具有 ACIDPROOF 或 ACIDBLOOD 特性, 惩罚会减少。
    "CARNIVORE_OK"          , // 可以被具有 Carnivore 突变的角色食用。
    "CANT_HEAL_EVERYONE"    , // 这种药不能被所有人使用, 它需要一个特殊的突变。参见 mutation 中的 can_heal_with。
    "CORROSIVE"             , // 使用 BLECH 功能消耗时, 会产生与 ACID 相同的惩罚, 但不受 ACIDPROOF 或 ACIDBLOOD 特性的影响。
    "EATEN_COLD"            , // 冷食时的士气奖励。
    "EATEN_HOT"             , // 热食时的士气奖励。
    "EDIBLE_FROZEN"         , // 冷冻不会阻止食用。没有士气奖励。
    "INEDIBLE"              , // 默认不可食用, 当与 (mutation threshold) 标志一起使用时启用食用: BIRD, CATTLE, FELINE, LUPINE, MOUSE, RABBIT, RAT。
    "FERTILIZER"            , // 作为农业肥料, 或者如果这个被 PLANTBLECH 功能消耗, 植物的惩罚会被逆转。
    "FREEZERBURN"           , // 第一次解冻是 MUSHY, 第二次是腐烂。
    "FUNGAL_VECTOR"         , // 消耗时会给出真菌感染。
    "HIDDEN_HALLU"          , // 食物会引起幻觉, 只有在一定的生存技能等级下才可见。
    "HIDDEN_POISON"         , // 食物在一定的生存技能等级下显示为有毒。注意, 这本身并不会使物品变得有毒, 考虑添加 "use_action": [ "POISON" ], 或者使用 FORAGE_POISON 替代。
    "MELTS"                 , // 除非冷冻, 否则提供一半的乐趣。冷冻时可食用。
    "MILLABLE"              , // 可以放入磨坊, 磨成面粉。
    "MUTAGEN_CATALYST"      , // 注射它会启动突变。
    "MUTAGEN_PRIMER"        , // 注射它会为你的身体准备突变。
    "MYCUS_OK"              , // 可以被突破阈值的 Mycus 角色食用。默认只适用于 Mycus 果实。
    "NEGATIVE_MONOTONY_OK"  , // 允许 negative_monotony 属性将食物乐趣降低到负值。
    "NO_AUTO_CONSUME"       , // 具有此标志的消耗品不会在自动食用/自动饮用区域被消耗。
    "NO_INGEST"             , // 通过口服以外的方式给药。
    "NUTRIENT_OVERRIDE"     , // 当你制作一个物品时, 游戏会检查它是否是食物, 如果是, 它会存储物品是由哪些组件创建的。"NUTRIENT_OVERRIDE" 标志将跳过这一步。
    "PKILL_1"               , // 轻度止痛药。
    "PKILL_2"               , // 中度止痛药。
    "PKILL_3"               , // 强效止痛药。
    "PKILL_L"               , // 缓释止痛药。
    "RAD_STERILIZED"        , // 辐射食物是安全的, 但不是永久可食用的 (如 MREs) 。
    "RAD_STERILIZED_EDIBLE_FOREVER", // 辐射食物是安全的, 并且永远可食用。
    "RAW"                   , // 减少 25% 的 kcal, 直到烹饪 (即, 用于需要热源的食谱) 。应该添加到所有未烹饪的食物中, 除非那种食物的卡路里超过 50% 来自糖 (即, 许多水果, 一些蔬菜) 或脂肪 (即, 屠宰的脂肪, 椰子) 。TODO: 在添加脂肪/蛋白质/碳水化合物后, 为这些标准制作单元测试。
    "SMOKABLE"              , // 被烟架接受。
    "SMOKED"                , // 不被烟架接受 (烟熏的产品) 。
    "USE_EAT_VERB"          , // "你喝了你的 %s。" 或 "你吃了你的 %s。"
    "USE_ON_NPC"            , // 可以用在 NPC 上 (不一定由他们使用) 。
    "ZOOM"                  , // 缩放物品可以增加你的地图视野范围。
] as const;

/**消耗品Flag */
export type ComestibleFlag = typeof ComestibleFlagList[number]|GenericFlag;

