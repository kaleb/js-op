// tslint:disable:no-bitwise no-any no-unsafe-any
/**
 * bitwise or
 */
export default function bitor(a: number, b: number): number;
export default function bitor(a: bigint, b: bigint): bigint;
export default function bitor(a: any, b: any): number|bigint {
    return a | b;
}
