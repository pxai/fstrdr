import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home';
import Memory from './components/memory';
import About from './components/about';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'My app' }}
      />
      <Stack.Screen
        name="Memory"
        component={Memory}
        initialParams={{ user: 'me' }}
      />
      <Stack.Screen
        name="About"
        component={About}
        initialParams={{ user: 'me' }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
