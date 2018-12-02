/**
 * Return a if it can be converted to false; otherwise, returns b.
 * Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false
 * @see [Logical and operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND_())
 */
export default function and<T, U>(a: T, b: U) {
    return a && b;
}
