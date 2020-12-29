export default class User {
    private _name: string;
    private _exercises: any[];

    public constructor (name: string) {
        this._name = name;
        this._exercises = [];
    }

    public get name (): string {
        return this._name;
    }

    public get state (): any {
        return {
            name: this._name,
            exercises: this._exercises
        };
    }

    public addExercise (exercise: any) {
        this._exercises.push(exercise);
    }
}
