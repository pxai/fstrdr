import React, { Component } from "react";
import { SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function Footer () {
      const { t, i18n } = useTranslation();
      return (<SafeAreaView>
        <View>
          <p>
            Fst Rdr {t('hello')}
          </p>
        </View>
      </SafeAreaView>);
}
