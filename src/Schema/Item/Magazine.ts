import { AmmunitionTypeID } from "../AmmiunitionType";
import { RangeDamage, Energy, Volume, CddaID, CopyfromVar, Power as Capacity } from "../GenericDefine";
import { SkillID } from "../Skill";
import { AmmoID } from "./Ammo";
import { AnyItemID, GenericBase, GenericFlag } from "./Generic";


/**弹夹 ID格式 */
export type MagazineID = CddaID<"MAG">;

/**弹夹 */
export type Magazine = CopyfromVar<{
    id: MagazineID;
    type: "MAGAZINE";
    /**该弹匣可以装载哪些类型的弹药 */
    ammo_type: AmmunitionTypeID[];
    /**弹匣容量 (与弹药量相当的单位) */
    capacity: number;
    /**弹匣包含的默认弹药量 (为弹药带设置此值) */
    count?: number;
    /**如果指定则覆盖默认弹药 (可以为弹药带设置此项)
     * 仅控制 count 字段生成的子弹
     */
    default_ammo?: AmmoID;
    /**将每单位弹药装入弹匣需要多长时间 */
    reload_time?: number;
    /**如果设置, 则每消耗一单位弹药就会丢弃一个链接 (给定类型) (设置用于分解弹药带) */
    linkage?: AnyItemID;
    /**弹夹的Flag */
    flags?: MagazineFlag[];
} & GenericBase>;


/**弹夹可用的flag 列表 */
export const MagazineFlagList = [
    "MAG_BULKY"           , //可以存放在适当的超大弹药袋中 (适用于笨重或形状笨拙的弹匣)。
    "MAG_COMPACT"         , //可以存放在合适的弹药袋中 (用于紧凑型弹匣)。
    "MAG_DESTROY"         , //当最后一轮消耗完时, 弹匣将被销毁 (用于弹药带)。优先于MAG_EJECT.
    "MAG_EJECT"           , //当最后一发子弹耗尽时, 弹匣将从枪/工具中弹出。
    "SPEEDLOADER"         , //其作用类似于弹匣, 只不过它将子弹转移到空的目标枪或弹匣中, 而不是插入其中。
    "SPEEDLOADER_CLIP"    , //其作用类似于SPEEDLOADER, 但目标枪或弹匣不必清空即可进行转移。
] as const;
/**弹夹可用的flag */
export type MagazineFlag = typeof MagazineFlagList[number]|GenericFlag;