import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MenuItem from '../../../components/menuItem';

import { connect } from 'react-redux';
import { userRole } from '../../../redux/actions';

import styles from './styles';

class Menu extends React.Component {

    constructor() {
        super();
    }

    componentDidMount = () => {
        console.log("Menu[DidMount]: ", this.props);
    }

    changeUserRole = async () => {
        if (this.props.auth.role === "private") {
            console.log("treba da menjamo role: ", this.props);
            await this.props.userRole("business");
            console.log("role promenjen: ", this.props);
        } else {
            await this.props.userRole("private");
        }
        console.log("idemo na profil ekran");
        this.props.navigation.navigate("Profile");
    }

    logout = () => {
        this.props.navigation.navigate("Login");
    }

    render() {
        return (
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
                        <Text style={styles.headerText}>Menu</Text>
                    </View>
                    <View style={styles.optionsContainer}>
                        {/* <View style={styles.optionsItem}>
                        <View style={styles.optionsItemIcon}>
                            <Icon name="business-center" size={25} color="white" />
                        </View>
                        <TouchableOpacity
                            onPress={() => this.changeUserRole()}
                            style={styles.optionsItemButton}>
                            <Text style={styles.optionsItemButtonText}>{this.props.auth.role === "private" ? "Switch to Business Account" : "Switch to Private Account"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionsItem}>
                        <View style={styles.optionsItemIcon}>
                            <SimpleLineIcons name="settings" size={25} color="white" />
                        </View>
                        <TouchableOpacity
                            style={styles.optionsItemButton}>
                            <Text style={styles.optionsItemButtonText}>Account Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionsItem}>
                        <View style={styles.optionsItemIcon}>
                            <Icon name="home" size={25} color="white" />
                        </View>
                        <TouchableOpacity
                            style={styles.optionsItemButton}>
                            <Text style={styles.optionsItemButtonText}>Privacy</Text>
                        </TouchableOpacity>
                    </View> */}
                        {/* <View style={styles.optionsItem}>
                            <View style={styles.optionsItemIcon}>
                                <AntDesign name="customerservice" size={25} color="white" />
                            </View>
                            <TouchableOpacity
                                style={styles.optionsItemButton}>
                                <Text style={styles.optionsItemButtonText}>Help & Support</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.optionsItem}>
                            <View style={styles.optionsItemIcon}>
                                <Feather name="log-out" size={25} color="white" />
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Login")}
                                style={styles.optionsItemButton}>
                                <Text style={styles.optionsItemButtonText}>Logout</Text>
                            </TouchableOpacity>
                        </View> */}
                        <MenuItem icon={<Image style={{width: 22.67, height: 20}} source={require("../../../assets/icons/businessIcon.png")} />} expand={false} func={this.changeUserRole} title={this.props.auth.role === "private" ? "Switch to Business Account" : "Switch to Private Account"} >
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        </MenuItem>
                        <MenuItem icon={<SimpleLineIcons name="settings" size={25} color="white" />} expand={true} title="Account Settings" >
                            <View style={styles.collapseMenuContainer}>
                                <Text style={[styles.optionsItemButtonText, { marginTop: 15 }]}>Personal Info</Text>
                                <Text style={styles.optionsItemButtonText}>Change Password</Text>
                                <Text style={styles.optionsItemButtonText}>Add/Edit Payments</Text>
                            </View>
                        </MenuItem>
                        <MenuItem icon={<Image style={{width: 26, height: 26}} source={require("../../../assets/icons/privacyIcon.png")} />} expand={true} title="Privacy" >
                            <View style={styles.collapseMenuContainer}>
                                <Text style={[styles.optionsItemButtonText, { marginTop: 15 }]}>Location/Active Status</Text>
                            </View>
                        </MenuItem>
                        <MenuItem icon={<AntDesign name="customerservice" size={25} color="white" />} expand={true} title="Help & Support" >
                            <View style={styles.collapseMenuContainer}>
                                <Text style={[styles.optionsItemButtonText, { marginTop: 15 }]}>Contact Us</Text>
                                <Text style={styles.optionsItemButtonText}>Q&A</Text>
                                <Text style={styles.optionsItemButtonText}>Report & Problem</Text>
                                <Text style={styles.optionsItemButtonText}>Terms & Polices</Text>
                            </View>
                        </MenuItem>
                        <MenuItem icon={<Feather name="log-out" size={25} color="white" />} expand={false} func={this.logout} title="Logout" >
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        </MenuItem>
                    </View>
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

export default connect(mapStateToProps, { userRole })(Menu);