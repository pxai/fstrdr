import { expect } from 'chai';
import { random, randomWithin, randomIndex, shuffle } from '../../../src/util/random';

describe('basic testing for random utils', () => {
  it('should return random number', () => {
    const value = random(5);
    expect(value).to.be.within(0, 5);
  });

  it('should return random number within min and max', () => {
      const value = randomWithin(3, 10);

      expect(value).to.be.within(3, 10);
  });

  it('should return a randomIndex from array', () => {
      const elements = [2, 5, 7, 2, 7, 1, 3, 7, 3, 2, 5, 1, 4];
      const value = randomIndex(elements);

      expect(value).to.be.within(0, elements.length - 1);
  });

  it('should shuffle values', () => {
      const elements = [2, 5, 7, 2, 7, 1, 3, 7, 3, 2, 5, 1, 4];
      const shuffled = shuffle(elements);

      expect(shuffled.length).to.equal(elements.length);
      expect(shuffled).to.not.equal(elements);
  });
});
