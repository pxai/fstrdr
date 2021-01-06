export default class Dataset {
  private dataset: any;
  private key: string;

  public constructor(dataset: any, key: string) {
      this.dataset = dataset;
      console.log("This is ok with DATASET");
  }

  public get(): Promise<any> {
    return new Promise((resolve, reject) => this.dataset.get(this.key, function(err, value) {
            if (err) { reject(err); }
            console.log("Here we got a value: ", value);
            resolve(value);
        })
    );
  }

  public put(value: any): Promise<any> {
    return new Promise((resolve, reject) => this.dataset.put(this.key, value, function(err, value) {
            if (err) { reject(err); }
            console.log("Here we put a value: ", value);
            resolve(value);
        })
    );
  }

  public remove(): Promise<any> {
    return new Promise((resolve, reject) => this.dataset.remove(this.key, function(err, value) {
            if (err) { reject(err); }
            console.log("Here we removed value: ", value);
            resolve(value);
        })
    );
  }
}
