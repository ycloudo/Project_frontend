import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navbar from "./routes/Navbar";
import Drawer from "./routes/DrawerNav";
import Start from "./Pages/Start";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* <NavigationContainer>
                <Drawer />
            </NavigationContainer> */}
            <Signup />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
