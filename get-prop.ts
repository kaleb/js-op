/**
 * Get value from target
 * @see [Reflect.get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)
 */
export default function getProperty<T, K extends keyof T>(target: T, key: K): T[K] {
    return target[key];
}
