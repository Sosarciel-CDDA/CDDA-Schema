import { AmmunitionTypeID } from "../AmmiunitionType";
import { BodyPartID, CddaID, CopyfromVar } from "../GenericDefine"
import { MaterialID } from "../Material";
import { GenericBase, GenericFlag } from "./Generic"


/**Armor ID格式 */
export type ArmorID = CddaID<"ARMOR">;

/**一件护甲 */
export type Armor = CopyfromVar<{
    id:ArmorID;
    type: "ARMOR";
    /**保暖度 */
    warmth?: number;
    /**环境保护 */
    environmental_protection?: number;
    flags?: ArmorFlag[];
    /**护甲数据 必须设置覆盖层 */
    armor?: ArmorData[];
} & GenericBase>;

/**护甲数据 */
export type ArmorData = {
    /**材质 */
    material?: {
        /**材质 */
        type: MaterialID;
        /**材质覆盖率 0~100*/
        covered_by_mat: number;
        /**厚度 基础1*/
        thickness: number;
    }[];
    /**覆盖 主肢体id */
    covers: BodyPartID[];
    /**特殊覆盖 子肢体id */
    specifically_covers?: BodyPartID[];
    /**覆盖率 */
    coverage: number;
    /**累赘度 [每件累赘度, 多件累赘度惩罚]  重复穿着3件时 [0]*3+[1] */
    encumbrance: number | [number, number];
    /**层级 */
    layers?: ArmorLayer[];
};



/**装甲图层显示优先级/装甲层级  
 * 从低到高 AURA显示在最外层  
 */
export const ArmorLayerList = ["PERSONAL","SKINTIGHT","NORMAL","WAIST","OUTER","BELTED","AURA"] as const;
/**装甲图层 */
export type ArmorLayer = typeof ArmorLayerList[number];

export const ArmorFlagList = [
    "INTEGRATED"             , // 该物品代表了由突变或仿生学授予的你的一部分。它总是适合, 不能被卸下 (除了失去来源), 并且不会在死亡时掉落, 但在功能、负担、层冲突等方面表现得像普通盔甲。
    "ALLOWS_NATURAL_ATTACKS" , // 允许变异肢体的攻击
    "BLOCK_WHILE_WORN"       , // 允许使用磨损的盔甲或盾牌来阻挡攻击。
    "PARTIAL_DEAF"           , // 降低音量到安全
    "PADDED"                 , // 有内衬 即使没有任何特定材料是柔软的, 这种盔甲也算舒适。
] as const;
export type ArmorFlag = typeof ArmorFlagList[number]|ArmorLayer|GenericFlag;





