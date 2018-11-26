import * as assert from 'assert';
import mapAll from '../../iterable/map-all';

function add(x: number, y: number = 0, z: number = 0) {
    return x + y + z;
}
describe('mapAll', () => {
    // tslint:disable:no-magic-numbers
    it('returns an empty iterable when given zero iterables', () => {
        const i = mapAll(add);
        const result = i.next();
        assert.ok(result.done);
        assert.strictEqual(typeof result.value, 'undefined');
    });

    it('returns an iterable when given 1 iterable', () => {
        const i = mapAll(add, [1, 2]);

        let result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 1);

        result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 2);

        result = i.next();
        assert.ok(result.done);
        assert.strictEqual(typeof result.value, 'undefined');
    });

    it('returns an iterable when given 2 iterables', () => {
        const i = mapAll(add, [1, 2], [3, 4]);

        let result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 4);

        result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 6);

        result = i.next();
        assert.ok(result.done);
        assert.strictEqual(typeof result.value, 'undefined');
    });
});
