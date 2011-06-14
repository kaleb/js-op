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

Math.add = function(a, b) {
    return (+a) + (+b);
};
exports.add = function(a, b) {
    return a + b;
};
exports.sub = Math.sub = function(a, b) {
    return a - b;
};
exports.mul = Math.mul = function(a, b) {
    return a * b;
};
exports.div = Math.div = function(a, b) {
    return a / b;
};
Math.floordiv = Math.intdiv = function(a, b) {
    return Math.floor(a / b); 
};
Math.divmod = function(a, b) {
    return [Math.floordiv(a, b), a % b];
};
exports.mod = Math.mod = function(a, b) {
    return a % b;
};
exports.pos = Math.pos = function(obj) {
    return +obj;
};
exports.neg = Math.neg = function(obj) {
    return -obj;
};
/**
 * Bitwise
 * =======
 */
// TODO
