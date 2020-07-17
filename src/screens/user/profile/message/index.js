import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export default class Message extends React.Component {

    constructor() {
        super();

        this.state = {
            search: "",
            to: "",
            subject: "",
            body: ""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollContainer}>
                    <View style={styles.headerContainer}>
                        <View style={{ position: "absolute", left: 0 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={styles.backButton}>
                                <Icon name="keyboard-arrow-left" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.headerText}>Message</Text>
                    </View>

                    <View style={styles.searchPeopleContainer}>
                        <View style={styles.searchContainer}>
                            <Icon name="search" size={22} color="rgba(235,235,245,0.6)" />
                            <View>
                                <TextInput
                                    value={this.state.search}
                                    onChangeText={search => this.setState({ search })}
                                    placeholder="Search People"
                                    placeholderTextColor="rgba(235,235,245,0.6)"
                                    style={styles.searchInput} />
                            </View>
                        </View>
                        <View style={styles.menu}>
                            <Icon name="clear" size={23} color="rgba(235,235,245,0.6)" />
                        </View>
                    </View>

                    <View style={[styles.toSubjectContainer, { marginTop: 30 }]}>
                        <Text style={styles.toSubjectText}>To:</Text>
                        <TextInput
                            value={this.state.to}
                            onChangeText={to => this.setState({ to })}
                            style={styles.searchInput} />
                    </View>

                    <View style={styles.toSubjectContainer}>
                        <Text style={styles.toSubjectText}>Subject:</Text>
                        <TextInput
                            value={this.state.subject}
                            onChangeText={subject => this.setState({ subject })}
                            style={styles.searchInput} />
                    </View>

                    <View style={styles.bodyContainer}>
                        <Text style={styles.toSubjectText}>Body:</Text>
                        <TextInput
                            value={this.state.body}
                            onChangeText={body => this.setState({ body })}
                            multiline={true}
                            style={[styles.searchInput, { minHeight: 100, marginTop: 5 }]} />
                    </View>

                    <TouchableOpacity
                        //onPress={() => this.props.navigation.navigate("Login")}
                        style={{ marginHorizontal: 10 }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#ed733d', '#ea465b', '#db3022']}
                            style={styles.sendButton}>
                            <Text style={styles.sendButtonText}>SEND</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
}