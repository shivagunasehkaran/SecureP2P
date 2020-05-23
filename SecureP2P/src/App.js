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
      <Main
        ref={navigatorRef => {
          Navigation.setTopLevelNavigator(navigatorRef);
        }}
      />
    </>
  );
};

export default App;
