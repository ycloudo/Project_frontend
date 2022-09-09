import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useMemo, useEffect, useReducer } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./routes/DrawerNav";
import Auth from "./routes/AuthStackNav";
import { AuthContext } from "./content/AuthContext";
import { API_URL } from "@env";

export default function App() {
    const initialLoginState = {
        isLoading: true,
        userAccount: null,
        userToken: null,
    };

    const authReducer = (state, action) => {
        //狀態
        switch (action.type) {
            case "LOADING":
                return {
                    ...state,
                    isLoading: false,
                };
            case "LOGIN":
                return {
                    ...state,
                    userAccount: action.account,
                    userToken: action.token,
                    isLoading: false,
                };
            case "LOGOUT":
                return {
                    ...state,
                    userAccount: null,
                    userToken: null,
                    isLoading: false,
                };
            case "SIGNUP":
                return {
                    ...state,
                    userAccount: action.account,
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
            let userToken, userAccount, json;
            try {
                const res = await fetch(`${API_URL}/user/login`, requestOption);
                json = await res.json();
                userAccount = json.account;
                userToken = json.token;
            } catch (e) {
                console.error(e);
            }
            setTimeout(() => {
                dispatch({
                    type: "LOGIN",
                    account: userAccount,
                    token: userToken,
                });
            }, 280);
            return json;
        },
        logout: () => {
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
            let userToken, userAccount;
            try {
                const res = await fetch(
                    `${API_URL}/user/register`,
                    requestOption
                );
                const json = await res.json();
                userAccount = json.info.account;
                userToken = json.token;
            } catch (e) {
                console.error(e);
            }
            dispatch({
                type: "SIGNUP",
                account: userAccount,
                token: userToken,
            });
        },
    }));
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "LOADING" });
        }, 1000);
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
