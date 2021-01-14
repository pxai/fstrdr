import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page from './components/page';
import Home from './components/home';
import Memory from './components/memory';
import About from './components/about';
import Reader from './components/reader';
import Bookmarks from './components/bookmarks';
import SignUpForm from './components/login/signup';
import Confirm from './components/login/confirm';
import SignInForm from './components/login/signin';
import Forgot from './components/login/forgot';
import Recover from './components/login/recover';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ gestureEnabled: false }}
      >
      <Stack.Screen name="Home" options={{ title: 'Home' }}>
        {props => <Page><Home {...props} /></Page>}
      </Stack.Screen>
      <Stack.Screen name="Memory" options={{ title: 'Memory' }}>
        {props => <Page><Memory {...props} /></Page>}
      </Stack.Screen>
      <Stack.Screen name="Bookmarks" options={{ title: 'Home' }}>
        {props => <Page><Bookmarks {...props} /></Page>}
      </Stack.Screen>
      <Stack.Screen name="Reader" options={{ title: 'Reader' }}>
        {props => <Page><Reader {...props} /></Page>}
      </Stack.Screen>
      <Stack.Screen name="SignUp" options={{ title: 'SignUp' }}>
        {props => <Page><SignUpForm {...props} /></Page>}
      </Stack.Screen>
      <Stack.Screen name="Confirm" options={{ title: 'Confirm' }}>
        {props => <Page><Confirm {...props} /></Page>}
      </Stack.Screen>
      <Stack.Screen name="SignIn" options={{ title: 'SignIn' }}>
        {props => <Page><SignInForm {...props} /></Page>}
      </Stack.Screen>
      <Stack.Screen name="Forgot" options={{ title: 'Forgot Passowrd?' }}>
        {props => <Page><Forgot {...props} /></Page>}
      </Stack.Screen>
      <Stack.Screen name="Recover" options={{ title: 'Recover' }}>
        {props => <Page><Recover {...props} /></Page>}
      </Stack.Screen>
      <Stack.Screen
        name="About"
        component={About}
        initialParams={{ user: 'me' }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
