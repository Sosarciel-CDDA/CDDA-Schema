import { DamageTypeID, DefineDamageTypeIDList } from "./DameType";
import { EffectID } from "./Effect";
import { EmitID } from "./Emit";
import { FakeSpell } from "./Enchantment";
import { BodyPartParam, CddaID, CharSymbol, Color, DefineMonFaction, DefineNpcFaction, Phase, Time, Volume, Weight } from "./GenericDefine";
import { AnyItemID } from "./Item";
import { InlineItemGroup, ItemGroupID } from "./ItemGroup";
import { MaterialID } from "./Material";
import { TalkTopicID } from "./TalkTopic";



/**Monster ID格式 */
export type MonsterID = CddaID<"MON">;

/**怪物 */
export type Monster = {
    /**看上去像哪个id的物品 */
    looks_like?: string;
    /**怪物ID */
    id: MonsterID;
    type: "MONSTER";
    /**怪物名 */
    name: string;
    /**怪物说明 */
    description: string;
    /**怪物的字符画ID */
    ascii_picture?:string;
    /**生命值 */
    hp: number;
    /**体积 影响不同大小目标的近战命中率 */
    volume: (Volume);
    /**重量 */
    weight: (Weight);
    /**ASCII模式的显示 */
    symbol: (CharSymbol);
    /**颜色 */
    color?: Color;
    /**默认阵营 */
    default_faction: DefineMonFaction;
    /**怪物身体类型 */
    bodytype?: MonBP;
    /**行动速度 */
    speed: number;
    /** (字符串) 从另一个怪物继承怪物属性。参见 JSON_INHERITANCE.md */
    "copy-from"?: MonsterID;
    /** (字符串数组) 怪物类别 (NULL, CLASSIC, 或 WILDLIFE) */
    categories?: string[];
    /** (字符串数组) 物种 ID, 例如 HUMAN, ROBOT, ZOMBIE, BIRD, MUTANT 等 */
    species?: string[];
    /** (字符串数组) 怪物追踪这些气味 */
    scents_tracked?: string[];
    /** (字符串数组) 怪物忽略这些气味 */
    scents_ignored?: string[];
    /** (字符串数组) 怪物由哪些材料构成 */
    material?: MaterialID[];
    /** (字符串) 怪物的身体物质状态, 例如 SOLID, LIQUID, GAS, PLASMA, NULL */
    phase?: Phase;
    /** (整数) 每次常规攻击的移动次数。如果未定义, 默认为100 */
    attack_cost?: number;
    /** (整数) 特殊和远程攻击的额外怪物难度  
     *  如果超过 30, 则击杀将记录在纪念日志中。  
     *  怪物难度是根据预期的近战伤害、闪避、护甲、生命值、速度、士气、攻击性和视野范围来计算的。  
     *  该计算不能很好地处理远程特殊攻击或独特的特殊攻击, 可以使用基线难度来解释这一点。  
     *    2    有限的防御能力, 如掠夺者的泰瑟枪, 或弱的特殊能力, 如尖叫僵尸的特殊能力, 以警告附近的怪物, 或攻击的小奖励, 如毒药或毒液。  
     *    5    比喷吐僵尸的吐痰弱的有限范围攻击, 或者强大的防御能力, 如震撼僵尸的回击或酸僵尸的酸喷雾。  
     *    10   强大的远程攻击, 如喷吐僵尸的喷水或炮塔的 9 毫米冲锋枪。  
     *    15   强大的远程攻击, 带有额外的危险, 例如腐蚀性僵尸的口水  
     *    20   非常强大的远程攻击, 例如激光炮塔或军用炮塔的5.56毫米步枪, 或者强大的特殊能力, 例如僵尸死灵法师复活其他僵尸的能力。  
     *    30   即使对于装甲角色来说也是致命的远程攻击, 例如反物质炮塔的 0.50 BMG 步枪。  
     */
    diff?: number;
    /** (整数) 初始侵略性, 当怪物达到10时会变得敌对 */
    aggression?: number;
    /** (整数) 初始士气, 当 (当前侵略性 + 当前士气) < 0 时, 怪物会逃跑 */
    morale?: number;
    /** (布尔值) 如果为真, 怪物在生气时总是会攻击角色 */
    aggro_character?: boolean;
    /** (浮点数) 对于坐骑, 坐骑到骑手重量的最大比率, 例如 0.2 表示 <=20% */
    mountable_weight_ratio?: number;
    /** (整数) 怪物在近战战斗中的技能, 从0-10, 其中4是平均水平的怪物 */
    melee_skill?: number;
    /** (整数) 怪物躲避攻击的技能 */
    dodge?: number;
    /** (对象数组) 在怪物近战攻击时添加到骰子滚动上的伤害实例列表 */
    melee_damage?: MosnterMeleeDamage[];
    /** (整数) 在怪物近战攻击时确定砸伤伤害的骰子滚动次数 */
    melee_dice?: number;
    /** (整数) 每个由 melee_dice 滚动的骰子的面数 */
    melee_dice_sides?: number;
    /** (整数) 抓取效果的强度, 从1到n, 模拟n个常规僵尸抓取 */
    grab_strength?: number;
    /** (整数) 通过与这个怪物战斗可以学习的最大近战技能等级。如果未定义, 默认为 melee_skill + 2 */
    melee_training_cap?: number;
    /** (对象) 怪物对不同类型伤害的保护 */
    armor?: Record<DamageTypeID,number>;
    /** (对象数组) 怪物保护中的弱点 */
    weakpoints?: MonWeakpoint[];
    /** (字符串数组) 应用于怪物的弱点集 */
    weakpoint_sets?: string[];
    /** (浮点数) 当电伤害发生时, 应用电击的机会的乘数 (目前没有实现其他效果)  */
    status_chance_multiplier?: number;
    /** (对象或字符串数组) 怪物所属的弱点家族 */
    families?: MonWeakpointFamilie[];
    /** (整数) 全日光下的视野范围, 其中50是典型的最大值 */
    vision_day?: number;
    /** (整数) 完全黑暗中的视野范围, 例如: coyote 5, bear 10, sewer rat 30, flaming eye 40 */
    vision_night?: number;
    /** (整数) 怪物在自己和当前被追踪的敌人或被跟随的领导者之间保持的瓦片数量。默认为3 */
    tracking_distance?: number;
    /** (字符串数组) 这个怪物不会触发的陷阱的 trap_id。默认行为是触发所有陷阱 */
    trap_avoids?: string[];
    /** (浮点数) 怪物被动发出的光量, 必须大于0才能产生任何效果 */
    luminance?: number;
    /** (字符串或物品组) 当怪物死亡时生成的物品组 */
    death_drops?:ItemGroupID|InlineItemGroup;
    /**死亡效果  
     * (字符串数组) 怪物死亡时的行为。参见 JSON_FLAGS  
     */
    death_function?: {
        corpse_type?: "NO_CORPSE";
        message?:string;
        effect?:FakeSpell;
    };
    /** (对象数组) 怪物发出的场以及频率 */
    emit_fields?:  {
        emit_id  : EmitID;
        delay    : (Time);
    }[];
    /** (整数) 怪物每回合恢复的生命值数量 */
    regenerates?: number;
    /** (布尔值) 如果怪物在黑暗中快速恢复, 则为真 */
    regenerates_in_dark?: boolean;
    /** (效果 id, 整数) 当怪物具有此效果时, 通过整数值修改恢复。例如, -5 将每回合 40hp 的恢复值减少到 35hp。不能将恢复减少到 0 以下 */
    regeneration_modifiers?: [EffectID, number];
    /** (布尔值) 如果怪物在满血时会停止逃跑以恢复愤怒和士气, 则为真 */
    regen_morale?: boolean;
    /** (对象数组) 怪物拥有的特殊攻击 */
    special_attacks?: any[];
    /** (字符串数组) 像 SEES, HEARS, SMELLS, STUMBLES, REVIVES 这样的任意数量的属性 */
    flags?: MonsterFlag[];
    /** (字符串数组) 降低怪物士气的触发器 (参见 JSON_FLAGS.md)  */
    fear_triggers?: string[];
    /** (字符串数组) 提高怪物侵略性的触发器 (与 fear 相同的标志)  */
    anger_triggers?: string[];
    /** (字符串数组) 降低怪物侵略性的触发器 (与 fear 相同的标志)  */
    placate_triggers?: string[];
    /** (字符串数组) 如果与怪物开启对话, 会出现的对话主题 */
    chat_topics?: TalkTopicID[];
    /** (字符串) 当怪物友好时, 可以转换为的物品 (例如, 拆解炮塔)  */
    revert_to_itype?: string;
    /** (字符串) 如果这个怪物是一个带有内置武器的可骑乘机甲, 这是武器 id */
    mech_weapon?: string;
    /** (整数) 如果这个怪物是一个可骑乘的机甲, 这是它给骑手的力量加成 */
    mech_str_bonus?: number;
    /** (字符串) 如果这个怪物是一个可骑乘的机甲, 这是电池的 id。不支持对象或数组 (即只有一个电池 id)  */
    mech_battery?: string;
    /** (对象) 新生成的怪物开始时拥有的弹药 */
    starting_ammo?: Record<AnyItemID,number>;
    /** (对象) 这个怪物生成时带有的坐骑特定物品。接受绑定、马具、护甲和存储的条目 */
    mount_items?: MonMountItem;
    /** (布尔值或对象) 如果怪物不升级, 则为 false, 或者定义一个升级的对象 */
    upgrades?: false | MonUpgrade;
    /** (对象) 怪物的繁殖周期和时间 */
    reproduction?: MonReproduction;
    /** (字符串数组) 这个怪物能够繁殖的季节 */
    baby_flags?: string[];
    /** (数组) 当怪物被攻击时触发的特殊防御 */
    special_when_hit?: any[];
    /** (对象数组) 当怪物成功攻击时应用于被攻击生物的效果 */
    attack_effs?: MonAttackEffect[];
    /** (对象) 怪物如何找到路径、打开门、避开陷阱或破坏障碍 */
    path_settings?: MonPathSettings;
    /** (对象) 动物或怪物留下的粪便或排泄物 */
    biosignature?: any;
    /** (字符串) 描述可以从尸体中收获什么的 "harvest" 类型的 ID 
     * "exempt" 为无收获
     */
    harvest?: string;
    /** (字符串) 这个怪物死后变成僵尸的 mtype_id */
    zombify_into?: MonsterID;
    /** (字符串) 这个怪物被孢子真菌化时变成什么 mtype_id */
    fungalize_into?: MonsterID;
    /** (对象数组) 当剪下这个怪物时产生的物品 */
    shearing?: MonShearing[];
    /** (字符串) 描述怪物速度字符串的 speed_description 类型的 ID */
    speed_description?: string;
    /** (对象) 关于将这个怪物喂食以将其变成宠物的数据 */
    petfood?: any;
    /** (整数) 对于具有 ABSORB_ITEMS 特殊攻击的怪物。确定必须吸收多少毫升才能获得 1 HP。默认 250 */
    absorb_ml_per_hp?: number;
    /** (浮点数) 对于具有 ABSORB_ITEMS 特殊攻击的怪物。确定基于被吸收物品的体积吸收物品的移动成本。默认 0.025f */
    absorb_move_cost_per_ml?: number;
    /** (整数) 对于具有 ABSORB_ITEMS 特殊攻击的怪物。设置吸收物品的最小移动成本, 无论消耗物品的体积大小。默认 1 */
    absorb_move_cost_min?: number;
    /** (整数) 对于具有 ABSORB_ITEMS 特殊攻击的怪物。设置吸收物品的最大移动成本, 无论消耗物品的体积大小。-1 表示无限制。默认 -1 */
    absorb_move_cost_max?: number;
    /** (字符串数组) 对于具有 ABSORB_ITEMS 特殊攻击的怪物。指定怪物将寻求吸收的材料类型。只要物品由列表中的至少一种材料制成, 就会匹配该物品。如果未指定, 怪物将吸收所有材料 */
    absorb_material?: MaterialID[];
    /** (整数) 对于具有 SPLIT 特殊攻击的怪物。确定分裂成自身副本时的移动成本 */
    split_move_cost?: number;
};

