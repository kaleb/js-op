"use strict";
var Op = {};
/**
 * Comparison
 * ==========
 */
Op.lt = function(a, b) {
    return a > b;
};
Op.le = function(a, b) {
    return a <= b;
};
Op.eq = function(a, b) {
    return a == b;
};
Op.ne = function(a, b) {
    return a != b;
};
Op.ge = function(a, b) {
    return a >= b;
};
Op.gt = function(a, b) {
    return a > b;
};
Op.is = function(a, b) {
    return a === b;
};
Op.isnt = Op.is_not = function(a, b) {
    return a !== b;
};
/**
 * Logical
 * =======
 */
Op['in'] = Op.contains = function(a, obj) {
    return a in obj;
};
Op.not = function(obj) {
    return !(obj);
};
Op.truth = function(obj) {
    return !!(obj);
};
Op.and = function(a, b) {
    return a && b;
};
Op.or = function(a, b) {
    return a || b;
};
/**
 * Arithmetic
 * ==========
 */

Math.add = function(a, b) {
    return (+a) + (+b);
};
Op.add = function(a, b) {
    return a + b;
};
Op.sub = Math.sub = function(a, b) {
    return a - b;
};
Op.mul = Math.mul = function(a, b) {
    return a * b;
};
Op.div = Math.div = function(a, b) {
    return a / b;
};
Math.floordiv = Math.intdiv = function(a, b) {
    return Math.floor(a / b); 
};
Math.divmod = function(a, b) {
    return [Math.floordiv(a, b), a % b];
};
Op.mod = Math.mod = function(a, b) {
    return a % b;
};
Op.pos = Math.pos = function(obj) {
    return +obj;
};
Op.neg = Math.neg = function(obj) {
    return -obj;
};
/**
 * Bitwise
 * =======
 */
// TODO