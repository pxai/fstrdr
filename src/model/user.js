class User {
    constructor (name) {
        this._name = name;
        this._exercises = [];
    }

    get name () {
        return this._name;
    }

    get state () {
        return {
            name: this._name,
            exercises: this._exercises
        };
    }

    addExercise (exercise) {
        this._exercises.push(exercise);
    }
}

module.exports = User;
