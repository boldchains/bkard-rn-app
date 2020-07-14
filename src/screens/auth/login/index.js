import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Black Kardd</Text>
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder="Email"
          placeholderTextColor="white"
          style={styles.textInput} />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          placeholderTextColor="white"
          style={styles.textInput} />
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
