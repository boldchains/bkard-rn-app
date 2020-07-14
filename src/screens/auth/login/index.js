import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login Ekran</Text>
      </View>
    );
  }
}
