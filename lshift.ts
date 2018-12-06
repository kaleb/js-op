// tslint:disable:no-bitwise no-any no-unsafe-any
/**
 * lshift operator
 */
export default function lshift(a: number, b: number): number;
export default function lshift(a: bigint, b: bigint): bigint;
export default function lshift(a: any, b: any): number|bigint {
    return a << b;
}
