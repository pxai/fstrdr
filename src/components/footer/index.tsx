import React, { Component } from "react";
import { SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import useApi from '../../hooks/use_api';

export default function Footer () {
      const { t, i18n } = useTranslation();
      const { randomText } = useApi();

      return (<SafeAreaView>
        <View>
          <p>
            Fst Rdr {t('hello')}
          </p>
          <p>
            {randomText()}
          </p>
        </View>
      </SafeAreaView>);
}
