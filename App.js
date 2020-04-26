import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class App extends Component {
    state = {
        counter: 0
    }

increaseCounter = () => {
    this.setState({counter:this.state.counter+1})
}

decreaseCounter = () => {
    this.setState({counter:this.state.counter-1})
}

render() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={()=>this.increaseCounter()}>
            <Text>Increase</Text>
        </TouchableOpacity>
        <Text>{this.state.counter}</Text>
        <TouchableOpacity onPress={()=>this.decreaseCounter()}>
            <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}

/*
Store - holds our state - there is only one store.
Action(Type of action) - State can be modified using actions
Dispatcher - Action needs to be sent by someone, this is known as a dispatcher
Reducer - Recieves the action and modifies the state to give us a new state
Subscriber - listens to state changes to inform the UI
*/

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
