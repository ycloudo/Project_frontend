import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./routes/DrawerNav";
import Auth from "./routes/AuthStackNav";

export default function App() {
    const isSignin = 0;
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <NavigationContainer>
                {isSignin ? <Drawer /> : <Auth />}
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
