import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navbar from "./Components/Navbar";
import Main from "./Pages/Main";
import Favor from "./Pages/Favor";
import Eat from "./Pages/Eat";
import Personal from "./Pages/Personal";
import Information from "./Pages/Information";
import Price from "./Pages/price";
import Restaurant from "./Pages/restaurant";
// import Setting from "./Pages/Setting";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <NavigationContainer>
                <Navbar />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
