import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  IAuthenticationDetailsData
} from "amazon-cognito-identity-js";
import cognitoConfig from "../../config/cognito";
import User from '../model/user';

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

    public constructor (userPool: CognitoUserPool = defaultPool) {
       this._userPool = userPool;
       console.log("NEW INSTANCE!!");
    }

    private cognitoUser (email: string, userPool: Pool) {
        return new CognitoUser({
            Username: email,
            Pool: userPool
        });
    }

    public get loggedIn (): boolean {
        console.log("Do we have token? ", this.accessToken, !!this.accessToken);
                console.log("And a user? ", this.user);
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
                        resolve(this.accessToken);
                    },
                    onFailure: (reject) => {
                        console.log("Login error: ", reject);
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
            if (err) {
              console.log(err);
              reject(err);
            }
            console.log('user name is ' + result.user.getUsername());
            console.log('call result: ' + result);

            resolve(result);
          })
      );
    }

    public confirm (code: string, email: string): Promise<any> {
      this.user = this.cognitoUser(email, this._userPool);

      return new Promise((resolve, reject) => this.user.confirmRegistration(code, true, function(err, result) {
          	if (err) {
          		alert(err.message || JSON.stringify(err));
          		reject(err);
          	}
          	console.log('Confirmed!! call result: ' + result);
            resolve(result);
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
