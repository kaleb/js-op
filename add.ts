// tslint:disable:no-any no-unsafe-any restrict-plus-operands
/**
 * Return sum of both operands
 * @see [addition operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_())
 */
export default function add(a: number, b: number): number;
export default function add(a: bigint, b: bigint): bigint;
export default function add(a: any, b: any) {
    return a + b;
}
