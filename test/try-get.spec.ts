import * as assert from 'assert';
import tryGet from '../try-get';

describe('get-prop', () => {
    it('gets a property', () => {
        const pi = tryGet(Math, 'PI');
        assert.strictEqual(pi, Math?.PI);
    });
    it('null', () => {
        // tslint:disable-next-line: no-null-keyword completed-docs no-any
        const nil: {test: string}|null = null as any;
        assert.strictEqual(tryGet(nil, 'test'), nil?.test);
    });
});
