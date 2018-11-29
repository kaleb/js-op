/**
 * This class is used so that the map function returns a non-consumable iterable
 */
export class MapIterable<X, Y> implements Iterable<Y> {
    constructor(private readonly f: (x: X) => Y, private readonly xs: Iterable<X>) {}
    /**
     * Yield result of applying given iteratee `f`, to each element of given iterable `xs`.
     */
    [Symbol.iterator]() {
        return MapGenerator(this.f, this.xs);
    }
}

/** map */
export default function map<X, Y>(f: (x: X) => Y, xs: Iterable<X>): MapIterable<X, Y>;
export default function map<X, Y>(f: (x: X) => Y): (xs: Iterable<X>) => MapIterable<X, Y>;
export default function map<X, Y>(f: (x: X) => Y, maybeXs?: Iterable<X>) {
    if (maybeXs === undefined) {
        return ((xs: Iterable<X>) => new MapIterable(f, xs));
    }
    return new MapIterable(f, maybeXs);
}

/** Generate iterator */
export function *MapGenerator<X, Y>(f: (x: X) => Y, xs: Iterable<X>): IterableIterator<Y> {
    for (const x of xs) {
        yield f(x);
    }
}
