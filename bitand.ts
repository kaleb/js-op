/**
 * bitwise and
 * @see [Bitwise and](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND)
 */
export default function bitand(a: number, b: number): number;
export default function bitand(a: bigint, b: bigint): bigint;
export default function bitand(a: any, b: any): number|bigint { // tslint:disable-line:no-any
    return a & b; // tslint:disable-line:no-bitwise no-unsafe-any
}
