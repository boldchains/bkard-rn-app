import React from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
  SafeAreaView,
  Platform,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';
import api from '../../../server';

import {userDetails} from '../../../redux/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {validateEmail, formatPresentDate} from '../../../utils';
import styles from './styles';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      privacyPolicy: true,
      loading: false,
    };

    this.register = this.register.bind(this);
  }

  clearInput = () => {
    this.setState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
    });
  };

  async filterAndSendData() {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      privacyPolicy,
    } = this.state;
    const trimmedEmail = email.trim().toLowerCase();
    if (!fullName || !trimmedEmail || !password || !confirmPassword) {
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

    if (password !== confirmPassword) {
      Alert.alert(
        'Bad Input Format',
        'Password is not same as Confirmed Password',
        [{text: 'OK'}],
        {cancelable: false},
      );
      return false;
    }

    if (privacyPolicy === false) {
      Alert.alert(
        'Bad Input Format',
        'Please Read and Check the Privacy Policy',
        [{text: 'OK'}],
        {cancelable: false},
      );
      return false;
    }

    try {
      const data = new FormData();
      const action_time = formatPresentDate();
      data.append('email', email.trim().toLowerCase());
      data.append('password', password);
      data.append('fullname', fullName);
      data.append('device_type', Platform.OS === 'ios' ? '0' : '1');
      data.append('device_token', '');
      data.append('action_time', action_time);

      const headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      };

      this.setState({
        loading: true,
      });

      const res = await api.post('/user_signup', data, headers);
      console.log(JSON.stringify({a: res.data.userinfo}));
      switch (res.data.status) {
        case 601:
          Alert.alert(
            'Duplicated Email',
            'Email is already Registered With Us',
            [{text: 'OK'}],
            {
              cancelable: false,
            },
          );
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
      return res.data.status === 200 ? res.data : false;
    } catch (err) {
      throw err;
    }
  }

  welcome() {
    ToastAndroid.showWithGravity(
      'Welcome to Black Kardd',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }

  async register() {
    const success = await this.filterAndSendData();
    if (success) {
      this.props.navigation.navigate('CreateAccount', {
        userDetails: success.userinfo,
      });
      this.welcome();
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.container}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#000000" />
            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContainerSecond}>
              <View style={styles.headerContainer}>
                <View style={{position: 'absolute', left: 0}}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.backButton}>
                    <Icon name="keyboard-arrow-left" size={30} color="white" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.headerText}>Sign Up</Text>
              </View>
              <TextInput
                value={this.state.fullName}
                onChangeText={(fullName) => this.setState({fullName})}
                placeholder="Full Name"
                placeholderTextColor="white"
                style={[styles.textInput, {marginTop: 84}]}
              />
              <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}
                placeholder="Email Address"
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
              <TextInput
                value={this.state.confirmPassword}
                onChangeText={(confirmPassword) =>
                  this.setState({confirmPassword})
                }
                secureTextEntry={true}
                placeholder="Confirm Password"
                placeholderTextColor="white"
                style={styles.textInput}
              />
              <View style={styles.privacyPolicyContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({privacyPolicy: !this.state.privacyPolicy})
                  }
                  style={styles.privacyPolicyCheckButton}>
                  {this.state.privacyPolicy ? (
                    <Icon name="check" size={20} color="#ea465b" />
                  ) : null}
                </TouchableOpacity>
                <Text style={styles.privacyPolicyText}>
                  I have read and agree to your Privacy Policy and Terms of Use
                </Text>
              </View>
              <TouchableOpacity onPress={this.register} style={{width: '100%'}}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ed733d', '#ea465b', '#db3022']}
                  style={styles.button}>
                  {this.state.loading ? (
                    <View style={styles.loadButton}>
                      <Text style={styles.buttonText}>SIGN UP</Text>
                      <ActivityIndicator size="small" color="#fff" />
                    </View>
                  ) : (
                    <Text style={styles.buttonText}>SIGN UP</Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.dontHaveAccountText}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}
                style={{width: '100%'}}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ed733d', '#ea465b', '#db3022']}
                  style={[styles.button, {marginTop: 16, marginBottom: 45}]}>
                  <View style={styles.signUpButton}>
                    <Text style={styles.buttonText}>LOGIN</Text>
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {userDetails})(SignUp);
