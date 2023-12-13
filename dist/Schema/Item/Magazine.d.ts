import { AmmunitionTypeID } from "../AmmiunitionType";
import { CddaID, CopyfromVar } from "../GenericDefine";
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
export declare const MagazineFlagList: readonly ["MAG_BULKY", "MAG_COMPACT", "MAG_DESTROY", "MAG_EJECT", "SPEEDLOADER", "SPEEDLOADER_CLIP"];
/**弹夹可用的flag */
export type MagazineFlag = typeof MagazineFlagList[number] | GenericFlag;
