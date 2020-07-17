import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

import Experience from '../screens/user/experience';
import Shop from '../screens/user/shop';
import Donate from './DonateStackNavigation';
import Notification from '../screens/user/notification';
import Profile from './ProfileStackNavigator';

function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={{ flexDirection: 'row', backgroundColor: "#121212", height: 50 }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                    >
                        {label === "Profile" ?
                            <Icon name="user-o" size={23} color={isFocused ? "white" : "#444745"} /> :
                            label === "Notification" ?
                                <SimpleLineIcons name="bell" size={23} color={isFocused ? "white" : "#444745"} /> :
                                label === "Experience" ?
                                    <AntDesign name="appstore-o" size={23} color={isFocused ? "white" : "#444745"} /> :
                                    label === "Donate" ?
                                        <AntDesign name="wallet" size={23} color={isFocused ? "white" : "#444745"} /> :
                                        <Feather name="shopping-bag" size={23} color={isFocused ? "white" : "#444745"} />

                        }
                    </TouchableOpacity>
                );

            })}
        </View>
    );
}

export default function App() {
    return (
        <Tab.Navigator initialRouteName="Profile" tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Experience" component={Experience} />
            <Tab.Screen name="Shop" component={Shop} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Donate" component={Donate} />
            <Tab.Screen name="Notification" component={Notification} />
        </Tab.Navigator>
    );
}