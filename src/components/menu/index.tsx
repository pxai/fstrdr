import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faBook, faBolt } from '@fortawesome/free-solid-svg-icons'

export default class Menu extends Component {
  public render () {
    return (<View style={styles.nav}>
        <Link to="/">
          <Text><FontAwesomeIcon icon={faBrain} /><span>Home</span></Text>
        </Link>
        <Link to="/memory">
          <Text><FontAwesomeIcon icon={faBook} /><span>Memory</span></Text>
        </Link>
        <Link to="/about">
          <Text><FontAwesomeIcon icon={faBook} /><span>Read</span></Text>
        </Link>
        <Link to="/about">
          <Text><FontAwesomeIcon icon={faBolt} /><span>Speed</span></Text>
        </Link>
    </View>);
  }
}

const styles = StyleSheet.create({
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
