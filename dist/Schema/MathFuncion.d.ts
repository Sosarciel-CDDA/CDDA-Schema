import { CddaID } from "./GenericDefine";
/**数学函数的ID */
export type MathFunctionID = CddaID<"FUNC">;
/**数学函数 */
export type MathFunction = {
    type: "jmath_function";
    id: MathFunctionID;
    /**参数个数
     * 由 `_${number}` 取得参数
     */
    num_args: number;
    /**函数返回值
     * 如 "_0 * 2 + rand(_1)"
     */
    return: string;
};
