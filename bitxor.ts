// tslint:disable:no-bitwise no-any no-unsafe-any
/**
 * bitwise exclusive or
 */
export default function xor(a: number, b: number): number;
export default function xor(a: bigint, b: bigint): bigint;
export default function xor(a: any, b: any): number|bigint {
    return a ^ b;
}
