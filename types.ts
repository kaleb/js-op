export type Orderable = number|string|{valueOf: () => number};
export type NotSymbol = boolean|number|string|(() => any)|object;
