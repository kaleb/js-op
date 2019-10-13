/**
 * bitwise not
 * @see [Bitwise not](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT)
 */
export default function bitnot(a: number): number;
export default function bitnot(a: bigint): bigint;
export default function bitnot(a: any): number|bigint { // tslint:disable-line:no-any
    return ~a; // tslint:disable-line:no-bitwise no-unsafe-any
}
