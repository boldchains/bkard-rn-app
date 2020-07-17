import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';
import { userRole } from '../../../../redux/actions';

import styles from './styles';

class PrivateHome extends React.Component {

    constructor() {
        super();

        this.state = {
            search: "",
            business: false,
            menuVisible: false
        }
    }

    componentDidMount = () => {
        console.log("ProfileScreen[DidMount]: ", this.props);
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            // do something
            console.log("Profil ekran je u fokusu! ", this.props);
        });
    }

    componentWillUnmount = () => {
        this._unsubscribe();
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

                    {this.props.auth.role === "business" ?
                        <View>
                            <View style={styles.businessContainer}>
                                <Image
                                    source={require("../../../../assets/images/userAvatar.png")}
                                    style={styles.businessAvatar} />
                                <View style={styles.businessInformationContainer}>
                                    <Text style={[styles.userFullName, { marginTop: 0 }]}>Name of Business</Text>
                                    <Text style={styles.userCity}>Buffalo, New York</Text>
                                    <Text style={styles.businessWebAddress}>www.blablabla.com</Text>
                                </View>
                            </View>
                            <View style={styles.businessGoalContainer}>
                                <View style={styles.goalContainer}>
                                    <Text style={styles.goalText}>Goal:</Text>
                                    <Text style={styles.goalPrice}>$20 000</Text>
                                </View>
                                <TouchableOpacity
                                //onPress={() => this.props.navigation.navigate("Login")}
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        colors={['#ed733d', '#ea465b', '#db3022']}
                                        style={styles.donateButton}>
                                        <Text style={styles.donateButtonText}>DONATE</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View> :
                        <View>
                            <View style={styles.userInformationContainer}>
                                <Image
                                    source={require("../../../../assets/images/userAvatar.png")}
                                    style={styles.avatar} />
                                <Text style={styles.userFullName}>Jeep Woker</Text>
                                <Text style={styles.userCity}>Buffalo, New York</Text>
                            </View>
                        </View>}

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Message")}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Message</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.state.business ?
                                    this.props.navigation.navigate("RecentPurchases") :
                                    this.props.navigation.navigate("Portfolio")
                            }}
                            style={[styles.button, this.props.auth.role === "business" ? { marginRight: 0 } : null]}>
                            <Text style={styles.buttonText}>{this.props.auth.role === "business" ? "Invest" : "Portfolio"}</Text>
                        </TouchableOpacity>
                        {this.props.auth.role === "private" ?
                            <TouchableOpacity style={styles.heartButton}>
                                <Icon name="favorite-border" size={25} color="white" />
                            </TouchableOpacity> : null}

                    </View>

                    {this.props.auth.role === "private" ?
                        <View style={styles.followersContainer}>
                            <View style={styles.followersItem}>
                                <Text style={styles.followersNumber}>99</Text>
                                <Text style={styles.followersText}>Followings</Text>
                            </View>
                            <View style={styles.verticalDivider} />
                            <View style={styles.followersItem}>
                                <Text style={styles.followersNumber}>99</Text>
                                <Text style={styles.followersText}>Followers</Text>
                            </View>
                            <View style={styles.verticalDivider} />
                            <View style={styles.followersItem}>
                                <Text style={styles.followersNumber}>100</Text>
                                <Text style={styles.followersText}>Likes</Text>
                            </View>
                        </View> : null}

                    {this.props.auth.role === "private" ?
                        <View>
                            <View style={styles.horizontalDivider} />

                            <View style={styles.purchasesContainer}>
                                <View style={styles.purchasesHeader}>
                                    <Text style={styles.recentPurchasesText}>Recent Purchases</Text>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate("RecentPurchases")}
                                        style={styles.seeAllButton}>
                                        <Text style={styles.seeAllButtonText}>See All</Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    style={{ marginVertical: 20 }}>
                                    <Image
                                        source={require("../../../../assets/images/purchase1.png")}
                                        style={[styles.purchaseImage, { marginLeft: 10, }]} />
                                    <Image
                                        source={require("../../../../assets/images/purchase2.png")}
                                        style={styles.purchaseImage} />
                                    <Image
                                        source={require("../../../../assets/images/purchase3.png")}
                                        style={styles.purchaseImage} />
                                    <Image
                                        source={require("../../../../assets/images/purchase1.png")}
                                        style={styles.purchaseImage} />
                                    <Image
                                        source={require("../../../../assets/images/purchase1.png")}
                                        style={styles.purchaseImage} />
                                    <Image
                                        source={require("../../../../assets/images/purchase1.png")}
                                        style={styles.purchaseImage} />
                                    <Image
                                        source={require("../../../../assets/images/purchase1.png")}
                                        style={styles.purchaseImage} />
                                    <Image
                                        source={require("../../../../assets/images/purchase1.png")}
                                        style={styles.purchaseImage} />
                                </ScrollView>
                            </View>
                        </View> : null}

                    {this.props.auth.role === "business" ?
                        <View>
                            <View style={styles.horizontalDivider} />

                            <View style={styles.productsServicesContainer}>
                                <Text style={[styles.recentPurchasesText, { marginLeft: 10, marginBottom: 20 }]}>Business Details / Photos</Text>
                                <ScrollView
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    style={{ height: 109 }}>
                                    <Image
                                        source={require("../../../../assets/images/purchase1.png")}
                                        style={[styles.businessPhotos, { marginLeft: 10, }]} />
                                    <Image
                                        source={require("../../../../assets/images/purchase2.png")}
                                        style={styles.businessPhotos} />
                                    <Image
                                        source={require("../../../../assets/images/purchase3.png")}
                                        style={styles.businessPhotos} />
                                    <Image
                                        source={require("../../../../assets/images/purchase1.png")}
                                        style={styles.businessPhotos} />
                                </ScrollView>
                            </View>
                        </View> : null}

                    {this.props.auth.role === "business" ?
                        <View>
                            <View style={styles.horizontalDivider} />

                            <View style={styles.productsServicesContainer}>
                                <Text style={styles.recentPurchasesText}>Products/Services</Text>
                                <View>
                                    <Text style={styles.sellingText}>What you selling / How much?</Text>
                                </View>
                            </View>
                        </View> : null}

                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps, { userRole })(PrivateHome);