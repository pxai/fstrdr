class User {
    constructor (name) {
        this._name = name;
    }

    get name () {
        return this._name;
    }

    get state () {
        return {
            name: this._name
        };
    }
}

module.exports = User;
