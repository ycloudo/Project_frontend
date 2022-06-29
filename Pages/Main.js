import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Card from "../Components/Card";
import SearchBox from "../Components/SearchBox";

const Main = (props) => {
    const data = [
        {
            key: "1",
        },
        {
            key: "2",
        },
        {
            key: "3",
        },
        {
            key: "4",
        },
        {
            key: "5",
        },
    ];
    return (
        <View style={styles.scrollview_container}>
            <ScrollView
                contentContainerStyle={styles.main_container}
                keyboardDismissMode="on-drag"
            >
                <SearchBox />
                <View style={styles.card_container}>
                    {data.map((item) => (
                        <Card
                            key={item.key}
                            setPageStatus={props.setPageStatus}
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
        height: "90%",
    },
    main_container: {
        top: "8%",
        paddingLeft: "6%",
        paddingRight: "6%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 100,
    },
    card_container: {
        top: 40,
        display: "flex",
        flexDirection: "column",
    },
});

export default Main;
