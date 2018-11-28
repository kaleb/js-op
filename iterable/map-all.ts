import zip from './zip-all';

// tslint:disable:max-line-length no-any

/**
 * Derive tuple of iterables from tuple
 */
type Iterables<T extends any[]> = T extends [] ? [] : {[K in keyof T]: Iterable<T[K]>};
type Iteratee = (...args: any[]) => any;

/**
 * Map all
 */
export default function *mapAll<F extends Iteratee>(f: F, ...iterables: Iterables<Parameters<F>>) {
    // tslint:disable-next-line:no-unsafe-any
    for (const args of zip(...iterables)) {
        yield f.apply(undefined, args) as ReturnType<F>;
    }
}
