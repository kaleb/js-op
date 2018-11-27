import assert from 'assert';
import * as op from '../index';

describe('op', () => {
    // tslint:disable:no-magic-numbers
    it('works', () => {
        assert.ok(op.lt(1, 2));
        assert.ok(op.lt('', 'a'));
        assert.ok(op.lt(new Date(0), new Date()));
        assert.ok(op.le(1, 2));
        assert.ok(op.ge(2, 1));
        assert.ok(op.gt(2, 1));
        assert.ok(op.eq(1, 1));
        assert.ok(op.ne(1, 2));
        assert.ok(op.is(1, 1));
        assert.ok(op.isnt(1, 2));
        assert.ok(op.isIn('isIn', op));
        assert.ok(op.not(false));
        assert.ok(op.truth(1));
        assert.ok(op.and(1, true));
        assert.ok(op.or(true, false));

        assert.strictEqual(op.add(1, 2), 3);
        assert.strictEqual(op.sub(1, 2), -1);
        assert.strictEqual(op.mul(1, 2), 2);
        assert.strictEqual(op.div(1, 2), 0.5);
        assert.strictEqual(op.floordiv(1, 2), 0);
        assert.deepStrictEqual(op.divmod(1, 2), [0, 1]);
        assert.strictEqual(op.mod(1, 2), 1);
        assert.strictEqual(op.pos(-1), -1);
        assert.strictEqual(op.neg(-1), 1);

        assert.strictEqual(op.and_(1, 2), 0);
        assert.strictEqual(op.or_(1, 2), 3);
        assert.strictEqual(op.invert(1), -2);
        assert.strictEqual(op.xor(1, 2), 3);
        assert.strictEqual(op.lshift(1, 2), 4);
        assert.strictEqual(op.rshift(1, 2), 0);

        assert.strictEqual(op.concat('a', 'b'), 'ab');

        assert.strictEqual(typeof op.get(op, 'get'), 'function');
        // tslint:disable-next-line:no-object-literal-type-assertion
        assert.deepStrictEqual(op.set({} as {key: string}, 'key', 'value'), {key: 'value'});

        const o = {key: 'value'};
        assert.deepStrictEqual(op.del(o, 'key'), {});
    });
});
