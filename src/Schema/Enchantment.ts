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
        gain: BodyPartID }|{
        /**失去肢体 */
        lose: BodyPartID
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
export type InlineEnchantment = Omit<Enchantment,"type"|"id">;

/**作为参数传入的附魔 */
export type ParamsEnchantment = InlineEnchantment|EnchantmentID;

/**装备附魔启用条件 */
export type EnchConHas = (
    /**拿在手上时 */
    "WIELD" |
    /**持有/背包里有/穿戴着此物品时 */
    "HELD"  |
    /**穿戴着此物品时 */
    "WORN"
);
/**附魔启用条件 */
export type EnchCon =(
    /**总是启用 */
    "ALWAYS"    |
    /**物品激活时 */
    "ACTIVE"    |
    /**物品未激活时 */
    "INACTIVE"  |
    /**EOC对话条件 */
    BoolObj
);

/**附魔数值增幅 */
export type EnchModVal = {
    /**附魔增幅类型 */
    value    :EnchValType;
    /**倍率增幅 1为+100% */
    multiply?: (NumObj);
    /**加值增幅 在计算倍率前先添加 */
    add     ?: (NumObj);
}
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
}

/**附魔通用加值类型 列表 */
export const EnchGenericValTypeList = [
    "ARMOR_ACID"            , // 负值提供防御伤害的护甲, 正值让你接受更多此类伤害
    "ARMOR_BASH"            , // 
    "ARMOR_BIO"             , // 
    "ARMOR_BULLET"          , // 
    "ARMOR_COLD"            , // 
    "ARMOR_CUT"             , // 
    "ARMOR_ELEC"            , // 
    "ARMOR_HEAT"            , // 
    "ARMOR_STAB"            , // 
    "ATTACK_NOISE"          , // 影响近战攻击时发出的噪音量。
    "ATTACK_SPEED"          , // 影响物品的攻击速度, 即使它不是你所使用的物品。
    "AVOID_FRIENDRY_FIRE"	, // 如果有朋友处于火线中, 你的角色就有很大机会避免友军火力。从 0.0（没有机会）到 1.0（从不友善开火）。
    "BIONIC_POWER"          , // 
    "BONUS_BLOCK"           , // 影响您可以执行的格挡次数。
    "BONUS_DODGE"           , // 影响你可以执行的闪避次数。
    "CARRY_WEIGHT"          , // 影响玩家可以携带的总重量。"add": 1000增加 1 公斤的携带重量。
    "COMBAT_CATCHUP"        , // 影响你重新学习战斗技能的速度 (乘数)
    "CLIMATE_CONTROL_HEAT"  , // 将体温升高至舒适的温度单位数至值。
    "CLIMATE_CONTROL_CHILL" , // 将体温降低至舒适的温度单位数至值。
    "DEXTERITY"             , // 影响敏捷统计。
    "INTELLIGENCE"          , // 影响智力统计。
    "PERCEPTION"            , // 影响感知统计。
    "STRENGTH"              , // 影响力量统计。
    "SPEED"                 , // 
    "EFFECTIVE_HEALTH_MOD"  , // 如果这不是零 (默认值), 您将使用它而不是实际的健康模式。
    "EXTRA_ACID"            , // EXTRA_TYPE 增加所选类型所受到的伤害。
    "EXTRA_BASH"            , // 
    "EXTRA_BIO"             , // 
    "EXTRA_BULLET"          , // 
    "EXTRA_COLD"            , // 
    "EXTRA_CUT"             , // 
    "EXTRA_ELEC"            , // 
    "EXTRA_HEAT"            , // 
    "EXTRA_STAB"            , // 
    "EXTRA_ELEC_PAIN"       , // 所受到的电击伤害会倍增, 其结果将作为额外的痛苦施加。
    "EVASION"               , // 无论其他修饰符如何, 你的角色都有一定机会躲避传入的攻击。从 0.0 (无回避率)到 1.0 (100% 回避率)。
    "FALL_DAMAGE"           , // 影响你受到的坠落伤害。
    "FATIGUE"               , // 
    "FOOTSTEP_NOISE"        , // 
    "FORCEFIELD"            , // 你的角色有机会将传入伤害降低至 0。从 0.0 (没有机会)到 1.0 (100% 机会避免攻击)。
    "HUNGER"                , // 
    "KNOCKBACK_RESIST"      , // 击退效果的数量, 0为常规数量, -100为双倍效果, 100为无效果
    "KNOCKDOWN_RESIST"      , // 击倒量对你的影响, 目前只有100 或更大的 knockdown_resist 使你免疫击倒
    "LEARNING_FOCUS"        , // 您用于学习目的的额外关注量。
    "LUMINATION"            , // 性格产生光。
    "MAX_HP"                , // 
    "MAX_MANA"              , // 
    "MAX_STAMINA"           , // 
    "MELEE_DAMAGE"          , // 
    "RANGED_DAMAGE"         , // 增加远程攻击的伤害
    "METABOLISM"            , // 
    "MOD_HEALTH"            , // 如果这不是零 (默认值), 您将把您的健康状况调整为MOD_HEALTH_CAP每半小时的最大/分钟。
    "MOD_HEALTH_CAP"        , // 如果该值不是零 (默认值), 您将MOD_HEALTH每半小时将收益/损失限制在该值。
    "MOVE_COST"             , // 
    "OVERKILL_DAMAGE"       , // 使敌方尸体死亡后受到的伤害倍增或增加。数字越低, 造成的伤害越大
    "PAIN"                  , // 当获得疼痛时, 获得的数量将被修改这么多。您仍然会获得至少 1 点疼痛。
    "PAIN_REMOVE"           , // 当疼痛每五分钟自然减少时, 疼痛消除的机会就会减少这么多。您仍然至少有机会减轻疼痛。
    "SHOUT_NOISE"           , // 
    "SIGHT_RANGE_ELECTRIC"  , // is_electric() 生物距离多少格可见。
    "SIGHT_RANGE_NETHER"    , // is_nether() 生物距离多少格可见。
    "MOTION_VISION_RANGE"   , // ?将指定半径内的所有怪物显示为红色。
    "SLEEPY"                , // 这个值越高, 你就越容易入睡。
    "SKILL_RUST_RESIST"     , // 有机会/100抵抗技能锈蚀。
    "SOCIAL_INTIMIDATE"     , // 影响你的恐吓能力。
    "SOCIAL_LIE"            , // 影响你说谎的能力。
    "SOCIAL_PERSUADE"       , // 影响你的说服能力。
    "RANGE"                 , // 修改你的角色使用枪支的范围
    "READING_EXP"           , // 更改您从每次阅读增量中学到的最小值。
    "RECOIL_MODIFIER"       , // 影响射击时的后坐力。正值增加分散度, 负值减少分散度。
    "REGEN_HP"              , // 影响你恢复生命值的速度。
    "REGEN_MANA"            , // 
    "REGEN_STAMINA"         , // 
    "THIRST"                , // 
    "WEAPON_DISPERSION"     , // 正值增加分散度, 负值减少分散度。
] as const;
export type EnchGenericValType = typeof EnchGenericValTypeList[number];
/**附魔近战武器加值类型 列表 */
export const EnchMeleeValTypeList = [
    "ITEM_DAMAGE_ACID"   , // 仅近战附魔值
    "ITEM_DAMAGE_BASH"   , // 
    "ITEM_DAMAGE_BIO"    , // 
    "ITEM_DAMAGE_BULLET" , // 
    "ITEM_DAMAGE_COLD"   , // 
    "ITEM_DAMAGE_CUT"    , // 
    "ITEM_DAMAGE_ELEC"   , // 
    "ITEM_DAMAGE_HEAT"   , // 
    "ITEM_DAMAGE_PURE"   , // 
    "ITEM_DAMAGE_STAB"   , // 
    "ITEM_ATTACK_SPEED"  , // 
] as const;
/**附魔近战武器加值类型 */
export type EnchMeleeValType = typeof EnchMeleeValTypeList[number];
/**附魔护甲加值类型 列表 */
export const EnchArmorValTypeList = [
    "ITEM_ARMOR_ACID"   , // 附魔护甲
    "ITEM_ARMOR_BASH"   , // 
    "ITEM_ARMOR_BIO"    , // 
    "ITEM_ARMOR_BULLET" , // 
    "ITEM_ARMOR_COLD"   , // 
    "ITEM_ARMOR_CUT"    , // 
    "ITEM_ARMOR_ELEC"   , // 
    "ITEM_ARMOR_HEAT"   , // 
    "ITEM_ARMOR_STAB"   , // 
] as const;
/**附魔护甲加值类型 */
export type EnchArmorValType = typeof EnchArmorValTypeList[number];


/**附魔加值类型 */
export type EnchValType = EnchGenericValType|EnchMeleeValType|EnchArmorValType;