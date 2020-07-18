import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class LocationActiveStatus extends React.Component {

    constructor() {
        super();

        this.state = {
            location: false,
            activeStatus: true
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
                        <Text style={styles.headerText}>Location/Active Status</Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Text style={styles.shareLocationText}>Share Location</Text>
                        <Switch
                            trackColor={{ false: "#e8e9eb", true: "#ea475b" }}
                            thumbColor={"white"}
                            //ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.setState({ location: !this.state.location })}
                            value={this.state.location} />
                    </View>
                    <Text style={styles.greyText}>People to know your location</Text>

                    <View style={styles.switchContainer}>
                        <Text style={styles.shareLocationText}>Show Activity Status</Text>
                        <Switch
                            trackColor={{ false: "#e8e9eb", true: "#ea475b" }}
                            thumbColor={"white"}
                            //ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.setState({ activeStatus: !this.state.activeStatus })}
                            value={this.state.activeStatus} />
                    </View>
                    <Text style={styles.greyText}>People to know you are online</Text>

                </ScrollView>
            </View>
        );
    }
}