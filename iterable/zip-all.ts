import { iteratorFromIterable as iter } from '../iterator';

/**
 * Convolve iterables into an IterableIterator of Arrays.
 *
 * Return an IterableIterator of Arrays, where the i-th Array contains the i-th
 * element from each of the argument Iterables.  The iterator stops when the
 * shortest input iterable is exhausted.  With a single iterable argument, it
 * returns an iterator of 1-length Arrays.  With no arguments, it returns an
 * empty iterator.
 */
export default function *zip<T extends Iterable<unknown>[], U extends {[K in keyof T]: T[K] extends Iterable<infer I> ? I : never}>(...iterables: T): IterableIterator<U> {
    if (!iterables.length) {
        return [];
    }
    const iterators = iterables.map(iter);
    while (true) {
        let isAnyDone = false;
        const values = iterators.map(i => {
            const {value, done} = i.next();
            if (done) {
                isAnyDone = true;
            }
            return value;
        }) as U;
        if (isAnyDone) {
            return values;
        }
        yield values;
    }
}
