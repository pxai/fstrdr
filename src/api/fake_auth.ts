import Auth from './Auth';
import User from '../model/user';

class FakeAuth extends Auth {
    private userPool: CognitoUserPool;

    public constructor (userPool: CognitoUserPool) {
        super();
        this.userPool = userPool;
    }

    protected initSync(): void {
    }

    public get loggedIn (): boolean {
        return !!this.accessToken;
    }

    public set user (user: Object) {
        this._user = user;
    }

    public get user () {
        return this._user;
    }

    public get loginName () {
        return this._user;
    }

    public signIn(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => this.user.authenticateUser({}, {
                    onSuccess: (result) => {
                        this.accessToken = "token";
                        resolve(this.accessToken);
                    },
                    onFailure: (reject) => {
                        console.log("Login error: ", reject);
                    }
                })
        );
    }

    public signUp(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => this.userPool.signUp(email, password, {}, null, (err, result) => {
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
      this.user.signOut();
      this.user = null;
    }
}

module.exports = FakeAuth;
