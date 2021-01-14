import React from "react";
import ReactDOM from "react-dom";
import { Context } from '../../context';
import { withTranslation } from 'react-i18next';

class Forgot extends React.Component {
  public constructor(props) {
    super(props);
    this.state = {
      email: 'p@pello.io',
      error: ''
    };
  }

  private handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  private async handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    try {
          const result = await this.context.auth.forgotPassword(email);
          this.props.navigation.navigate('Recover');
    } catch (error) {
      console.log("Error recovering: ", error);
      this.setState({ error: error });
    }

    this.context.setLogged(false);
  }

  public render () {
    const { t, navigation } = this.props;
    return (
      <div><h2>Recover password</h2>
      <div>{t(this.state.error.code)}<div>{this.state.error.message}</div></div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
               value={this.state.email}
               placeholder="Email"
               onChange={this.handleEmailChange.bind(this)}/>
        <input type="submit"/>
      </form>
      <a href='#' onClick={() => navigation.navigate('Recover')}>
      Enter new password
      </a>
      </div>
    );
  }
}

Forgot.contextType = Context;
export default withTranslation()(Forgot);
