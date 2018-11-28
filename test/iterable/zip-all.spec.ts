import * as assert from 'assert';
import zip from '../../iterable/zip-all';

describe('zip-all', () => {
    // tslint:disable:no-magic-numbers
    it('returns an empty iterable when given zero arguments', () => {
        const i = zip();
        assert.deepStrictEqual(i.next(), {
            done: true,
            value: [],
        });
    });

    it('returns an iterable of length-1 arrays when given 1 valid argument', () => {
        const i = zip([1, 2]);
        assert.deepStrictEqual(i.next(), {
            done: false,
            value: [1],
        });
        assert.deepStrictEqual(i.next(), {
            done: false,
            value: [2],
        });
        assert.deepStrictEqual(i.next(), {
            done: true,
            value: [undefined],
        });
    });

    it('returns an iterable of length-2 arrays when given 2 valid arguments', () => {
        const i = zip([1, 2], ['a', 'b']);
        assert.deepStrictEqual(i.next(), {
            done: false,
            value: [1, 'a'],
        });
        assert.deepStrictEqual(i.next(), {
            done: false,
            value: [2, 'b'],
        });
        assert.deepStrictEqual(i.next(), {
            done: true,
            value: [undefined, undefined],
        });
    });
});
