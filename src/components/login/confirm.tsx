import React from "react";
import ReactDOM from "react-dom";
import { Context } from '../../context';

export default class ConfirmForm extends React.Component {
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
    return (
      <div><h2>Confirm</h2>
      <div>{this.state.error}</div>
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
