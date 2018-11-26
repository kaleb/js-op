import * as assert from 'assert';
import map from '../../iterable/map';
import { iteratorFromIterable as iterator } from '../../iterator';

function square(x: number) {
    return x * x;
}
describe('map', () => {
    // tslint:disable:no-magic-numbers
    it('returns an empty iterable when given an empty iterable', () => {
        const iterable = map(square, []);
        const i = iterator(iterable);
        const result = i.next();
        assert.ok(result.done);
        assert.strictEqual(typeof result.value, 'undefined');
    });
    it('applies given function to each yielded result value', () => {
        const iterable = map(square, [2, 3]);
        const i = iterator(iterable);

        let result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 4);

        result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 9);

        result = i.next();
        assert.ok(result.done);
        assert.strictEqual(typeof result.value, 'undefined');
    });
    it('does not consume the iterable', () => {
        const iterable = map(square, [2, 3]);
        const array1 = [...iterable];
        assert.deepStrictEqual(array1, [4, 9]);
        const array2 = [...iterable];
        assert.deepStrictEqual(array2, [4, 9]);
    });
});