/**怪物的身体类型 列表 */
export const MonsterBPList = [
    "angel"         , // 一个有翅膀的人
    "bear"          , // 一种可以站立在后腿上的四足动物
    "bird"          , // 一种有两只翅膀的两足动物
    "blob"          , // 一团物质
    "crab"          , // 一种有两只大臂的多足动物
    "dog"           , // 一种头部高于身体线的四足动物, 颈部较短
    "elephant"      , // 一种非常大的四足动物, 头部和躯干大, 四肢等长
    "fish"          , // 一种体型流线型, 有鳍的水生动物
    "flying insect" , // 一种有头部和两个身体部分以及翅膀的六足动物
    "frog"          , // 一种有颈部的四足动物, 后腿非常大, 前腿较小
    "gator"         , // 一种身体非常长, 腿短的四足动物
    "horse"         , // 一种头部高于身体线的四足动物, 颈部较长
    "human"         , // 一种有两只手臂的双足动物
    "insect"        , // 一种有头部和两个身体部分的六足动物
    "kangaroo"      , // 一种利用大尾巴保持稳定的五足动物, 后腿非常大, 前臂较小
    "lizard"        , // 'gator' 的小型形式
    "migo"          , // migo 的任何形式
    "pig"           , // 一种头部与身体在同一线上的四足动物
    "spider"        , // 一种头部小, 腹部大的八足动物
    "snake"         , // 一种身体长, 无肢体的动物
] as const;
/**怪物的身体类型 */
export type MonBP = typeof MonsterBPList[number];

