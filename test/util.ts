import * as assert from 'assert';

/**
 * Assert f is commutative
 */
export function assertIsCommutative<X, Z= X>(f: (x: X, y: X) => Z, x: X, y: X) {
    assert.strictEqual(f(x, y), f(y, x));
}

/**
 * Assert f is associative
 */
export function assertIsAssociative<X>(f: (x: X, y: X) => X, x: X, y: X, z: X) {
    assert.strictEqual(f(f(x, y), z), f(x, f(y, z)));
}

/**
 * Assert f has identity
 */
export function assertHasIdentity<X>(f: (x: X, y: X) => X, identity: X, x: X) {
    assert.strictEqual(f(x, identity), x);
    assert.strictEqual(f(identity, x), x);
}

/**
 * Assert f has inverse
 */
export function assertHasInverse<X>(f: (x: X, y: X) => X, inverse: (x: X) => X, identity: X, value: X) {
    const inverseValue = inverse(value);
    assert.strictEqual(f(value, inverseValue), identity);
    assert.strictEqual(f(inverseValue, value), identity);
}
