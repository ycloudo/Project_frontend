import React, { useState, useEffect } from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import Card from "../Components/Card";
import SearchBox from "../Components/SearchBox";
import { useScrollToTop } from "@react-navigation/native";
import { API_URL } from "@env";
import * as SecureStore from "expo-secure-store";

const listTab = [
    {
        id: 99,
        status: "全部",
    },
    {
        id: 1,
        status: "中式",
    },
    {
        id: 2,
        status: "日式",
    },
    {
        id: 3,
        status: "韓式",
    },
    {
        id: 4,
        status: "美式",
    },
    {
        id: 5,
        status: "西式",
    },
    {
        id: 6,
        status: "異國料理",
    },
    {
        id: 7,
        status: "泰式",
    },
    {
        id: 8,
        status: "輕食",
    },
];
const Main = ({ navigation }) => {
    const placeholder = "...來點日式料理?";
    const color = "#FFFAFA";
    let counter = 0;
    let option = 0;
    const ref = React.useRef(null);
    useScrollToTop(ref);
    const [userFavor, setUserFavor] = useState([]);
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(99);
    const [datalist, setDatalist] = useState([]);
    const setStatusFilter = (id) => {
        if (id != 99) {
            setDatalist([...data.filter((e) => e.res_type == id)]);
        } else {
            setDatalist(data);
        }
        setStatus(id);
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
    const fetchAllres = async () => {
        const requestOption = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        return fetch(`${API_URL}/restaurant/all`, requestOption).then((res) =>
            res.json()
        );
    };
    useEffect(() => {
        const fetchdata = async () => {
            const favor = await fetchUserFavor();
            const restaurants = await fetchAllres();
            setUserFavor(favor.favor);
            setData(restaurants);
            setDatalist(restaurants);
            console.log(1);
        };
        fetchdata();
    }, []);
    const favorEditHandler = async (isFavor, favorIndex, rid) => {
        if (isFavor) {
            //取消收藏
            const rear = userFavor.length - 1;
            [userFavor[favorIndex], userFavor[rear]] = [
                userFavor[rear],
                userFavor[favorIndex],
            ]; //swap
            userFavor.pop();
        } //收藏
        else {
            userFavor.push(rid);
        }
        const res = await postUserFavor(userFavor);
        if (res.message == "edit success") {
            setUserFavor(userFavor);
            return true;
            // setIsFavor(!isFavor);
        } else {
            return false;
            // console.log("failed");
        }
    };
    const postUserFavor = async (favorList) => {
        const uid = await SecureStore.getItemAsync("user-id");
        const token = await SecureStore.getItemAsync("auth-token");
        const requestOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify({
                uid: uid,
                favor: favorList,
            }),
        };
        return fetch(`${API_URL}/user/setFavor`, requestOption).then((res) =>
            res.json()
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.option_container}>
                <SearchBox
                    navigation={navigation}
                    styles={Seacrhbox_style}
                    placeholder={placeholder}
                    color={color}
                />
                <View style={styles.listTab}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {listTab.map((e) => {
                            option += 1;
                            return (
                                <TouchableOpacity
                                    style={[
                                        styles.btnTab,
                                        status == e.id && styles.btnTabActive,
                                    ]}
                                    onPress={() => setStatusFilter(e.id)}
                                    key={option}
                                >
                                    <View style={styles.box}>
                                        {e.status == "全部" ? (
                                            <Image
                                                source={require("../assets/food.png")}
                                                style={styles.photo}
                                            />
                                        ) : e.status == "中式" ? (
                                            <Image
                                                source={require("../assets/food1.png")}
                                                style={styles.photo}
                                            />
                                        ) : e.status == "日式" ? (
                                            <Image
                                                source={require("../assets/food2.png")}
                                                style={styles.photo}
                                            />
                                        ) : e.status == "韓式" ? (
                                            <Image
                                                source={require("../assets/food3.png")}
                                                style={styles.photo}
                                            />
                                        ) : e.status == "西式" ? (
                                            <Image
                                                source={require("../assets/food5.png")}
                                                style={styles.photo}
                                            />
                                        ) : e.status == "泰式" ? (
                                            <Image
                                                source={require("../assets/food7.png")}
                                                style={styles.photo}
                                            />
                                        ) : e.status == "美式" ? (
                                            <Image
                                                source={require("../assets/food4.png")}
                                                style={styles.photo}
                                            />
                                        ) : e.status == "異式" ? (
                                            <Image
                                                source={require("../assets/food6.png")}
                                                style={styles.photo}
                                            />
                                        ) : (
                                            <Image
                                                source={require("../assets/food8.png")}
                                                style={styles.photo}
                                            />
                                        )}
                                    </View>

                                    <Text style={styles.textTab}>
                                        {e.status}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.card_container} ref={ref}>
                <View>
                    {/*<FlatList
                            data={datalist}
                            keyExtractor={(e, i) =>i.toString()}
                            renderItem={renderItem}
                        />*/}
                    {datalist.map((item) => {
                        counter += 1;
                        return (
                            <Card
                                item={item}
                                navigation={navigation}
                                counter={counter}
                                key={counter}
                                favorList={userFavor}
                                setUserFavor={favorEditHandler}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: "red",
        //marginLeft: 15,
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 65,
        height: 65,
    },
    photo: {
        width: 40,
        height: 40,
    },
    container: {
        backgroundColor: "#EFFAFF",
        height: "100%",
    },
    option_container: {
        //top:80,
        top: "10%",
        paddingLeft: "6%",
        paddingRight: "6%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 90,
    },
    card_container: {
        //top:20,
        top: "5%",
        paddingLeft: "6%",
        paddingRight: "6%",
        display: "flex",
        flexDirection: "column",
    },
    listTab: {
        marginTop: 25,
        flexDirection: "row",
    },
    btnTab: {
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center",
        //透明度要調整
    },
    textTab: {
        fontSize: 15,
        marginTop: 10,
    },
    btnTabActive: {
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center",
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
