// tslint:disable:no-any no-unsafe-any
/**
 * Modulo operator
 */
export default function mod(a: number, b: number): number;
export default function mod(a: bigint, b: bigint): bigint;
export default function mod(a: any, b: any): number|bigint {
    return a % b;
}
