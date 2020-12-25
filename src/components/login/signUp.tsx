import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";
import React from "react";
import ReactDOM from "react-dom";
import appConfig from "../../../config/cognito";
import { Context } from '../../context';

Config.region = appConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: appConfig.UserPoolId,
  ClientId: appConfig.ClientId,
});

export default class SignUpForm extends React.Component {
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

  private async handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    try {
      const token = await this.context.auth.signUp(email, password);
      console.log("SignUp correct!", token);
    } catch (error) {
        console.log("Login incorrect, ", error);
    }
  }

  public render () {
    return (
      <div><h2>Sign Up</h2>
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

SignUpForm.contextType = Context;
