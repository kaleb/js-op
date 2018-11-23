 // tslint:disable:max-line-length triple-equals
/**
 * Return whether both values are equal.
 * @see [equality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality)
 * @param a
 * @param b
 */
export default function eq<T>(a: T, b: T) {
    return a == b;
}
