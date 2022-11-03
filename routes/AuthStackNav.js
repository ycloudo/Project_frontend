import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/Auth/Login';
import Signup from '../Pages/Auth/Signup';
import FavorSettingStack from './FavorSettingStack';

const Stack = createStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthNav;
