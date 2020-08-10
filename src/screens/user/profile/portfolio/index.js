import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default class Portfolio extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
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
                            <Text style={styles.headerText}>Portfolio</Text>
                        </View>
                        <View style={styles.userInformationContainer}>
                            <View style={styles.heartButtonContainer}>
                                <TouchableOpacity
                                    style={styles.heartButton}>
                                    <AntDesign name="hearto" size={20} color="white" />
                                </TouchableOpacity>
                            </View>
                            <Image
                                source={require("../../../../assets/images/userAvatar.png")}
                                style={styles.avatar} />
                            <Text style={styles.userFullName}>Jeep Woker</Text>
                            <Text style={styles.userCity}>Buffalo, New York</Text>
                        </View>
                        <View style={styles.horizontalDivider} />
                        <View style={styles.campaignTextContainer}>
                            <Text style={styles.campaignText}>Campaign:</Text>
                            <View style={styles.campaignItem}>
                                <Entypo name="dot-single" size={28} color="#8d8d89" />
                                <Text style={styles.campaignItemText}>Name/Description</Text>
                            </View>
                            <View style={styles.campaignItem}>
                                <Entypo name="dot-single" size={28} color="#8d8d89" />
                                <Text style={styles.campaignItemText}>How much Raised</Text>
                            </View>
                            <View style={styles.campaignItem}>
                                <Entypo name="dot-single" size={28} color="#8d8d89" />
                                <Text style={styles.campaignItemText}>How many people Donated</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalDivider} />
                        <View style={styles.campaignTextContainer}>
                            <Text style={styles.campaignText}>Donations:</Text>
                            <View style={styles.campaignItem}>
                                <Entypo name="dot-single" size={28} color="#8d8d89" />
                                <Text style={styles.campaignItemText}>People/Business You Donated to and amount</Text>
                            </View>
                            <View style={styles.campaignItem}>
                                <Entypo name="dot-single" size={28} color="#8d8d89" />
                                <Text style={styles.campaignItemText}>Total Donations</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalDivider} />
                        <View style={styles.campaignTextContainer}>
                            <Text style={styles.campaignText}>Investments:</Text>
                            <View style={styles.campaignItem}>
                                <Entypo name="dot-single" size={28} color="#8d8d89" />
                                <Text style={styles.campaignItemText}>Who you invested in</Text>
                            </View>
                            <View style={styles.campaignItem}>
                                <Entypo name="dot-single" size={28} color="#8d8d89" />
                                <Text style={styles.campaignItemText}>Shares</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}