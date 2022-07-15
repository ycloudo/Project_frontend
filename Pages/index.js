import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


import Main from './Main';
import Restaurant from './restaurant';
import Price from './price';

export const Stack = createStackNavigator();

export const MainStack = () => {
   
      return (
        <Stack.Navigator>
                <Stack.Screen name="main" component={Main} options={{header: () => null}}/>
                <Stack.Screen name="restaurant" component={Restaurant} options={{header: () => null}}/> 
                <Stack.Screen name="price" component={Price} options={{header: () => null}}/>      
            </Stack.Navigator>
              
      );
    }

