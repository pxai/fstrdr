import React, { Component } from "react";
import { SafeAreaView, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../context';

interface AboutProps {
  name?: string
}

interface AboutState {
  version?: number
}
export default class About extends Component<AboutProps, AboutState> {
    public constructor (props: AboutProps) {
        super(...arguments);
    }

    public render (props: AboutProps) {
      return (<SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
        <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
          <Text style={tailwind('text-white font-semibold text-lg')}>
            Hello Tailwind 👋 {this.context.config.name}
          </Text>
          <FontAwesomeIcon icon={faCoffee} size="6x" />
        </View>
      </SafeAreaView>);
    }
}

About.contextType = Context;
