import * as assert from 'assert';
import mapAll from '../../iterable/map-all';
import { assertDone, assertEmpty } from '../util';

/** Add numbers */
function add(x: number = 0, y: number = 0, z: number = 0) {
    return x + y + z;
}
describe('mapAll', () => {
    // tslint:disable:no-magic-numbers
    it('returns an empty iterable when given zero iterables', () => {
        assertEmpty(mapAll(add, ...[]));
    });

    it('returns an iterable when given 1 iterable', () => {
        const i = mapAll(add, [1, 2]);
        assert.deepStrictEqual(i.next(), {done: false, value: 1});
        assert.deepStrictEqual(i.next(), {done: false, value: 2});
        assertDone(i.next());
    });

    it('returns an iterable when given 2 iterables', () => {
        const i = mapAll(add, [1, 2], [3, 4]);
        assert.deepStrictEqual(i.next(), {done: false, value: 4});
        assert.deepStrictEqual(i.next(), {done: false, value: 6});
        assertDone(i.next());
    });
});
