import { AmmunitionTypeID } from "./AmmiunitionType";
import { DamageTypeID } from "./DameType";
import { FieldID } from "./Field";
import { CddaID, Color, CopyfromVar, DescText, Time, Volume } from "./GenericDefine";
import { AnyItemID, GenericID } from "./Item";
import { ItemEntrieQuick, ItemGroupEntrie, ItemGroupID } from "./ItemGroup";
import { ReqUsing, RequirementID } from "./Requirement";
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
    breaks_into?: ItemGroupEntrie[]|ItemGroupID;
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
    damage_reduction: Partial<Record<DamageTypeID|"non_physical"|"physical"|"all",number>>;
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
    allowed_tools?:AnyItemID[];
}>;

/**车辆部件的操作需求 */
type VPRequirement = {
    /**"skills" 是一个列表, 每个列表都是一个技能名称和技能等级。 */
    skills: [SkillID, number][];
    /**"time" 是一个字符串, 指定执行操作的时间。 */
    time: (Time);
    /**"using" 是一个列表, 每个列表都是一个制作要求。 */
    using: ReqUsing;
}

/**控制要求 */
type ControlReq = {
    /** "skills" 是一个列表, 每个列表都是一个技能名称和技能等级 */
    skills?: [SkillID,number][];
    /** "proficiencies" 是技能名称的列表 prof_helicopter_pilot */
    proficiencies?: string[];
};

