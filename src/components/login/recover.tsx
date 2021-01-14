import React from "react";
import ReactDOM from "react-dom";
import appConfig from "../../../config/cognito";
import { Context } from '../../context';
import { withTranslation } from 'react-i18next';

class RecoverForm extends React.Component {
  public constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      code: '',
      password1: '',
      password2: ''
    };
  }

  private handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  private handleCodeChange(e) {
    this.setState({code: e.target.value});
  }

  private handlePassword1Change(e) {
    this.setState({password1: e.target.value});
  }

  private handlePassword2Change(e) {
    this.setState({password2: e.target.value});
  }

  private async handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const code = this.state.code.trim();
    const password1 = this.state.password1.trim();
    const password2 = this.state.password2.trim();

    try {
      const token = await this.context.auth.confirmPassword(email, code, password1);
      console.log("Password recovery correct!", token);
      this.props.navigation.navigate('SignIn');
    } catch (error) {
        console.log("Password recovery error, ", error);
        this.setState({ error: error });
    }
  }

  public render () {
    const { t } = this.props;
    return (
      <div><h2>Recover</h2>
      <div>{t(this.state.error.code)}<div>{this.state.error.message}</div></div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input type="text"
             value={this.state.email}
             placeholder="Email"
             onChange={this.handleEmailChange.bind(this)}/>
      <input type="text"
             value={this.state.code}
             placeholder="Confirm code"
             onChange={this.handleCodeChange.bind(this)}/>
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
export default withTranslation()(RecoverForm);
