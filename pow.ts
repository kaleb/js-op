// tslint:disable:no-any no-unsafe-any restrict-plus-operands
/**
 * Return the result of raising the first operand to the power of the second.
 * @see [exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**))
 */
export default function pow(a: number, b: number): number;
export default function pow(a: bigint, b: bigint): bigint;
export default function pow(a: any, b: any): number|bigint {
    return a ** b;
}
