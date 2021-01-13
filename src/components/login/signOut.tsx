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
    this.context.setLogged(false);
    this.props.navigation.navigate('Home');
  }

  public render () {
    return (
      <div>
        <a href='#' onClick={this.handleSubmit.bind(this)}>Sign Out</a>
      </div>
    );
  }
}

SignOut.contextType = Context;
