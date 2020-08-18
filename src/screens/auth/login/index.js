import React from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles';
import {validateEmail} from '../../../utils';
import api from '../../../server';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: false,
    };

    this.login = this.login.bind(this);
  }

  clearInput = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
    });
  };

  async filterAndSendData(email, password) {
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !password) {
      Alert.alert(
        'Empty Fields',
        'Fill in the required fields',
        [{text: 'OK'}],
        {cancelable: false},
      );
      return false;
    }

    if (!validateEmail(trimmedEmail)) {
      Alert.alert(
        'Bad Input Format',
        'Please Input the Correct Email Address',
        [{text: 'OK'}],
        {cancelable: false},
      );
      return false;
    }

    try {
      const data = new FormData();
      data.append('email', email.trim().toLowerCase());
      data.append('password', password);
      data.append('device_type', Platform.OS === 'ios' ? '0' : '1');
      data.append('device_token', '');

      const headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      };

      this.setState({
        loading: true,
      });

      const res = await api.post('/user_login', data, headers);

      console.log({
        email,
        password,
        st: res.status,
      });

      switch (res.data.status) {
        case 602:
          Alert.alert(
            'Wrong Password',
            'Password is incorrect',
            [{text: 'OK'}],
            {
              cancelable: false,
            },
          );
          break;

        case 603:
          Alert.alert('User Not Found', 'User was not found', [{text: 'OK'}], {
            cancelable: false,
          });
          break;

        case 200:
          this.clearInput();
          break;

        default:
          Alert.alert(
            'Something went wrong!',
            'Please check all fields again!',
            [{text: 'OK'}],
            {cancelable: false},
          );
          break;
      }

      this.setState({
        loading: false,
      });
      return res.data.status === 200 ? true : false;
    } catch (err) {
      throw err;
    }
  }

  async login() {
    const {email, password} = this.state;
    const success = await this.filterAndSendData(email, password);
    if (success) {
      this.props.navigation.navigate('User');
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.container}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#000000" barStyle="light-content" />
            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContainerSecond}>
              <Text style={styles.headerText}>Login</Text>
              <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
              />
              <Text style={styles.appName}>Black Kardd</Text>
              <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}
                placeholder="Email"
                placeholderTextColor="white"
                style={styles.textInput}
              />
              <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="white"
                style={styles.textInput}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ForgotPassword')}
                style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>
                  Forgot your password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.login} style={{width: '100%'}}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ed733d', '#ea465b', '#db3022']}
                  style={styles.button}>
                  {this.state.loading ? (
                    <Text style={styles.buttonText}>LOGIN.....</Text>
                  ) : (
                    <Text style={styles.buttonText}>LOGIN</Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.dontHaveAccountText}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}
                style={{width: '100%'}}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ed733d', '#ea465b', '#db3022']}
                  style={[styles.button, {marginTop: 16, marginBottom: 45}]}>
                  <View style={styles.signUpButton}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
