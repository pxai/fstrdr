const { random, randomWithin, randomIndex, shuffle } = require('../../src/random');

describe('basic testing for random utils', () => {
  test('should return random number', () => {
    const value = random(5);
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(5);
  });

  test('should return random number within min and max', () => {
      const value = randomWithin(3, 10);

      expect(value).toBeGreaterThanOrEqual(3);
      expect(value).toBeLessThanOrEqual(10);
  });

  test('should return a randomIndex from array', () => {
      const elements = [2, 5, 7, 2, 7, 1, 3, 7, 3, 2, 5, 1, 4];
      const value = randomIndex(elements);

      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(elements.length - 1);
  });

  test('should shuffle values', () => {
      const elements = [2, 5, 7, 2, 7, 1, 3, 7, 3, 2, 5, 1, 4];
      const shuffled = shuffle(elements);

      expect(shuffled.length).toEqual(elements.length);
      expect(shuffled).not.toEqual(elements);
  });
});
