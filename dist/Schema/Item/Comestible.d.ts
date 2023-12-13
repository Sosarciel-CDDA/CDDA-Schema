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
    addiction_type?: ["crack", {
        addiction: "cocaine";
        potential: number;
    }];
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
    contamination?: [{
        disease: "bad_food";
        probability: number;
    }];
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
export declare const ComestibleTypeList: readonly ["FOOD", "DRINK", "MED", "INVALID"];
/**消耗品类型*/
export type ComestibleType = typeof ComestibleTypeList[number];
/**消耗品Flag 列表*/
export declare const ComestibleFlagList: readonly ["ACID", "CARNIVORE_OK", "CANT_HEAL_EVERYONE", "CORROSIVE", "EATEN_COLD", "EATEN_HOT", "EDIBLE_FROZEN", "INEDIBLE", "FERTILIZER", "FREEZERBURN", "FUNGAL_VECTOR", "HIDDEN_HALLU", "HIDDEN_POISON", "MELTS", "MILLABLE", "MUTAGEN_CATALYST", "MUTAGEN_PRIMER", "MYCUS_OK", "NEGATIVE_MONOTONY_OK", "NO_AUTO_CONSUME", "NO_INGEST", "NUTRIENT_OVERRIDE", "PKILL_1", "PKILL_2", "PKILL_3", "PKILL_L", "RAD_STERILIZED", "RAD_STERILIZED_EDIBLE_FOREVER", "RAW", "SMOKABLE", "SMOKED", "USE_EAT_VERB", "USE_ON_NPC", "ZOOM"];
/**消耗品Flag */
export type ComestibleFlag = typeof ComestibleFlagList[number] | GenericFlag;
