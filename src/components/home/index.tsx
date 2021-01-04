import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import useApi from '../../hooks/use_api';
import SignUpForm from '../login/signup';
import ConfirmForm from '../login/confirm';
import SignInForm from '../login/signin';
import SignOut from '../login/signout';
import { withTranslation } from 'react-i18next';
import { Context } from '../../context';
import Menu from '../menu';

class Home extends Component {
      public render() {
        const { t } = this.props;
        console.log("Context: ", this.context, this.context.auth.loggedIn);
        /*
        <SignUpForm />
        <ConfirmForm />
        <SignInForm />
        <SignOut />
        */
        return (<SafeAreaView>
          <View>
            <p>
              Fst Rdr {t('hello')} { this.context.auth.loggedIn ? `OK` : `nope `}
              { this.context.loggedIn ? `YEAH` : `nasti `}
            </p>
            <div>This is home</div>
            <Menu navigation={this.props.navigation} />
          </View>
        </SafeAreaView>);
      }
}

Home.contextType = Context;
export default withTranslation()(Home);
