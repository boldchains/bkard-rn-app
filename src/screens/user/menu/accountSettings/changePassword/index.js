import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class ChangePassword extends React.Component {

    constructor() {
        super();

        this.state = {
            currentPassword: "",
            newPassword: "",
            repeatPassword: "",
            disableSave: true
        }
    }

    componentDidUpdate = () => {
        if (this.state.currentPassword.length > 0 && this.state.newPassword.length > 0 && this.state.repeatPassword.length > 0) {
            if (this.state.disableSave) {
                this.setState({ disableSave: false });
            }
        } else {
            if (!this.state.disableSave) {
                this.setState({ disableSave: true });
            }
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.headerContainer}>
                            <View style={{ position: "absolute", left: 0 }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                    style={styles.backButton}>
                                    <Icon name="keyboard-arrow-left" size={30} color="white" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.headerText}>Change Password</Text>
                            <View style={styles.saveButtonContainer}>
                                <TouchableOpacity
                                    disabled={this.state.disableSave}
                                    onPress={() => this.props.navigation.navigate("Menu")}>
                                    <Text style={[styles.saveButtonText, { opacity: this.state.disableSave ? 0.4 : 1 }]}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                value={this.state.currentPassword}
                                onChangeText={currentPassword => this.setState({ currentPassword })}
                                secureTextEntry={true}
                                placeholderTextColor="white"
                                placeholder="Current Password"
                                style={styles.inputField} />
                            <TextInput
                                value={this.state.newPassword}
                                onChangeText={newPassword => this.setState({ newPassword })}
                                secureTextEntry={true}
                                placeholderTextColor="white"
                                placeholder="New Password"
                                style={styles.inputField} />
                            <TextInput
                                value={this.state.repeatPassword}
                                onChangeText={repeatPassword => this.setState({ repeatPassword })}
                                secureTextEntry={true}
                                placeholderTextColor="white"
                                placeholder="New Password, again"
                                style={styles.inputField} />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}