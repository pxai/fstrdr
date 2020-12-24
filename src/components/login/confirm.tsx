import {Config, CognitoIdentityCredentials } from "aws-sdk";
import { AuthenticationDetails, CognitoUserPool, CognitoUser, CognitoUserAttribute, IAuthenticationDetailsData } from "amazon-cognito-identity-js";

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

export default class ConfirmForm extends React.Component {
  public constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }
  private handleCodeChange(e) {
    this.setState({code: e.target.value});
  }

  private handleSubmit(e) {
    e.preventDefault();
    const code = this.state.code.trim();
    const email = this.props.email || 'p@pello.io';

    const cognitoUser = new CognitoUser({
        Username: email,
        Pool: userPool
    });

    cognitoUser.confirmRegistration(code, true, function(err, result) {
    	if (err) {
    		alert(err.message || JSON.stringify(err));
    		return;
    	}
    	console.log('Confirmed!! call result: ' + result);
    });
  }

  public render () {
    return (
      <div><h2>Confirm</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
               value={this.state.code}
               placeholder="Confirm code"
               onChange={this.handleCodeChange.bind(this)}/>
        <input type="submit"/>
      </form></div>
    );
  }
}
