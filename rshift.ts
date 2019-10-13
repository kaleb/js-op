/**
 * rshift operator
 * @see [Right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Right_shift)
 */
export default function rshift(a: number, b: number): number;
export default function rshift(a: bigint, b: bigint): bigint;
export default function rshift(a: any, b: any): number|bigint { // tslint:disable-line:no-any
    return a >> b; // tslint:disable-line:no-bitwise no-unsafe-any
}
