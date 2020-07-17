import React from 'react';
import { View, Text } from 'react-native';

import NotificationItem from '../../../components/notificationItem';

import styles from './styles';

export default class Notification extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Notifications</Text>
                </View>
                <View style={styles.notificationItemContainer}>
                    <NotificationItem />
                    <View style={styles.horizontalDivider} />
                    <NotificationItem />
                    <View style={styles.horizontalDivider} />
                    <NotificationItem />
                </View>
            </View>
        );
    }
}