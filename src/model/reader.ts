export default class Reader {
    private _speed: number;
    private _text: string;

    public constructor (speed, text) {
        this._speed = speed;
        this._text = text;
    }

    public get speed (): number {
        return this._speed;
    }

    public get text (): string {
        return this._text;
    }

    public read () {
        this.readLine(this._text.split("\n").slice());
    }

    private readLine(lines) {
      setTimeout(() => {
          if (lines.length > 0) {
            console.log(lines.shift());
            this.readLine(lines);
          }
      }, this._speed * 1000 );
    }
}
