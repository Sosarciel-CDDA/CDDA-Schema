import { DamageTypeID } from "./DameType";
import { FakeSpell } from "./Enchantment";
import { NumObj } from "./Eoc";
import { FieldID } from "./Field";
import { BodyPartID, CddaID, DescText } from "./GenericDefine";
import { AnyItemID } from "./Item";
import { MonsterID } from "./Monster";
import { SoundEffectID, SoundEffectVariantID } from "./SoundEffect";



/**预定义的法术ID 列表 */
export const DefineSpellIDList = [
    "AO_CLOSE_TEAR" , //神器关闭裂隙
    "pain_split"    , //伤痛分流
] as const;
/**预定义的法术ID */
export type DefineSpellID = typeof DefineSpellIDList[number];

/**法术ID  */
export type SpellID = CddaID<"SPELL">|DefineSpellID;


/**法术 */
export type Spell = {
    id: SpellID;
    type: "SPELL";
    name: (DescText);
    description: (DescText);
    /**有效的目标类型 */
    valid_targets: SpellTarget[];
    /**如果法术可以对生物释放 有效的怪物ID */
    targeted_monster_ids?:MonsterID[];
    /**如果法术可以对生物释放 有效的怪物特殊标签 */
    targeted_monster_species?:string[];
    /**如果法术可以对生物释放 排除的怪物特殊标签 */
    ignored_monster_species?:string[];
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
    damage_type?:DamageTypeID;
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
    learn_spells?: Partial<Record<SpellID,NumObj>>;
};

/**法术有效目标 列表 */
export const SpellTargetList = [
    "hostile", //敌人
    "ground" , //地面
    "self"   , //自己
    "ally"   , //盟友
    "field"  , //地块效果
    "item"   , //物品
    "none"   , //无
] as const;
/**法术有效目标 */
export type SpellTarget = typeof SpellTargetList[number];