/**怪物初始拥有的物品 */
export type MonMountItem = Partial<{
    tied    ?: AnyItemID;
    tack    ?: AnyItemID;
    armor   ?: AnyItemID;
    storage ?: AnyItemID;
}>

/**怪物近战伤害 */
export type MosnterMeleeDamage = {
    /** 伤害类型 */
    damage_type: DamageTypeID;
    /** 伤害量 */
    amount: number;
    /** 伤害实例忽略的护甲量 */
    armor_penetration: number;
    /** 护甲穿透的乘数 */
    armor_multiplier: number;
    /** 伤害量的乘数 */
    damage_multiplier: number;
}

/** (对象数组, 可选) 怪物保护中的弱点 */
export type MonWeakpoint = {
    /** 弱点的 id  
     * 如果未指定, 默认为名称
     */
    id: string;
    /** 弱点的名称  
     * 用于命中消息  
     */
    name: string;
    /** 命中弱点的基础百分比概率  
     *  (例如, 覆盖率为 5 意味着命中弱点的基础概率为 5%)   
     */
    coverage: number;
    /** 将武器类型映射到常数覆盖率乘数的对象 */
    coverage_mult: MonWeakpointDiff;
    /** 将武器类型映射到难度值的对象。  
     *  难度在攻击者的技能上起到软 "门" 的作用。  
     *  如果攻击者的技能等于难度, 覆盖率将减少到 50%  
     */
    difficulty: MonWeakpointDiff;
    /** 将伤害类型映射到在击中弱点时对怪物基础保护的乘数的对象 */
    armor_mult: MonWeakpointDmg;
    /** 将伤害类型映射到在乘数之后应用于怪物保护的平坦惩罚的对象 */
    armor_penalty: MonWeakpointDmg;
    /** 将伤害类型映射到在击中弱点时对护甲后伤害的乘数的对象 */
    damage_mult: MonWeakpointDmg;
    /** 将伤害类型映射到在对弱点进行关键打击时对护甲后伤害的乘数的对象。如果未指定, 默认为 damage_mult */
    crit_mult: MonWeakpointDmg;
    /** 应用于怪物以命中弱点所需的效果名称列表  
     * 只有怪物有以下状态时, 才可命中此弱点  
      */
    required_effects: EffectID[];
    /** 可能通过击中弱点应用于怪物的效果对象列表 */
    effects: MonWeakpointEff[];
}
/**怪物弱点针对不同类型武器的难度设置 */
export type MonWeakpointDiff = {
    /**任意 如果没有提供更具体的内容, 则为默认值。 */
    all?: number;
    /** 用于近战砸击武器的值。 */
    bash?: number;
    /**用于近战切割武器的值。 */
    cut?: number;
    /**用于近战刺击武器的值。 */
    stab?: number;
    /**用于远程武器, 包括投射物和投掷武器。 */
    ranged?: number;
    /**近战武器 (bash、cut 和 stab) 的默认值。优先于 point 和 broad。 */
    melee?: number;
    /**针对尖锐武器 (stab 和 ranged) 的默认值。 */
    point?: number;
    /**针对宽阔武器 (bash 和 cut) 的默认值 */
    broad?: number;
}
/**怪物弱点针对不同伤害的设置 */
export type MonWeakpointDmg = {
    /**任意 如果没有提供更具体的内容, 则为所有字段的默认值。 */
    all?: number;
    /**物理伤害类型 (bash、cut、stab 和 bullet) 的默认值 */
    physical?: number;
    /**非物理伤害类型 (biological、acid、heat、cold 和 electric) 的默认值 */
    non_physical?: number;
} & Partial<Record<DamageTypeID,number>>
/**命中怪物弱点时产生的效果 */
export type MonWeakpointEff = {
    /** 效果类型 */
    effect: EffectID;
    /** 导致效果的概率 */
    chance: number;
    /** 效果持续时间。可以是一个 (min, max) 对或一个单一值 */
    duration: (Time) | [number, number];
    /** 效果是否是永久性的 */
    permanent: boolean;
    /** 效果的强度。可以是一个 (min, max) 对或一个单一值 */
    intensity: number | [number, number];
    /** 触发效果所需的伤害范围, 作为最大健康百分比 */
    damage_required: number;
    /** 如果玩家触发效果, 要打印的消息。应该带有一个模板参数, 引用怪物的名称 */
    message: string;
}
/**怪物的专长弱点
 * 字符串时为 proficiency
 */
