// tslint:disable:no-any no-unsafe-any restrict-plus-operands
/**
 * Return negative of value.
 * @see [unary negation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation_(-))
 */
export default function neg(value: number): number;
export default function neg(value: bigint): bigint;
export default function neg(value: any): number|bigint {
    return -value;
}
