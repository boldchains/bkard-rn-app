import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles';

export default class ConfirmCode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: "",
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.scrollContainerSecond}>

                    <View style={{ width: "100%", alignItems: "center" }}>
                        <Text style={styles.headerText}>Confirm Code</Text>
                        <Text style={styles.message}>Enter your email address and we will send you a verification code to reset your email.</Text>
                        <TextInput
                            value={this.state.email}
                            onChangeText={code => this.setState({ code })}
                            placeholder="Enter Code"
                            placeholderTextColor="white"
                            style={styles.textInput} />
                    </View>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("ChangePassword")}
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
