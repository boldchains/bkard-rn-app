import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Menu from '../screens/user/menu';
import PersonalInfo from '../screens/user/menu/accountSettings/personalInfo';
import ChangePassword from '../screens/user/menu/accountSettings/changePassword';
import Payments from '../screens/user/menu/accountSettings/payments';
import ContactUs from '../screens/user/menu/help&support/contactUs';
import LocationActiveStatus from '../screens/user/menu/privacy/locationActiveStatus';

import User from './TabNavigation';

function UserStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Payments" component={Payments} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="LocationActiveStatus" component={LocationActiveStatus} />
        </Stack.Navigator>
    );
}

export default UserStackNavigator;
