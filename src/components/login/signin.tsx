import {Config, CognitoIdentityCredentials } from "aws-sdk";
import { AuthenticationDetails, CognitoUserPool, CognitoUser, CognitoUserAttribute, IAuthenticationDetailsData } from "amazon-cognito-identity-js";

import React from "react";
import ReactDOM from "react-dom";
import appConfig from "../../../config/cognito";

Config.region = appConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: appConfig.UserPoolId,
  ClientId: appConfig.ClientId,
});

export default class SignInForm extends React.Component {
  public constructor(props) {
    super(props);
    this.state = {
      email: 'p@pello.io',
      password: '123456',
    };
  }

  private handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  private handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  private handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();

    const cognitoUser = new CognitoUser({
        Username: email,
        Pool: userPool
    });

    const credentials: IAuthenticationDetailsData = { Username: email, Password: password };
    const authDetails: AuthenticationDetails = new AuthenticationDetails(credentials);

    cognitoUser.authenticateUser(authDetails, {
                onSuccess: (result) => {
                    const accessToken = result.getAccessToken();
                    console.log("Logged in: ", accessToken.getJwtToken());
                    // resolve(this.accessToken.getJwtToken());
                },
                onFailure: (reject) => {
                    console.log("Login error: ", reject);
                }
            });
  }

  public render () {
    return (
      <div><h2>Sign In</h2>
      <a href="https://fstrdr.auth.eu-west-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&response_type=TOKEN&client_id=1nm3o4h227070mao8rad7lbsd3&scope=openid&redirect_uri=http://localhost:19006/">
      With Google
      </a>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
               value={this.state.email}
               placeholder="Email"
               onChange={this.handleEmailChange.bind(this)}/>
        <input type="password"
               value={this.state.password}
               placeholder="Password"
               onChange={this.handlePasswordChange.bind(this)}/>
        <input type="submit"/>
      </form></div>
    );
  }
}
