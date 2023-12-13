"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GunFlagList = void 0;
/**枪械可用的flag 列表 */
exports.GunFlagList = [
    "BACKBLAST", // 在射击的人后面产生小爆炸。目前还没有实现？
    "BIPOD", // 操控加成只适用于MOUNTABLE地图/车辆瓦片。不包括挥舞时间惩罚（参见SLOW_WIELD）
    "BRASS_CATCHER", // 这个枪械改装件是弹壳收集器, 可以储存你射出的所有弹壳
    "CHARGE", // 必须充电才能射击。更高的电荷会造成更多的伤害
    "CHOKE", // 这个枪械改装件是一个消音器, 防止你射出猪鼻子
    "COLLAPSED_STOCK", // 减少枪的长度20厘米；与FOLDED_STOCK相同；出于某种原因现在不起作用
    "COLLAPSIBLE_STOCK", // 根据枪的基础大小（不包括任何改装件）成比例地减少武器体积。不包括挥舞时间惩罚（参见NEEDS_UNFOLD）
    "CONSUMABLE", // 使枪部有一定几率根据射出的弹药受损, 可定义字段'consume_chance'和'consume_divisor'
    "DISABLE_SIGHTS", // 阻止使用基础武器瞄准器
    "EASY_CLEAN", // 这种武器相对简单, 你花费的清洁和润滑时间减半
    "FIRE_TWOHAND", // 枪只能在玩家有两只空手时射击
    "FOLDED_STOCK", // 减少枪的长度20厘米；与COLLAPSED_STOCK相同
    "INSTALL_DIFFICULT", // 这个枪械改装件很难安装, 如果你失败, 可能会损坏你的枪
    "IRREMOVABLE", // 使枪械改装件不能被移除
    "IS_ARMOR", // 这个枪械改装件可以使用装甲语法, 并且可以穿戴（与你安装这个改装件的武器相同）
    "LASER_SIGHT", // 这个枪械改装件是一个激光瞄准器, 如果满足特定条件（目标接近, 而且不是太亮）提供瞄准加成
    "MECH_BAT", // 这是一个设计用来为军用机甲供电的异种电池
    "MOUNTED_GUN", // 枪只能在带有MOUNTABLE标志的地形/家具上使用
    "NEEDS_NO_LUBE", // 这种武器不需要润滑剂就能正常工作
    "NEVER_JAMS", // 永不卡壳
    "NON_FOULING", // 枪不会变脏或积黑火药
    "NO_TURRET", // 阻止为这把枪生成车辆炮塔原型
    "NO_UNLOAD", // 不能卸载
    "PRIMITIVE_RANGED_WEAPON", // 允许使用非枪匠工具修理（但不能加固）它
    "PUMP_ACTION", // 枪的泵动作上有导轨, 允许在下挂槽上安装只有PUMP_RAIL_COMPATIBLE标志的改装件
    "PUMP_RAIL_COMPATIBLE", // 改装件可以安装在带有泵动作导轨的枪的下挂槽上
    "RELOAD_AND_SHOOT", // 射击自动重装然后射击
    "RELOAD_EJECT", // 在重装时从枪中弹出弹壳, 而不是在射击时
    "RELOAD_ONE", // 一次只重装一发子弹
    "REMOVED_STOCK", // 减少枪的长度26厘米, 当你锯掉枪托时应用
    "STR_DRAW", // 除非角色至少有所需最小力量的两倍, 否则使用这种武器的范围会减少
    "STR_RELOAD", // 重装速度受力量影响
    "UNDERWATER_GUN", // 枪是为水下使用优化的, 在水外表现不佳
    "WATERPROOF_GUN", // 枪不会生锈, 可以在水下使用
    "WONT_TRAIN_MARKSMANSHIP", // 射击这把枪不会训练你的射击技巧
];
