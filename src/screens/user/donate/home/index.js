import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DonateItem from '../../../../components/donateItem';

import styles from './styles';

export default class Donate extends React.Component {

    constructor() {
        super();

        this.state = {
            search: ""
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.headerContainer}>
                            <View style={styles.searchContainer}>
                                <Icon name="search" size={22} color="rgba(235,235,245,0.6)" />
                                <TextInput
                                    value={this.state.search}
                                    onChangeText={search => this.setState({ search })}
                                    placeholder="Search"
                                    placeholderTextColor="rgba(235,235,245,0.6)"
                                    style={styles.searchInput} />
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Menu")}
                                style={styles.menu}>
                                <Icon name="menu" size={28} color="rgba(235,235,245,0.6)" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.headerText}>Show Your Support</Text>
                        <View style={styles.donateItemContainer}>
                            <DonateItem navigation={this.props.navigation} />
                            <DonateItem navigation={this.props.navigation} />
                            <DonateItem navigation={this.props.navigation} />
                            <DonateItem navigation={this.props.navigation} />
                            <DonateItem navigation={this.props.navigation} />
                            <DonateItem navigation={this.props.navigation} />
                            <DonateItem navigation={this.props.navigation} />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}