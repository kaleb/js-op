/**
 * Convert to number
 * Note: symbol and bigint will throw errors
 * @see [unary plus operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus_())
 */
export default function pos(obj: NumberCastableValue|INumberCastableObject) {
    return +obj;
}

export type NumberCastableValue = boolean|number|string|((...args: unknown[]) => unknown);
export interface INumberCastableObject {
    valueOf(): NumberCastableValue;
}
