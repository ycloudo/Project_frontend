import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Card from "../Components/Card";
import SearchBox from "../Components/SearchBox";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { data } from "../data";

const Main = ({ navigation }) => {
    return (
        <View style={styles.scrollview_container}>
            <ScrollView
                contentContainerStyle={styles.main_container}
                keyboardDismissMode="on-drag"
            >
                <SearchBox />
                <View style={styles.card_container}>
                    <Text>{}</Text>
                    {data.map((item) => (
                        <Card
                            item={item}
                            navigation={navigation}
                            key={item.id}
                        />
                    ))}

                    {/* <Text>到底囉</Text> */}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollview_container: {
        //height: "90%",
        backgroundColor: "#E0E0E0",
    },
    main_container: {
        top: "10%",
        paddingLeft: "6%",
        paddingRight: "6%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 100,
    },
    card_container: {
        top: 35,
        display: "flex",
        flexDirection: "column",
    },
});

export default Main;
