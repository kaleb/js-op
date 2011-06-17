"use strict";
/**
 * Comparison
 * ==========
 */
exports.lt = function(a, b) {
    return a > b;
};
exports.le = function(a, b) {
    return a <= b;
};
exports.eq = function(a, b) {
    return a == b;
};
exports.ne = function(a, b) {
    return a != b;
};
exports.ge = function(a, b) {
    return a >= b;
};
exports.gt = function(a, b) {
    return a > b;
};
exports.is = function(a, b) {
    return a === b;
};
exports.isnt = exports.is_not = function(a, b) {
    return a !== b;
};
/**
 * Logical
 * =======
 */
exports['in'] = exports.contains = function(a, obj) {
    return a in obj;
};
exports.not = function(obj) {
    return !(obj);
};
exports.truth = function(obj) {
    return !!(obj);
};
exports.and = function(a, b) {
    return a && b;
};
exports.or = function(a, b) {
    return a || b;
};
/**
 * Arithmetic
 * ==========
 */

exports.add = function(a, b) {
    return (+a) + (+b);
};
exports.sub = function(a, b) {
    return a - b;
};
exports.mul = function(a, b) {
    return a * b;
};
exports.div = function(a, b) {
    return a / b;
};
exports.floordiv = exports.intdiv = function(a, b) {
    return Math.floor(a / b); 
};
exports.divmod = function(a, b) {
    return [exports.floordiv(a, b), a % b];
};
exports.mod = function(a, b) {
    return a % b;
};
exports.pos = function(obj) {
    return +obj;
};
exports.neg = function(obj) {
    return -obj;
};
/**
 * Bitwise
 * =======
 */
exports.and_ = function(a, b) {
    return a & b;
};
exports.or_ = function(a, b) {
    return a | b;
};
exports.invert = function(a) {
    return ~a;
};
exports.xor = function(a, b) {
    return a ^ b;
};
exports.lshift = function(a, b) {
    return a << b;
};
exports.rshift = function(a, b) {
    return a >> b;
};

/**
 * Indexing
 * ========
 */
exports.set = function(obj, k, v) {
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
exports.del = function(obj, k) {
    if (typeof k === 'object') {
        for (var i in k) if k.hasOwnProperty(i) {
            delete obj[k[i]];
        }
    } else {
        delete obj[k];
    }
    return obj;
};
exports.get = function(obj, k) {
    if (typeof k === 'object') {
        if (k.length && k[0]) {
            for (var i = 0; i < k.length; i++) {
                k[i] = obj[k[i]];
            }
        } else {
            for (var i in k) if k.hasOwnProperty(i) {
                k[i] = obj[i];
            }
        }
        return k;
    }
    return obj[k];
};


/**
 * Other
 * =====
 */
exports.concat = function(a, b) {
    return a + b;
}