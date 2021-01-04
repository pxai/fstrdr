import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './src/components/about';
import Memory from './src/components/memory';
import Menu from './src/components/menu';
import Footer from './src/components/footer';
import Home from './src/components/home';
import './src/i18n';
import { Context, ContextProps } from './src/context';
import Api from './src/api';
import Auth from './src/api/auth';
import Page from './src/components/page';
import RootStack from './src/navigation';

const App = () => {
  const [ loggedIn, setLogged ] = useState(false);
  const context: ContextProps = {
      config: {
          name: 'Fast Reader',
          version: 0
      },
      api: new Api(),
      auth: new Auth(),
      loggedIn,
      setLogged
  };

  return(<Context.Provider value={context}>
    <RootStack />
  </Context.Provider>
)};

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
