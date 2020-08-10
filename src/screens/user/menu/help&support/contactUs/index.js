import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class ContactUs extends React.Component {

    constructor() {
        super();

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
                            <Text style={styles.headerText}>Contact Us</Text>
                        </View>
                        <Text style={styles.emailText}>post@gmail.com</Text>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}