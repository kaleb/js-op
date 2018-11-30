/**
 * Return whether both values are not strictly equal.
 * @see [nonidentity operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity)
 */
export default function isnt<T>(a: T, b: T) {
    return a !== b;
}
