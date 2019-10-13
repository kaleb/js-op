/**
 * bitwise or
 * @see [Bitwise or](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR)
 */
export default function bitor(a: number, b: number): number;
export default function bitor(a: bigint, b: bigint): bigint;
export default function bitor(a: any, b: any): number|bigint { // tslint:disable-line:no-any
    return a | b; // tslint:disable-line:no-bitwise no-unsafe-any
}
