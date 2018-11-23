import {Orderable} from './types';
export default function lt<T extends Orderable>(a: T, b: T) {
    return a < b;
}
