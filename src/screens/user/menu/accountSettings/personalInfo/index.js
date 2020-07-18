import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

export default class PersonalInfo extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "Derrish Martin",
            phoneNumber: "",
            email: ""
        }
    }

    render() {
        return (
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
                        <Text style={styles.headerText}>Personal Info</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.text}>Name</Text>
                        <TextInput
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                            style={[styles.inputField, { marginLeft: 50 }]} />
                    </View>
                    <View style={styles.contactInfoContainer}>
                        <Text style={styles.contactInfoText}>Contact Info:</Text>
                        <View style={styles.phoneContainer}>
                            <TouchableOpacity style={[styles.phoneButton, { backgroundColor: "#eb5545" }]}>
                                <Entypo name="minus" size={20} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.text}>Phone</Text>
                            <Text style={[styles.text, { marginLeft: 20 }]}>+1 (321) 234 5598</Text>
                        </View>
                        <View style={styles.addPhoneContainer}>
                            <TouchableOpacity style={[styles.phoneButton, { backgroundColor: "#67ce67" }]}>
                                <Entypo name="plus" size={20} color="white" />
                            </TouchableOpacity>
                            <TextInput
                                placeholder="add phone"
                                placeholderTextColor="white"
                                value={this.state.phoneNumber}
                                keyboardType="phone-pad"
                                onChangeText={phoneNumber => this.setState({ phoneNumber })}
                                style={[styles.inputField, { borderBottomWidth: 0, marginLeft: 10 }]} />
                        </View>
                        <View style={styles.phoneContainer}>
                            <TouchableOpacity style={[styles.phoneButton, { backgroundColor: "#eb5545" }]}>
                                <Entypo name="minus" size={20} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.text}>Email</Text>
                            <Text style={[styles.text, { marginLeft: 20 }]}>calija.milos15@gmail.com</Text>
                        </View>
                        <View style={styles.addPhoneContainer}>
                            <TouchableOpacity style={[styles.phoneButton, { backgroundColor: "#67ce67" }]}>
                                <Entypo name="plus" size={20} color="white" />
                            </TouchableOpacity>
                            <TextInput
                                placeholder="add email"
                                placeholderTextColor="white"
                                value={this.state.email}
                                keyboardType="email-address"
                                onChangeText={email => this.setState({ email })}
                                style={[styles.inputField, { borderBottomWidth: 0, marginLeft: 10 }]} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}