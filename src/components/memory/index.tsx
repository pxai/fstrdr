import React from 'react';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function Memory () {
  const { t, i18n } = useTranslation();
  return (<SafeAreaView>
    <div>{t('memory')}</div>
    </SafeAreaView>
  );
};
