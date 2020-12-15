import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';


export default function Menu () {
      return (<View style={styles.nav}>
          <a href="/">
            <Text>Home</Text>
          </a>
          <a href="/about">
            <Text>About</Text>
          </a>
      </View>);
}

const styles = StyleSheet.create({
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
