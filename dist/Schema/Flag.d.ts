import { CddaID, DescText } from "./GenericDefine";
import { AnyItemFlag } from "./Item";
import { MutFlag } from "./Mutation";
/**预定义的FlagID 列表 */
export declare const DefineFlagIDList: readonly ["DIAMOND"];
/**预定义的FlagID */
export type DefineFlagID = typeof DefineFlagIDList[number];
/**自定的FlagID */
export type CustomFlagID = CddaID<"FLAG"> | DefineFlagID;
/**Flag ID格式 */
export type FlagID = CustomFlagID | AnyItemFlag | MutFlag;
/**一个自定义的Flag */
export type Flag = {
    type: "json_flag";
    id: FlagID;
    /** 标志的名称，用于口袋限制，显示为`兼容弹夹: 形状因素` */
    name?: DescText;
    /** 对于口袋限制，这些信息将显示在口袋信息的`限制`字段中 */
    restriction?: DescText;
    /** 如果带有此标志的东西遇到冲突标志的东西，只有一个会被应用 */
    conflicts?: FlagID[];
    /** 对于消耗品，它将在烹饪无法去除的情况下添加-5的味道 */
    taste_mod?: number;
    /** 如果此标志附加/装备到另一件物品，是否继承此标志，比如如果你将ESAPI板放入板载器，他们的`CANT_WEAR`标志不会应用到板载器，你可以像往常一样穿着它 */
    inherit?: boolean;
    /** 如果为true，如果你用带有此标志的东西制作东西，此标志也会应用到结果 */
    craft_inherit?: boolean;
    /** /** 如果可能，这些信息将被显示，比如在物品描述中 */
    info?: DescText;
};
