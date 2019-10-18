/**
 * Get value from target
 * @see [Reflect.get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)
 */
export function getDefaults<T, U extends Partial<T>>(target: T, defaults: U) {
    const keys = Reflect.ownKeys(defaults) as (keyof U)[];
    return keys.reduce<Partial<U>>((acc, key) => {
        const a = key in target ? target[key as keyof T] : defaults[key];
        acc[key] = a;
        return acc;
    }, {}) as U;
}
