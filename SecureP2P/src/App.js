/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createAppContainer } from 'react-navigation'
import TabNavigator from './Navigator/Navigator';
import Navigation from './Navigator/Navigation';

const AppContainer = createAppContainer(TabNavigator);

const App = () => {
  return (
    <>
      <AppContainer
        ref={navigatorRef => {
          Navigation.setTopLevelNavigator(navigatorRef);
        }}
      />
    </>
  );
};

export default App;
