export default function iterator<T>(iterable: Iterable<T>|(() => T)): Iterator<T> {
    return typeof iterable === 'function' ? iteratorFromFunction(iterable) : iteratorFromIterable(iterable);
}

/**
 * @return - {Iterator} from {Function}
 */
export function iteratorFromFunction<T>(f: () => T): Iterator<T> {
    return {
        next() {
            return {done: false, value: f()};
        },
    };
}

/**
 * @return - {Iterator} from {Iterable}
 */
export function iteratorFromIterable<T>(iterable: Iterable<T>) {
    return iterable[Symbol.iterator]();
}
