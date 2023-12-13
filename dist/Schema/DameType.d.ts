import { EocID } from "./Eoc";
import { FlagID } from "./Flag";
import { CddaID, Color, DescText } from "./GenericDefine";
import { SkillID } from "./Skill";
/**预定义的伤害类型 列表 */
export declare const DefineDamageTypeIDList: readonly ["stab", "bash", "cut", "bullet", "acid", "electric", "heat", "cold", "biological", "pure", "afs_plasma", "xe_cold_iron_cut_damage", "xe_cold_iron_cut_damage", "xe_cold_iron_bash_damage", "xe_cold_iron_stab_damage", "psi_telekinetic_damage", "psi_telepathic_damage", "psi_teleporter_teleporting_damage", "psi_enervation_damage"];
/**预定义的伤害类型 */
export type DefineDamageTypeID = typeof DefineDamageTypeIDList[number];
/**伤害类型ID */
export type DamageTypeID = DefineDamageTypeID | CddaID<"DT">;
/**伤害类型 */
export type DamageType = {
    type: "damage_type";
    id: DamageTypeID;
    /** 伤害类型的名称, 如在物品信息屏幕中的保护值中显示 */
    name: (DescText);
    /** (可选) 确定处理此伤害类型时使用的技能 (默认为none) */
    skill?: SkillID;
    /** (可选) 将此伤害类型标识为来自物理源 (默认为false) */
    physical?: boolean;
    /** (可选) 将此伤害类型标识为来自近战武器和攻击 (默认为false) */
    melee_only?: boolean;
    /** (可选) 将此伤害类型标识为来自尖锐或尖端的武器或工具 (默认为false) */
    edged?: boolean;
    /** (可选) 此伤害类型对应于环境源。当前影响物品或护甲是否包含对此伤害类型的环境抗性 (默认为false) */
    environmental?: boolean;
    /** (可选) 确定材料是否必须为此伤害类型定义抗性 (默认为false) */
    material_required?: boolean;
    /** (可选) 确定此伤害类型是否应该有助于怪物的难度等级 (默认为false) */
    mon_difficulty?: boolean;
    /** (可选) 将此伤害类型标识为无法抵抗的 (即“纯”伤害) (默认为false) */
    no_resist?: boolean;
    /**(可选) 一个带有两个可选字段的对象: "character" 和 "monster"。
     * 两个内部字段分别列出了一组角色标志和怪物标志, 这些标志会使角色或怪物对此伤害类型免疫
     */
    immune_flags?: {
        character?: FlagID[];
        monster?: FlagID[];
    };
    /** (可选) 确定在法术中使用时哪种颜色标识此伤害类型 (默认为"black") */
    magic_color?: Color;
    /**(可选) 一个数组, 确定应如何计算此伤害类型在护甲保护和怪物抗性值方面的计算。
     * 第一个值是源伤害类型, 第二个值是应用于源伤害类型计算的修饰符
     */
    derived_from?: [DamageTypeID, number];
    /**(可选) 当怪物或角色用这种伤害类型击中另一个怪物或角色时激活的效果条件数组。
     * 在这种情况下, u 指的是伤害源, npc 指的是伤害目标
     */
    onhit_eocs?: EocID[];
    /**(可选) 当怪物或角色从另一个怪物或角色那里接受这种伤害类型的攻击时激活的效果条件数组。
     * 在这种情况下, u 指的是伤害源, npc 指的是伤害目标。还可以访问一些上下文值
     */
    ondamage_eocs?: EocID[];
};
/**伤害信息顺序 */
export type DamageInfoOrder = {
    type: "damage_info_order";
    /** 唯一标识符, 必须对应一个已存在的 damage_type */
    id: DamageTypeID;
    /**(可选) 确定在保护值中显示此伤害类型的详细程度。有效值为 "detailed", "basic" 和 "none" (默认为 "none")
     */
    info_display?: "detailed" | "basic" | "none";
    /**(可选) 描述如何应用此伤害类型的动词 (例如: "bashing") 。在物品信息的近战部分使用
     */
    verb?: (DescText);
    /**(可选) 确定在物品信息的指定部分中此伤害类型的顺序和可见性  */
    bionic_info?: DmgInfo;
    /**(可选) 确定在物品信息的指定部分中此伤害类型的顺序和可见性  */
    protection_info?: DmgInfo;
    /**(可选) 确定在物品信息的指定部分中此伤害类型的顺序和可见性  */
    pet_prot_info?: DmgInfo;
    /**(可选) 确定在物品信息的指定部分中此伤害类型的顺序和可见性  */
    melee_combat_info?: DmgInfo;
    /**(可选) 确定在物品信息的指定部分中此伤害类型的顺序和可见性  */
    ablative_info?: DmgInfo;
};
/** 确定在物品信息的指定部分中此伤害类型的顺序和可见性  */
export type DmgInfo = {
    /** 确定在此部分中将其显示在伤害类型列表的何处 */
    order?: number;
    /** 确定是否在此部分显示此伤害类型 */
    show_type?: boolean;
};
