import {Orderable} from './types';
export default function le<T extends Orderable>(a: T, b: T) {
    return a <= b;
}
