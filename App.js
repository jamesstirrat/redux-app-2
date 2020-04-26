/*
Store - holds our state - there is only one store.
Action(Type of action) - State can be modified using actions
Dispatcher - Action needs to be sent by someone, this is known as a dispatcher
Reducer - Recieves the action and modifies the state to give us a new state
Subscriber - listens to state changes to inform the UI
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import CounterApp from './app/CounterApp'

class App extends Component {
}

render() {
  return (
      <CounterApp />
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
