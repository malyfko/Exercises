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

const toBeSorted = (received: number[]) => {
  for (let i = 1; i <= received.length - 1; i++) {
    if (received[i] < received[i - 1]) {
      return {
        message: () => 'expect array not to be sorted in ascending order',
        pass: false,
      };
    }
  }
  return {
    message: () => 'expect array to be sorted in ascending order',
    pass: true,
  };
};

expect.extend({
  toBeSorted,
  toEachBeGraterOrEqual,
  toEachBeLessOrEqual,
  toEachBeWithingRange,
});
