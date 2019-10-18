import {getProperty} from './get-prop';

type Head<tuple extends unknown[]> = tuple[0];

type Tail<T extends unknown[]> =
    ((...t: T) => unknown) extends ((_: any, ...tail: infer TT) => unknown) ? TT : [];

type HasTail<T extends unknown[]> = T extends ([] | [any]) ? false : true;

type Last<T extends unknown[]> = {
    0: Last<Tail<T>>;
    1: Head<T>;
}[
    HasTail<T> extends true
    ? 0
    : 1
];

type y = Last<[number, string, bigint, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]>;

interface x<A, B extends unknown[]> {
    0: A;
    1: TraversePath<A, B>;
}

type TraversePath<State extends unknown, T extends unknown[]>
    = T[0] extends keyof State ? x<State[T[0]], Tail<T>>[Tail<T> extends never ? 0 : 1] : never;

type u = TraversePath<{foo: {bar: {baz: string}}}, ['foo']>;
export function get<State extends unknown, Paths extends (string | number)[]>(state: State, ...paths: Paths): TraversePath<State, Paths> {
  const [head, ...tail] = paths;

  if (!state.hasOwnProperty(head)) {
    throw new Error(`state has not ${head}`);
  }

  if (tail.length) {
    return get(state[head], ...tail);
  }

  return state[head];
}

/** Get deep */
export function getDeep<R>(target: object, path: string[]): R {
  if (!path.length) {
    return target as unknown as R;
  }
  const [head, ...tail] = path;
  // tslint:disable-next-line: no-unsafe-any no-any
  return getDeep(getProperty(target as any, head), tail);
}
