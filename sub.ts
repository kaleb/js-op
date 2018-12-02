// tslint:disable:no-any no-unsafe-any
/**
 * Return the difference of the two operands
 * @see [subtraction operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction_(-))
 */
export default function sub(a: number, b: number): number;
export default function sub(a: bigint, b: bigint): bigint;
export default function sub(a: any, b: any): number|bigint {
    return a - b;
}
