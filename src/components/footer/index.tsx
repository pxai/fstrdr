import React, { Component, useContext } from "react";
import { SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Context } from '../../context';
import { withTranslation } from 'react-i18next';
import Menu from '../menu';
import SignOut from '../login/signout';

class Footer extends Component {
    public render () {
      const { t } = this.props;

      return (<SafeAreaView>
        <View>
          <p>
            Fst Rdr Foot {t('hello')}
          </p>
          <p>
            Footer
          </p>
          <SignOut />
        </View>
      </SafeAreaView>);
    }

}
export default withTranslation()(Footer);
