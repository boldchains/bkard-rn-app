import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default class DonateItem extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarNameContainer}>
                    <Image
                        source={require("../../assets/images/userAvatar.png")}
                        style={styles.avatar} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.nameOfBusinessText}>Name of Business</Text>
                        <Text style={styles.secondInfoText}>Blablablabla</Text>
                    </View>
                </View>
                <View style={styles.goalContainer}>
                    <Text style={styles.goalText}>Goal</Text>
                    <Text style={styles.goalPrice}>$200</Text>
                </View>
                <View style={[styles.goalContainer, { marginTop: 10 }]}>
                    <Text style={styles.goalText}>Amount Raised</Text>
                    <Text style={styles.goalPrice}>$10 340</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("AddDonate")}
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

                    <View>
                        <TouchableOpacity
                            style={styles.shareButton}>
                            <Text style={styles.shareButtonText}>Share</Text>
                            <Icon name="share-outline" size={25} color="#007aff" />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}