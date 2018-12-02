// tslint:disable:no-any no-unsafe-any
/**
 * Return product of two operands
 * @see [multiplication operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication_(*))
 */
export default function mul(a: number, b: number): number;
export default function mul(a: bigint, b: bigint): bigint;
export default function mul(a: any, b: any): number|bigint {
    return a * b;
}
