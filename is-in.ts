/**
 * Return whether the given key is in the given target or its prototype chain.
 * @see [in operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
 * @see [Reflect.has](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has)
 * @param key property name or array index
 * @param target target object
 */
export default function isIn(key: string|number|symbol, target: object) {
    return key in target;
}
