// tslint:disable:no-null-undefined-union max-line-length
/**
 * Optional call
 * @see [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
 */
export default function tryCall<P extends unknown[], R extends unknown>(target: (...args: P) => R, ...args: P): R;
export default function tryCall<P extends unknown[], R extends unknown>(target: ((...args: P) => R)|undefined|null, ...args: P): R|undefined;
export default function tryCall<P extends unknown[], R extends unknown>(target: ((...args: P) => R)|undefined|null, ...args: P): R|undefined {
    return target?.(...args);
}
