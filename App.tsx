import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Route, Link } from './react-router';
import About from './src/components/about';
import Memory from './src/components/memory';
import Menu from './src/components/menu';
import Footer from './src/components/footer';
import Home from './src/components/home';
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

const App = () => (
  <Context.Provider value={context}>
    <Router>
      <Home style={styles.container}>
        <Route exact path="/" component={Home} />
        <Route path="/memory" component={Memory} />
        <Route path="/about" component={About} />
        <Footer />
      </Home>
    </Router>
  </Context.Provider>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 0
  },
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
