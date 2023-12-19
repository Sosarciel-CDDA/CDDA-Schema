import { AmmunitionType } from "./AmmiunitionType";
import { Effect } from "./Effect";
import { Enchantment } from "./Enchantment";
import { Eoc, IDObj } from "./Eoc";
import { Flag, FlagID } from "./Flag";
import { AmmoID, AnyItem, AnyItemID } from "./Item";
import { ItemGroup } from "./ItemGroup";
import { MathFunction } from "./MathFuncion";
import { Monster } from "./Monster";
import { NpcClass } from "./NpcClass";
import { NpcInstance } from "./NpcInstance";
import { OverlayOrdering } from "./OverlayOrdering";
import { SoundEffect } from "./SoundEffect";
import { Spell } from "./Spell";
import { MaterialID } from "./Material";
import { MissionDefinition } from "./MissionDefinition";
import { Mutation } from "./Mutation";
import { DamageInfoOrder, DamageType, DamageTypeID } from "./DameType";
import { AmmoEffect } from "./AmmoEffect";
import { ModTileset } from "./ModTileset";
import { ActivityType } from "./ActivityType";
import { VehiclePart } from "./VehiclePart";
import { ToolQuality } from "./ToolQuality";
import { TalkTopic } from "./TalkTopic";
import { Requirement } from "./Requirement";
/**描述性文本 */
export type DescText = string | {
    /**单数名 */
    str?: string;
    /**复数名 */
    str_pl?: string;
    /**单复数共用名 */
    str_sp?: string;
    /**翻译上下文 */
    ctxt?: string;
};
/**辅助Schema解析的字符串构造数字 */
type SchemaNumber = `${number}${"." | ""}${number | ""}`;
/**重量 */
export type Weight = number | `${SchemaNumber} ${"kg" | "g"}`;
/**体积 */
export type Volume = number | `${SchemaNumber} ${"L" | "ml"}`;
/**长度 */
export type Length = number | `${SchemaNumber} ${"mm" | "cm" | "m" | "km"}`;
/**能量 */
export type Energy = number | `${SchemaNumber} ${"mJ" | "kJ"}`;
/**能耗 */
export type Power = number | `${SchemaNumber} ${"mW"}`;
/**价格 */
export type Price = number | `${SchemaNumber} ${"USD" | "cent" | "kUSD"}`;
/**时间 PERMANENT 为永久 */
export type Time = number | `${SchemaNumber} ${"s" | "m" | "h" | "d"}` | "PERMANENT";
/**可用的颜色列表 */
export declare const ColorList: readonly ["black", "red", "green", "brown", "blue", "magenta", "cyan", "light_gray", "dark_gray", "light_red", "light_green", "yellow", "light_blue", "pink", "light_cyan", "white"];
/**可用的颜色 */
export type Color = typeof ColorList[number];
/**必要的肢体组 */
export declare const VitalBPList: readonly ["torso", "head"];
/**必要的肢体 */
export type VitalBP = typeof VitalBPList[number];
/**四肢/主要肢体组 */
export declare const LimbBPList: readonly ["leg_l", "leg_r", "arm_l", "arm_r", "torso", "head"];
/**四肢/主要肢体 */
export type LimbBP = typeof LimbBPList[number];
/**子肢体组 */
export declare const SubBPList: readonly ["foot_l", "foot_r", "hand_l", "hand_r"];
/**子肢体 */
export type SubBP = typeof SubBPList[number];
/**自定义的肢体
 */
export type CustBP = CddaID<"BP">;
/**自定义的ID
 * @TJS-type string
 */
export type CddaID<T extends string> = `${`${string}_` | ''}${T}_${string}` | SchemaString;
/**Copyfrom的保留字段 */
export type CopyfromResFD = "id" | "type";
/**可以复制的物体 */
export type CopyfromAble = {
    id: string;
    type: string;
};
/**Copyfrom的物品 */
export type CopyfromVar<T extends CopyfromAble> = (T & {
    "//"?: "uncopy";
}) | Copyfrom<T>;
/**copyfrom变体 */
export type Copyfrom<T extends CopyfromAble> = Pick<T, CopyfromResFD> & {
    "copy-from": T["id"];
    "//"?: "copy";
    /**删除原物品的某些元素 */
    delete?: Partial<Omit<T, CopyfromResFD>>;
    /**扩展原物品的某些元素 */
    extend?: Partial<Omit<T, CopyfromResFD>>;
    /**在原物品的某些元素上做数值调整 */
    relative?: Partial<Omit<T, CopyfromResFD>>;
    /**在原物品的某些元素上做数值倍率调整 */
    proportional?: Partial<Omit<T, CopyfromResFD>>;
    /**将原物品的某些材质替换 原材质:替换材质 */
    replace_materials?: Record<MaterialID, MaterialID>;
} & Partial<Omit<T, CopyfromResFD>>;
/**用于辅助解析只能补全的类型
 * 输出后替换为 ^.*$ 的 string 匹配
 */
