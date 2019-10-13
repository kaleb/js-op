/**
 * lshift operator
 * @see [Left shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift)
 */
export default function lshift(a: number, b: number): number;
export default function lshift(a: bigint, b: bigint): bigint;
export default function lshift(a: any, b: any): number|bigint { // tslint:disable-line:no-any
    return a << b; // tslint:disable-line:no-bitwise no-unsafe-any
}
