import React from "react";
import ReactDOM from "react-dom";
import { Context } from '../../context';

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

  private async handleSubmit(e) {
    e.preventDefault();
    const code = this.state.code.trim();
    const email = this.props.email || 'p@pello.io';

    try {
      const result = await this.context.auth.confirm(code, email);
      console.log("Confirm correct!", result);
    } catch (error) {
        console.log("Confirm incorrect, ", error);
    }
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

ConfirmForm.contextType = Context;