export type SchemaString = `${string}SchemaString`;
/**组肢体 */
export declare const BodyPartList: readonly ["leg_l", "leg_r", "arm_l", "arm_r", "torso", "head", "foot_l", "foot_r", "hand_l", "hand_r"];
/**肢体 */
export type BodyPartID = typeof BodyPartList[number] | CustBP;
/**目标肢体参数
 * whole body为全身
 * RANDOM为随机
 */
export type BodyPartParam = IDObj<BodyPartID> | "RANDOM" | "whole body";
/**npc阵营 列表 */
export declare const DefineNpcFactionList: readonly ["your_followers", "no_faction"];
/**npc阵营 */
export type DefineNpcFaction = typeof DefineNpcFactionList[number];
/**怪物阵营 列表 */
export declare const DefineMonFactionList: readonly ["player", "human", "zombie", "passive_machine"];
/**怪物阵营 */
export type DefineMonFaction = typeof DefineMonFactionList[number];
/**容器 */
export type PocketData = {
    /**容器或弹夹 */
    pocket_type: "CONTAINER" | "MAGAZINE" | "MAGAZINE_WELL";
    /**此口袋可以容纳的最大体积, 所有包含的物品的总和 */
    max_contains_volume?: (Volume);
    /**此口袋可以容纳的最大重量, 所有容器物品的总重量 */
    max_contains_weight?: (Weight);
    /**可放入此口袋的物品的最小体积。 小于此尺寸的物品不能放入口袋中 */
    min_item_volume?: (Volume);
    /**可通过开口放入此口袋的物品的最大体积 */
    max_item_volume?: (Volume);
    /**可放入此口袋的物品的最大长度 (按其最长边)。 默认值为假设体积为立方体的对角线开口长度 (cube_root(vol)*square_root(2)) */
    max_item_length?: (Length);
    /**腐坏速度乘数 将物品放入此口袋中如何影响损坏。 小于1.0, 物品保存时间更长； 0.0 将无限期保留 */
    spoil_multiplier?: number;
    /**重量乘数 个口袋里的物品神奇地内部重量比外部重量轻 原版中的任何东西都不应该有一个weight_multiplier */
    weight_multiplier?: number;
    /**体积乘数 该口袋中的物品内部体积小于外部体积。 可用于有助于组织特定内容的容器, 例如用于管道胶带的纸板卷 */
    volume_multiplier?: number;
    /**表示在最佳条件下从口袋中取出物品所需的移动次数。 */
    moves?: number;
    /**默认 false。 如果为 true, 则该口袋的大小是固定的, 并且在填充时不会扩展。 玻璃罐是刚性的, 而塑料袋则不是。 */
    rigid?: boolean;
    /**默认 false。 如果属实, 则玩家无法使用该口袋 */
    forbidden?: boolean;
    /**在口袋开始膨胀之前可以放置物品的空间量。 仅当rigid = false 时才有效。 */
    magazine_well?: (Volume);
    /**默认 false。 如果属实, 可能含有液体。 */
    watertight?: boolean;
    /**默认 false。 如果属实, 可能含有气体。 */
    airtight?: boolean;
    /**默认 false。 如果属实, 该物品包含一个烧蚀板。 确保在可以添加的车牌类型上包含 flag_restriction。 */
    ablative?: boolean;
    /**默认 false。 如果为 true, 则只能将一堆物品放入此口袋内, 如果该物品不是 count_by_charges, 则只能放置一件物品。 */
    holster?: boolean;
    /**默认 false。 如果为 true, 则如果将此物品放入另一个物品中, 该口袋中的物品将会溢出 */
    open_container?: boolean;
    /**默认 false。 如果属实, 口袋可以保护里面的物品在扔进火里时不会爆炸。 */
    fire_protection?: boolean;
    /**将口袋限制为给定的弹药类型和数量。 这会覆盖强制性的体积、重量、水密和气密, 以使用给定的弹药类型。
     * 一个口袋可以容纳任意数量的独特弹药类型, 每种弹药类型的数量不同, 并且容器只能容纳一种类型 (截至目前)。 如果省略它, 它将是空的。
     * Record<(AmmoID)子弹类型 : (number)容纳数量}>
     */
    ammo_restriction?: Partial<Record<AmmoID, number>>;
    /**只有当物品具有与这些标志之一匹配的标志时, 才能将其放入此口袋中。 */
    flag_restriction?: FlagID[];
    /**只有这些物品 ID 才能放入此口袋中。 超越弹药和旗帜限制。 */
    item_restriction?: AnyItemID[];
    /**有主要由该材料制成的物品才能进入。 */
    material_restriction?: MaterialID[];
    /**如果口袋有 sealed_data, 则在物品生成时它将被密封。 口袋的密封版本将覆盖相同数据类型的未密封版本  */
    sealed_data?: Partial<PocketData>;
    /**如果口袋继承了标志, 则意味着里面的物品对拥有口袋本身的物品有贡献的任何标志。 */
    inherits_flags?: boolean;
};
/**远程武器伤害 */
export type RangeDamage = {
    /**伤害类型 */
    damage_type: DamageTypeID;
    /**伤害值 */
    amount: number;
    /**穿甲值 */
    armor_penetration?: number;
    /**枪管伤害 */
    barrels?: {
        /**如果枪管小于等于此长度则应用此伤害 */
        barrel_length: (Length);
        /**伤害 */
        amount: number;
    }[];
};
/**近战武器伤害 伤害类型 : 伤害值 不能为负数* */
export type MeleeDamage = Partial<Record<DamageTypeID, number>>;
/**爆炸 */
export type Explosion = {
    /**TNT 当量炸药的克数为单位测量爆炸威力, 影响伤害和射程
     * 强制性；爆炸的力量, 以TNT克数表示；管状炸弹约为300, 手榴弹 (无碎片)为240
     */
    power: number;
    /**距离因子
     * 爆炸衰减有多快, 接近1意味着每个瓷砖损失的"力量"较少,
     * 0.8意味着每个瓷砖损失20%的力量；默认0.75, 值应大于0但小于1
     */
    distance_factor?: number;
    /**爆炸可能产生的最大 (听觉)噪音。 */
    max_noise?: number;
    /**爆炸是否会留下火
     * 爆炸产生火焰, 与其功率、距离和距离因子有关
     */
    fire?: boolean;
    /**破片数据
     * 为数字时则为壳体总质量, 其余碎片变量设置为合理的默认值。
     */
    shrapnel?: ShrapnelData;
};
/**破片数据
 * 为数字时则为壳体总质量, 其余碎片变量设置为合理的默认值。
 */
