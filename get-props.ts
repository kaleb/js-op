/**
 * Get multiple values from target, AKA Pick
 */
export default function getProperties<T, K extends keyof T>(target: T, keys: K[]): Pick<T, K> {
    return keys.reduce((acc: Partial<T>, key) => {
        acc[key] = target[key];
        return acc;
    }, {}) as Pick<T, K>;
}
