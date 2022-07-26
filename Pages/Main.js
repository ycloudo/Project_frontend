import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Card from "../Components/Card";
import SearchBox from "../Components/SearchBox";
import { data } from "../data";

const Main = ({ navigation }) => {
    const placeholder = "...來點日式料理?";
    const color = "#FFFAFA";
    return (
        <View style={styles.scrollview_container}>
            <ScrollView
                contentContainerStyle={styles.main_container}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="always"
            >
                <SearchBox
                    navigation={navigation}
                    styles={Seacrhbox_style}
                    placeholder={placeholder}
                    color={color}
                />
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
const Seacrhbox_style = StyleSheet.create({
    input: {
        backgroundColor: "#FFFAFA",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        flexGrow: 1,
        fontSize: 17,
    },
    searchbox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    searchbotton: {
        padding: 5,
        backgroundColor: "#FFC107",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
});

export default Main;
