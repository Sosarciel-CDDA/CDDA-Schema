"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazineFlagList = void 0;
/**弹夹可用的flag 列表 */
exports.MagazineFlagList = [
    "MAG_BULKY", //可以存放在适当的超大弹药袋中 (适用于笨重或形状笨拙的弹匣)。
    "MAG_COMPACT", //可以存放在合适的弹药袋中 (用于紧凑型弹匣)。
    "MAG_DESTROY", //当最后一轮消耗完时, 弹匣将被销毁 (用于弹药带)。优先于MAG_EJECT.
    "MAG_EJECT", //当最后一发子弹耗尽时, 弹匣将从枪/工具中弹出。
    "SPEEDLOADER", //其作用类似于弹匣, 只不过它将子弹转移到空的目标枪或弹匣中, 而不是插入其中。
    "SPEEDLOADER_CLIP", //其作用类似于SPEEDLOADER, 但目标枪或弹匣不必清空即可进行转移。
];
