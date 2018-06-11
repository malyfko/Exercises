declare namespace jest {
  interface Matchers<R> { // tslint:disable-line interface-name
    toEachBeGraterOrEqual: (argument: number) => {};
    toEachBeLessOrEqual: (argument: number) => {};
    toEachBeWithingRange: (minValue: number, maxValue: number) => {};
  }

  interface It {
    each: any;
  }
}

const toEachBeGraterOrEqual = (received: number[], argument: number) =>  {
  if (received.every((element) => element >= argument)) {
    return {
      message: () => `expect each element not to be grater or equal ${argument}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expect each element to be grater or equal ${argument}`,
      pass: false,
    };
  }
};

const toEachBeLessOrEqual = (received: number[], argument: number) =>  {
  if (received.every((element) => element <= argument)) {
    return {
      message: () => `expect each element not to be less or equal ${argument}`,
      pass: true,
    };
  } else {
    return {
      message: () => `expect each element to be less or equal ${argument}`,
      pass: false,
    };
  }
};

const toEachBeWithingRange = (received: number[], minValue: number, maxValue: number) => {
  if (received.every((element) => (element >= minValue && element <= maxValue))) {
    return {
      message: () => `expect each element not to be withing range [${minValue}, ${maxValue}]`,
      pass: true,
    };
  } else {
    return {
      message: () => `expect each element to be withing range [${minValue}, ${maxValue}]`,
      pass: false,
    };
  }
};

expect.extend({
  toEachBeGraterOrEqual,
  toEachBeLessOrEqual,
  toEachBeWithingRange,
});
