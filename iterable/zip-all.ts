import { iteratorFromIterable as iter } from '../iterator';

// tslint:disable:max-line-length no-any

/**
 * Derive tuple of T from tuple of Iterable<T>
 */
type IterableTypes<T extends Iterable<any>[]> = T extends [] ? [] : {[K in keyof T]: (T[K] extends Iterable<infer I> ? I : never)};

/**
 * Convolve iterables into an IterableIterator of Arrays.
 *
 * Return an IterableIterator of Arrays, where the i-th Array contains the i-th
 * element from each of the argument Iterables.  The iterator stops when the
 * shortest input iterable is exhausted.  With a single iterable argument, it
 * returns an iterator of 1-length Arrays.  With no arguments, it returns an
 * empty iterator.
 */
export default function *zip<T extends Iterable<unknown>[]>(...iterables: T) {
    let values: IterableTypes<T> = [] as any;
    if (!iterables.length) {
        return values;
    }
    const iterators = iterables.map(iter);
    while (true) {
        let isAnyDone = false;
        values = iterators.map(i => {
            const {value, done} = i.next();
            if (done) {
                isAnyDone = true;
            }
            return value;
        }) as any;
        if (isAnyDone) {
            return values;
        }
        yield values;
    }
}
