/**
 * Return whether the given key is in the given target or its prototype chain.
 * @see [in operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
 * @see [Reflect.has](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has)
 * @param target target object
 * @param key property name or array index
 */
export default function has(target: object, key: string|number|symbol) {
    return key in target;
}