export type ShrapnelData = {
    /**壳体质量
     * 壳体总质量, 壳体/功率比决定碎片速度。
     */
    casing_mass: number;
    /**碎片质量
     * 每个碎片的质量, 以克为单位。大碎片打得更重, 小碎片打得更频繁。
     */
    fragment_mass: number;
    /**恢复
     * 在着陆点掉落物品的百分比机会。
     */
    recovery?: number;
    /**掉落
     * 在着陆点掉落的物品
     */
    drop?: AnyItemID;
} | number;
/**物理状态 */
export type Phase = "solid" | "gas" | "liquid" | "plasma" | "null";
/**属性 列表 */
export declare const StatusList: readonly ["strength", "dexterity", "intelligence", "perception"];
/**属性 */
export type Status = typeof StatusList[number];
/**属性简写 列表 */
export declare const StatusSimpleList: readonly ["str", "dex", "int", "per"];
/**属性简写 */
export type StatusSimple = typeof StatusSimpleList[number];
/**社交技能 列表 */
export declare const SocialTypeList: readonly ["intimidate", "lie", "persuade"];
/**社交技能 */
export type SocialType = typeof SocialTypeList[number];
/**效果评价 列表 */
export declare const RatTypeList: readonly ["good", "neutral", "bad", "mixed"];
/**效果评价 */
export type RatType = typeof RatTypeList[number];
/**任何Cdda的Json */
export type AnyCddaJson = AnyItem | Eoc | Mutation | DamageType | DamageInfoOrder | AmmunitionType | Enchantment | Flag | ItemGroup | Monster | NpcClass | NpcInstance | OverlayOrdering | SoundEffect | Requirement | Effect | Spell | MathFunction | AmmoEffect | MissionDefinition | ModTileset | ActivityType | VehiclePart | ToolQuality | TalkTopic;
/**任何Cdda的Json 组成的数组*/
export type AnyCddaJsonList = (AnyCddaJson)[];
export {};
