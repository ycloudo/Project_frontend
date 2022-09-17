import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useMemo, useEffect, useReducer } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./routes/DrawerNav";
import Auth from "./routes/AuthStackNav";
import { AuthContext } from "./content/AuthContext";
import { API_URL } from "@env";
import * as SecureStore from "expo-secure-store";

export default function App() {
    const initialLoginState = {
        isLoading: true,
        userId: null,
        userToken: null,
    };

    const authReducer = (state, action) => {
        //狀態
        switch (action.type) {
            case "LOADING":
                return {
                    ...state,
                    userId: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case "LOGIN":
                return {
                    ...state,
                    userId: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case "LOGOUT":
                return {
                    ...state,
                    userId: null,
                    userToken: null,
                    isLoading: false,
                };
            case "SIGNUP":
                return {
                    ...state,
                    userId: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [Authstate, dispatch] = useReducer(authReducer, initialLoginState);

    const authContext = useMemo(() => ({
        login: async (account, password) => {
            //api call
            const requestOption = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    account: account,
                    password: password,
                }),
            };
            let userToken, userId, res;
            try {
                res = await fetch(`${API_URL}/user/login`, requestOption).then(
                    (r) => r.json()
                );
                userId = res.uid;
                userToken = res.token;
            } catch (e) {
                console.error(e);
            }
            if (userId && userToken) {
                await SecureStore.setItemAsync("auth-token", userToken);
                await SecureStore.setItemAsync("user-id", userId);
            }
            setTimeout(() => {
                dispatch({
                    type: "LOGIN",
                    id: userId,
                    token: userToken,
                });
            }, 280);
            return res;
        },
        logout: async () => {
            await SecureStore.deleteItemAsync("auth-token");
            await SecureStore.deleteItemAsync("user-id");
            dispatch({ type: "LOGOUT" });
        },
        signup: async (name, account, password) => {
            //api call
            const requestOption = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    account: account,
                    password: password,
                }),
            };
            let userToken, userId;
            try {
                const res = await fetch(
                    `${API_URL}/user/register`,
                    requestOption
                );
                const json = await res.json();
                userId = json.info._id;
                userToken = json.token;
            } catch (e) {
                console.error(e);
            }
            dispatch({
                type: "SIGNUP",
                id: userId,
                token: userToken,
            });
        },
    }));
    useEffect(() => {
        const fetchUser = async () => {
            const token = await SecureStore.getItemAsync("auth-token");
            const userId = await SecureStore.getItemAsync("user-id");
            setTimeout(() => {
                dispatch({ type: "LOADING", token: token, id: userId });
            }, 1000);
        };
        fetchUser();
    }, []);
    if (Authstate.isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    return (
        <AuthContext.Provider value={authContext}>
            <StatusBar style="auto" />
            <NavigationContainer>
                {Authstate.userToken != null ? <Drawer /> : <Auth />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
