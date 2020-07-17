import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import DondateHome from '../screens/user/donate/home';
import AddDonate from '../screens/user/donate/addDonate';

function DonateStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DondateHome" component={DondateHome} />
            <Stack.Screen name="AddDonate" component={AddDonate} />
        </Stack.Navigator>
    );
}

export default DonateStackNavigator;
