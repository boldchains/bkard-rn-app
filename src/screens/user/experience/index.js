import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Experience extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Experience Screen</Text>
            </View>
        );
    }
}