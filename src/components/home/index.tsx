import React, { Component } from "react";
import { SafeAreaView, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import useApi from '../../hooks/use_api';

export default function Home () {
      const { t, i18n } = useTranslation();
      const { randomText } = useApi();
      const _handleUser = () => void(0);
      const _handleOptions = () => void(0);

      return (<SafeAreaView>
        <Appbar.Header>
          <Appbar.Content title={t('project')} subtitle={t('subtitle')} />
          <Appbar.Action icon="book" onPress={_handleUser} />
          <Appbar.Action icon="dots-vertical" onPress={_handleOptions} />
        </Appbar.Header>
        <View>
          <p>
            Fst Rdr {t('home')}
          </p>
        </View>
      </SafeAreaView>);
}
