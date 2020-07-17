import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

export default class NotificationItem extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../../assets/images/userAvatar.png")}
                    style={styles.avatar} />
                <View style={styles.informationContainer}>
                    <Text style={styles.informationText}>Sam donated $50 to BLM</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>1 day ago</Text>
                </View>
            </View>
        );
    }
}