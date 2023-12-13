"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComestibleFlagList = exports.ComestibleTypeList = void 0;
/**消耗品类型 列表*/
exports.ComestibleTypeList = [
    'FOOD',
    'DRINK',
    'MED',
    'INVALID',
];
/**消耗品Flag 列表*/
exports.ComestibleFlagList = [
    "ACID", // 使用 BLECH 功能消耗时, 如果角色具有 ACIDPROOF 或 ACIDBLOOD 特性, 惩罚会减少。
    "CARNIVORE_OK", // 可以被具有 Carnivore 突变的角色食用。
    "CANT_HEAL_EVERYONE", // 这种药不能被所有人使用, 它需要一个特殊的突变。参见 mutation 中的 can_heal_with。
    "CORROSIVE", // 使用 BLECH 功能消耗时, 会产生与 ACID 相同的惩罚, 但不受 ACIDPROOF 或 ACIDBLOOD 特性的影响。
    "EATEN_COLD", // 冷食时的士气奖励。
    "EATEN_HOT", // 热食时的士气奖励。
    "EDIBLE_FROZEN", // 冷冻不会阻止食用。没有士气奖励。
    "INEDIBLE", // 默认不可食用, 当与 (mutation threshold) 标志一起使用时启用食用: BIRD, CATTLE, FELINE, LUPINE, MOUSE, RABBIT, RAT。
    "FERTILIZER", // 作为农业肥料, 或者如果这个被 PLANTBLECH 功能消耗, 植物的惩罚会被逆转。
    "FREEZERBURN", // 第一次解冻是 MUSHY, 第二次是腐烂。
    "FUNGAL_VECTOR", // 消耗时会给出真菌感染。
    "HIDDEN_HALLU", // 食物会引起幻觉, 只有在一定的生存技能等级下才可见。
    "HIDDEN_POISON", // 食物在一定的生存技能等级下显示为有毒。注意, 这本身并不会使物品变得有毒, 考虑添加 "use_action": [ "POISON" ], 或者使用 FORAGE_POISON 替代。
    "MELTS", // 除非冷冻, 否则提供一半的乐趣。冷冻时可食用。
    "MILLABLE", // 可以放入磨坊, 磨成面粉。
    "MUTAGEN_CATALYST", // 注射它会启动突变。
    "MUTAGEN_PRIMER", // 注射它会为你的身体准备突变。
    "MYCUS_OK", // 可以被突破阈值的 Mycus 角色食用。默认只适用于 Mycus 果实。
    "NEGATIVE_MONOTONY_OK", // 允许 negative_monotony 属性将食物乐趣降低到负值。
    "NO_AUTO_CONSUME", // 具有此标志的消耗品不会在自动食用/自动饮用区域被消耗。
    "NO_INGEST", // 通过口服以外的方式给药。
    "NUTRIENT_OVERRIDE", // 当你制作一个物品时, 游戏会检查它是否是食物, 如果是, 它会存储物品是由哪些组件创建的。"NUTRIENT_OVERRIDE" 标志将跳过这一步。
    "PKILL_1", // 轻度止痛药。
    "PKILL_2", // 中度止痛药。
    "PKILL_3", // 强效止痛药。
    "PKILL_L", // 缓释止痛药。
    "RAD_STERILIZED", // 辐射食物是安全的, 但不是永久可食用的 (如 MREs) 。
    "RAD_STERILIZED_EDIBLE_FOREVER", // 辐射食物是安全的, 并且永远可食用。
    "RAW", // 减少 25% 的 kcal, 直到烹饪 (即, 用于需要热源的食谱) 。应该添加到所有未烹饪的食物中, 除非那种食物的卡路里超过 50% 来自糖 (即, 许多水果, 一些蔬菜) 或脂肪 (即, 屠宰的脂肪, 椰子) 。TODO: 在添加脂肪/蛋白质/碳水化合物后, 为这些标准制作单元测试。
    "SMOKABLE", // 被烟架接受。
    "SMOKED", // 不被烟架接受 (烟熏的产品) 。
    "USE_EAT_VERB", // "你喝了你的 %s。" 或 "你吃了你的 %s。"
    "USE_ON_NPC", // 可以用在 NPC 上 (不一定由他们使用) 。
    "ZOOM", // 缩放物品可以增加你的地图视野范围。
];
