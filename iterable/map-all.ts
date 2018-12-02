import zip from './zip-all';

/**
 * Map all
 */
export default function *mapAll<X extends unknown[], Y>(f: (...x: X) => Y, ...iterables: {[K in keyof X]: Iterable<X[K]>}) {
    for (const x of zip(...iterables)) {
        yield f.apply(undefined, x as X);
    }
}
