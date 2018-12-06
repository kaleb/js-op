// tslint:disable:no-bitwise no-any no-unsafe-any
/**
 * rshift operator
 */
export default function rshift(a: number, b: number): number;
export default function rshift(a: bigint, b: bigint): bigint;
export default function rshift(a: any, b: any): number|bigint {
    return a >> b;
}