export type MonWeakpointFamilie = {
    /**家人的身份证。如果未提供, 则默认为proficiency。 */
    id?: string;
    /**家庭对应的熟练度ID。 */
    proficiency?: string;
    /**如果攻击者熟练, 则对弱点技能的奖励。 */
    bonus?: number;
    /**如果攻击者缺乏熟练程度, 则会对弱点技能进行惩罚。 */
    penalty?: number;
}|string;

/**怪物的升级项 */
export type MonUpgrade = {
    /** (整数) 根据近似的指数进程, 一半的怪物在多少天内升级。它与进化缩放因子相乘 (在撰写本文时, 为4)  */
    half_life: number;
    /** (字符串, 可选) 升级后的怪物类型取自指定的组 */
    into_group?: string;
    /** (字符串, 可选) 升级后的怪物类型 */
    into?: string;
    /** (整数, 可选) 怪物需要多少天才能变成另一个怪物。不会随着进化因子的变化而变化 */
    age_grow?: number;
    /** (布尔值, 可选) 如果使用 into_group, 所选条目将根据条目的 pack_size 生成一定数量的怪物 */
    multiple_spawns?: boolean;
    /** (整数, 可选) 当 multiple_spawns 为真时是必需的。确定升级后的怪物可以在原始怪物多远的地方生成 */
    spawn_range?: number;
    /** (布尔值, 可选) 对于 into_group, 当 mon_null 被选择为组条目升级时, 如果此值为真, 则怪物将消失不见, 不留下任何痕迹。否则, 怪物会"自然死亡"。默认为 false */
    despawn_when_null?: boolean;
}

