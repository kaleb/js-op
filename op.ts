export function lt(a, b) {
    return a < b;
};
export function le(a, b) {
    return a <= b;
};
export function eq(a, b) {
    return a == b;
};
export function ne(a, b) {
    return a != b;
};
export function ge(a, b) {
    return a >= b;
};
export function gt(a, b) {
    return a > b;
};
export function is(a, b) {
    return a === b;
};
export function isnt(a, b) {
    return a !== b;
};
/**
 * Logical
 * =======
 */
export function isIn(a, obj) {
    return a in obj;
}
export function not(obj) {
    return !(obj);
};
export function truth(obj) {
    return !!(obj);
};
export function and(a, b) {
    return a && b;
};
export function or(a, b) {
    return a || b;
};
/**
 * Arithmetic
 * ==========
 */

export function add(a, b) {
    return (+a) + (+b);
};
export function sub(a, b) {
    return a - b;
};
export function mul(a, b) {
    return a * b;
};
export function div(a, b) {
    return a / b;
};
export function floordiv(a, b) {
    return Math.floor(a / b); 
};
export function divmod(a, b) {
    return [floordiv(a, b), a % b];
};
export function mod(a, b) {
    return a % b;
};
export function pos(obj) {
    return +obj;
};
export function neg(obj) {
    return -obj;
};
/**
 * Bitwise
 * =======
 */
export function and_(a, b) {
    return a & b;
};
export function or_(a, b) {
    return a | b;
};
export function invert(a) {
    return ~a;
};
export function xor(a, b) {
    return a ^ b;
};
export function lshift(a, b) {
    return a << b;
};
export function rshift(a, b) {
    return a >> b;
};

/**
 * Indexing
 * ========
 */
export function set(obj, k, v) {
    var len = arguments.length;
    if (len < 2 || len > 4 ) return; //perhaps throw error?
    switch(len) {
    case 2:
        if (typeof k === 'object') {
            for (var i in k) if (k.hasOwnProperty(i)) {
                obj[i] = k[i];
            }
            // break so fall-through sets obj[k] = undef
            break;
        }
    case 3:
        obj[k] = v;  //What if typeof k is object?
        break;
    }
    return obj;
};
export function del(obj, k) {
    if (typeof k === 'object') {
        for (var i in k) if (k.hasOwnProperty(i)) {
            delete obj[k[i]];
        }
    } else {
        delete obj[k];
    }
    return obj;
};
export function get(obj, k) {
    if (typeof k === 'object') {
        if (k.length && k[0]) {
            for (var i = 0; i < k.length; i++) {
                k[i] = obj[k[i]];
            }
        } else {
            for (var j in k) if (k.hasOwnProperty(j)) {
                k[i] = obj[j];
            }
        }
        return k;
    }
    return obj[k];
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
export function getdef(obj, k, defval) {
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
export function concat(a, b) {
    return a + b;
}
