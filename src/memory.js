const { random, randomWithin, randomIndex, shuffle } = require('./random');

class Memory {
  constructor (elements) {
      this._elements = elements;
  }

  get elements () {
      return this._elements;
  }

  shuffle () {
      return shuffle(this._elements);
  }
}

module.exports =  Memory;
