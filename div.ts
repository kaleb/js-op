// tslint:disable:no-any no-unsafe-any
/**
 * Division operator
 */
export default function div(a: number, b: number): number;
export default function div(a: bigint, b: bigint): bigint;
export default function div(a: any, b: any): number|bigint {
    return a / b;
}
