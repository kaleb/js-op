/**
 * Get value from target
 * @see [Reflect.get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)
 */
export function getDefault<T, K extends keyof T>(target: T, key: K, defaultValue: T[K]) {
    return target?.[key] ?? defaultValue;
}
