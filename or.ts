/**
 * Return a if it can be converted to true; otherwise, returns b.
 * Thus, when used with Boolean values, || returns true if either operand is true.
 * @see [Logical or operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR_())
 */
export default function or<T, U>(a: T, b: U) {
    return a || b;
}
