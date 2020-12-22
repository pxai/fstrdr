import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Link } from '../../../react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faBook, faBolt } from '@fortawesome/free-solid-svg-icons'

export default function Menu () {
      return (<View style={styles.nav}>
          <a href="/">
            <Text><FontAwesomeIcon icon={faBrain} /><span>Home</span></Text>
          </a>
          <a href="/memory">
            <Text><FontAwesomeIcon icon={faBook} /><span>Memory</span></Text>
          </a>
          <a href="/about">
            <Text><FontAwesomeIcon icon={faBook} /><span>Read</span></Text>
          </a>
          <a href="/about">
            <Text><FontAwesomeIcon icon={faBolt} /><span>Speed</span></Text>
          </a>
      </View>);
}

const styles = StyleSheet.create({
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
