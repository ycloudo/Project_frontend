import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useMemo, useEffect, useReducer } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./routes/DrawerNav";
import Auth from "./routes/AuthStackNav";
import { AuthContext } from "./content/AuthContext";

export default function App() {
    // const [isLoading, setIsLoading] = useState(true);
    // const [token, setToken] = useState(null);
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
                    userAccount: action.id,
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
                    userAccount: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [Authstate, dispatch] = useReducer(authReducer, initialLoginState);

    const authContext = useMemo(() => ({
        login: (account, password) => {
            //api call
            let userToken;
            if (account == "user" && password == 12345) {
                userToken = "ascd";
            }
            dispatch({ type: "LOGIN", id: account, token: userToken });
        },
        logout: () => {
            dispatch({ type: "LOGOUT" });
        },
        signup: (name, account, password) => {
            //api call
            //if註冊成功
            let userToken;
            if (account && password && name) {
                userToken = "ascd";
            }
            dispatch({ type: "SIGNUP", id: account, token: userToken });
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
                {Authstate.userToken === "ascd" ? <Drawer /> : <Auth />}
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
