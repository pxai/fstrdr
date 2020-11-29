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

  pick (qty) {
      this._picked = shuffle(this._elements).slice(0, qty);
      return this._picked;
  }

  get picked () {
      return this._picked;
  }

  isCorrect (element) {
      return this._picked.includes(element);
  }

  allCorrect (guess) {
      return guess.every( element => this._picked.includes(element) );
  }
}

module.exports =  Memory;
