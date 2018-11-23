import {Orderable} from './types';
export default function gt<T extends Orderable>(a: T, b: T) {
    return a > b;
}