/**法术效果 列表 */
export const SpellEffectList = [
    "area_pull"             , // 将其范围内的valid_targets拉向目标位置。目前, 拉动距离设置为1 (参见directed_push) 。
    "area_push"             , // 将其范围内的valid_targets从目标位置推开。目前, 推动距离设置为1 (参见directed_push) 。
    "attack"                , // 对其范围内的valid_targets造成伤害, 并将名为effect的effect_str应用于目标。要对地形造成伤害, 请使用bash。
    "banishment"            , // 杀死范围内的任何MONSTER, 直到伤害hp。任何溢出的hp都会从施法者那里拿走；如果超过施法者的hp, 法术就会失败。
    "bash"                  , // 在目标处猛击地形。使用damage()作为猛击的力度。
    "charm_monster"         , // 魅惑一个hp小于damage()的怪物, 大约持续duration()。
    "dash"                  , // 向前冲刺到范围, 并在目标处击中锥形目标。
    "directed_push"         , // 将aoe中的valid_targets从目标位置推开, 距离为damage()。负值表示拉动。
    "effect_on_condition"   , // 在所有有效目标上运行来自effect_str的effect_on_condition。EOC将以玩家为中心, 以NPC为施法者。
    "emit"                  , // 在目标处产生发射。
    "explosion"             , // 在目标中心引发爆炸。使用damage()作为功率和因子aoe()/10。
    "flashbang"             , // 在目标中心产生闪光弹效果。使用damage()作为功率和因子aoe()/10。
    "fungalize"             , // 使目标变成真菌。
    "guilt"                 , // 目标得到罪恶感, 就好像它杀了施法者一样。
    "map"                   , // 映射出以玩家为中心的overmap, 半径为aoe()。
    "mod_moves"             , // 为目标添加damage()移动。负值表示“冻结”那段时间。
    "morale"                , // 给aoe内的NPC或头像一个士气效果。使用damage()作为值。decay_start是duration()/10。
    "mutate"                , // 变异目标。如果定义了effect_str, 则向该类别变异, 而不是随机选择。如果使用了MUTATE_TRAIT标志, 则允许effect_str是一个特定的特性。Damage()/100是突变成功的百分比 (10000表示100.00%) 。
    "noise"                 , // 在目标处产生damage()量的噪音。注意: 噪音可以进一步描述为sound_type、sound_description、sound_ambient、sound_id和sound_variant。
    "pain_split"            , // 平均分配你所有肢体的伤害。
    "pull_target"           , // 尝试将目标直线拉向施法者。如果路径被无法通过的家具或地形阻挡, 效果就会失败。
    "recover_energy"        , // 恢复等于法术伤害的能源源。能源源在effect_str中定义, 可以是BIONIC、FATIGUE、PAIN、MANA或STAMINA之一。
    "remove_effect"         , // 从aoe内所有生物身上移除effect_str效果。
    "remove_field"          , // 在aoe内移除effect_str字段。如果移除的字段是fd_fatigue, 则会根据字段密度产生不同强度的teleglow, 并可能发生传送。
    "revive"                , // 像僵尸巫师一样复活一个怪物。怪物必须有REVIVES标志。
    "short_range_teleport"  , // 将玩家随机传送到范围内的空间, 有aoe变化。另请参见TARGET_TELEPORT和UNSAFE_TELEPORT标志。
    "slime_split"           , // 黏液根据质量分裂成两个大的或正常的黏液。注意: 硬编码为mon_blob类型的敌人, 检查怪物死亡函数+法术召唤组合。
    "spawn_item"            , // 生成一个物品, 该物品在其持续时间结束时会消失。默认持续时间为0。
    "summon"                , // 从effect_str召唤一个MONSTER或monstergroup, 它将在其持续时间结束时消失。默认持续时间为0。另请参见SPAWN_WITH_DEATH_DROPS标志。
    "summon_vehicle"        , // 从effect_str召唤一个车辆, 它将在其持续时间结束时消失。默认持续时间为0。
    "targeted_polymorph"    , // 一个被定向的怪物被永久转化为由effect_str指定的MONSTER, 如果它的HP小于法术的伤害。如果effect_str为空, 则目标将变形成一个难度等级相似的随机怪物。或者, 可以使用POLYMORPH_GROUP标志从monstergroup中选择一个加权ID。玩家和NPC对这种法术效果免疫。
    "ter_transform"         , // 转换其aoe中的地形和家具。aoe中的任何一点改变的机会是1 / (damage)。effect_str是ter_furn_transform的ID。
    "timed_event"           , // 只向玩家添加一个定时事件。有效的定时事件有: amigara、artifact_light、dim、help、robot_attack、roots_die、spawn_wyrms、temple_flood、temple_open、temple_spawn、wanted。注意: 这只是为了神器活动效果而添加的。支持有限, 使用风险自负。
    "translocate"           , // 打开一个窗口, 允许施法者选择一个传送门进行传送。
    "upgrade"               , // 立即升级目标MONSTER。
    "vomit"                 , // 其aoe内的任何生物都会立即呕吐, 如果它能够这样做。
] as const;
/**法术效果 */
export type SpellEffect = typeof SpellEffectList[number];

/**法术范围形状 列表*/
export const SpellShapeList = [
    "blast" , // 以撞击位置为中心的圆形爆炸。Aoe值是半径。
    "cone"  , // 发射一个圆锥体, 其弧度等于 aoe (以度为单位)。
    "line"  , // 发射一条宽度等于 aoe 的线。
] as const;
/**法术范围形状 */
export type SpellShape = typeof SpellShapeList[number];

