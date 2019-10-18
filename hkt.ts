
// tslint:disable:no-any no-shadowed-variable no-magic-numbers max-line-length
type _ = unknown;
type Head<tuple extends unknown[]> = tuple[0];
type Tail<tuple extends unknown[]> = tuple extends [_] ? [] :
                                     tuple extends [_, infer a] ? [a] :
                                     tuple extends [_, infer a, infer b] ? [a, b] :
                                     tuple extends [_, infer a, infer b, infer c] ? [a, b, c] :
                                     tuple extends [_, infer a, infer b, infer c, ...(infer d)[]] ? [a, b, c, ...d[]] :
                                     [...unknown[]];

type Cons<head, tail extends unknown[]> = tail extends [] ? [head] :
                                          tail extends [infer a] ? [head, a] :
                                          tail extends [infer a, infer b] ? [head, a, b] :
                                          tail extends [infer a, infer b, infer c] ? [head, a, b, c] :
                                          tail extends [infer a, infer b, infer c, ...(infer d)[]] ? [head, a, b, c, ...d[]] :
                                          [head, ...unknown[]];

const a: [0] = [0];
const b: Head<typeof a> = 0;
const c: Tail<[0, 1, 2]> = [] as any;
const d: Tail<[0, 1, 2, 3, 4, 5]> = [] as any;

type x = [];
type y = Cons<1, x>;
type z = Cons<2, y>;
const z: z = [2, 1];

// tslint:disable:interface-name

/*
interface IY<K extends symbol|string|number> {
    [P in K]: unknown;
}
*/
const o = {a: 'aaa', b: 12n};
let x: Record<keyof typeof o, number>;

interface DoneIteratorResult<T> extends IteratorResult<T> {
    done: true;
    value: T;
}
interface EmptyIterator<T = unknown> extends Iterator<T> {
    next(): DoneIteratorResult<T>;
}
interface EmptyIterable<T = unknown> extends Iterable<T> {
    [Symbol.iterator](): EmptyIterator<T>;
}
interface InfiniteIteratorResult<T> extends IteratorResult<T> {
    done: false;
    value: T;
}
interface InfiniteIterator<T> extends Iterator<any> {
    next(): InfiniteIteratorResult<T>;
}
interface InfiniteIterable<T> extends Iterable<any> {
    [Symbol.iterator](): InfiniteIterator<T>;
}

type IterableType<T> = Iterable<T> | EmptyIterable<T> | InfiniteIterable<T>;
