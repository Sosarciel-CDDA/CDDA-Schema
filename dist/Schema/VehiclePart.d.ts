import { AmmunitionTypeID } from "./AmmiunitionType";
import { DamageTypeID } from "./DameType";
import { FieldID } from "./Field";
import { CddaID, Color, CopyfromVar, DescText, Time, Volume } from "./GenericDefine";
import { AnyItemID, GenericID } from "./Item";
import { ItemGroupEntrie, ItemGroupID } from "./ItemGroup";
import { ReqUsing } from "./Requirement";
import { SkillID } from "./Skill";
import { ToolQualityID } from "./ToolQuality";
/**载具部件ID */
export type VehiclePartID = CddaID<"VP">;
/**载具部件 */
export type VehiclePart = CopyfromVar<{
    type: "vehicle_part";
    /**唯一标识符, 不能包含 # 符号 */
    id: VehiclePartID;
    /**显示名称 */
    name: (DescText);
    /** (可选) 如果此部分没有图块, 向图块集提供提示, 使用 looks_like 图块。 */
    looks_like: string;
    /**功能取决于部件类型:  */
    bonus: number;
    /**部件工作时使用的颜色 */
    color: Color;
    /**部件损坏时使用的颜色 */
    broken_color: Color;
    /**可选。确定部件是否可以安装在给定瓦片上的检查之一。如果任何现有部件占用同一位置, 则不能安装部件。 */
    location: "fuel_source";
    /** (可选, 默认 = 100) 当此部件击中某物时, 所造成的伤害乘数, 以百分比表示。越高 = 对被击中的生物造成更多的伤害 */
    damage_modifier?: number;
    /**部件在损坏前可以承受多少伤害 */
    durability: number;
    /**安装此车辆部件时的描述 */
    description: (DescText);
    /** (可选, 默认 = "NULL") 部件消耗的燃料/弹药类型, 作为物品 id */
    fuel_type?: AmmunitionTypeID;
    /**部件的电力使用量, 以瓦特为单位。负值表示消耗电力, 正值表示产生电力。
     * 通常, 电力消耗还需要 ENABLED_DRAINS_EPOWER 标志, 并且物品需要打开。
     * 太阳能板的电力产生受到太阳角度的影响。当太阳在 90 度时, 面板产生全部电力。
     */
    epower?: number;
    /**用于安装此部件的物品, 以及移除此部件时获得的物品。 */
    item: GenericID;
    /**覆盖 "item", 移除此部件时返回的物品。 */
    remove_as?: GenericID;
    /**你的机械技能必须至少达到这个级别才能安装这个部件 */
    difficulty: number;
    /**当车辆部件被销毁时, 此物品组中的物品 (参见 ITEM_SPAWN.md) 将在地面上的部件周围生成。
     * 或者只是物品组的 id。
     */
    breaks_into?: ItemGroupEntrie[] | ItemGroupID;
    /**与部件相关的标志 */
    flags?: VPFlag[];
    /** (可选) 部件的特殊安装、移除或修理要求。
     * 每个字段都由一个对象组成, 字段为 "skills"、"time" 和 "using"。
     */
    requirements?: {
        install?: VPRequirement;
        removal?: VPRequirement;
        repair?: VPRequirement;
    };
    /** (可选) 安装此部件的车辆的控制要求 */
    control_requirements?: {
        /** 飞行在空中的要求 */
        air?: ControlReq;
        /** 在地面上运行的要求 */
        land?: ControlReq;
    };
    /** 此部件提供的工艺工具 */
    pseudo_tools?: {
        /**目标工具 */
        id: AnyItemID;
        /**热键 */
        hotkey?: string;
    }[];
    /** 此vpart在折叠形式下的体积, 未定义或null禁用折叠 */
    folded_volume?: (Volume);
    /** 折叠所需的工具 itype_ids */
    folding_tools?: AnyItemID[];
    /** 折叠此部件的时间 */
    folding_time?: (Time);
    /** 展开所需的工具 itype_ids */
    unfolding_tools?: AnyItemID[];
    /** 展开此部件的时间 */
    unfolding_time?: (Time);
    /** 伤害减少；参见"部件阻力"。如果未指定, 则设为零 */
    damage_reduction: Partial<Record<DamageTypeID | "non_physical" | "physical" | "all", number>>;
    /** (可选) 一个列表, 每个列表都是一个工具质量和质量等级, 该车辆部件提供 */
    qualities?: [ToolQualityID, number][];
    /** (可选) 此部件可以转换地形, 如犁 */
    transform_terrain?: {
        /** 可以转换的地形的标志列表 */
        pre_flags: ["PLOWABLE"];
        /** (可选, 默认为"t_null") 结果地形（如果有） */
        post_terrain: "t_dirtmound";
        /** (可选, 默认为"f_null") 结果家具（如果有） */
        post_furniture: "f_boulder";
        /** (可选, 默认为"fd_null") 结果字段（如果有） */
        post_field?: FieldID;
        /** (可选, 默认为0) 字段的强度（如果有） */
        post_field_intensity?: number;
        /** (可选, 默认为0转) 字段的生存时间（如果有） */
        post_field_age?: (Time);
    };
    /** 要生成的变体基础 (参见下文) */
    variants_bases: {
        /**变体ID */
        id: string;
        /**变体的显示名 */
        label: (DescText);
    }[];
    /**部件变体 */
    variants: {
        /** 变体id (必须在此部件中唯一) */
        id: "front";
        /** 用于ui显示的标签 */
        label: "Front";
        /** 部件未破裂时的符号 */
        symbols: "oooooooo";
        /** 部件破裂时的符号 */
        symbols_broken: "x";
    }[];
    /**允许挂载的工具 */
    allowed_tools?: AnyItemID[];
}>;
/**车辆部件的操作需求 */
type VPRequirement = {
    /**"skills" 是一个列表, 每个列表都是一个技能名称和技能等级。 */
    skills: [SkillID, number][];
    /**"time" 是一个字符串, 指定执行操作的时间。 */
    time: (Time);
    /**"using" 是一个列表, 每个列表都是一个制作要求。 */
    using: ReqUsing;
};
/**控制要求 */
type ControlReq = {
    /** "skills" 是一个列表, 每个列表都是一个技能名称和技能等级 */
    skills?: [SkillID, number][];
    /** "proficiencies" 是技能名称的列表 prof_helicopter_pilot */
    proficiencies?: string[];
};
/**车辆部件flag 列表 */
export declare const VPFlagList: readonly ["ADVANCED_PLANTER", "AIRCRAFT_REPAIRABLE_NOPROF", "AISLE_LIGHT", "AISLE", "ALTERNATOR", "ANCHOR_POINT", "ANIMAL_CTRL", "APPLIANCE", "ARCADE", "ARMOR", "ATOMIC_LIGHT", "AUTOPILOT", "BATTERY_MOUNT", "BED", "BEEPER", "BELTABLE", "BIKE_RACK_VEH", "BOARDABLE", "CAMERA_CONTROL", "CAMERA", "CAPTURE_MOSNTER_VEH", "CARGO_LOCKING", "CARGO", "CHIMES", "CIRCLE_LIGHT", "CONE_LIGHT", "CONTROLS", "CONTROL_ANIMAL", "COOLER", "COVERED", "CTRL_ELECTRONIC", "CURTAIN", "DISHWASHER", "DOME_LIGHT", "DOOR_MOTOR", "ENABLED_DRAINS_EPOWER", "ENGINE", "EVENTURN", "EXTRA_DRAG", "E_ALTERNATOR", "E_COLD_START", "E_COMBUSTION", "E_DIESEL_FUEL", "E_HEATER", "E_HIGHER_SKILL", "E_STARTS_INSTANTLY", "FLAT_SURF", "FLUIDTANK", "FREEZER", "FRIDGE", "FUNNEL", "HALF_CIRCLE_LIGHT", "HANDHELD_BATTERY_MOUNT", "HARNESS_bodytype", "HORN", "INITIAL_PART", "INTERNAL", "LOCKABLE_CARGO", "MUFFLER", "MULTISQUARE", "MUSCLE_ARMS", "MUSCLE_LEGS", "NAILABLE", "NEEDS_BATTERY_MOUNT", "NEEDS_HANDHELD_BATTERY_MOUNT", "NEEDS_WHEEL_MOUNT_HEAVY", "NEEDS_WHEEL_MOUNT_LIGHT", "NEEDS_WHEEL_MOUNT_MEDIUM", "NEEDS_WINDOW", "NO_INSTALL_HIDDEN", "NO_INSTALL_PLAYER", "NO_LEAK", "NO_MODIFY_VEHICLE", "NO_REPAIR", "NO_UNINSTALL", "OBSTACLE", "ODDTURN", "ON_CONTROLS", "ON_ROOF", "OPAQUE", "OPENABLE", "OPENCLOSE_INSIDE", "OVER", "PERPETUAL", "PLANTER", "PLOW", "POWER_TRANSFER", "PROTRUSION", "REACTOR", "REAPER", "RECHARGE", "REMOTE_CONTROLS", "REVERSIBLE", "ROOF", "SCOOP", "SEATBELT", "SEAT", "SECURITY", "SHARP", "SHOCK_ABSORBER", "SIMPLE_PART", "SMASH_REMOVE", "SOLAR_PANEL", "SPACE_HEATER", "STABLE", "STEERABLE", "STEREO", "TRACKED", "TRACK", "TRANSFORM_TERRAIN", "TURRET_CONTROLS", "TURRET_MOUNT", "TURRET", "UNMOUNT_ON_DAMAGE", "UNMOUNT_ON_MOVE", "UNSTABLE_WHEEL", "VARIABLE_SIZE", "VISION", "WALL_MOUNTED", "WASHING_MACHINE", "WATER_WHEEL", "WHEEL", "WIDE_CONE_LIGHT", "WINDOW", "WIND_POWERED", "WIND_TURBINE", "WIRING", "WORKBENCH"];
/**车辆部件flag */
export type VPFlag = typeof VPFlagList[number];
export {};
