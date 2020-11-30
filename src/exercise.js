class Exercise {
    constructor (type) {
      this._type = type;
    }

    get type () {
        return this._type;
    }

    get outcome () {
        return this._outcome;
    }

    set outcome (outcome) {
        this._outcome = outcome;
    }

    get state () {
        return {
            type: this._type,
            outcome: this._outcome
        };
    }
}

module.exports = Exercise;
