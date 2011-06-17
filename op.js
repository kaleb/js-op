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
exports.band = function(a, b) {
    return a & b;
};
exports.bor = function(a, b) {
    return a | b;
};
exports.bneg = function(a) {
    return ~a;
};
exports.bxor = function(a, b) {
    return a ^ b;
};
exports.asl = function(a, b) {
    return a << b;
};
exports.asr = function(a, b) {
    return a >> b;
};
/**
 * Miscellaneous
 */
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
