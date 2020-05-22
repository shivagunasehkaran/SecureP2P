/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation'
import AppNavigator from './Navigator/Navigator';
import Navigation from './Navigator/Navigation';

const Main = createAppContainer(AppNavigator);

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#64c0d1"
        barStyle="light-content"
      />
      <Main
        ref={navigatorRef => {
          Navigation.setTopLevelNavigator(navigatorRef);
        }}
      />
    </>
  );
};

export default App;
