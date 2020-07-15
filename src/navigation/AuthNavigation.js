import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from '../screens/auth/login';
import ForgotPassword from '../screens/auth/forgotPassword';
import ConfirmCode from '../screens/auth/confirmCode';
import ChangePassword from '../screens/auth/changePassword';

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
