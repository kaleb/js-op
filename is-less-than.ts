import { Orderable } from './types';

/**
 * Return whether the first operand is less than the second operand.
 * @see [less than operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator)
 */
export default function lt<T extends Orderable>(a: T, b: T) {
    return a < b;
}