/**怪物的繁殖 */
export type MonReproduction = {
    /** (字符串, 可选) 对于生育幼崽的怪物, 繁殖时产生的怪物的 id。  
     * 你必须声明这个或 baby_egg 以使繁殖工作  
     */
    baby_monster?: MonsterID;
    /** (字符串, 可选) 对于产卵的怪物, 要生成的蛋类型的 id。  
     * 你必须声明这个或 "baby_monster" 以使繁殖工作。  
     *  (参见 JSON_INFO.md rot_spawn)  
     */
    baby_egg?: AnyItemID;
    /** (整数) 繁殖时产生的新生物或蛋的数量 */
    baby_count: number;
    /** (整数) 繁殖事件之间的天数 */
    baby_timer: number;
}

/**可以从怪物身上剪下的东西 */
export type MonShearing = {
    /**目标物品 */
    result: AnyItemID;
}&({
    /**数量 或 [最小, 最大] */
    amount: number|[number,number];
}|{
    /**以怪物体重百分比计算数量 1为100% */
    ratio_mass: number;
}|{
    /**以怪物体积百分比计算数量 1为100% */
    ratio_volume: number;
});

/**怪物的攻击效果 */
export type MonAttackEffect = {
    /** (字符串, 必需) 要应用的效果的 id */
    id: EffectID;
    /** (整数或一对整数, 可选) 效果应持续多久 (以回合为单位) 。当用一对值定义时, 持续时间将在这些值之间随机化 */
    duration?: (Time) | [Time, Time];
    /** (整数或一对整数, 可选) 效果应以何种强度应用, 当定义为一对时, 强度将在它们之间随机化。不能覆盖通过 int_dur_factor 从其持续时间派生其强度的效果 */
    intensity?: number | [number, number];
    /** (布尔值, 可选) 效果是否应用于被击中的身体部位而不是下面设置的部位 */
    affect_hit_bp?: boolean;
    /** (字符串, 可选) 应用效果的身体部位。默认是将效果应用于整个身体。  
     * 注意, 某些效果可能需要特定的身体部位 (例如 "hot") ,   
     * 而其他效果可能需要整个身体 (例如 "meth")   
     */
    bp?: BodyPartParam;
    /** (布尔值, 可选) 效果是否是永久性的, 在这种情况下, 将忽略 "duration"。默认为非永久性 */
    permanent?: boolean;
    /** (整数, 可选) 效果被应用的机会 */
    chance?: number;
    /** (字符串, 可选) 当效果应用于玩家时打印的消息。支持使用语法 %s = <怪物的名字> 的动态行 */
    message?: string;
}

