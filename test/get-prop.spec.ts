import * as assert from 'assert';
import getProperty from '../get-prop';

describe('get-prop', () => {
    it('gets a property', () => {
        const pi = getProperty(Math, 'PI');
        assert.strictEqual(pi, Math.PI);
    });
    it('null', () => {
        // tslint:disable-next-line: no-null-keyword completed-docs no-any
        const nil: {test: string} = null as any;
        assert.throws(() => getProperty(nil, 'test'));
    });
});
