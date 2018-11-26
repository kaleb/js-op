import zip from './zip-all';

// tslint:disable:max-line-length no-any

export default function mapAll(by: (...p: any[]) => any): IterableIterator<never>;
export default function mapAll<U, T0>(by: (p0: T0) => U, i0: Iterable<T0>): IterableIterator<U>;
export default function mapAll<U, T0, T1>(by: (p0: T0, p1: T1) => U, i0: Iterable<T0>, i1: Iterable<T1>): IterableIterator<U>;
export default function mapAll<U, T0, T1, T2>(by: (p0: T0, p1: T1, p2: T2) => U, i0: Iterable<T0>, i1: Iterable<T1>, i2: Iterable<T2>): IterableIterator<U>;
export default function mapAll<U, T0, T1, T2, T3>(by: (p0: T0, p1: T1, p2: T2, p3: T3) => U, i0: Iterable<T0>, i1: Iterable<T1>, i2: Iterable<T2>, i3: Iterable<T3>): IterableIterator<U>;
export default function mapAll<U, T extends Iterable<unknown>[]>(by: (...p: any[]) => U, ...iterables: T): IterableIterator<U>;
export default function *mapAll<U>(by: (...p: any[]) => U, ...iterables: Iterable<unknown>[]): IterableIterator<U> {
    for (const args of zip(...iterables)) {
        yield by(...args);
    }
}
