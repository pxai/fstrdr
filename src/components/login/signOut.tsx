import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser
} from "amazon-cognito-identity-js";
import React from "react";
import ReactDOM from "react-dom";
import cognitoConfig from "../../../config/cognito";

/*Config.region = appConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId
});*/

const userPool = new CognitoUserPool({
  UserPoolId: cognitoConfig.UserPoolId,
  ClientId: cognitoConfig.ClientId,
});

export default class SignOut extends React.Component {
  public constructor(props) {
    super(props);
  }

  private async handleSubmit(e) {
    e.preventDefault();
    const cognitoUser = new CognitoUser({
        Username: 'p@pello.io',
        Pool: userPool
    });
    console.log('Here we go!!');
    await cognitoUser.signOut();
  }

  public render () {
    return (
      <div><h2>Sign Out</h2>
      <button onClick={this.handleSubmit.bind(this)}>
      Sign Out
      </button>
      </div>
    );
  }
}
