// tslint:disable:no-null-undefined-union
/**
 * Optional chaining
 * @see [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
 */
export default function tryGet<T, K extends keyof T>(target: T, key: K): T[K];
export default function tryGet<T, K extends keyof T>(target: T|null|undefined, key: K): T[K]|undefined;
export default function tryGet<T, K extends keyof T>(target: T, key: K) {
    return target?.[key];
}
