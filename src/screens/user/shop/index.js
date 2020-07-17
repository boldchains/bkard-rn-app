import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const width = Dimensions.get("screen").width;

export default class Shop extends React.Component {

    constructor() {
        super();

        this.state = {
            search: ""
        }
    }

    render() {
        return (
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
                    <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                        <Image
                            source={require("../../../assets/images/shopMainImage.png")}
                            style={styles.mainImage} />
                        <View style={styles.shopTextContainer}>
                            <Text style={styles.shopText}>Shop</Text>
                            <Ionicons name="ios-options-outline" size={22} color="#98989f" />
                        </View>
                        <View style={styles.productsContainer}>
                            <View>
                                <View style={styles.soldContainer}>
                                    <Text style={styles.soldText}>Product Sold</Text>
                                </View>
                                <Image
                                    style={{ width: width / 2 - 14, height: width / 2 - 14, borderRadius: 10 }}
                                    source={require("../../../assets/images/purchase1.png")} />
                                <Text style={styles.businessNameText}>Business name</Text>
                                <Text style={styles.secondInfoText}>Blablablabla</Text>
                            </View>
                            <View>
                                <View style={styles.soldContainer}>
                                    <Text style={styles.soldText}>Product Sold</Text>
                                </View>
                                <Image
                                    style={{ width: width / 2 - 14, height: width / 2 - 14, borderRadius: 10 }}
                                    source={require("../../../assets/images/purchase2.png")} />
                                <Text style={styles.businessNameText}>Business name</Text>
                                <Text style={styles.secondInfoText}>Blablablabla</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}