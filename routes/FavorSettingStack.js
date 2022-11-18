import React, { useReducer, useContext, useMemo, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavorSetting from '../Pages/FavorSetting';
import FavorSetting2 from '../Pages/FavorSetting2';
import FavorSetting0 from '../Pages/FavorSetting0';
import Navbar from './Navbar';
import { FavorSettingContext } from '../content/FavorSettingContext';
import * as SecureStore from 'expo-secure-store';
import { API_URL } from '@env';

const Stack = createStackNavigator();

const FavorSettingStack = ({}) => {
  const InitFTstate = {
    food: false,
    price: false,
    env: false,
    service: false,
    traffic: false,
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
    f7: false,
    f8: false,
  };
  const FSreducer = (state, action) => {
    switch (action.type) {
      case 'EDIT':
        return {
          ...state,
          ...action.favorObject,
        };
      case 'SUBMIT':
        return {
          ...state,
        };
    }
  };

  const [FSstate, dispatch] = useReducer(FSreducer, InitFTstate);

  const FScontext = useMemo(() => ({
    edit: (FSObject) => {
      dispatch({
        type: 'EDIT',
        favorObject: FSObject,
      });
    },
    submit: async () => {
      const uid = await SecureStore.getItemAsync('user-id');
      const token = await SecureStore.getItemAsync('auth-token');
      const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'auth-token': token },
        body: JSON.stringify({
          uid: uid,
          prefer: FSstate,
        }),
      };
      const result = await fetch(
        `${API_URL}/user/setsetting`,
        requestOption
      ).then((res) => res.json());
      dispatch({
        type: 'SUBMIT',
      });
    },
  }));
  const fetchsetting = async () => {
    const uid = await SecureStore.getItemAsync('user-id');
    const requestOption = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(`${API_URL}/user/getsetting/${uid}`, requestOption)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'EDIT', favorObject: data.setting });
      });
  };
  useEffect(() => {
    fetchsetting();
  }, []);
  return (
    <FavorSettingContext.Provider value={{ FSstate, FScontext }}>
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
        {/* <Stack.Screen
          name="favorsetting0"
          component={FavorSetting0}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen name="favorsetting" component={FavorSetting} />
        <Stack.Screen name="favorsetting2" component={FavorSetting2} />
      </Stack.Navigator>
    </FavorSettingContext.Provider>
  );
};

export default FavorSettingStack;
