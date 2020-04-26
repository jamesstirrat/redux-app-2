/*
Store - holds our state - there is only one store.
Action(Type of action) - State can be modified using actions
Dispatcher - Action needs to be sent by someone, this is known as a dispatcher
Reducer - Recieves the action and modifies the state to give us a new state
Subscriber - listens to state changes to inform the UI
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//#0 import createStore from redux
import { createStore } from 'redux';
//#4 import Provider from react-redux
import { Provider } from 'react-redux'

import CounterApp from './app/CounterApp'

//#3. Define initial state for reducer
const initialState = {
    counter: 0
}

//#2. Create reducer that sits inside store
//#11. Create a switch for reducing (changing our state) based on our different actions 
const reducer = (state=initialState, action) => {
    switch (action.type)
        {
        case "INCREASE_COUNTER":
            return { counter: state.counter+1 }
        case "DECREASE_COUNTER":
            return { counter: state.counter-1 }
        }
    return state
}

//#1. Create store
const store = createStore(reducer)

class App extends Component {

render() {
  return (
      //#6. Wrap (root level) component in a Provider
      <Provider store={store}>
        <CounterApp />
      </Provider>
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
