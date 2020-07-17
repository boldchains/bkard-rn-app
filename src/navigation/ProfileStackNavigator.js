import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import ProfileHome from '../screens/user/profile/home';
import Message from '../screens/user/profile/message';
import Portfolio from '../screens/user/profile/portfolio';
import RecentPurchases from '../screens/user/profile/recentPurchases';

function ProfileStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ProfileHome" component={ProfileHome} />
            <Stack.Screen name="Message" component={Message} />
            <Stack.Screen name="Portfolio" component={Portfolio} />
            <Stack.Screen name="RecentPurchases" component={RecentPurchases} />
        </Stack.Navigator>
    );
}

export default ProfileStackNavigator;
