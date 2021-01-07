import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from 'react-native';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faBook, faBolt } from '@fortawesome/free-solid-svg-icons'

export default function Menu ({navigation}) {
    return (
      <View style={styles.nav}>
        <Button
          title="Memory"
          onPress={() => navigation.navigate('Memory')}
        />
        <Button
          title="Bookmarks"
          onPress={() => navigation.navigate('Bookmarks')}
        />
        <Button
          title="Reader"
          onPress={() => navigation.navigate('Reader')}
        />
        <Button
          title="About"
          onPress={() => navigation.navigate('About')}
        />
    </View>);
}

const styles = StyleSheet.create({
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
