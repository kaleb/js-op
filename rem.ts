// tslint:disable:no-any no-unsafe-any
/**
 * Return the remainder left over when the first operand is divided the second.
 * @see [remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())
 */
export default function mod(a: number, b: number): number;
export default function mod(a: bigint, b: bigint): bigint;
export default function mod(a: any, b: any): number|bigint {
    return a % b;
}
