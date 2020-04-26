import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//#8. Import connect from react-redux
import { connect } from 'react-redux'

class CounterApp extends Component {
//#9. Get rid of local state
    // state = {
    //     counter: 0
    // }

render() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={()=>this.props.increaseCounter()}>
            <Text>Increase</Text>
        </TouchableOpacity>
        <Text>{this.props.counter}</Text>
        <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
            <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}

//#7. mapStateToProps to access store from our component
function mapStateToProps(state){
    return {
        counter: state.counter
    }
}

//#10. matchDispatchertoProps to establish dispatcher for actions. These actions will then go to functions in the reducer to change the app state
function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
