import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles';

export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirmPassword: "",
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.scrollContainerSecond}>

                    <View style={{ width: "100%", alignItems: "center" }}>
                        <Text style={styles.headerText}>Change Password</Text>
                        <Text style={styles.message}>Enter your new password and confirm.</Text>
                        <TextInput
                            value={this.state.email}
                            onChangeText={password => this.setState({ password })}
                            placeholder="New Password"
                            placeholderTextColor="white"
                            style={styles.textInput} />
                        <TextInput
                            value={this.state.email}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}
                            placeholder="Confirm Password"
                            placeholderTextColor="white"
                            style={[styles.textInput, { marginTop: 8 }]} />
                    </View>

                    <TouchableOpacity
                        //onPress={() => this.props.navigation.navigate("ForgotPassword")}
                        style={{ width: "100%", marginBottom: 50 }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#ed733d', '#ea465b', '#db3022']}
                            style={styles.button}>
                            <Text style={styles.buttonText}>CONFIRM</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
