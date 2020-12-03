class Reader {
    constructor (speed, text) {
        this._speed = speed;
        this._text = text;
    }

    get speed () {
        return this._speed;
    }

    get text () {
        return this._text;
    }

    read () {
        this._readLine(this._text.split("\n").slice());
    }

    _readLine(lines) {
      setTimeout(() => {
          if (lines.length > 0) {
            console.log(lines.shift());
            this._readLine(lines);
          }
      }, this._speed * 1000 );
    }
}

module.exports = Reader;
