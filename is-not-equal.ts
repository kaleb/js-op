/**
 * Return whether both values are not equal.
 * @see [inequality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality)
 * @param a
 * @param b
 */
export default function ne<T>(a: T, b: T) {
    // tslint:disable-next-line:triple-equals
    return a != b;
}
