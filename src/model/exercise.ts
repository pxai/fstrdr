export default class Exercise {
    private _type: string;
    private _outcome: any;

    public constructor (type: string) {
      this._type = type;
    }

    public get type (): string {
        return this._type;
    }

    public get outcome (): any {
        return this._outcome;
    }

    public set outcome (outcome: any) {
        this._outcome = outcome;
    }

    public get state (): any {
        return {
            type: this._type,
            outcome: this._outcome
        };
    }
}
