import { Orderable } from './types';
/**
 * Return whether the first operand is greater than or equal to the second operand.
 * @see [greater than or equal operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator)
 */
export default function ge<T extends Orderable>(a: T, b: T) {
    return a >= b;
}
