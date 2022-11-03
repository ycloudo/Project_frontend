import { React, useReducer, useMemo, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Eat from '../Pages/Eat_new';
import Favor from '../Pages/Favor';
import { MainStack } from '../routes/IndexStackNav';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
//import FavorSetting from '../Pages/FavorSetting';
import FavorSetting from "../routes/FavorSettingStack";
import { UserContext } from '../content/UserContext';
import { API_URL } from '@env';
import * as SecureStore from 'expo-secure-store';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  const userInitState = {
    favor: [],
  };
  const userReducer = (state, action) => {
    switch (action.type) {
      case 'SETFAVOR':
        return {
          ...state,
          favor: action.favor,
        };
      case 'INITSTATE':
        return {
          ...state,
          favor: action.favor,
        };
    }
  };
  const [UserInfoState, dispatch] = useReducer(userReducer, userInitState);
  const fetchUserFavor = async () => {
    const token = await SecureStore.getItemAsync('auth-token');
    const uid = await SecureStore.getItemAsync('user-id');
    const requestOption = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
    };
    fetch(`${API_URL}/user/getFavor/${uid}`, requestOption)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'INITSTATE', favor: data.favor });
      });
  };
  const postUserFavor = async (favorList) => {
    //將使用者喜好修改至資料庫
    const uid = await SecureStore.getItemAsync('user-id');
    const token = await SecureStore.getItemAsync('auth-token');
    const requestOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
      body: JSON.stringify({
        uid: uid,
        favor: favorList,
      }),
    };
    return fetch(`${API_URL}/user/setFavor`, requestOption).then((res) =>
      res.json()
    );
  };
  const userContext = useMemo(() => ({
    setfavor: async (isFavor, favorIndex, rid) => {
      const userFavor = UserInfoState.favor;
      if (isFavor) {
        //取消收藏
        const rear = userFavor.length - 1;
        [userFavor[favorIndex], userFavor[rear]] = [
          userFavor[rear],
          userFavor[favorIndex],
        ]; //swap
        userFavor.pop();
      } //收藏
      else {
        userFavor.push(rid);
      }
      const res = await postUserFavor(userFavor);
      if (res.message == 'edit success') {
        dispatch({
          type: 'SETFAVOR',
          favor: userFavor,
        });
        return true;
      } else {
        console.log('failed');
        return false;
      }
    },
  }));
  useEffect(() => {
    fetchUserFavor();
  }, []);
  return (
    <UserContext.Provider value={{ UserInfoState, userContext }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.menu_container,
        }}
      >
        <Tab.Screen
          name="home"
          component={MainStack}
          //listeners={{
          //tabPress: e => {
          // Prevent default action
          //e.preventDefault();

          //Any custom code here
          //alert(123);
          //},
          //}}
          options={({ route }) => ({
            tabBarStyle: {
              display: getRouteName(route),
              backgroundColor: '#EFFAFF',
              height: '10%',
            },
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => {
              const height = focused ? 48 : 40;
              const width = focused ? 15 : 12.5;
              const rotate = focused ? '-45deg' : '0deg';
              return (
                <View style={styles.icon_container}>
                  <Image
                    source={require('../assets/spoon.png')}
                    style={{
                      height: height,
                      width: width,
                      transform: [{ rotateZ: rotate }],
                    }}
                  />
                  <Text>首頁</Text>
                </View>
              );
            },
          })}
        />
        <Tab.Screen
          name="吃什麼"
          component={Eat}
          options={({ route }) => ({
            tabBarStyle: {
              display: getRouteName(route),
              backgroundColor: '#fff',
              height: '10%',
            },

            tabBarIcon: ({ focused }) => {
              const height = focused ? 48 : 40;
              const width = focused ? 15 : 12.5;
              const rotate = focused ? '-45deg' : '0deg';
              return (
                <View style={styles.icon_container}>
                  <Image
                    source={require('../assets/fork.png')}
                    style={{
                      height: height,
                      width: width,
                      transform: [{ rotateZ: rotate }],
                    }}
                  />
                  <Text>吃什麼</Text>
                </View>
              );
            },
          })}
        />
        <Tab.Screen
          name="收藏"
          component={Favor}
          options={({ route }) => ({
            tabBarStyle: {
              display: getRouteName(route),
              backgroundColor: '#EFFAFF',
              height: '10%',
            },
            tabBarIcon: ({ focused }) => {
              const height = focused ? 48 : 40;
              const width = focused ? 15 : 12.5;
              const rotate = focused ? '-45deg' : '0deg';
              return (
                <View style={styles.icon_container}>
                  <Image
                    source={require('../assets/knife.png')}
                    style={{
                      height: height,
                      width: width,
                      transform: [{ rotateZ: rotate }],
                    }}
                  />
                  <Text>收藏</Text>
                </View>
              );
            },
          })}
        />
        <Tab.Screen
          name="設定"
          component={FavorSetting}
          options={{
            tabBarIcon: () => (
              <View style={styles.icon_container}>
                <Image
                  source={require('../assets/plate.png')}
                  style={styles.icon}
                />
                <Text>設定</Text>
              </View>
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.openDrawer();
            },
          })}
        />
      </Tab.Navigator>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  menu_container: {
    position: 'absolute',
    width: '100%',
    height: '10%',
    backgroundColor: '#E0E0E0',
  },
  icon_container: {
    marginTop: 10,
    alignItems: 'center',
  },
  icon: {
    height: 40,
    width: 40,
  },
});

const getRouteName = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  //console.log(routeName);
  //console.log(route);
  if (
    routeName == 'favorsetting' ||
    routeName == 'favorsetting2' ||
    routeName == 'restaurant' ||
    routeName == 'price' ||
    routeName == 'result'
  ) {
    return 'none';
  }
  return 'flex';
};

export default Navbar;
