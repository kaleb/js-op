/**
 * bitwise exclusive or
 * @see [Bitwise xor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR)
 */
export default function xor(a: number, b: number): number;
export default function xor(a: bigint, b: bigint): bigint;
export default function xor(a: any, b: any): number|bigint { // tslint:disable-line:no-any
    return a ^ b; // tslint:disable-line:no-bitwise no-unsafe-any
}
