import { iteratorFromIterable as iter } from '../iterator';

// tslint:disable:max-line-length

/**
 * Convolve iterables into an IterableIterator of Arrays.
 *
 * Return an IterableIterator of Arrays, where the i-th Array contains the i-th
 * element from each of the argument Iterables.  The iterator stops when the
 * shortest input iterable is exhausted.  With a single iterable argument, it
 * returns an iterator of 1-length Arrays.  With no arguments, it returns an
 * empty iterator.
 */
export default function zip(): IterableIterator<never>;
export default function zip<T0>(i0: Iterable<T0>): IterableIterator<[T0]>;
export default function zip<T0, T1>(i0: Iterable<T0>, i1: Iterable<T1>): IterableIterator<[T0, T1]>;
export default function zip<T0, T1, T2>(i0: Iterable<T0>, i1: Iterable<T1>, i2: Iterable<T2>): IterableIterator<[T0, T1, T2]>;
export default function zip<T0, T1, T2, T3>(i0: Iterable<T0>, i1: Iterable<T1>, i2: Iterable<T2>, i3: Iterable<T3>): IterableIterator<[T0, T1, T2, T3]>;
export default function zip<T extends Iterable<unknown>[]>(...iterables: T): IterableIterator<unknown[]>;
export default function *zip(...iterables: Iterable<unknown>[]): IterableIterator<unknown[]> {
    const len = iterables.length;
    if (!len) {
        return;
    }
    const iterators = iterables.map(iter);
    while (true) {
        const results = [];
        for (let i = 0; i < len; i++) {
            const {value, done} = iterators[i].next();
            if (done) {
                return;
            }
            results.push(value);
        }
        yield results;
    }
}
