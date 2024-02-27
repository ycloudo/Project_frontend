import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
} from "react-native";
import Card from "../Components/Card";
import Icon_i from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import { API_URL } from "@env";
import * as SecureStore from "expo-secure-store";

const SearchResult = ({ navigation }) => {
    let counter = 0;
    const route = useRoute();
    const [data, setData] = useState([]);
    const [userFavor, setUserFavor] = useState([]);
    useEffect(() => {
        const init = async () => {
            const favor = await fetchUserFavor();
            const result = await postData();
            if (result.length != 0) {
                setData(result);
            }
            setUserFavor(favor.favor);
        };
        init();
    }, []);
    const postData = async () => {
        const input = route.params.input;
        const requestOption = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        return fetch(`${API_URL}/search/text/${input}`, requestOption).then(
            (res) => res.json()
        );
    };
    const fetchUserFavor = async () => {
        const token = await SecureStore.getItemAsync("auth-token");
        const uid = await SecureStore.getItemAsync("user-id");
        const requestOption = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
        };
        return fetch(`${API_URL}/user/getFavor/${uid}`, requestOption).then(
            (res) => res.json()
        );
    };
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
                    {data.map((item) => {
                        counter++;
                        return (
                            <Card
                                item={item}
                                navigation={navigation}
                                key={counter}
                                counter={counter}
                                favorList={userFavor}
                                setUserFavor={setUserFavor}
                            />
                        );
                    })}

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
        backgroundColor: "#F5F5F5",
    },
    header_container: {
        height: 100,
        width: "100%",
        backgroundColor: "#FFE153",
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
        top: 30,
        display: "flex",
        flexDirection: "column",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    go_back: {
        top: 40,
        padding: 5,
        width: 100,
    },
    search_content: {
        top: 10,
        paddingRight: "6%",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default SearchResult;
