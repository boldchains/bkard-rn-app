import React from 'react';
import { View, Text, Pressable, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import Icon from 'react-native-vector-icons/Ionicons'

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
        <StatusBar backgroundColor="#000000" />
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContainerSecond}>
          <Text style={styles.headerText}>Login</Text>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo} />
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ForgotPassword")}
            style={{ width: "100%" }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#ed733d', '#ea465b', '#db3022']}
              style={styles.button}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
          <TouchableOpacity style={{ width: "100%" }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#ed733d', '#ea465b', '#db3022']}
              style={[styles.button, { marginTop: 16, marginBottom: 45 }]}>
              <View style={styles.signUpButton}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View >
    );
  }
}
