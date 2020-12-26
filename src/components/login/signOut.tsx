import React from "react";
import ReactDOM from "react-dom";
import { Context } from '../../context';

export default class SignOut extends React.Component {
  public constructor(props) {
    super(props);
  }

  private async handleSubmit(e) {
    e.preventDefault();

    console.log('Here we go!! ', this.context.auth.loggedIn);
    await this.context.auth.signOut();
  }

  public render () {
    return (
      <div><h2>Sign Out</h2>
      <button onClick={this.handleSubmit.bind(this)}>
      Sign Out
      </button>
      </div>
    );
  }
}

SignOut.contextType = Context;