/**法术Flag 列表*/
export const SpellFlagList = [
    "CONCENTRATE"              , // 焦点影响法术失败百分比。
    "EXTRA_EFFECTS_FIRST"      , // 该法术extra_effects将在主要法术效果之前发生。
    "FRIENDLY_POLY"            , // 如果法术成功结算, 法术的目标targeted_polymorph将会对施法者变得友好。
    "HOSTILE_SUMMON"           , // 召唤法术总是会产生敌对的怪物。
    "HOSTILE_50"               , // 召唤的怪物在 50% 的情况下会友好地生成。
    "IGNITE_FLAMMABLE"         , // 如果法术区域有任何易燃物品, 就会产生火灾
    "IGNORE_WALLS"             , // 法术的 AOE 可以穿过墙壁。
    "LOUD"                     , // 法术会对目标产生额外的噪音。
    "MUST_HAVE_CLASS_TO_LEARN" , // 当你拥有 时, 该法术会自动学习spell_class；当你失去它时, 该法术会被移除。
    "MUTATE_TRAIT"             , // 覆盖mutate法术效果以使用特定的 Trait_id 而不是类别。
    "NO_EXPLOSION_SFX"         , // 该法术不会产生视觉爆炸效果。
    "NO_FAIL"                  , // 该法术在施展时不会失败。
    "NO_HANDS"                 , // 手不影响法术能量消耗。
    "NO_LEGS"                  , // 腿不影响施法时间。
    "NO_PROJECTILE"            , // 法术的“射弹”部分会穿过墙壁, 法术效果的中心正是你瞄准的地方, 不考虑障碍物。
    "NON_MAGICAL"              , // 计算伤害减轻时忽略法术抗力。
    "PAIN_NORESIST"            , // 改变疼痛的法术无法被抵抗 (就像死亡特性一样)。
    "PERCENTAGE_DAMAGE"        , // 该法术根据目标当前的生命值造成伤害。这意味着该法术无法直接杀死目标。
    "PERMANENT"                , // 用此法术生成的物品或生物不会像平常一样消失和死亡。物品只有在最高法术等级时才能永久存在；任何法术等级的生物都可以是永久的。
    "PERMANENT_ALL_LEVELS"     , // 即使该法术不是最高等级, 用该法术生成的物品也不会消失。
    "POLYMORPH_GROUP"          , // 咒语targeted_polymorph会将目标变成随机的monstergroup怪物effect_str。
    "RANDOM_AOE"               , // 在 (最小值+增量)*级别和最大值之间选择随机数, 而不是正常行为。
    "RANDOM_CRITTER"           , // 与地面相同, RANDOM_TARGET但忽略地面。
    "RANDOM_DAMAGE"            , // 在 (最小值+增量)*级别和最大值之间选择随机数, 而不是正常行为。
    "RANDOM_DURATION"          , // 在 (最小值+增量)*级别和最大值之间选择随机数, 而不是正常行为。
    "RANDOM_TARGET"            , // 强制法术在范围内随机选择一个有效目标, 而不是由施法者选择目标。这也影响到extra_effects。
    "SILENT"                   , // 法术不会对目标发出任何噪音。
    "SOMATIC"                  , // 手臂负担会影响失败率和施法时间 (轻微)。
    "SPAWN_GROUP"              , // item_group      从或生成或召唤monstergroup, 而不是特定 ID。
    "SPAWN_WITH_DEATH_DROPS"   , // 允许召唤的怪物保留其通常的死亡掉落物, 否则它们不会掉落任何东西。
    "SWAP_POS"                 , // 投射法术会交换施法者和目标的位置。
    "TARGET_TELEPORT"          , // 传送法术更改为最大范围目标, 并以范围作为目标周围的变化。
    "UNSAFE_TELEPORT"          , // 传送法术有杀死施法者或其他人的风险。
    "VERBAL"                   , // 法术会在施法者所在位置发出噪音, 嘴部阻碍会影响失败百分比。
    "WONDER"                   , // 这极大地改变了父法术的行为: 法术本身不施放, 但伤害和范围信息用于施放extra_effects。extra_effects将随机选择n个施放, 其中n是法术当前的伤害 (与RANDOM_DAMAGE旗帜叠加), 施放法术的消息也会显示。如果不需要这个咒语的消息, 请确保message它是一个空字符串。
] as const;
/**法术Flag */
export type SpellFlag = typeof SpellFlagList[number];

/**法术能量池 列表 */
export const SpellEnergySourceList = [
    "MANA", "BIONIC", "HP", "STAMINA", "NONE"
] as const;
/**法术能量池 */
export type SpellEnergySource = typeof SpellEnergySourceList[number];

/**法术声音类型 列表 */
export const SpellSoundTypeList = [
    "background", "weather", "music", "movement", "speech", "activity",
    "destructive_activity", "alarm", "combat", "alert", "order",
] as const;
/**法术声音类型 */
export type SpellSoundType = typeof SpellSoundTypeList[number];
