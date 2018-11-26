/**
 * This class is used so that the map function returns a non-consumable iterable
 */
export class MapIterable<X, Y> implements Iterable<Y> {
    constructor(private readonly f: (x: X) => Y, private readonly xs: Iterable<X>) {}
    [Symbol.iterator]() {
        return MapGenerator(this.f, this.xs);
    }
}

export default function map<X, Y>(f: (x: X) => Y, xs: Iterable<X>): Iterable<Y>;
export default function map<X, Y>(f: (x: X) => Y): MapPartial<X, Y>;
export default function map<X, Y>(f: (x: X) => Y, maybeXs?: Iterable<X>) {
    if (maybeXs === undefined) {
        return (xs => new MapIterable(f, xs)) as MapPartial<X, Y>;
    }
    return new MapIterable(f, maybeXs) as Iterable<Y>;
}

export type MapPartial<X, Y> = (xs: Iterable<X>) => Iterable<Y>;

export type MapAsyncPartial<X, Y> = (xs: Iterable<X>) => AsyncIterableIterator<Y>;

export function *MapGenerator<X, Y>(f: (x: X) => Y, xs: Iterable<X>): IterableIterator<Y> {
    for (const x of xs) {
        yield f(x);
    }
}
