import { BodyPartID, Time, CddaID, DescText } from "./GenericDefine";
import { SpellID } from "./Spell";
import { EmitID } from "./Emit";
import { MutationID } from "./Mutation";
import { EffectID } from "./Effect";
import { BoolObj, NumObj } from "./Eoc";
/**附魔ID */
export type EnchantmentID = CddaID<"ENCH">;
/**附魔 */
export type Enchantment = {
    type: "enchantment";
    /**附魔的说明 */
    description?: (DescText);
    /**附魔的名称 */
    name?: (DescText);
    /**附魔唯一ID */
    id: EnchantmentID;
    /**物品在什么位置时启用 */
    has?: EnchConHas;
    /**启用条件 */
    condition: EnchCon;
    /**抚摸拥有者近战击中敌人时触发的法术
     * 该法术以该生物的位置为中心, 除非"hit_self": true
     * 那么它以你的位置为中心。
     */
    hit_you_effect?: FakeSpell[];
    /**附魔拥有者击中时触发的法术
     * 该咒语以您的位置为中心。
     */
    hit_me_effect?: FakeSpell[];
    /**附魔的数值增幅 */
    values?: EnchModVal[];
    /**生成Emit */
    emitter?: EmitID;
    /**添加肢体 */
    modified_bodyparts?: ({
        /**获得肢体 */
        gain: BodyPartID;
    } | {
        /**失去肢体 */
        lose: BodyPartID;
    })[];
    /**添加变异 */
    mutations?: MutationID[];
    /**添加效果 */
    ench_effects?: {
        /**效果ID */
        effect: EffectID;
        /**效果强度 */
        intensity: number;
    }[];
    /**定时触发的效果 */
    intermittent_activation?: {
        /**定时触发的效果 */
        effects: {
            /**触发间隔 */
            frequency: (Time);
            /**伪法术数据 */
            spell_effects: FakeSpell[];
        }[];
    };
};
/**内联匿名附魔 */
export type InlineEnchantment = Omit<Enchantment, "type" | "id">;
/**作为参数传入的附魔 */
export type ParamsEnchantment = InlineEnchantment | EnchantmentID;
/**装备附魔启用条件 */
export type EnchConHas = (
/**拿在手上时 */
"WIELD" | 
/**持有/背包里有/穿戴着此物品时 */
"HELD" | 
/**穿戴着此物品时 */
"WORN");
/**附魔启用条件 */
export type EnchCon = (
/**总是启用 */
"ALWAYS" | 
/**物品激活时 */
"ACTIVE" | 
/**物品未激活时 */
"INACTIVE" | 
/**EOC对话条件 */
BoolObj);
/**附魔数值增幅 */
export type EnchModVal = {
    /**附魔增幅类型 */
    value: EnchValType;
    /**倍率增幅 1为+100% */
    multiply?: (NumObj);
    /**加值增幅 在计算倍率前先添加 */
    add?: (NumObj);
};
/**伪法术附加信息 */
export type FakeSpell = {
    /**法术ID */
    id: SpellID;
    /**击中附魔拥有者而非命中目标
     * 法术效果将会影响自身 默认false
     */
    hit_self?: boolean;
    /** 1/n 的几率触发 */
    once_in?: (NumObj);
    /**释放时的消息 */
    message?: (DescText);
    /**npc释放时的消息 */
    npc_message?: (DescText);
    /**最小法术等级 */
    min_level?: (NumObj);
    /**最大法术等级 */
    max_level?: (NumObj);
};
/**附魔通用加值类型 列表 */
export declare const EnchGenericValTypeList: readonly ["ARMOR_ACID", "ARMOR_BASH", "ARMOR_BIO", "ARMOR_BULLET", "ARMOR_COLD", "ARMOR_CUT", "ARMOR_ELEC", "ARMOR_HEAT", "ARMOR_STAB", "ATTACK_NOISE", "ATTACK_SPEED", "AVOID_FRIENDRY_FIRE", "BIONIC_POWER", "BONUS_BLOCK", "BONUS_DODGE", "CARRY_WEIGHT", "COMBAT_CATCHUP", "CLIMATE_CONTROL_HEAT", "CLIMATE_CONTROL_CHILL", "DEXTERITY", "INTELLIGENCE", "PERCEPTION", "STRENGTH", "SPEED", "EFFECTIVE_HEALTH_MOD", "EXTRA_ACID", "EXTRA_BASH", "EXTRA_BIO", "EXTRA_BULLET", "EXTRA_COLD", "EXTRA_CUT", "EXTRA_ELEC", "EXTRA_HEAT", "EXTRA_STAB", "EXTRA_ELEC_PAIN", "EVASION", "FALL_DAMAGE", "FATIGUE", "FOOTSTEP_NOISE", "FORCEFIELD", "HUNGER", "KNOCKBACK_RESIST", "KNOCKDOWN_RESIST", "LEARNING_FOCUS", "LUMINATION", "MAX_HP", "MAX_MANA", "MAX_STAMINA", "MELEE_DAMAGE", "RANGED_DAMAGE", "METABOLISM", "MOD_HEALTH", "MOD_HEALTH_CAP", "MOVE_COST", "OVERKILL_DAMAGE", "PAIN", "PAIN_REMOVE", "SHOUT_NOISE", "SIGHT_RANGE_ELECTRIC", "SIGHT_RANGE_NETHER", "MOTION_VISION_RANGE", "SLEEPY", "SKILL_RUST_RESIST", "SOCIAL_INTIMIDATE", "SOCIAL_LIE", "SOCIAL_PERSUADE", "RANGE", "READING_EXP", "RECOIL_MODIFIER", "REGEN_HP", "REGEN_MANA", "REGEN_STAMINA", "THIRST", "WEAPON_DISPERSION"];
export type EnchGenericValType = typeof EnchGenericValTypeList[number];
/**附魔近战武器加值类型 列表 */
export declare const EnchMeleeValTypeList: readonly ["ITEM_DAMAGE_ACID", "ITEM_DAMAGE_BASH", "ITEM_DAMAGE_BIO", "ITEM_DAMAGE_BULLET", "ITEM_DAMAGE_COLD", "ITEM_DAMAGE_CUT", "ITEM_DAMAGE_ELEC", "ITEM_DAMAGE_HEAT", "ITEM_DAMAGE_PURE", "ITEM_DAMAGE_STAB", "ITEM_ATTACK_SPEED"];
/**附魔近战武器加值类型 */
export type EnchMeleeValType = typeof EnchMeleeValTypeList[number];
/**附魔护甲加值类型 列表 */
export declare const EnchArmorValTypeList: readonly ["ITEM_ARMOR_ACID", "ITEM_ARMOR_BASH", "ITEM_ARMOR_BIO", "ITEM_ARMOR_BULLET", "ITEM_ARMOR_COLD", "ITEM_ARMOR_CUT", "ITEM_ARMOR_ELEC", "ITEM_ARMOR_HEAT", "ITEM_ARMOR_STAB"];
/**附魔护甲加值类型 */
export type EnchArmorValType = typeof EnchArmorValTypeList[number];
/**附魔加值类型 */
export type EnchValType = EnchGenericValType | EnchMeleeValType | EnchArmorValType;
