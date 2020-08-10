import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import RecentPurchasesItem from '../../../../components/recentPurchasesItem';

import styles from './styles';

export default class RecentPurchases extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={{ position: "absolute", left: 0 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={styles.backButton}>
                                <Icon name="keyboard-arrow-left" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.headerText}>Recent Purchases</Text>
                    </View>
                    <View style={styles.recentPurchasesItemContainer}>
                        <RecentPurchasesItem />
                        <View style={styles.horizontalDivider} />
                        <RecentPurchasesItem />
                        <View style={styles.horizontalDivider} />
                        <RecentPurchasesItem />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}