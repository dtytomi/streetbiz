'use strict';

import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: "StreetBiz"
  };

  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button 
          onPress={() => navigate('Actual')}
          title="Actual" />
        
        <Button 
          onPress={() => navigate('Projections')}
          title="Projections" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});