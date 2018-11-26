 // tslint:disable:max-line-length
/**
 * Return whether both values are strictly equal.
 * @see [identity operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity)
 * @param a
 * @param b
 */
export default function is<T>(a: T, b: T) {
    return a === b;
}