import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
} from "react-native";
import Card from "../Components/Card";
import Icon_i from "@expo/vector-icons/Ionicons";
import SearchBox from "../Components/SearchBox";
import { useRoute } from "@react-navigation/native";

const SearchResult = ({ navigation }) => {
    const route = useRoute();
    const data = [
        {
            name: "AAA",
            address: "aaa",
            star: "1",
            save: "1",
            id: "1",
        },
        {
            name: "AAC",
            address: "bbb",
            star: "2",
            save: "0",
            id: "2",
        },
        {
            name: "AAAC",
            address: "ccc",
            star: "3",
            save: "0",
            id: "3",
        },
        {
            name: "AAAAC",
            address: "ddd",
            star: "4",
            save: "0",
            id: "4",
        },
    ];
    return (
        <View style={styles.main_container}>
            <View style={styles.header_container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.go_back}>
                        <Icon_i name="arrow-back-circle-outline" size={40} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.search_content}>{route.params.input}</Text>
            </View>
            <ScrollView
                contentContainerStyle={styles.scrollview_container}
                keyboardDismissMode="on-drag"
            >
                <Text style={styles.text}>搜尋結果如下</Text>
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
    main_container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#E0E0E0",
    },
    header_container: {
        height: "10%",
        width: "100%",
        backgroundColor: "#FFC107",
        paddingLeft: "6%",
    },
    scrollview_container: {
        paddingTop: "10%",
        paddingLeft: "6%",
        paddingRight: "6%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "60%",
    },
    card_container: {
        top: 5,
        display: "flex",
        flexDirection: "column",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    go_back: {
        top: "70%",
        padding: 5,
        width: 60,
    },
    search_content: {
        top: "15%",
        paddingRight: "6%",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default SearchResult;
