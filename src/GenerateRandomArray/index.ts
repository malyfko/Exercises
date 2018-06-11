export const generateRandomArray = (size: number, minValue = -100, maxValue = 100): number[] => {
  if (size < 1) {
    throw new Error('Array size has to be more than 0');
  } else if (minValue > maxValue) {
    throw new Error('Invalid range');
  } else {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(Math.round(Math.random() * (maxValue - minValue) + minValue));
    }

    return array;
  }
};
