import { CddaID, DescText } from "./GenericDefine";
import { AnyItemID } from "./Item";


/**预定义的弹药类型 列表 */
export const DefineAmmoTypeIDList = [
    "50"    ,
    "500"   ,
] as const;
/**预定义的弹药类型 */
export type DefineAmmoTypeID = typeof DefineAmmoTypeIDList[number];

/**弹药类型ID格式  */
export type AmmunitionTypeID = CddaID<"AMMUNIT">|DefineAmmoTypeID;
/**弹药类型 */
export type AmmunitionType = {
    type: "ammunition_type";
    /**唯一ID */
    id: AmmunitionTypeID;
    /**弹药名称 */
    name: (DescText);
    /**弹药的默认物品ID */
    default: AnyItemID;
};