/**车辆部件flag 列表 */
export const VPFlagList = [
    "ADVANCED_PLANTER"             , // 这个种植器不会洒出种子, 也不会在无法挖掘的表面上损坏自己
    "AIRCRAFT_REPAIRABLE_NOPROF"   , // 允许玩家在没有任何熟练度的情况下安全地从飞机上取下部件
    "AISLE_LIGHT"                  , // 这个部件可以照亮周围环境
    "AISLE"                        , // 玩家可以以比正常速度更小的速度惩罚移动到这个部件上
    "ALTERNATOR"                   , // 为安装在车辆上的电池充电。只能安装在带有E_ALTERNATOR标志的部件上
    "ANCHOR_POINT"                 , // 允许安全地安装安全带
    "ANIMAL_CTRL"                  , // 可以驾驭动物, 需要HARNESS_bodytype标志来指定动物的体型
    "APPLIANCE"                    , // 这个车辆部件是一个家用电器, 并相应地处理
    "ARCADE"                       , // 当车辆部件处于活动状态时, 允许玩家玩游戏
    "ARMOR"                        , // 在碰撞中保护其上安装的其他车辆部件
    "ATOMIC_LIGHT"                 , // 这个部件可以照亮周围环境
    "AUTOPILOT"                    , // 这个部件将使车辆具有简单的自动驾驶功能
    "BATTERY_MOUNT"                , // 这个部件允许安装电池以便快速更换
    "BED"                          , // 玩家可以在这里睡觉
    "BEEPER"                       , // 当车辆向后移动时, 产生噪音
    "BELTABLE"                     , // 可以在这个部件上安装安全带
    "BIKE_RACK_VEH"                , // 可以用来合并相邻的单瓦宽的车辆, 或者将单瓦宽的车辆分离成自己的车辆
    "BOARDABLE"                    , // 玩家可以在车辆移动时安全地移动或站在这个部件上
    "CAMERA_CONTROL"               , // 这个部件允许使用安装在车辆上的摄像系统
    "CAMERA"                       , // 车辆部件, 允许通过安装的摄像系统查看
    "CAPTURE_MOSNTER_VEH"          , // 当安装在车辆上时, 可以用来捕获怪物
    "CARGO_LOCKING"                , // 这个货物区域对NPC不可访问。只能安装在带有LOCKABLE_CARGO标志的部件上
    "CARGO"                        , // 货物装载区
    "CHIMES"                       , // 使用时产生连续的噪音
    "CIRCLE_LIGHT"                 , // 打开时投射出一个圆形的光线
    "CONE_LIGHT"                   , // 打开时投射出一个锥形的光线
    "CONTROLS"                     , // 可以用来控制车辆
    "CONTROL_ANIMAL"               , // 这些控制器只能用来控制由动物拉动的车辆 (例如, 缰绳和其他马具)
    "COOLER"                       , // 有一个单独的命令来切换这个部件
    "COVERED"                      , // 防止货物部件中的物品发出任何光
    "CTRL_ELECTRONIC"              , // 控制车辆的电气和电子系统
    "CURTAIN"                      , // 可以安装在带有WINDOW标志的部件上, 并且功能与建筑物窗户上的百叶窗相同
    "DISHWASHER"                   , // 可以用来批量清洗肮脏的非软物品
    "DOME_LIGHT"                   , // 这个部件可以照亮周围环境
    "DOOR_MOTOR"                   , // 只能安装在带有OPENABLE标志的部件上
    "ENABLED_DRAINS_EPOWER"        , // 使车辆部件需要一些能量来开始工作。需要epower字段
    "ENGINE"                       , // 是一个引擎, 并为车辆的机械动力做出贡献
    "EVENTURN"                     , // 只在偶数轮次上
    "EXTRA_DRAG"                   , // 告诉车辆, 这个部件会减少引擎的动力
    "E_ALTERNATOR"                 , // 是一个引擎, 可以为发电机供电
    "E_COLD_START"                 , // 是一个引擎, 在寒冷的天气里启动的速度要慢得多
    "E_COMBUSTION"                 , // 是一个引擎, 燃烧其燃料, 当损坏时可以回火或爆炸
    "E_DIESEL_FUEL"                , // 这个车辆部件可以从油箱中燃烧柴油或JP8 (也可以燃烧生物柴油或煤油, 尽管效果不太好)
    "E_HEATER"                     , // 是一个引擎, 当打开时, 有一个加热器可以给车内的物品加热
    "E_HIGHER_SKILL"               , // 是一个引擎, 安装的引擎越多, 安装起来就越困难
    "E_STARTS_INSTANTLY"           , // 是一个引擎, 像食物踏板一样, 可以立即启动
    "FLAT_SURF"                    , // 带有平坦硬表面的部件 (例如, 桌子)
    "FLUIDTANK"                    , // 允许在这个部件中存储液体；液体的数量应在这个车辆部件的物品中定义
    "FREEZER"                      , // 可以在零度以下的温度下冻结物品
    "FRIDGE"                       , // 可以冷藏物品
    "FUNNEL"                       , // 如果安装在车辆油箱上, 可以在下雨时收集雨水
    "HALF_CIRCLE_LIGHT"            , // 打开时投射出一个定向的半圆形光线
    "HANDHELD_BATTERY_MOUNT"       , // 与BATTERY_MOUNT相同, 但用于手持电池安装
    "HARNESS_bodytype"             , // 用任何替换bodytype以接受任何类型, 或者用目标类型替换
    "HORN"                         , // 使用时产生噪音
    "INITIAL_PART"                 , // 通过建筑菜单开始新车辆时, 这个车辆部件将是车辆的初始部件 (如果使用的物品与这个部件所需的物品匹配) 。带有此标志的部件的物品会自动添加为车辆开始建设的组件
    "INTERNAL"                     , // 只能安装在带有CARGO标志的部件上
    "LOCKABLE_CARGO"               , // 能够安装锁的货物容器
    "MUFFLER"                      , // 在运行时降低车辆的噪音
    "MULTISQUARE"                  , // 使这个部件和任何相邻的带有相同ID的部件作为一个单一的部件
    "MUSCLE_ARMS"                  , // 带有此标志的引擎的功率取决于玩家的力量 (比MUSCLE_LEGS效果差)
    "MUSCLE_LEGS"                  , // 带有此标志的引擎的功率取决于玩家的力量
    "NAILABLE"                     , // 用钉子固定
    "NEEDS_BATTERY_MOUNT"          , // 带有此标志的部件需要安装在带有BATTERY_MOUNT标志的部件上
    "NEEDS_HANDHELD_BATTERY_MOUNT" , // 与NEEDS_BATTERY_MOUNT相同, 但用于手持电池安装
    "NEEDS_WHEEL_MOUNT_HEAVY"      , // 只能安装在带有WHEEL_MOUNT_HEAVY标志的部件上
    "NEEDS_WHEEL_MOUNT_LIGHT"      , // 只能安装在带有WHEEL_MOUNT_LIGHT标志的部件上
    "NEEDS_WHEEL_MOUNT_MEDIUM"     , // 只能安装在带有WHEEL_MOUNT_MEDIUM标志的部件上
    "NEEDS_WINDOW"                 , // 只能安装在带有WINDOW标志的部件上
    "NO_INSTALL_HIDDEN"            , // 部件不能由玩家安装, 并在安装菜单中隐藏 (例如, 电源线, 充气船部件, 召唤车辆部件)
    "NO_INSTALL_PLAYER"            , // 部件不能由玩家安装, 但在安装菜单中可见 (例如, 直升机转子)
    "NO_LEAK"                      , // 使船体即使受损也能漂浮
    "NO_MODIFY_VEHICLE"            , // 安装带有此标志的部件在车辆上将意味着它不能再被修改。带有此标志的部件不应由玩家安装
    "NO_REPAIR"                    , // 不能修理
    "NO_UNINSTALL"                 , // 不能卸载
    "OBSTACLE"                     , // 不能穿过部件, 除非部件也是OPENABLE
    "ODDTURN"                      , // 只在奇数轮次上
    "ON_CONTROLS"                  , // 只能安装在带有CONTROLS标志的部件上
    "ON_ROOF"                      , // 带有此标志的部件只能安装在屋顶上 (带有ROOF标志的部件)
    "OPAQUE"                       , // 不能透视
    "OPENABLE"                     , // 可以打开或关闭
    "OPENCLOSE_INSIDE"             , // 可以打开或关闭, 但只能从车内打开或关闭
    "OVER"                         , // 可以安装在其他部件上
    "PERPETUAL"                    , // 如果与REACTOR配对, 部件在不消耗燃料的情况下产生电力
    "PLANTER"                      , // 在犁过的土地上种植种子, 当地面不适合时洒出种子。在非DIGGABLE表面上运行时会损坏
    "PLOW"                         , // 在活动时犁过部件下面的土壤。在不适合的地形上受到与车辆速度成比例的损坤
    "POWER_TRANSFER"               , // 向连接的东西 (可能是车辆) 传输电力
    "PROTRUSION"                   , // 部件突出, 所以其他部件不能安装在它上面
    "REACTOR"                      , // 启用时, 部件消耗燃料产生电力
    "REAPER"                       , // 割下成熟的作物, 将它们放在方块上
    "RECHARGE"                     , // 为带有相同标志的物品充电。 (目前只有可充电电池模块)
    "REMOTE_CONTROLS"              , // 一旦安装, 允许通过遥控器使用车辆
    "REVERSIBLE"                   , // 拆除与安装的要求相同, 但速度是两倍
    "ROOF"                         , // 覆盖车辆的一部分。车辆上有屋顶的区域和周围区域的屋顶, 被认为是内部。否则它们是外部
    "SCOOP"                        , // 从车辆下面拉出物品到部件的货物空间。也可以拖地
    "SEATBELT"                     , // 在事故中帮助防止玩家从车辆中弹出。只能安装在带有BELTABLE标志的部件上
    "SEAT"                         , // 玩家可以坐或睡的座位
    "SECURITY"                     , // 如果安装, 当车辆被砸时会发出响亮的噪音
    "SHARP"                        , // 用这个部件击中怪物时, 会造成切割伤害而不是砸伤, 防止怪物被晕眩
    "SHOCK_ABSORBER"               , // 这个部件保护同一瓦片上的非框架部件免受碰撞的冲击伤害。它不提供对直接冲击或其他攻击的保护
    "SIMPLE_PART"                  , // 这个部件可以安装或从其他阻止修改的部件上移除
    "SMASH_REMOVE"                 , // 当你移除这个部件时, 你会得到砸击的结果, 而不是得到物品
    "SOLAR_PANEL"                  , // 在阳光下为车辆电池充电。在车辆生成时有1/4的机会被破坏
    "SPACE_HEATER"                 , // 有一个单独的命令来切换这个部件
    "STABLE"                       , // 类似于WHEEL, 但如果车辆只有1x1的部分, 这个单个轮子就算作足够的轮子
    "STEERABLE"                    , // 这个轮子是可转向的
    "STEREO"                       , // 允许播放音乐以提高士气
    "TRACKED"                      , // 有助于提高转向效果, 但在安装难度上不算作转向轴, 仍然对转向中心的阻力计算有贡献
    "TRACK"                        , // 允许在地图上标记和跟踪安装在车辆上的车辆
    "TRANSFORM_TERRAIN"            , // 转换地形 (使用transform_terrain中定义的规则)
    "TURRET_CONTROLS"              , // 如果带有此标志的部件安装在炮塔上, 它允许将炮塔的瞄准模式设置为全自动。只能安装在带有TURRET标志的部件上
    "TURRET_MOUNT"                 , // 带有此标志的部件适合安装炮塔
    "TURRET"                       , // 是一个武器炮塔。只能安装在带有TURRET_MOUNT标志的部件上
    "UNMOUNT_ON_DAMAGE"            , // 当部件被伤害破坏时, 部件会从车辆上断裂。物品是新的, 通常是无损的
    "UNMOUNT_ON_MOVE"              , // 当车辆移动时, 卸下这个部件。除非你给它特殊处理, 否则不会掉落部件
    "UNSTABLE_WHEEL"               , // 与STABLE相反, 如果单独安装, 这将不会为你的车辆提供轮胎需求
    "VARIABLE_SIZE"                , // 有'大小', 用于功率, 轮胎半径等
    "VISION"                       , // 提供看不见的方向的视野, 例如镜子
    "WALL_MOUNTED"                 , // 这个车辆部件安装在墙上, 不能自己移动
    "WASHING_MACHINE"              , // 可以用来批量清洗肮脏的衣物
    "WATER_WHEEL"                  , // 当在流动的水中浸没时, 为车辆电池充电
    "WHEEL"                        , // 在轮胎计算中算作轮胎
    "WIDE_CONE_LIGHT"              , // 打开时投射出一个宽锥形的光线
    "WINDOW"                       , // 可以透过这个部件看到, 并可以在其上安装窗帘
    "WIND_POWERED"                 , // 这个引擎是由风力驱动的 (帆等)
    "WIND_TURBINE"                 , // 在风中为车辆电池充电
    "WIRING"                       , // 待定, 似乎与check_no_wiring有关
    "WORKBENCH"                    , // 可以在这个部件上工艺, 必须与工作台json条目配对
] as const;
/**车辆部件flag */
export type VPFlag = typeof VPFlagList[number];
