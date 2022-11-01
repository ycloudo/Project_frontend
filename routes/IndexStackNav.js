import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Main from '../Pages/Main';
import Price from '../Pages/price';
import SearchResult from '../Pages/SearchResult';

export const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="result" component={SearchResult} />
      <Stack.Screen name="price" component={Price} />
    </Stack.Navigator>
  );
};
