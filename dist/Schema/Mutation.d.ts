import { ParamsEnchantment } from "./Enchantment";
import { BoolObj, EocID } from "./Eoc";
import { FlagID } from "./Flag";
import { BodyPartID, CddaID, DescText, EffectRatType, SocialType } from "./GenericDefine";
import { AnyItemID, ArmorID, GunID } from "./Item";
import { MaterialID } from "./Material";
import { MonsterID } from "./Monster";
import { SpellID } from "./Spell";
/**预定义的变异ID 列表 */
export declare const DefineMutionIdList: readonly ["TOUGH_FEET"];
/**预定义的变异ID */
export type DefineMutionId = typeof DefineMutionIdList[number];
/**Mutation ID格式 */
export type MutationID = CddaID<"MUT"> | DefineMutionId;
/**变异 */
export type Mutation = {
    type: "mutation";
    id: MutationID;
    /**名称 */
    name: (DescText);
    /**描述 */
    description: (DescText);
    /**消耗的点数 */
    points: number;
    /**可见性 */
    visibility?: number;
    /**丑陋度 */
    ugliness?: number;
    /**位置类型 */
    types?: string[];
    /**需要前置变异 */
    prereqs?: MutationID[];
    /**同时需要前置变异 */
    prereqs2?: MutationID[];
    /**产生此变异时会取消的变异 */
    cancels?: MutationID[];
    /**附带的变异 */
    leads_to?: MutationID[];
    /**可进阶为什么变异 */
    changes_to?: MutationID[];
    /**是一个开始可选的变异 */
    starting_trait?: boolean;
    /**内置护甲
     * 这个物品永远穿在你的角色身上, 直到你摆脱这个突变
     */
    integrated_armor?: ArmorID[];
    /**可否净化 */
    purifiable?: boolean;
    /**是否有效 */
    valid?: boolean;
    /**可否被玩家看到 */
    player_display?: boolean;
    /**同时有正面与负面的混合效果 */
    mixed_effect?: boolean;
    /**潮湿保护 */
    wet_protection?: BPWetProte[];
    /**受此突变限制的身体部位列表 */
    restricts_gear?: BodyPartID[];
    /**突变时将删除任何刚性装甲的身体部位列表 任何综合装甲物品都直接考虑 */
    remove_rigid?: BodyPartID[];
    /**如果有“restricts_gear”列表, 则设置该位置是否仍然允许由软材料制成的物品
     * 只有其中一种类型需要是软的才能被视为软 默认值:false
     */
    allow_soft_gear?: boolean;
    /**如果为 true, 则在突变时会销毁“restricts_gear”位置中的齿轮 (默认值: false) */
    destroys_gear?: boolean;
    /**变异带来的累赘度 */
    encumbrance_always?: [BodyPartID, number][];
    /**在对应肢体上穿戴非 OVERSIZE 装备时, 变异带来的额外累赘度 */
    encumbrance_covered?: [BodyPartID, number][];
    /**如果身体部位有由突变引起的负担, 则将该负担惩罚乘以该乘数。
     * 注意: 不影响衣物负担。
     */
    encumbrance_multiplier_always?: Partial<Record<BodyPartID, number>>;
    /**从玩家的可见范围中减去的百分比, 上限为60。负值有效, 但由于视觉范围的上限方式, 效果不是很明显 */
    stealth_modifier?: number;
    /**当设置时, 突变是玩家需要激活的活动突变 (默认值: false) */
    active?: boolean;
    /**当为true时, 这个'active'突变开始活动 (默认值: false, 需要'active') */
    starts_active?: boolean;
    /**激活此突变的成本。需要将饥饿、口渴或疲劳值设置为true (默认值: 0) */
    cost?: number;
    /**设置需要经过多少时间单位 (回合 * 当前玩家速度)才能再次支付成本。需要大于一才有任何效果 (默认值: 0) */
    time?: number;
    /**如果为true, 激活突变消耗`cost` kcal。 (默认值: false) */
    kcal?: boolean;
    /**如果为true, 激活突变增加口渴成本 (默认值: false) */
    thirst?: boolean;
    /**如果为true, 激活突变增加疲劳成本 (默认值: false) */
    fatigue?: boolean;
    /**突变激活在你的角色上应用此标志 */
    active_flags?: FlagID[];
    /**你可以穿着这个标志的物品与这个突变一起, 绕过restricts_gear限制 */
    allowed_items?: ArmorID[];
    /**改变你的施法速度；0.5表示你只花费原来施法时间的50%, 2表示你花费两倍时间。只对魔法mod有用 */
    casting_time_multiplier?: number;
    /**从角色中添加或减去平坦量的闪避 */
    dodge_modifier?: number;
    /**呕吐机会的修饰符 */
    vomit_multiplier?: number;
    /**改变你听到不同声音有多好 */
    hearing_modifier?: number;
    /**对HP的平坦奖励/惩罚 - `5`给所有肢体增加5hp, `-3`减去3hp。*/
    hp_adjustment?: number;
    /**对HP的百分比奖励 - `1` =100%, 使hp加倍, `-0.5`表示-50%, 使hp减半。*/
    hp_modifier?: number;
    /**第二个百分比HP修饰符, 在第一个之后应用 */
    hp_modifier_secondary?: number;
    /**改变你走路时产生多少噪音, `0.5`将其减半, `2`将其加倍 */
    noise_modifier?: number;
    /**从容器中取出物品并存回去的修饰符, 作为处理惩罚 */
    obtain_cost_multiplier?: number;
    /**调整在overmap上的视线范围。正数使它更远, 负数使它更近 */
    overmap_sight?: number;
    /**突变激活允许你射击假枪 */
    ranged_mutation?: {
        /**枪械ID */
        type: GunID;
        /**射击时的消息 */
        message: (DescText);
    };
    /**改变你阅读书籍有多快, `0.5`将其减半, `2`将其加倍 */
    reading_speed_multiplier?: number;
    /**技能锈迟延的乘数 */
    skill_rust_multiplier?: number;
    /**此突变激活产生一个物品 */
    spawn_item?: {
        /**生成的物品ID */
        type: AnyItemID;
        /**生成时的消息 */
        message: (DescText);
    };
    /**胃大小调节剂, 增加您一次可以消耗的食物量 */
    stomach_size_multiplier?: number;
    /**影响你气味强度的浮点数 (默认值: 1.0) */
    scent_modifier?: number;
    /**影响你当前气味倾向的目标气味的整数 (默认值: 500) */
    scent_intensity?: number;
    /**添加到你的目标气味值的整数 (默认值: 0) */
    scent_mask?: number;
    /**你散发出的气味类型, 如在scent_types.json中定义 (默认值: 空) */
    scent_type?: string;
    /**吃或喝的时间乘以这个数 */
    consume_time_modifier?: number;
    /**每个bmi单位超过character_weight_category::normal, 增加的hp_max数量 (默认值: 0.0) */
    fat_to_max_hp?: number;
    /**你的健康可以改变得有多快。如果设置为0, 它永远不会改变 (默认值: 1.0) */
    healthy_rate?: number;
    /**水对你造成多少伤害, 负值代表治疗 (默认值: 0) */
    weakness_to_water?: number;
    /**忽视你的物种列表 (默认值: 空) */
    ignored_by?: string[];
    /**被你激怒的物种列表以及多少, 负值代表平静 (默认值: 空) */
    anger_relations?: [string, number][];
    /**可食用材料列表 (默认值: 空) */
    can_only_eat?: MaterialID[];
    /**你受限于的`MED`列表, 包括变异剂、血清、阿司匹林、绷带等 (默认值: 空) */
    can_only_heal_with?: AnyItemID[];
    /**只对你有效的`MED`列表。查看`CANT_HEAL_EVERYONE`标志项 (默认值: 空) */
    can_heal_with?: AnyItemID[];
    /**你可以变异成的类别列表 (默认值: 空) */
    allowed_category?: string[];
    /**不能接收CBMs的身体部位列表 (默认值: 空) */
    no_cbm_on_bp?: BodyPartID[];
    /**发光身体部位列表以及发光强度作为浮点数 (默认值: 空) */
    lumination?: [BodyPartID, number][];
    /**额外代谢率乘数 (1.0倍, -0.5减半) */
    metabolism_modifier?: number;
    /**额外口渴修饰符 (1.0倍, -0.5减半) */
    thirst_modifier?: number;
    /**额外疲劳率乘数 (1.0倍使用, -0.5减半) */
    fatigue_modifier?: number;
    /**休息时疲劳和睡眠剥夺下降速率的修饰符 */
    fatigue_regen_modifier?: number;
    /**增加这个比例的耐力恢复 (1.0是正常恢复的100%) */
    stamina_regen_modifier?: number;
    /**将总心肺健康度乘以这个数 */
    cardio_multiplier?: number;
    /**将你总体工艺速度乘以这个数。0.5是正常速度的50%, 1.2比正常速度快20%。*/
    crafting_speed_multiplier?: number;
    /**对PLAYER/NPC_HEALING_RATE的乘数。*/
    healing_multiplier?: number;
    /**清醒时每回合的恢复率。正数会增加恢复, 负数会减少恢复。*/
    healing_awake?: number;
    /**休息时每回合的恢复率。正数会增加恢复, 负数会减少恢复。*/
    healing_resting?: number;
    /**你的肢体愈合有多快的乘数 (1.2是20%更快)。*/
    mending_modifier?: number;
    /**攻击成本修饰符 (0.9是10%更快, 1.1是10%更慢)。*/
    attackcost_modifier?: number;
    /**整体移动速度成本修饰符 (0.9是10%更快, 1.1是10%更慢)。*/
    movecost_modifier?: number;
    /**在平坦地形上的移动速度成本修饰符, 没有障碍 (0.9是10%更快, 1.1是10%更慢) */
    movecost_flatground_modifier?: number;
    /**在粗糙、不平坦地形上的移动速度成本修饰符 (0.9是10%更快, 1.1是10%更慢) */
    movecost_obstacle_modifier?: number;
    /**游泳速度成本修饰符 (0.9是10%更快, 1.1是10%更慢) */
    movecost_swim_modifier?: number;
    /**承载能力调节剂 (0.9 表示减少 10%, 1.1 表示增加 10%)。 */
    weight_capacity_modifier?: number;
    /**社交修饰符。可以是: 恐吓, 撒谎, 说服。
     * intimidate, lie, persuade
     */
    social_modifiers?: Partial<Record<SocialType, number>>;
    /**学习的法术和获得特性/突变后的等级。 */
    spells_learned?: [SpellID, number][];
    /**变异激活时可以转变为什么 */
    transform?: {
        /**这个突变将转变成的特性_id。 */
        target: MutationID;
        /**变形时显示的消息。 */
        msg_transform: (DescText);
        /**如果为真, 突变将在激活时开始供电 (打开)。 */
        active?: boolean;
        /**每次激活的移动成本 (默认值: 0)。 */
        moves?: number;
        /**如果为真, 转变将使用正常的突变进展规则 - 移除冲突特性, 需要阈值 (但不使用任何维生素或引起不稳定) */
        safe?: boolean;
    };
    /**变异触发器 Trigger[and][or] */
    triggers?: MutTigger[][];
    /**如果这个为真, 下面的激活EOC运行, 然后突变每回合打开处理。如果这个为假, 下面的"activated_eocs"将运行, 然后mod将自己关闭。 */
    activated_is_setup?: boolean;
    /**试图在此突变成功激活时激活的effect_on_conditions列表。 */
    activated_eocs?: EocID[];
    /**试图每次 (上面定义)时间单位激活的effect_on_conditions列表。时间为0表示每回合处理。对于可激活突变, 在突变活动时处理, 对于非可激活突变, 始终处理。 */
    processed_eocs?: EocID[];
    /**试图在此突变成功停用时激活的effect_on_conditions列表。 */
    deactivated_eocs?: EocID[];
    /**由此突变授予的附魔列表。可以是ID或附魔的内联定义 (参见MAGIC.md) */
    enchantments?: ParamsEnchantment[];
    /**如果非零, 在寒冷时变慢, 在热时变快 (1.0为每度高于或低于65 F给予+/-1%速度)。 */
    temperature_speed_modifier?: number;
    /**对接收到的疼痛量的平坦增加 (对于正数)\减少 (对于负数)。减少可以一直到0。在疼痛附魔后应用。 (所以如果你有抗痛特性和5点平坦疼痛减少, 并接收20点疼痛, 你会获得20*(1-0.25)-5=10点疼痛) */
    pain_modifier?: number;
    /**对总法力池的正负改变。 */
    mana_modifier?: number;
    /**对你法力恢复的乘数。0.5是正常的50%, 1.5是正常的150%。 */
    mana_regen_multiplier?: number;
    /**在mana_modifier和任何其他奖励之后, 对你总法力量的乘数。0.75是正常的75%, 1.5是正常的150%。 */
    mana_multiplier?: number;
    /**由突变授予的flag_IDs和json_flag_IDs列表。注意: trait_IDs可以设置并且不会产生错误, 但它们实际上并不"活跃"。 */
    flags?: MutFlag[];
    /**怪物摄像机, 能够使用列表中友好怪物作为额外视觉来源的能力。最大视距等于怪物的白天视觉。数字指定它可以向化身"传输"视觉的范围。*/
    moncams?: [MonsterID, number][];
};
/**肢体的潮湿保护 */
export type BPWetProte = {
    /**肢体 */
    part: BodyPartID;
    /**忽略潮湿点数 */
    ignored: number;
};
/**变异Flag 列表 */
export declare const MutFlagList: readonly ["UNARMED_BONUS"];
/**变异Flag */
export type MutFlag = typeof MutFlagList[number];
/**变异触发器 */
export type MutTigger = {
    condition: BoolObj;
    /**触发器激活时显示的消息。 */
    msg_on: RatMessage;
    /**触发器停用特性时显示的消息。 */
    msg_off: RatMessage;
};
/**带有评价的消息 */
type RatMessage = {
    /**消息文本 */
    text: (DescText);
    /**评价类型 */
    rating?: EffectRatType;
};
export {};
