"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolFlagList = void 0;
/**工具可用的flag 列表 */
exports.ToolFlagList = [
    "ACT_ON_RANGED_HIT", //该物品应在投掷或发射时激活, 如果它在地面上生成, 则立即得到处理。
    "ALLOWS_REMOTE_USE", //该物品可以从相邻的方块中激活或重新加载, 而无需拿起它。
    "BELT_CLIP", //该物品可以夹在或挂在适当尺寸的皮带环上 (皮带环受其 max_volume 和 max_weight 属性的限制)
    "BOMB", //它可以是遥控炸弹。
    "CABLE_SPOOL", //该物品是一卷电缆, 必须按原样进行处理。它通常应该有一个“link_up”iuse_action, 它有特殊的行为。
    "CANNIBALISM", //该物品是一种含有人肉的食物, 食用后会应用所有适用的效果。
    "CHARGEDIM", //如果发光, 光强度会随着电量而减弱, 从剩余电量 20% 开始。
    "DIG_TOOL", //如果使用, 当玩家走进岩石和墙壁等地形时, 会挖掘它们。如果物品也有POWERED旗帜, 那么它挖掘得更快, 但会消耗物品的弹药, 就像激活它一样。
    "FIRESTARTER", //物品会遇到一些困难而着火。
    "FIRE", //物品会立即起火。
    "HAS_RECIPE", //电子墨水平板电脑使用它来指示它当前正在显示菜谱。
    "IS_UPS", //项目是统一电源。用于活动项目处理。
    //"LIGHT_[X]"                       , //用光强度照亮区域, [X]其中[X]是强度值。 (例如LIGHT_4或LIGHT_100)。注意: 此标志设置itype::light_emission字段, 然后被删除 (无法使用 找到has_flag)；
    "NO_DROP", //项目永远不应该作为离散项目存在于地图图块上 (必须包含在另一个项目中)。
    "NO_UNLOAD", //无法卸载。
    "POWERED", //如果打开, 项目将使用自己的电源, 而不是依赖用户的电源。
    "RADIOCARITEM", //物品可以放入遥控车中。
    "RADIOSIGNAL_1", //根据无线电信号 1 激活。
    "RADIOSIGNAL_2", //根据无线电信号 2 激活。
    "RADIOSIGNAL_3", //根据无线电信号 3 激活。
    "RADIO_ACTIVATION", //通过遥控器激活 (也需要RADIOSIGNAL_*)。
    "RADIO_CONTAINER", //它是一个装有无线电控制的东西的容器。
    "RADIO_MODABLE", //表示该物品可以制成无线电激活物品。
    "RADIO_MOD", //该物品已被制成无线电激活物品。
    "RECHARGE", //放置在带有充电站的货物区域时会获得费用。
    "SAFECRACK", //该物品可用于解锁保险箱。
    "USES_BIONIC_POWER", //允许物品使用来自玩家仿生力量的能量来满足其需求energy_drain。工具还可以消耗仿生能量而不是电池弹药。
    "USE_PLAYER_ENERGY", //具有use_action消耗cast_spell指定base_energy_cost.
    "USE_UPS", //允许项目使用 UPS 的能源来满足其需求energy_drain。工具也可以消耗 UPS 而不是电池弹药。
    "WATER_EXTINGUISH", //在水中或降水下可熄灭。转换项目 (需要设置“reverts_to”或use_action“transform”)。
    "WET", //物品是湿的, 会慢慢变干 (例如毛巾)。
    "WIND_EXTINGUISH", //该物品将被风吹灭。
    "WRITE_MESSAGE", //该物品可用于在标牌上书写信息。
];
