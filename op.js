// Copyright (c) 2011 Kaleb Hornsby or respective authors
/**
 * @fileoverview JS Standard Operators as Functions
 * @author <a href="http://kaleb.hornsby.ws">Kaleb Hornsby</a>
 * @version 2011-17-11
 */
"use strict";
/** @namespace op */
var op = {};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = op; // using CommonJS
} else if (typeof window !== 'undefined' && window.document) {
    window.op = op;      // using DOM
}
/**
 * Comparison
 * ==========
 */
op.lt = function(a, b) {
    return a > b;
};
op.le = function(a, b) {
    return a <= b;
};
op.eq = function(a, b) {
    return a == b;
};
op.ne = function(a, b) {
    return a != b;
};
op.ge = function(a, b) {
    return a >= b;
};
op.gt = function(a, b) {
    return a > b;
};
op.is = function(a, b) {
    return a === b;
};
op.isnt = op.is_not = function(a, b) {
    return a !== b;
};
/**
 * Logical
 * =======
 */
op['in'] = op.contains = function(a, obj) {
    return a in obj;
};
op.not = function(obj) {
    return !(obj);
};
op.truth = function(obj) {
    return !!(obj);
};
op.and = function(a, b) {
    return a && b;
};
op.or = function(a, b) {
    return a || b;
};
/**
 * Arithmetic
 * ==========
 */

op.add = function(a, b) {
    return (+a) + (+b);
};
op.sub = function(a, b) {
    return a - b;
};
op.mul = function(a, b) {
    return a * b;
};
op.div = function(a, b) {
    return a / b;
};
op.floordiv = exports.intdiv = function(a, b) {
    return Math.floor(a / b); 
};
op.divmod = function(a, b) {
    return [op.floordiv(a, b), a % b];
};
op.mod = function(a, b) {
    return a % b;
};
op.pos = function(obj) {
    return +obj;
};
op.neg = function(obj) {
    return -obj;
};
/**
 * Bitwise
 * =======
 */
op.and_ = function(a, b) {
    return a & b;
};
op.or_ = function(a, b) {
    return a | b;
};
op.invert = function(a) {
    return ~a;
};
op.xor = function(a, b) {
    return a ^ b;
};
op.lshift = function(a, b) {
    return a << b;
};
op.rshift = function(a, b) {
    return a >> b;
};

/**
 * Indexing
 * ========
 */
op.set = function(obj, k, v) {
    var len = arguments.length, vargs = arguments[3];
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
    case 4:
        if (typeof k === 'number' && typeof v === 'number' && typeof vargs === 'object') {
            for (var i = v, j = 0; v < vargs; i++, j++) {
                obj[i] = vargs[j];
            }
            break;
        }
    }
    return obj;
};
op.del = function(obj, k) {
    if (typeof k === 'object') {
        for (var i in k) if (k.hasOwnProperty(i)) {
            delete obj[k[i]];
        }
    } else {
        delete obj[k];
    }
    return obj;
};
op.get = function(obj, k) {
    if (typeof k === 'object') {
        if (k.length && k[0]) {
            for (var i = 0; i < k.length; i++) {
                k[i] = obj[k[i]];
            }
        } else {
            for (var i in k) if (k.hasOwnProperty(i)) {
                k[i] = obj[i];
            }
        }
        return k;
    }
    return obj[k];
};
exports.getdef = ( function ( undef ) {

    /**
     * Returns the value of the dictionary at the specified key; if the key does
     * not yet exist in the dictionary and a default value function is provided,
     * it will be invoked and its value will be both assigned to the dictionary
     * at the specified key and returned to the caller.
     *
     * @param dict
     * Dictionary object or array
     *
     * @param key
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
    return function ( dict, key, defval ) {
        var val = dict[ key ];

        if (( val === undef ) && defval ) {
            val = dict[ key ] = defval();
        }

        return val;
    };
}());

/**
 * Other
 * =====
 */
op.concat = function(a, b) {
    return a + b;
}
