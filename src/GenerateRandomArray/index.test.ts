import 'extendedMatchers';
import { generateRandomArray } from '.';

describe('generateRandomArray function', () => {
  test('throws error on negative array size', (): void => {
    const negativeArraySize = () => { generateRandomArray(-5); };
    expect(negativeArraySize).toThrowError('Array size has to be more than 0');
  });

  test('throws error on 0 array size', (): void => {
    const emptyArray = () => { generateRandomArray(0); };
    expect(emptyArray).toThrowError('Array size has to be more than 0');
  });

  test('throws error on incorrect range', (): void => {
    const incorrectRangeArray = () => { generateRandomArray(10, 150); };
    expect(incorrectRangeArray).toThrowError('Invalid range');
  });

  test('function returns something', (): void => {
    expect(generateRandomArray(10)).toBeDefined();
  });

  test('function returns array', (): void => {
    expect(Array.isArray(generateRandomArray(10))).toBeTruthy();
  });

  test.each([1, 10, 20, 50, 100])(
    'function returns array of size %d',
    (size: number): void => {
      expect(generateRandomArray(size)).toHaveLength(size);
    });

  test('each element is grater than min', (): void => {
    const min = 10;
    expect(generateRandomArray(10, min)).toEachBeGraterOrEqual(min);
  });

  test('each element is less than max', (): void => {
    const max = 50;
    expect(generateRandomArray(10, 0, max)).toEachBeLessOrEqual(max);
  });

  test.each([[10, -10, 50], [1, 1, 1], [100, 5, 10]])(
    'each of %d elements is withing range [%d, %d]',
    (size: number, minValue: number, maxValue: number): void => {
      expect(generateRandomArray(size, minValue, maxValue)).toEachBeWithingRange(minValue, maxValue);
    });
});
