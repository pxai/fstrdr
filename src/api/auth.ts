import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  IAuthenticationDetailsData
} from "amazon-cognito-identity-js";
import 'amazon-cognito-js';
import cognitoConfig from "../../config/cognito";
import User from '../model/user';
import Dataset from './dataset';

Config.region = cognitoConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: cognitoConfig.IdentityPoolId
});

const defaultPool = new CognitoUserPool({
  UserPoolId: cognitoConfig.UserPoolId,
  ClientId: cognitoConfig.ClientId,
});

export default class Auth {
    private accessToken;
    private _user;
    private _userPool: CognitoUserPool;
    private client;
    private _dataset: Dataset;

    public constructor (userPool: CognitoUserPool = defaultPool) {
       this._userPool = userPool;
       this.initSync();
    }

    protected initSync(): void {
      AWS.config.region = cognitoConfig.region;

      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: cognitoConfig.IdentityPoolId
      });
    }

    private openSync(): void {
      AWS.config.credentials.get(this.openDataset());
    }

    private openDataset(): void {
      this.client = new AWS.CognitoSyncManager();
      console.log("Ready to open or create dataset");
      this.client.openOrCreateDataset('fstrdr_dataset', (err, dataset) => {
        this._dataset = new Dataset(dataset, 'fstrdr');
        // this._dataset.startSync();
      });
    }

    public get dataset(): Dataset {
        return this._dataset;
    }

    private cognitoUser (email: string, userPool: Pool) {
        return new CognitoUser({
            Username: email,
            Pool: userPool
        });
    }

    public get loggedIn (): boolean {
        return !!this.accessToken;
    }

    public set user (user: CognitoUser) {
        this._user = user;
    }

    public get user () {
        return this._user;
    }

    public get loginName () {
        return this._user;
    }

    public signIn(email: string, password: string): Promise<any> {
        this.user = this.cognitoUser(email, this._userPool);

        const credentials: IAuthenticationDetailsData = { Username: email, Password: password };
        const authDetails: AuthenticationDetails = new AuthenticationDetails(credentials);

        return new Promise((resolve, reject) => this.user.authenticateUser(authDetails, {
                    onSuccess: (result) => {
                        this.accessToken = result.getAccessToken();
                        console.log("Logged in: ", this._user, "token: ", this.accessToken, " and: ", this.loggedIn);
                        this.openSync();
                        resolve(this.accessToken);
                    },
                    onFailure: (error) => {
                        console.log("Login error: ", reject);
                        reject(error);
                    }
                })
        );
    }

    public signUp(email: string, password: string): Promise<any> {
        const attributeList = [
          new CognitoUserAttribute({
            Name: 'email',
            Value: email,
          })
        ];

        return new Promise((resolve, reject) => this._userPool.signUp(email, password, attributeList, null, (err, result) => {
            console.log("Entrando: ", email);
            if (err) {
              console.log("Tengo puto error!", err);
              return reject(err);
            }
            resolve(result);
          })
      );
    }

    public confirm (code: string, email: string): Promise<any> {
      this.user = this.cognitoUser(email, this._userPool);

      return new Promise((resolve, reject) => this.user.confirmRegistration(code, true, function(err, result) {
          	if (err) {
          		return reject(err);
          	}
          	console.log('Confirmed!! call result: ' + result);
            resolve(result);
          })
      );
    }

    public forgotPassword (email: string): Promise<any> {
      this.user = this.cognitoUser(email, this._userPool);

      return new Promise((resolve, reject) => this.user.forgotPassword({
                  onSuccess: (result) => {
                      console.log("recover in: ", result);
                      resolve(result);
                  },
                  onFailure: (error) => {
                      console.log("Recover error: ", reject);
                      reject(error);
                  }
              })
      );
    }

    public confirmPassword (email: string, code: string, password: string): Promise<any> {
      this.user = this.cognitoUser(email, this._userPool);

      return new Promise((resolve, reject) => this.user.confirmPassword(code, password, {
                  onSuccess: (result) => {
                      console.log("Reset correct!: ", result);
                      resolve(result);
                  },
                  onFailure: (error) => {
                      console.log("Reset error: ", reject);
                      reject(error);
                  }
              })
      );
    }

    public signOut (): Promise<any> {
      if (this.user) {
          console.log("Logging out: ", this._user);
          this.user.signOut();
          this.accessToken = null;
      } else {
          console.log("User is null men ", this._user);
      }
      this.user = null;
    }
}
