import mul from '../mul';
import { assertHasIdentity, assertHasInverse, assertIsAssociative, assertIsCommutative } from './util';

// tslint:disable:no-magic-numbers
describe('mul', () => {
    describe('numbers', () => {
        const identity = 1;
        const reciprocal = (n: number) => 1 / n;
        it('is commutative', () => {
            assertIsCommutative<number>(mul, 2, 3);
        });
        it('is associative', () => {
            assertIsAssociative<number>(mul, 2, 3, 4);
        });
        it('has identity of one', () => {
            assertHasIdentity<number>(mul, identity, 2);
        });
        it('has inverse 1/x', () => {
            assertHasInverse<number>(mul, reciprocal, identity, 2);
        });
    });
    if (typeof BigInt !== 'undefined') {
        describe('bigints', () => {
            const identity = BigInt(1);
            it('is commutative', () => {
                assertIsCommutative<bigint>(mul, BigInt(2), BigInt(3));
            });
            it('is associative', () => {
                assertIsAssociative<bigint>(mul, BigInt(2), BigInt(3), BigInt(4));
            });
            it('has identity of 1n', () => {
                assertHasIdentity<bigint>(mul, identity, BigInt(2));
            });
        });
    }
});
