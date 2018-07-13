import { swap } from '../helpers';

export const bubbleSort = (inputArray: ReadonlyArray<number>): number[] => {
  const outputArray = inputArray.slice();
  for (let i = 0; i < outputArray.length - 1; i++) {
    for (let j = 0; j < outputArray.length - i - 1; j++) {
      if (outputArray[j] > outputArray[j + 1]) {
        swap(outputArray, j, j + 1);
      }
    }
  }

  return outputArray;
};
