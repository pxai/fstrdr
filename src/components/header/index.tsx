import React from 'react';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function Header () {
  const { t, i18n } = useTranslation();
  const _handleUser = () => void(0);
  const _handleOptions = () => void(0);
  return (<SafeAreaView>
    <Appbar.Header>
      <Appbar.Content title={t('project')} subtitle={t('subtitle')} />
      <Appbar.Action icon="book" onPress={_handleUser} />
      <Appbar.Action icon="dots-vertical" onPress={_handleOptions} />
    </Appbar.Header>
    </SafeAreaView>
  );
};
