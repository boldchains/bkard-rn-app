import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

export default class recentPurchasesItem extends React.Component {

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
                    <Text style={styles.informationText}>Vendors</Text>
                    <Text style={styles.dateText}>July 5,2020</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>$ 100</Text>
                </View>
            </View>
        );
    }
}