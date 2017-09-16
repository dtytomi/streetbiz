/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry

} from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/components/HomeScreen';
import ActualScreen from './src/components/ActualScreen';

const StreetBiz = StackNavigator({
  Home: {screen: HomeScreen},
  Actual: {screen: ActualScreen }
});


AppRegistry.registerComponent('streetbiz', () => StreetBiz);
