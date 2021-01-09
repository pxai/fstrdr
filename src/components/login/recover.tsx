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

export default class RecoverForm extends React.Component {
  public constructor(props) {
    super(props);
    this.state = {
      password1: '',
      password2: ''
    };
  }

  private handlePassword1Change(e) {
    this.setState({password1: e.target.value});
  }

  private handlePassword2Change(e) {
    this.setState({password2: e.target.value});
  }

  private async handleSubmit(e) {
    e.preventDefault();
    const password1 = this.state.password1.trim();
    const password2 = this.state.password2.trim();
    try {
      const token = await this.context.auth.signUp(email, password);
      console.log("SignUp correct!", token);
    } catch (error) {
        console.log("Login incorrect, ", error);
    }
  }

  public render () {
    return (
      <div><h2>Recover</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input type="password"
             value={this.state.password1}
             placeholder="Password"
             onChange={this.handlePassword1Change.bind(this)}/>
        <input type="password"
               value={this.state.password2}
               placeholder="Repeat Password"
               onChange={this.handlePassword2Change.bind(this)}/>
        <input type="submit"/>
      </form></div>
    );
  }
}

RecoverForm.contextType = Context;
