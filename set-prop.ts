/**
 * Set prop
 */
export function setProp<T, K extends keyof T>(target: T, key: K, value: T[K]): T {
    target[key] = value;
    return target;
}
