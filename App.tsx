import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Route, Link } from './react-router';
import About from './src/components/about';
import Menu from './src/components/menu';

const Home = () => <View><h1>Fst Rdr</h1></View>;

const App = () => (
  <Router>
    <Menu />
    <View style={styles.container}>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </View>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
