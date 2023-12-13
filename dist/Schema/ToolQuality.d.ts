import { CddaID, DescText } from "./GenericDefine";
/**预定义的工具品质ID 列表 */
export declare const DefineToolQualityIDList: readonly ["CUT", "GRASS_CUT", "CUT_FINE", "GLARE", "SHEAR", "CHURN", "LEATHER_AWL", "SEW_CURVED", "ANESTHESIA", "FISHING_ROD", "FISH_TRAP", "TREE_TAP", "SMOOTH", "WELD", "HAMMER", "HAMMER_FINE", "HAMMER_SOFT", "SAW_W", "SAW_M", "SAW_M_FINE", "COOK", "BOIL", "CONTAIN", "CHEM", "SIEVE", "STRAIN", "SMOKE_PIPE", "DISTILL", "AXE", "DIG", "WRENCH", "WRENCH_FINE", "SCREW", "SCREW_FINE", "BUTCHER", "DRILL", "DRILL_ROCK", "PRY", "PRYING_NAIL", "PUNCH", "WRITE", "LIFT", "JACK", "SELF_JACK", "HOSE", "CHISEL", "CHISEL_WOOD", "SEW", "KNIT", "PULL", "ANVIL", "ANALYSIS", "CONCENTRATE", "SEPARATE", "FINE_DISTILL", "CHROMATOGRAPHY", "GRIND", "FINE_GRIND", "REAM", "FILE", "VISE", "PRESSURIZATION", "LOCKPICK", "EXTRACT", "FILTER", "SUSPENDING", "ROPE", "SURFACE", "WHEEL_FAST", "JUMPSTART", "FABRIC_CUT", "OVEN", "GUN", "RIFLE", "SHOTGUN", "SMG", "PISTOL", "CUT_GLASS", "MOP", "BLOW_AIR", "BLOW_HOT_AIR", "THREAD_CUT", "THREAD_TAP", "MANA_FOCUS", "MANA_INFUSE", "MANA_WEAVE"];
/**预定义的工具品质ID */
export type DefineToolQualityID = typeof DefineToolQualityIDList[number];
/**工具品质ID */
export type ToolQualityID = CddaID<"TQ"> | DefineToolQualityID;
/**工具品质 */
export type ToolQuality = {
    /**工具品质类型 */
    type: "tool_quality";
    /**在游戏中查看具有该 id 的条目时, 选项卡中使用的描述 */
    name: (DescText);
    /**唯一ID */
    id: ToolQualityID;
    /**不是必需的。可能使用该物品执行的特殊操作。
     * [ 物品的最小品质等级, [...可进行的动作]]
     */
    usages?: [number, ToolQualityID[]][];
};
