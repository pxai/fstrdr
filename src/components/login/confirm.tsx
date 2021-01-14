import React from "react";
import ReactDOM from "react-dom";
import { Context } from '../../context';
import { withTranslation } from 'react-i18next';

class ConfirmForm extends React.Component {
  public constructor(props) {
    super(props);
    this.state = {
      code: '',
      error: ''
    };
  }

  private handleCodeChange(e) {
    this.setState({code: e.target.value});
  }

  private async handleSubmit(e) {
    e.preventDefault();
    this.setState({ error: '' });
    const code = this.state.code.trim();
    const email = this.props.email || 'p@pello.io';

    try {
      const result = await this.context.auth.confirm(code, email);
      console.log("Confirm correct!", result);
      this.props.navigation.navigate('SignIn');
    } catch (error) {
        console.log("Confirm incorrect, ", error);
        this.setState({ error: error });
    }
  }

  public render () {
    const { t } = this.props;
    return (
      <div><h2>Confirm</h2>
      <div>{t('confirm_code')}</div>
      <div>{t(this.state.error.code)}<div>{this.state.error.message}</div></div>
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

ConfirmForm.contextType = Context;
export default withTranslation()(ConfirmForm);
