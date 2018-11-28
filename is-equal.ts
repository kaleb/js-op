/**
 * Return whether both values are equal.
 * @see [equality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality)
 */
export default function eq<T>(a: T, b: T) {
    // tslint:disable-next-line:triple-equals
    return a == b;
}
