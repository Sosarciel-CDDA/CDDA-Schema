import { DamageTypeID } from "./DameType";
import { FakeSpell } from "./Enchantment";
import { NumObj } from "./Eoc";
import { FieldID } from "./Field";
import { BodyPartID, CddaID, DescText } from "./GenericDefine";
import { AnyItemID } from "./Item";
import { MonsterID } from "./Monster";
import { SoundEffectID, SoundEffectVariantID } from "./SoundEffect";
/**预定义的法术ID 列表 */
export declare const DefineSpellIDList: readonly ["AO_CLOSE_TEAR", "pain_split"];
/**预定义的法术ID */
export type DefineSpellID = typeof DefineSpellIDList[number];
/**法术ID  */
export type SpellID = CddaID<"SPELL"> | DefineSpellID;
/**法术 */
export type Spell = {
    id: SpellID;
    type: "SPELL";
    name: (DescText);
    description: (DescText);
    /**有效的目标类型 */
    valid_targets: SpellTarget[];
    /**如果法术可以对生物释放 有效的怪物ID */
    targeted_monster_ids?: MonsterID[];
    /**如果法术可以对生物释放 有效的怪物特殊标签 */
    targeted_monster_species?: string[];
    /**如果法术可以对生物释放 排除的怪物特殊标签 */
    ignored_monster_species?: string[];
    /**法术效果类型 */
    effect: SpellEffect;
    /**法术效果子类型
     * 主类型为 attack 时向目标添加效果
     * 其他情况下取决于主类型
     */
    effect_str?: string;
    /**法术范围形状 */
    shape: SpellShape;
    /**法术子效果 */
    extra_effects?: FakeSpell[];
    /**受影响的身体部位 */
    affected_body_parts?: BodyPartID[];
    /**法术flag */
    flags?: SpellFlag[];
    /**属于哪个职业的法术 */
    spell_class?: string;
    /**初始施法时间 */
    base_casting_time?: (NumObj);
    /**极限的施法时间 */
    final_casting_time?: (NumObj);
    /**每级的施法时间调整 */
    casting_time_increment?: (NumObj);
    /**初始能量消耗 */
    base_energy_cost?: (NumObj);
    /**极限的能量消耗 */
    final_energy_cost?: (NumObj);
    /**每级的能量消耗调整 */
    energy_increment?: (NumObj);
    /**法术使用的能量池 默认魔力 */
    energy_source?: SpellEnergySource;
    /**施法材料ID */
    components?: AnyItemID[];
    /**法术难度 */
    difficulty?: (NumObj);
    /**法术最大等级 */
    max_level?: (NumObj);
    /**初始法术准确度 -15 左右时总是能被格挡 */
    min_accuracy?: (NumObj);
    /**极限法术准确度 20 左右时几乎无法格挡 */
    max_accuracy?: (NumObj);
    /**每级的法术准确度调整 */
    accuracy_increment?: (NumObj);
    /**初始法术伤害 必须填写 max_damage 才能造成伤害 */
    min_damage?: (NumObj);
    /**极限法术伤害 必须填写 max_damage 才能造成伤害 */
    max_damage?: (NumObj);
    /**每级的法术伤害调整 */
    damage_increment?: (NumObj);
    /**法术的伤害类型
     * 伤害法术必须定义伤害类型
     */
    damage_type?: DamageTypeID;
    /**初始法术aoe范围 */
    min_aoe?: (NumObj);
    /**极限法术aoe范围 */
    max_aoe?: (NumObj);
    /**每级的法术aoe范围调整 */
    aoe_increment?: (NumObj);
    /**初始法术施法范围 */
    min_range?: (NumObj);
    /**极限法术施法范围 */
    max_range?: (NumObj);
    /**每级的法术施法范围调整 */
    range_increment?: (NumObj);
    /**初始法术持续伤害 */
    min_dot?: (NumObj);
    /**极限法术持续伤害 */
    max_dot?: (NumObj);
    /**每级的法术持续伤害调整 */
    dot_increment?: (NumObj);
    /**初始法术持续时间 单位为 1/100秒 */
    min_duration?: (NumObj);
    /**极限法术持续时间 单位为 1/100秒 */
    max_duration?: (NumObj);
    /**每级的法术持续时间调整 */
    duration_increment?: (NumObj);
    /**初始法术穿甲 */
    min_pierce?: (NumObj);
    /**极限法术穿甲 */
    max_pierce?: (NumObj);
    /**每级的法术穿甲调整 */
    pierce_increment?: (NumObj);
    /**法术在目标处创建的Field */
    field_id?: FieldID;
    /**每个被法术影响到的地块有 1/n 的概率产生Field */
    field_chance?: (NumObj);
    /**初始法术地块效果强度 */
    min_field_intensity?: (NumObj);
    /**极限法术地块效果强度 */
    max_field_intensity?: (NumObj);
    /**每级的法术地块效果强度调整 */
    field_intensity_increment?: (NumObj);
    /**法术地块效果强度的浮动值 0.1时为 +-10% */
    field_intensity_variance?: (NumObj);
    /**法术产生的声音类型 */
    sound_type?: SpellSoundType;
    /**发书产生的声音描述 起效于"You hear %s" 默认为 "an explosion" */
    sound_description?: (DescText);
    /**视为环境声音 */
    sound_ambient?: boolean;
    /**声音ID */
    sound_id?: SoundEffectID;
    /**声音变体ID */
    sound_variant?: SoundEffectVariantID;
    /**当列表内所有法术到达指定等级时学会此法术
     * Record<(SpellID)法术ID : (NumObj)需求等级>
     */
    learn_spells?: Partial<Record<SpellID, NumObj>>;
};
/**法术有效目标 列表 */
export declare const SpellTargetList: readonly ["hostile", "ground", "self", "ally", "field", "item", "none"];
/**法术有效目标 */
export type SpellTarget = typeof SpellTargetList[number];
/**法术效果 列表 */
export declare const SpellEffectList: readonly ["area_pull", "area_push", "attack", "banishment", "bash", "charm_monster", "dash", "directed_push", "effect_on_condition", "emit", "explosion", "flashbang", "fungalize", "guilt", "map", "mod_moves", "morale", "mutate", "noise", "pain_split", "pull_target", "recover_energy", "remove_effect", "remove_field", "revive", "short_range_teleport", "slime_split", "spawn_item", "summon", "summon_vehicle", "targeted_polymorph", "ter_transform", "timed_event", "translocate", "upgrade", "vomit"];
/**法术效果 */
export type SpellEffect = typeof SpellEffectList[number];
/**法术范围形状 列表*/
export declare const SpellShapeList: readonly ["blast", "cone", "line"];
/**法术范围形状 */
export type SpellShape = typeof SpellShapeList[number];
/**法术Flag 列表*/
export declare const SpellFlagList: readonly ["CONCENTRATE", "EXTRA_EFFECTS_FIRST", "FRIENDLY_POLY", "HOSTILE_SUMMON", "HOSTILE_50", "IGNITE_FLAMMABLE", "IGNORE_WALLS", "LOUD", "MUST_HAVE_CLASS_TO_LEARN", "MUTATE_TRAIT", "NO_EXPLOSION_SFX", "NO_FAIL", "NO_HANDS", "NO_LEGS", "NO_PROJECTILE", "NON_MAGICAL", "PAIN_NORESIST", "PERCENTAGE_DAMAGE", "PERMANENT", "PERMANENT_ALL_LEVELS", "POLYMORPH_GROUP", "RANDOM_AOE", "RANDOM_CRITTER", "RANDOM_DAMAGE", "RANDOM_DURATION", "RANDOM_TARGET", "SILENT", "SOMATIC", "SPAWN_GROUP", "SPAWN_WITH_DEATH_DROPS", "SWAP_POS", "TARGET_TELEPORT", "UNSAFE_TELEPORT", "VERBAL", "WONDER"];
/**法术Flag */
export type SpellFlag = typeof SpellFlagList[number];
/**法术能量池 列表 */
export declare const SpellEnergySourceList: readonly ["MANA", "BIONIC", "HP", "STAMINA", "NONE"];
/**法术能量池 */
export type SpellEnergySource = typeof SpellEnergySourceList[number];
/**法术声音类型 列表 */
export declare const SpellSoundTypeList: readonly ["background", "weather", "music", "movement", "speech", "activity", "destructive_activity", "alarm", "combat", "alert", "order"];
/**法术声音类型 */
export type SpellSoundType = typeof SpellSoundTypeList[number];
