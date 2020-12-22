import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Route, Link } from './react-router';
import About from './src/components/about';
import Memory from './src/components/memory';
import Menu from './src/components/menu';
import Footer from './src/components/footer';
import './src/i18n';
import { Context, ContextProps } from './src/context';
import Api from './src/api';

const context: ContextProps = {
    config: {
        name: 'Fast Reader',
        version: 0
    },
    api: new Api()
};

const Home = () => <View><h1>Fst Rdr</h1></View>;

const App = () => (
  <Context.Provider value={context}>
    <Router>
      <Menu />
      <View style={styles.container}>
        <Route exact path="/" component={Home} />
        <Route path="/memory" component={Memory} />
        <Route path="/about" component={About} />
        <Footer />
      </View>
    </Router>
  </Context.Provider>
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
