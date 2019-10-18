/**
 * Get value from target
 * @param target object
 * @param key key
 */
export function getProperty<T, K extends keyof T>(target: T, key: K) {
    return target[key];
}

// tslint:disable:max-line-length

/**
 * Get property from path
 * @param target target object
 * @param path list of path elements
 */
export function getDeep<T, K extends keyof T>(target: T, path: []): T;
export function getDeep<T, K extends keyof T>(target: T, path: [K]): T[K];
export function getDeep<T, K0 extends keyof T, K1 extends keyof T[K0]>(target: T, path: [K0, K1]): T[K0][K1];
export function getDeep<T, K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1]>(target: T, path: [K0, K1, K2]): T[K0][K1][K2];
export function getDeep<T, K extends keyof T>(target: T, path: Array<symbol|string|number>) {
    // tslint:disable-next-line: no-null-keyword triple-equals
    if (target == null || !path.length) {
        return target;
    }
    const [head, ...tail] = path;
    // tslint:disable-next-line: no-any
    return getDeep(target[head as K], tail as any);
}

const o = {a: {b: {d: 'd'}}} as const;
const i = getDeep(o, ['a', 'b', 'd']);
const {a: {b: {d: j}}} = o;

/**
 * Pick properties from target according to property list
 */
export function pick<T, K extends keyof T>(target: T, keys: K[]): Pick<T, K> {
    return keys.reduce<Partial<Pick<T, K>>>((t, k) => {
        t[k] = target[k];
        return t;
    }, {}) as Pick<T, K>;
}
