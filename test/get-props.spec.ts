import * as assert from 'assert';
import getProperties from '../get-props';

describe('get-prop', () => {
    it('gets properties', () => {
        const x = getProperties(Math, ['PI', 'E']);
        assert.strictEqual(x.PI, Math.PI);
        assert.strictEqual(x.E, Math.E);
    });
    it('null', () => {
        // tslint:disable-next-line: no-null-keyword completed-docs no-any
        const nil: {test: string} = null as any;
        assert.throws(() => getProperties(nil, ['test']));
    });
});
