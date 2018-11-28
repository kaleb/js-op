import { Orderable } from './types';

/**
 * Return whether the first operand is less than or equal to the second operand.
 * @see [less than or equal operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator)
 */
export default function le<T extends Orderable>(a: T, b: T) {
    return a <= b;
}
