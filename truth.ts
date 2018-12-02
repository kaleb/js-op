/**
 * Cast to boolean primitive
 * @see [Boolean(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
 * @see [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
 * @see [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Converting_between_NOTs
 */
export default function truth(value: unknown) {
    return !!value;
}