/**
ABLATIVE_CHAINMAIL_ARMS             物品可以与链甲盔甲一起佩戴, 而不会受到负担惩罚；特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_CHAINMAIL_ELBOWS           物品可以与链甲盔甲一起佩戴, 而不会受到负担惩罚；特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_CHAINMAIL_KNEES            物品可以与链甲盔甲一起佩戴, 而不会受到负担惩罚；特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_CHAINMAIL_LEGS             物品可以与链甲盔甲一起佩戴, 而不会受到负担惩罚；特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_CHAINMAIL_TORSO            物品可以与链甲盔甲一起佩戴, 而不会受到负担惩罚；特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_HELMET                     该物品可以与 Hub 01 头饰一起佩戴, 不会造成负担损失；特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_LARGE                      该物品适合放入大型烧蚀口袋中。
ABLATIVE_MANTLE                     该物品可以与 Hub 01 盔甲一起佩戴, 而不会受到负担惩罚；特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_MEDIUM                     该商品适合放入中等烧蚀口袋中。
ABLATIVE_SKIRT                      该物品可以与 Hub 01 盔甲一起佩戴, 而不会受到负担惩罚；特别可以放入带有此标志限制的盔甲口袋中
ACTIVE_CLOAKING                     处于活动状态时, 会耗尽 UPS 以提供隐形效果。
ALARMCLOCK                          具有闹钟功能。
ALLOWS_NATURAL_ATTACKS              不能防止任何自然攻击或突变、指尖剃须刀等带来的类似好处, 就像大多数覆盖相关身体部位的物品一样。
ALLOWS_TAIL                         即使有尾巴也可以穿这款遮腿单品
ALLOWS_TALONS                       爪子突变的人仍然可以穿着这种覆盖手臂的盔甲
AURA                                该物品位于外光环层, 旨在产生形而上学效果。
BAROMETER                           该齿轮配备有精确的气压计 (用于测量大气压力)。
BELTED                              可以叠放背包和穿在外套外面的物品。
BLIND                               佩戴时使佩戴者失明, 并提供对抗闪光弹的名义保护。
BLOCK_WHILE_WORN                    允许使用磨损的盔甲或盾牌来阻挡攻击。
BULLET_IMMUNE                       佩戴带有此旗帜的物品可以使你免受子弹伤害
CANT_WEAR                           该物品不能直接佩戴。
COLLAR                              这件衣服有一个宽领, 可以在大部分不受阻碍的情况下让你的嘴保持温暖。
COMBAT_TOGGLEABLE                   该项目旨在在战斗中切换。由 NPC 用于确定他们是否会在战斗中打开它。这只支持简单的“转换”操作。
DEAF                                使玩家耳聋。
DECAY_EXPOSED_ATMOSPHERE            消耗品一旦暴露在大气中就会变质 (例如 MRE)。
ELECTRIC_IMMUNE                     该装备可以完全保护您免受放电。
EXTRA_PLATING                       物品可以穿在某些盔甲上, 作为额外的保护层 (如镶边上的盔甲)；特别可以放入带有此标志限制的盔甲口袋中
FANCY                               如果玩家具有该特质, 穿着这件衣服可以提高士气Stylish。
FIN                                 该产品是游泳脚蹼, 又名潜水脚蹼, 又名脚蹼, 可在您游泳时提供速度提升
FIX_FARSIGHT                        该装置可矫正远视。
FIX_NEARSIGHT                       该装置可矫正近视。
FLASH_PROTECTION                    该物品可防止不同的与光相关的危险, 包括闪光弹和耀眼的光
FLOTATION                           防止玩家在深水中溺水。还可以防止潜入水下。
FRAGILE                             该齿轮的抗损坏能力低于普通齿轮。
GAS_PROOF                           该产品将完全保护您免受任何危险气体的侵害
GNV_EFFECT                          佩戴后, 该物品将提供夜视能力。使用附魔, 应用效果, 修改角色的夜视分数, 可能是更好的选择, 并且更灵活
HELMET_AVENTAIL                     该物品可以与鼻盔一起佩戴；特别可以放入带有此标志限制的盔甲口袋中
HELMET_BACK_POUCH                   该物品可以与不同的安全帽一起佩戴, 作为附件；特别可以放入带有此标志限制的盔甲口袋中
HELMET_EAR_ATTACHMENT               该物品可以与不同的安全帽一起佩戴, 作为附件；特别可以放入带有此标志限制的盔甲口袋中
HELMET_FACE_SHIELD                  该物品可以与不同的安全帽一起佩戴, 作为附件；特别可以放入带有此标志限制的盔甲口袋中
HELMET_MANDIBLE_GUARD_STRAPPED      该物品可以作为附件与不同的硬质头盔一起佩戴；特别可以放入带有此标志限制的盔甲口袋中
HELMET_MANDIBLE_GUARD               该物品可以作为附件与不同的硬质头盔一起佩戴；特别可以放入带有此标志限制的盔甲口袋中
HELMET_NAPE_PROTECTOR               该物品可以作为附件与不同的硬质头盔一起佩戴；特别可以放入带有此标志限制的盔甲口袋中
HOOD                                如果玩家的头部没有受到阻碍, 则允许该服装有条件地覆盖头部, 以提供额外的保暖或防水保护
HYGROMETER                          该装置配备了精确的湿度计 (用于测量湿度)。
INTEGRATED                          该物品代表了由突变或仿生学授予的你的一部分。它总是适合, 不能被卸下 (除了失去来源), 并且不会在死亡时掉落, 但在功能、负担、层冲突等方面表现得像普通盔甲。
IR_EFFECT                           佩戴后, 该物品会产生红外视觉
MUTE                                使玩家静音。
NORMAL                              像普通衣服一样穿着的物品。这被假定为默认值。
NO_TAKEOFF                          带有该标志的物品无法脱下。
NO_WEAR_EFFECT                      该装备在佩戴时不会提供任何效果 (大多数珠宝)。
ONLY_ONE                            您只能穿一件。
OUTER                               外衣层。
OVERSIZE                            无论有什么负担/突变/仿生学/等, 都可以始终穿着, 但可以防止任何其他衣服穿在上面。
PADDED                              即使没有任何特定材料是柔软的, 这种盔甲也算舒适。
PADDED                              即使没有任何特定材料是柔软的, 这种盔甲也算舒适。
PARTIAL_DEAF                        将音量降低到安全水平。
PERSONAL                            该物品位于个人光环层中, 旨在产生形而上的效果。
POCKETS如                           果玩家的手很冷并且玩家没有挥舞任何东西, 则可以增加手部的温暖。
POWERARMOR_COMPATIBLE               使物品与动力装甲兼容, 尽管其他参数会导致失败。
PSYSHIELD_PARTIALfear_paralyze      佩戴时有 25% 几率防御怪物攻击。
RAD_PROOF                           这件衣服可以完全保护您免受辐射。
RAD_RESIST                          这件衣服部分 (75%)保护您免受辐射。
RAINPROOF                           防止被覆盖的身体部位被雨淋湿。
REQUIRES_BALANCE                    需要一定平衡才能保持稳定的装备。如果玩家在穿着时被击中, 他们有机会被击倒。
RESTRICT_HANDS                      阻止玩家双手使用武器, 如果武器允许, 则强制玩家使用单手。
ROLLER_INLINE                       速度更快, 但整体稳定性较差, 对非平坦地形的惩罚甚至更严厉。
ROLLER_ONE                          不太稳定且较慢的版本ROLLER_QUAD, 仍然允许玩家移动得比步行速度更快。
ROLLER_QUADROLLER_INLINE            和之间的中等选择ROLLER_ONE, 虽然它更稳定, 移动速度更快, 但它也比 具有更严厉的非平坦地形惩罚ROLLER_ONE。
SEMITANGIBLE                        防止物品在佩戴时参与阻碍系统。
SKINTIGHT                           内衣层。
SLOWS_MOVEMENT                      这件衣服将移动成本乘以 1.1。
SLOWS_THIRST                        这件衣服使玩家口渴的速度乘以 0.70。
STAR_PLATE                          物品可以与流星战斗套件盔甲一起佩戴；特别可以放入带有此标志限制的盔甲口袋中
STAR_SHOULDER                       物品可以与流星战斗套件盔甲一起佩戴；特别可以放入带有此标志限制的盔甲口袋中
STAR_SKIRT                          物品可以与流星战斗套件盔甲一起佩戴；特别可以放入带有此标志限制的盔甲口袋中
STURDY                              这件衣服比普通衣服更能抵抗损坏。
SUN_GLASSES                         在阳光下防止眩光。
SUPER_FANCYFANCY                    如果玩家具有该特质, 则会获得额外的道德奖励Stylish。
SWIM_GOGGLES                        让您在水下看得更远。
THERMOMETER                         该齿轮配备有精确的温度计 (用于测量温度)。
TOUGH_FEET                          这种盔甲提供的效果类似于穿着合适的靴子 (比如腿上的鳞片), 所以你不会因为不穿鞋而受到减益
UNDERSIZE                           这件衣服可以被小小或谦逊的变种人舒适地穿着。对于其他人来说太小了
VARSIZE                             可以通过剪裁使其合身。
WAIST                               为腰带和其他挂在腰上的东西叠层。
WATCH                               充当手表并允许玩家查看实际时间。
WATERPROOF                          防止被覆盖的身体部位在任何情况下都不会被弄湿。
WATER_FRIENDLY                      防止该物品使身体部位被视为对水不友好, 从而降低士气。
*/