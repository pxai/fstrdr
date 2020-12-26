import React, { Component, useContext } from "react";
import { SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import useApi from '../../hooks/use_api';
import useAuth from '../../hooks/use_auth';
import { Context } from '../../context';
import Menu from '../menu';

export default function Footer () {
      const { t, i18n } = useTranslation();
      const { randomText } = useApi();
      const { auth } =  useContext(Context);
      console.log("This is it");
      return (<SafeAreaView>
        <View>
          <p>
            Fst Rdr Foot {t('hello')}
          </p>
          <p>
            {randomText()} and: {auth.user} or: { auth.loggedIn ? `OK` : `nope `}
          </p>
          <Menu />
        </View>
      </SafeAreaView>);
}
