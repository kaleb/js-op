// tslint:disable:no-bitwise no-any no-unsafe-any
/**
 * bitwise and
 */
export default function bitand(a: number, b: number): number;
export default function bitand(a: bigint, b: bigint): bigint;
export default function bitand(a: any, b: any): number|bigint {
    return a & b;
}
