import 'extendedMatchers';
import { bubbleSort } from '.';

describe('bubbleSort function', () => {
  test('function returns array', (): void => {
    expect(Array.isArray(bubbleSort([1, 15, 0, 19, -4, 100, 19, 18, 20, 39]))).toBeTruthy();
  });

  test('function doesn`t mutate original array', (): void => {
    const array = Object.freeze([2, 7, 10, 0, 19, 16, 15, 16, 0]);
    const sortArray = (): void => { bubbleSort(array); };
    expect(sortArray).not.toThrowError();
  });

  test.each([
    [[64, 34, 25, 12, 22, 11, 90]],
    [[5, 0, 1, 6, 0, 15, -2, 4]],
    [[0, 1, 2, 3]],
    [[1, 1, 1]],
    [[]],
  ])(
    'function returns array correctly sorted in ascending order',
    (inputArray: number[]): void => {
      expect(bubbleSort(inputArray)).toBeSorted();
    });
});
