/**自定义的ID
 * @TJS-type string
 */
export type CddaID<T extends string> = `${`${string}_` | ''}${T}_${string}`;
/**自定义的ID
 * @TJS-type string
 */
export type OR<T1 extends string> = `${string}JustString`;
/**通用物品的flag列表 */
export declare const GenericFlagList: readonly ["ACTIVATE_ON_PLACE", "SINGLE_USE", "ZERO_WEIGHT", "TARDIS", "TRADER_KEEP", "NO_RELOAD", "UNBREAKABLE", "DURABLE_MELEE"];
/**预定义的通用物品的flag */
export type DefineGenericFlag = typeof GenericFlagList[number];
