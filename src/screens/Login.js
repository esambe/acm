import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topStyle}>
          <Text style={styles.textStyle}>ACM</Text>
        </View>
        <View style={styles.bottomStyle}>
          <Text style={{ color: '#0abf53', fontSize: 18, marginLeft: 14 }}>Sign In</Text>
          <Input
            inputStyle={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 4, marginVertical: 2 }}
            inputContainerStyle={{ borderBottomWidth: 0, marginVertical: 2 }}
            placeholder='Email' />

          <Input
            inputStyle={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 4, marginVertical: 2 }}
            inputContainerStyle={{ borderBottomWidth: 0, marginVertical: 2 }}
            placeholder='Password' secureTextEntry />
          <Button title="Next" containerStyle={{ marginHorizontal: 10, marginVertical: 5 }} buttonStyle={{ backgroundColor: '#0abf53' }} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
            <TouchableOpacity>
              <Text>Remember</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity>
              <Text style={{ textAlign: 'center' }}>Don't have an account? <Text style={{ color: '#0abf53' }}>Create one</Text></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  topStyle: {
    flex: 1,
    backgroundColor: '#0abf53',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  bottomStyle: {
    flex: 2,
    padding: 15,
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'roboto'
  }
});

export default Login;