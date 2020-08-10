import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export default class AddDonate extends React.Component {

    constructor() {
        super();

        this.state = {
            donatePrice: "",
            note: ""
        }
    }

    addDonate = number => {
        this.setState({ donatePrice: this.state.donatePrice + number });
    }

    removeDonate = () => {
        this.setState({ donatePrice: this.state.donatePrice.slice(0, -1) });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={{ flex: 1 }}>
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
                                <Text style={styles.headerText}>Donate</Text>
                            </View>
                            <View style={styles.donateContainer}>
                                <Text style={styles.nameOfBusinessText}>Name of Business</Text>
                                <View style={styles.paymentMethodTextContainer}>
                                    <Text style={styles.paymentMethodText}>PAYMENT METHOD: Credit Card</Text>
                                </View>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.numberButtonText}>$</Text>
                                    <Text style={[styles.numberButtonText, { marginLeft: 5 }]}>{this.state.donatePrice}</Text>
                                </View>
                                <View style={styles.numberContainer}>
                                    <View style={styles.numberRowContainer}>
                                        <TouchableOpacity
                                            onPress={() => this.addDonate("1")}
                                            style={styles.numberButton}>
                                            <Text style={styles.numberButtonText}>1</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => this.addDonate("2")}
                                            style={[styles.numberButton, { marginHorizontal: 5 }]}>
                                            <Text style={styles.numberButtonText}>2</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => this.addDonate("3")}
                                            style={styles.numberButton}>
                                            <Text style={styles.numberButtonText}>3</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.numberRowContainer, { marginTop: 5 }]}>
                                        <TouchableOpacity
                                            onPress={() => this.addDonate("4")}
                                            style={styles.numberButton}>
                                            <Text style={styles.numberButtonText}>4</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => this.addDonate("5")}
                                            style={[styles.numberButton, { marginHorizontal: 5 }]}>
                                            <Text style={styles.numberButtonText}>5</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => this.addDonate("6")}
                                            style={styles.numberButton}>
                                            <Text style={styles.numberButtonText}>6</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.numberRowContainer, { marginTop: 5 }]}>
                                        <TouchableOpacity
                                            onPress={() => this.addDonate("7")}
                                            style={styles.numberButton}>
                                            <Text style={styles.numberButtonText}>7</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => this.addDonate("8")}
                                            style={[styles.numberButton, { marginHorizontal: 5 }]}>
                                            <Text style={styles.numberButtonText}>8</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => this.addDonate("9")}
                                            style={styles.numberButton}>
                                            <Text style={styles.numberButtonText}>9</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.numberRowContainer, { marginTop: 5 }]}>
                                        <View style={{ flex: 1 }} />
                                        <TouchableOpacity
                                            onPress={() => this.addDonate("0")}
                                            style={[styles.numberButton, { marginHorizontal: 5 }]}>
                                            <Text style={styles.numberButtonText}>0</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => this.removeDonate()}
                                            style={styles.deleteNumberButton}>
                                            <Ionicons name="ios-backspace-outline" size={30} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.noteContainer}>
                                    <Text style={styles.noteText}>Note:</Text>
                                    <TextInput
                                        value={this.state.note}
                                        onChangeText={note => this.setState({ note })}
                                        style={styles.noteInputField} />
                                </View>
                                <TouchableOpacity
                                    //onPress={() => this.props.navigation.navigate("User")}
                                    style={{ width: "100%" }}>
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        colors={['#ed733d', '#ea465b', '#db3022']}
                                        style={styles.button}>
                                        <Text style={styles.buttonText}>DONATE</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}