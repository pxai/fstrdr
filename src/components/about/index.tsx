import React, { Component } from "react";
import { SafeAreaView, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';

interface AboutProps {
  name?: string
}

interface AboutState {
  version?: number
}
export default class About extends Component<AboutProps, AboutState> {
    public constructor (props: AboutProps) {
        super(...arguments);

        this.setState({ version: 1 });
    }

    public render (props: AboutProps) {
      return (<SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
        <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
          <Text style={tailwind('text-white font-semibold text-lg')}>
            Hello Tailwind 👋
          </Text>
        </View>
      </SafeAreaView>);
    }
}
