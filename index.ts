import { NotSymbol } from './types';
export { default as has } from './has';
export { default as eq } from './is-equal';
export { default as gt } from './is-greater-than';
export { default as ge } from './is-greater-than-or-equal';
export { default as isIn } from './is-in';
export { default as lt } from './is-less-than';
export { default as le } from './is-less-than-or-equal';
export { default as ne } from './is-not-equal';
export { default as isnt } from './is-not-strict-equal';
export { default as is } from './is-strict-equal';
export { NotSymbol, Orderable } from './types';

// tslint:disable:completed-docs

export function not(obj: unknown) {
    return !obj;
}
export function truth(obj: unknown) {
    return !!obj;
}

export function and(a: unknown, b: unknown) {
    return a && b;
}
export function or(a: unknown, b: unknown) {
    return a || b;
}

/*
 * Arithmetic
 * ==========
 */

export function add(a: number, b: number) {
    return a + b;
}
export function sub(a: number, b: number) {
    return a - b;
}
export function mul(a: number, b: number) {
    return a * b;
}
export function div(a: number, b: number) {
    return a / b;
}
export function floordiv(a: number, b: number) {
    return Math.floor(a / b);
}
export function divmod(a: number, b: number) {
    return [floordiv(a, b), a % b];
}
export function mod(a: number, b: number) {
    return a % b;
}
export function pos(obj: NotSymbol) {
    return +obj;
}
export function neg(obj: number) {
    return -obj;
}
/*
 * Bitwise
 * =======
 */
export function and_(a: number, b: number) {
    // tslint:disable-next-line:no-bitwise
    return a & b;
}
export function or_(a: number, b: number) {
    // tslint:disable-next-line:no-bitwise
    return a | b;
}
export function invert(a: number) {
    // tslint:disable-next-line:no-bitwise
    return ~a;
}
export function xor(a: number, b: number) {
    // tslint:disable-next-line:no-bitwise
    return a ^ b;
}
export function lshift(a: number, b: number) {
    // tslint:disable-next-line:no-bitwise
    return a << b;
}
export function rshift(a: number, b: number) {
    // tslint:disable-next-line:no-bitwise
    return a >> b;
}

function getProperty<T, K extends keyof T>(target: T, key: K) {
    return target[key];
}

function getProperties<T, K extends keyof T>(target: T, keys: K[]) {
    return keys.reduce<Partial<T>>((result: Partial<T>, key) => {
        result[key] = target[key];
        return result;
    }, {});
}

function setProperty<T, K extends keyof T>(target: T, key: K, value: T[K]) {
    target[key] = value;
    return target;
}

function setProperties<T>(target: T, source: Partial<T>): T {
    // tslint:disable:prefer-object-spread
    return Object.assign(target, source);
}

/*
 * Indexing
 * ========
 */
export function set<T, K extends keyof T>(target: T, source: Partial<T>): T;
export function set<T, K extends keyof T>(target: T, key: K, value: T[K]): T;
export function set<T>(target: T, k: (keyof T|Partial<T>), v?: unknown) {
    const len = arguments.length;
    // tslint:disable:no-magic-numbers
    if (len < 2 || len > 3) {
        return; // Perhaps throw error?
    }
    // tslint:disable-next-line:switch-default
    switch (len) {
    case 2:
        if (typeof k === 'object' && k !== null) {
            setProperties(target, k);
            // Break so fall-through sets obj[k] = undef
            break;
        }
        // Falls through
    case 3:
        if (typeof k === 'string' || typeof k === 'number') {
            // tslint:disable-next-line:no-any
            setProperty(target, k, v as any);
        }
    }
    return target;
}

export function del<T>(target: T, k: keyof T) {
    // tslint:disable:no-dynamic-delete
    delete target[k];
    return target;
}

export function get<T>(obj: T, k: keyof T|Partial<T>|Array<keyof T>) {
    if (typeof k === 'object') {
        if (Array.isArray(k)) {
            getProperties(obj, k);
        }
        return k;
    }
    return getProperty(obj, k);
}
/**
 * Returns the value of the dictionary at the specified key; if the key does
 * not yet exist in the dictionary and a default value function is provided,
 * it will be invoked and its value will be both assigned to the dictionary
 * at the specified key and returned to the caller.
 *
 * @param obj Dictionary object or array
 * @param k Index value
 * @param defval (Optional) Function which returns a default value if that of the dictionary mapped to by the key is
 * not yet defined.
 * @return The value of the dictionary mapped to by the key or the default value
 * returned by the function if the dictionary does not contain the key.
 */
export function getdef<T, K extends keyof T>(obj: T, k: K, defval: () => T[K]) {
    let val = obj[ k ];

    if ((val === undefined) && defval) {
        val = obj[ k ] = defval();
    }
    return val;
}

/*
 * Other
 * =====
 */
export function concat(a: string, b: string) {
    return a + b;
}
