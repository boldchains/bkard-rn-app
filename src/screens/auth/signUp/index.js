import React from 'react';
import { View, Text, Pressable, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, StatusBar, SafeAreaView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            privacyPolicy: true
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <View style={styles.container}>
                        <StatusBar backgroundColor="#000000" />
                        <ScrollView
                            style={styles.scrollContainer}
                            contentContainerStyle={styles.scrollContainerSecond}>
                            <View style={styles.headerContainer}>
                                <View style={{ position: "absolute", left: 0 }}>
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
                                onChangeText={fullName => this.setState({ fullName })}
                                placeholder="Full Name"
                                placeholderTextColor="white"
                                style={[styles.textInput, { marginTop: 84 }]} />
                            <TextInput
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                                placeholder="Email Address"
                                placeholderTextColor="white"
                                style={styles.textInput} />
                            <TextInput
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                                secureTextEntry={true}
                                placeholder="Password"
                                placeholderTextColor="white"
                                style={styles.textInput} />
                            <TextInput
                                value={this.state.confirmPassword}
                                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                                secureTextEntry={true}
                                placeholder="Confirm Password"
                                placeholderTextColor="white"
                                style={styles.textInput} />
                            <View style={styles.privacyPolicyContainer}>
                                <TouchableOpacity
                                    onPress={() => this.setState({ privacyPolicy: !this.state.privacyPolicy })}
                                    style={styles.privacyPolicyCheckButton}>
                                    {this.state.privacyPolicy ?
                                        <Icon name="check" size={20} color="#ea465b" /> : null}
                                </TouchableOpacity>
                                <Text style={styles.privacyPolicyText}>I have read and agree to your Privacy Policy and Terms of Use</Text>

                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("CreateAccount")}
                                style={{ width: "100%" }}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={['#ed733d', '#ea465b', '#db3022']}
                                    style={styles.button}>
                                    <Text style={styles.buttonText}>SIGN UP</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <Text style={styles.dontHaveAccountText}>Already have an account?</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Login")}
                                style={{ width: "100%" }}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={['#ed733d', '#ea465b', '#db3022']}
                                    style={[styles.button, { marginTop: 16, marginBottom: 45 }]}>
                                    <View style={styles.signUpButton}>
                                        <Text style={styles.buttonText}>LOGIN</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        </ScrollView>
                    </View >
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
