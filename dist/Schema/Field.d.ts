import { CddaID } from "./GenericDefine";
/**定义的地块附着物 列表 */
export declare const DefineFieldIDList: readonly ["fd_null", "fd_fatigue", "fd_tindalos_rift"];
/**定义的地块附着物 */
export type DefineFieldID = typeof DefineFieldIDList[number];
/**地块附着物ID */
export type FieldID = CddaID<"FD"> | DefineFieldID;
