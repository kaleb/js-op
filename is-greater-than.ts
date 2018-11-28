import { Orderable } from './types';
/**
 * Return whether the first operand is greater than the second operand.
 * @see [greater than operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator)
 */
export default function gt<T extends Orderable>(a: T, b: T) {
    return a > b;
}
