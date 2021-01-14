import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Context } from '../../context';
import { withTranslation } from 'react-i18next';

class SignInForm extends Component {
  public constructor(props) {
    super(props);
    this.state = {
      email: 'p@pello.io',
      password: '123456',
      isSigninInProgress: false,
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
    const email = this.state.email.trim();
    const password = this.state.password.trim();

      try {
          const result = await this.context.auth.signIn(email, password);
          this.context.setLogged(true);
          console.log("SignIn correct!", result);
          this.props.navigation.navigate('Home');
      } catch (error) {
          console.log("SignIn incorrect, ", error);
          this.setState({ error: error });
      }
  }

  private signIn () {
    if (!this.state.isSigninInProgress) {
        this.setState({ isSigninInProgress: true });
    }
  }

  public render () {
    const { t, navigation } = this.props;

    return (
      <div><h2>Sign In</h2>
      <div>{t(this.state.error.code)}<div>{this.state.error.message}</div></div>
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
      </form>
      <a href='#' onClick={() => navigation.navigate('Forgot')}>
      Forgot password?
      </a>
      </div>
    );
  }
}

SignInForm.contextType = Context;
export default withTranslation()(SignInForm);
