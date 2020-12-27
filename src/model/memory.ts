import { random, randomWithin, randomIndex, shuffle } from '../util/random';

export default class Memory {
  private _elements: any[];
  private _picked: any[];

  public constructor (elements: any[]) {
      this._elements = elements;
  }

  public get elements (): any[] {
      return this._elements;
  }

  public shuffle (): void {
      return shuffle(this._elements);
  }

  public pick (qty): any[] {
      this._picked = shuffle(this._elements).slice(0, qty);
      return this._picked;
  }

  public get picked (): any {
      return this._picked;
  }

  public isCorrect (element): boolean {
      return this._picked.includes(element);
  }

  public allCorrect (guess): boolean {
      return guess.every( element => this._picked.includes(element) );
  }
}
