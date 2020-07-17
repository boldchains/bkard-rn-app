import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Menu from '../screens/user/menu';
import User from './TabNavigation';

function UserStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
    );
}

export default UserStackNavigator;
