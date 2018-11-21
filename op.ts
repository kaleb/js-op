export type Orderable = number|string|{valueOf: () => number};
export type NotSymbol = boolean|number|string|Function|object;

export function lt<T extends Orderable>(a: T, b: T) {
    return a < b;
};
export function le<T extends Orderable>(a: T, b: T) {
    return a <= b;
};
export function ge<T extends Orderable>(a: T, b: T) {
    return a >= b;
};
export function gt<T extends Orderable>(a: T, b: T) {
    return a > b;
};
export function eq<T>(a: T, b: T) {
    return a == b;
};
export function ne<T>(a: T, b: T) {
    return a != b;
};
export function is<T>(a: T, b: T) {
    return a === b;
};
export function isnt<T>(a: T, b: T) {
    return a !== b;
};

/**
 * Logical
 * =======
 */
export function isIn(a: string, obj: object) {
    return a in obj;
}
export function not(obj: unknown) {
    return !(obj);
};
export function truth(obj: unknown) {
    return !!(obj);
};

export function and(a: unknown, b: unknown) {
    return a && b;
};
export function or(a: unknown, b: unknown) {
    return a || b;
};

/**
 * Arithmetic
 * ==========
 */

export function add(a: number, b: number) {
    return a + b;
};
export function sub(a: number, b: number) {
    return a - b;
};
export function mul(a: number, b: number) {
    return a * b;
};
export function div(a: number, b: number) {
    return a / b;
};
export function floordiv(a: number, b: number) {
    return Math.floor(a / b); 
};
export function divmod(a: number, b: number) {
    return [floordiv(a, b), a % b];
};
export function mod(a: number, b: number) {
    return a % b;
};
export function pos(obj: NotSymbol) {
    return +obj;
};
export function neg(obj: number) {
    return -obj;
};
/**
 * Bitwise
 * =======
 */
export function and_(a: number, b: number) {
    return a & b;
};
export function or_(a: number, b: number) {
    return a | b;
};
export function invert(a: number) {
    return ~a;
};
export function xor(a: number, b: number) {
    return a ^ b;
};
export function lshift(a: number, b: number) {
    return a << b;
};
export function rshift(a: number, b: number) {
    return a >> b;
};

function getProperty<T, K extends keyof T>(obj: T, propertyName: K) {
    return obj[propertyName];
}

function getProperties<T, K extends keyof T>(obj: T, propertyNames: K[]) {
    return propertyNames.reduce((result, propertyName) => {
        result[propertyName] = obj[propertyName];
        return result;
    }, {} as Partial<T>);
}

function setProperty<T, K extends keyof T>(obj: T, propertyName: K, propertyValue: T[K]) {
    obj[propertyName] = propertyValue;
    return obj;
}

function setProperties<T, K extends keyof T>(obj: T, properties: Partial<T>) {
    Object.assign(obj, properties) as T;
    return obj;
}

/**
 * Indexing
 * ========
 */
export function set<T, K extends keyof T>(obj: T, properties: Partial<T>): T;
export function set<T, K extends keyof T>(obj: T, propertyName: K, propertyValue: T[K]): T;
export function set<T>(obj: T, k: (keyof T|Partial<T>), v?: unknown) {
    var len = arguments.length;
    if (len < 2 || len > 3 ) return; //perhaps throw error?
    switch(len) {
    case 2:
        if (typeof k === 'object' && k !== null) {
            setProperties(obj, k);
            // break so fall-through sets obj[k] = undef
            break;
        }
    case 3:
        if (typeof k === 'string' || typeof k === 'number') {
            setProperty(obj, k, v as any);
        }
        break;
    }
    return obj;
};
export function del<T>(obj: T, k: keyof T) {
    delete obj[k];
    return obj;
};
export function get<T>(obj: T, k: keyof T|Partial<T>|Array<keyof T>) {
    if (typeof k === 'object') {
        if (Array.isArray(k)) {
            getProperties(obj, k);
        }
        return k;
    }
    return getProperty(obj, k);
};
/**
 * Returns the value of the dictionary at the specified key; if the key does
 * not yet exist in the dictionary and a default value function is provided,
 * it will be invoked and its value will be both assigned to the dictionary
 * at the specified key and returned to the caller.
 *
 * @param obj
 * Dictionary object or array
 *
 * @param k
 * Index value
 *
 * @param defval
 * (Optional) Function which returns a default value if that of the
 * dictionary mapped to by the key is not yet defined.
 *
 * @return
 * The value of the dictionary mapped to by the key or the default value
 * returned by the function if the dictionary does not contain the key.
 */
export function getdef<T, K extends keyof T>(obj: T, k: K, defval: () => T[K]) {
    var val = obj[ k ];

    if (( val === undefined ) && defval ) {
        val = obj[ k ] = defval();
    }
    return val;
};

/**
 * Other
 * =====
 */
export function concat(a: string, b: string) {
    return a + b;
}
