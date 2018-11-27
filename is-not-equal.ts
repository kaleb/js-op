 // tslint:disable:triple-equals
/**
 * Return whether both values are not equal.
 * @see [inequality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality)
 * @param a
 * @param b
 */
export default function ne<T>(a: T, b: T) {
    return a != b;
}
