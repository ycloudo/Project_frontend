// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import FavorSetting from "../Pages/FavorSetting";
// import FavorSetting2 from "../Pages/FavorSetting2";
// import DrawerNav from "./DrawerNav";

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavorSetting from '../Pages/FavorSetting';
import FavorSetting2 from '../Pages/FavorSetting2';
import FavorSetting0 from '../Pages/FavorSetting0';
import Navbar from './Navbar';

const Stack = createStackNavigator();

const FavorSettingStack = () => {
    // return (
    //     <Stack.Navigator
    //         screenOptions={{
    //             header: () => null,
    //             gestureEnabled: false,
    //         }}
    //         initialRouteName="favorsetting"
    //     >
    //         <Stack.Screen name="root" component={DrawerNav}
    //             options={{headerShown:false}}
    //         />
    //         <Stack.Screen name="favorsetting" component={FavorSetting} />
    //         <Stack.Screen name="favorsetting2" component={FavorSetting2} />
    //     </Stack.Navigator>
    // );
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        gestureEnabled: false,
      }}
      initialRouteName="favorsetting"
    >
      <Stack.Screen
        name="root"
        component={Navbar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="favorsetting0"
        component={FavorSetting0}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="favorsetting" component={FavorSetting} />
      <Stack.Screen name="favorsetting2" component={FavorSetting2} />
    </Stack.Navigator>
  );
};

export default FavorSettingStack;
