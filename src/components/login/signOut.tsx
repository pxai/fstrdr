import React from "react";
import ReactDOM from "react-dom";
import { Context } from '../../context';

export default class SignOut extends React.Component {
  public constructor(props) {
    super(props);
  }

  private async handleSubmit(e) {
    e.preventDefault();
    await this.context.auth.signOut();
    this.context.setLogged(false);
  }

  public render () {
    if (!this.context.loggedIn) return null;

    return (
      <div>
        <a href='#' onClick={this.handleSubmit.bind(this)}>Sign Out</a>
      </div>
    );
  }
}

SignOut.contextType = Context;
