import {Orderable} from './types';
export default function ge<T extends Orderable>(a: T, b: T) {
    return a >= b;
}
