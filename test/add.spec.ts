import add from '../add';
import neg from '../neg';
import { assertHasIdentity, assertHasInverse, assertIsAssociative, assertIsCommutative } from './util';

// tslint:disable:no-magic-numbers

describe('add', () => {
    describe('numbers', () => {
        const identity = 0;
        it('is commutative', () => {
            assertIsCommutative<number>(add, 1, 2);
        });
        it('is associative', () => {
            assertIsAssociative<number>(add, 1, 2, 3);
        });
        it('has identity of zero', () => {
            assertHasIdentity<number>(add, identity, 1);
        });
        it('has inverse of neg', () => {
            assertHasInverse<number>(add, neg, identity, 1);
        });
    });
    if (typeof BigInt !== 'undefined') {
        describe('bigints', () => {
            const identity = BigInt(0);
            it('is commutative', () => {
                assertIsCommutative<bigint>(add, BigInt(1), BigInt(2));
            });
            it('is associative', () => {
                assertIsAssociative<bigint>(add, BigInt(1), BigInt(2), BigInt(3));
            });
            it('has identity of 0n', () => {
                assertHasIdentity<bigint>(add, identity, BigInt(1));
            });
            it('has inverse of neg', () => {
                assertHasInverse<bigint>(add, neg, identity, BigInt(1));
            });
        });
    }
});
