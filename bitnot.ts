// tslint:disable:no-bitwise no-any no-unsafe-any
/**
 * bitwise not
 */
export default function bitnot(a: number): number;
export default function bitnot(a: bigint): bigint;
export default function bitnot(a: any): number|bigint {
    return ~a;
}
