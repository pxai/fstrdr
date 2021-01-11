import React from "react";
import ReactDOM from "react-dom";
import appConfig from "../../../config/cognito";
import { Context } from '../../context';

export default class SignUpForm extends React.Component {
  public constructor(props) {
    super(props);
    this.state = {
      email: 'p@pello.io',
      password: '123456',
      error: ''
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
    this.setState({ error: '' });
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    try {
      const token = await this.context.auth.signUp(email, password);
      this.props.navigation('Confirm');
    } catch (error) {
        console.log("SignUp incorrect, ", error);
        this.setState({ error });
    }
  }

  public render () {
    return (
      <div><h2>Sign Up</h2>
      <div>{this.state.error}</div>
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