/** (对象, 可选) 怪物可能找到路径、打开门、避开陷阱或破坏障碍物的方式 */
export type MonPathSettings = {
    /** (整数, 默认为 0) 路径的最大直接距离 */
    max_dist: number;
    /** (整数, 默认为 -1) 路径的最大总长度 */
    max_length: number;
    /** (整数, 默认为 -1) 怪物通过障碍物时的力量 */
    bash_strength: number;
    /** (布尔值, 默认为 false) 怪物知道如何打开门 */
    allow_open_doors: boolean;
    /** (布尔值, 默认为 false) 怪物避免踩入陷阱 */
    avoid_traps: boolean;
    /** (布尔值, 默认为 true) 怪物可能爬楼梯 */
    allow_climb_stairs: boolean;
    /** (布尔值, 默认为 false) 怪物可能避开像铁丝网这样尖锐的东西 */
    avoid_sharp: boolean;
}





/**怪物可用的Flag 列表 */
export const MonsterFlagList = [
    "SEES"              , //拥有视觉
    "HEARS"             , //拥有听觉
    "NOHEAD"            , //没有脑袋
    "HARDTOSHOOT"       , //不易被远程攻击命中
    "FLIES"             , //这个怪物会飞
    "PRIORITIZE_TARGETS", //这个怪物会依据威胁程度处理目标
    "NO_BREATHE"        , //这个怪物不需要呼吸
    "NOGIB"             , //这个怪物被超量伤害杀死时不会爆成碎块
] as const;
/**怪物可用的Flag */
export type MonsterFlag = (typeof MonsterFlagList)[number];
