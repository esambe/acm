import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {Actions} from 'react-native-router-flux';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
      setTimeout( () => {
        Actions.login();
      }, 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>ACM</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0abf53'
    },
    textStyle: {
        color:'#fff',
        fontFamily: 'roboto',
        fontWeight: '600',
        fontSize: 30
    } 
});

export default Splash;