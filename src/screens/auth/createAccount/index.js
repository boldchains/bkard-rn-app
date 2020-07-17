import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class CreateAccount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            address: "",
            phoneNumber: "",
            datePicker: false,
            date: new Date(1598051730000),
            pickdate: false,
            privacyPolicy: true,
            imageUri: ""
        }
    }

    onChange = (event, selectedDate) => {
        //console.log("biramo datum rodjenja: ", event, selectedDate);
        if (selectedDate !== undefined) {
            console.log("izabrali smo datum rodjenja: ", selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
            this.setState({ date: selectedDate, pickdate: true });
        } else {
            console.log("nismo izabrali datum rodjenja! ", selectedDate);

        }
        /* const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate); */
    };

    parseDate = () => {
        let date = "";
        if (this.state.pickdate) {
            date = this.state.date.getDate() + "-" + this.state.date.getMonth() + "-" + this.state.date.getYear()
        } else {
            date = "Birthday"
        }
        return date;
    }

    pickImage = () => {
        let options = {
            //title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Browse...' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log("Response: ", response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                //console.log("Odgovor: ",);

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({ imageUri: response.uri });
            }
        });
    }

    render() {
        return (
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
                        <Text style={styles.headerText}>Create Account</Text>
                    </View>
                    {this.state.datePicker ?
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={this.state.date}
                            mode={"date"}
                            is24Hour={true}
                            display="default"
                            onChange={(event, selectedDate) => this.onChange(event, selectedDate)}
                        /> : null
                    }


                    {this.state.imageUri === "" ?
                        <View>
                            <Icon name="account-circle" size={150} color="#1c1c1e" style={{ margin: 0 }} />
                            <View style={styles.imagePlus}>
                                <TouchableOpacity
                                    onPress={() => this.pickImage()}>
                                    <Icon name="add" size={30} color="grey" />
                                </TouchableOpacity>
                            </View>
                        </View> :
                        <Image
                            style={styles.avatar}
                            source={{ uri: this.state.imageUri }} />}

                    <TextInput
                        value={this.state.username}
                        onChangeText={username => this.setState({ username })}
                        placeholder="Username"
                        placeholderTextColor="white"
                        style={[styles.textInput, { marginTop: 84 }]} />
                    <TextInput
                        value={this.state.address}
                        onChangeText={address => this.setState({ address })}
                        placeholder="Address"
                        placeholderTextColor="white"
                        style={styles.textInput} />
                    <TextInput
                        value={this.state.phoneNumber}
                        onChangeText={phoneNumber => this.setState({ phoneNumber })}
                        placeholder="Phone number"
                        placeholderTextColor="white"
                        style={styles.textInput} />
                    <TouchableOpacity
                        onPress={() => this.setState({ datePicker: true })}
                        style={styles.birtdateInput}>
                        <Text style={styles.birthdateText}>{this.parseDate()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("User")}
                        style={{ width: "100%" }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#ed733d', '#ea465b', '#db3022']}
                            style={styles.button}>
                            <Text style={styles.buttonText}>SAVE</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ScrollView>
            </View >
        );
    }
}
