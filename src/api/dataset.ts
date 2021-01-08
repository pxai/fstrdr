export default class Dataset {
  private dataset: any;
  private key: string;
  private syncInterval: int;
  private enableSync: boolean;
  private timer: int;


  public constructor(dataset: any, key: string, syncInterval: int = 3000) {
      this.dataset = dataset;
      this.key = key;
      this.syncInterval = syncInterval;
      this.enableSync = false;
      console.log("This is ok with DATASET");
  }

  public get(): Promise<any> {
    return new Promise((resolve, reject) => this.dataset.get(this.key, function(err, value) {
            if (err) { reject(err); }
            console.log("Dataset> Get> Here we got a value: ", JSON.parse(value));
            resolve(JSON.parse(value));
        })
    );
  }

  public put(value: any): Promise<any> {
    return new Promise((resolve, reject) => this.dataset.put(this.key, JSON.stringify(value), function(err, value) {
            if (err) { reject(err); }
            console.log("Dataset> Put> Here we put a value: ", value);
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

  public remove(): Promise<any> {
    return new Promise((resolve, reject) => this.dataset.remove(this.key, function(err, value) {
            if (err) { reject(err); }
            console.log("Here we removed value: ", value);
            resolve(value);
        })
    );
  }

  public stopSync(): void {
      this.enableSync = false;
      console.log("Timer is stop: ", this.timer);
      clearInterval(this.timer);
  }

  public startSync(): void {
      this.enableSync = true;
      this.syncLoop();
  }

  public syncLoop(): void {
    if (this.enableSync) {
      this.timer = setInterval(() => this.synchronize(), this.syncInterval);
      console.log("Timer is: ", this.timer);
    }
  }

  private synchronize(): Promise<any> {
    return new Promise((resolve, reject) => this.dataset.synchronize({
        onSuccess: function(dataset, newRecords) {
           console.log("sync success: ", newRecords);
        },

        onFailure: function(err) {
           console.log("sync failure: ", err);
        },

        onConflict: function(dataset, conflicts, callback) {
           var resolved = [];

           for (var i=0; i<conflicts.length; i++) {
              resolved.push(conflicts[i].resolveWithRemoteRecord());

              // Or... take local version.
              // resolved.push(conflicts[i].resolveWithLocalRecord());

              // Or... use custom logic.
              // var newValue = conflicts[i].getRemoteRecord().getValue() + conflicts[i].getLocalRecord().getValue();
              // resolved.push(conflicts[i].resolveWithValue(newValue);

           }

           dataset.resolve(resolved, function() {
              return callback(true);
           });
           console.log("sync dataset conflict: ", dataset, conflicts);
           // Or... callback false to stop the synchronization process.
           // return callback(false);

        },

        onDatasetDeleted: function(dataset, datasetName, callback) {
           console.log("sync dataset deleted: ", dataset, datasetName);
           // Return true to delete the local copy of the dataset.
           // Return false to handle deleted datasets outsid ethe synchronization callback.

           return callback(true);

        },

        onDatasetsMerged: function(dataset, datasetNames, callback) {
           console.log("sync dataset merged: ", dataset, datasetName);
           // Return true to continue the synchronization process.
           // Return false to handle dataset merges outside the synchroniziation callback.

           return callback(false);

        }

      })
    );
  }
}
