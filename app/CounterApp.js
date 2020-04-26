import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class CounterApp extends Component {
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

export default CounterApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
