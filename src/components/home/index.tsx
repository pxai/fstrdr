import React, { Component, Fragment } from 'react';
import { SafeAreaView, View, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import useApi from '../../hooks/use_api';
import ConfirmForm from '../login/confirm';
import SignInForm from '../login/signin';
import SignOut from '../login/signout';
import { withTranslation } from 'react-i18next';
import { Context } from '../../context';
import Menu from '../menu';


class Home extends Component {
      public render() {
        const { t , user, navigation } = this.props;
        console.log("LoggedIn? ", this.context.loggedIn);
        return (<SafeAreaView>
          <View>
            <p>
              Fst Rdr {t('hello')} { this.context.auth.loggedIn ? `OK` : `nope `}
              { this.context.loggedIn ? `YEAH` : `nasti `}
            </p>
            <div>This is home</div>
            { !this.context.loggedIn &&
              (<Fragment><SignInForm {...this.props} />
              <a href='#' onClick={() => navigation.navigate('SignUp')}>
              {t('signup')}
              </a>
              </Fragment>)
            }
            <Menu navigation={navigation} />
          </View>
        </SafeAreaView>);
      }
}

Home.contextType = Context;
export default withTranslation()(Home);
