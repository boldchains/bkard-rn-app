import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

export default class Payments extends React.Component {

    constructor() {
        super();

        this.state = {

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
                            <Text style={styles.headerText}>Add/Edit Payments</Text>
                        </View>
                        <View style={styles.paymentContainer}>
                            <Text style={styles.savedPaymentText}>Saved Payments:</Text>
                            <View style={styles.cardContainer}>
                                <Text style={styles.cardNameText}>VISA ENDING 1234</Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <Text style={styles.editButtonText}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.addPhoneContainer}>
                                <TouchableOpacity style={[styles.phoneButton, { backgroundColor: "#67ce67" }]}>
                                    <Entypo name="plus" size={20} color="white" />
                                </TouchableOpacity>
                                <Text style={styles.addNewText}>add new</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}