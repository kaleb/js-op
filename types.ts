export type Orderable = number|string|{valueOf(): number};
// tslint:disable-next-line:no-any
export type NotSymbol = boolean|number|string|(() => any)|object;
