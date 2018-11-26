import assert from 'assert';

// tslint:disable:no-any
export function assertDone(result: IteratorResult<any>, message = 'result is not done') {
    assert.ok(result.done, message);
    assert.ok(typeof result.value === 'undefined');
}
export function assertEmpty(iterable: Iterable<any>, message = 'iterable is not empty') {
    const iterator = iterable[Symbol.iterator]();
    assertDone(iterator.next(), message);
}
