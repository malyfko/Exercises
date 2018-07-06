declare namespace jest {
  interface Matchers<R> { // tslint:disable-line interface-name
    toEachBeGraterOrEqual: (argument: number) => {};
    toEachBeLessOrEqual: (argument: number) => {};
    toEachBeWithingRange: (minValue: number, maxValue: number) => {};
    toBeSorted: () => {};
  }

  interface It {
    each<U>(tests: Array<[U]>): ((description: string, test: (val: U) => void) => void);
    each<U, Q>(tests: Array<[U, Q]>): ((description: string, test: (val: U, val1: Q) => void) => void);
    each<U, Q, R>(tests: Array<[U, Q, R]>): ((description: string, test: (val: U, val1: Q, val2: R) => void) => void);
    each<T>(tests: T[]): ((description: string, test: (val: T) => void) => void);
  }
}
