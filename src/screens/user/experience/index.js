import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SliderBox } from "react-native-image-slider-box";

import styles from './styles';

const width = Dimensions.get("screen").width;

export default class Experience extends React.Component {

    constructor() {
        super();

        this.state = {
            search: "",
            modalVisible: true,
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree", // Network image
                //require('./assets/images/girl.jpg'),          // Local image
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.modalVisible ?
                    <View style={styles.mainModalContainer}>
                        <View style={styles.experienceContainer}>
                            <Image
                                source={require("../../../assets/icons/experienceModalIcon.png")}
                                style={styles.modalImage} />
                            <View style={styles.textContainer}>
                                <Text style={styles.modalText}>What are your experience?</Text>
                                <Text style={styles.modalText}>Speak your truths.</Text>
                            </View>
                            <View style={styles.modalButtonContainer}>
                                <TouchableOpacity
                                    onPress={() => this.setState({ modalVisible: false })}
                                    style={[styles.modalButton, { borderColor: "#656565", borderRightWidth: 1 }]}>
                                    <Text style={styles.modalButtonText}>Later</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.setState({ modalVisible: false })}
                                    style={styles.modalButton}>
                                    <Text style={styles.modalButtonText}>Post</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> : null}
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
                    <View style={{ marginTop: 10 }}>
                        <SliderBox
                            Image
                            images={this.state.images}
                            ImageComponentStyle={{ borderRadius: 14 }}
                            autoplay
                            circleLoop />
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
                                <Image
                                    style={{ width: width / 2 - 14, height: width / 2 - 14, borderRadius: 10 }}
                                    source={require("../../../assets/images/purchase1.png")} />
                                <Text style={styles.businessNameText}>Business name</Text>
                                <Text style={styles.secondInfoText}>Blablablabla</Text>
                            </View>
                            <View>
                                <Image
                                    style={{ width: width / 2 - 14, height: width / 2 - 14, borderRadius: 10 }}
                                    source={require("../../../assets/images/purchase2.png")} />
                                <Text style={styles.businessNameText}>Business name</Text>
                                <Text style={styles.secondInfoText}>Blablablabla</Text>
                            </View>
                        </View>
                        <View style={styles.productsContainer}>
                            <View>
                                <Image
                                    style={{ width: width / 2 - 14, height: width / 2 - 14, borderRadius: 10 }}
                                    source={require("../../../assets/images/purchase1.png")} />
                                <Text style={styles.businessNameText}>Business name</Text>
                                <Text style={styles.secondInfoText}>Blablablabla</Text>
                            </View>
                            <View>
                                <Image
                                    style={{ width: width / 2 - 14, height: width / 2 - 14, borderRadius: 10 }}
                                    source={require("../../../assets/images/purchase2.png")} />
                                <Text style={styles.businessNameText}>Business name</Text>
                                <Text style={styles.secondInfoText}>Blablablabla</Text>
                            </View>
                        </View>
                        <View style={styles.productsContainer}>
                            <View>
                                <Image
                                    style={{ width: width / 2 - 14, height: width / 2 - 14, borderRadius: 10 }}
                                    source={require("../../../assets/images/purchase1.png")} />
                                <Text style={styles.businessNameText}>Business name</Text>
                                <Text style={styles.secondInfoText}>Blablablabla</Text>
                            </View>
                            <View>
                                <Image
                                    style={{ width: width / 2 - 14, height: width / 2 - 14, borderRadius: 10 }}
                                    source={require("../../../assets/images/purchase2.png")} />
                                <Text style={styles.businessNameText}>Business name</Text>
                                <Text style={styles.secondInfoText}>Blablablabla</Text>
                            </View>
                        </View>
                        <View style={styles.productsContainer}>
                            <View>
                                <Image
                                    style={{ width: width / 2 - 14, height: width / 2 - 14, borderRadius: 10 }}
                                    source={require("../../../assets/images/purchase1.png")} />
                                <Text style={styles.businessNameText}>Business name</Text>
                                <Text style={styles.secondInfoText}>Blablablabla</Text>
                            </View>
                            <View>
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