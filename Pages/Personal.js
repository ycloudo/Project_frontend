import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import Icon_left from "@expo/vector-icons/Entypo";
import Icon_right from "@expo/vector-icons/Entypo";
import Icon_account from "@expo/vector-icons/MaterialCommunityIcons";
import Icon_passward from "@expo/vector-icons/Entypo";
import Icon_human_male_female from "@expo/vector-icons/MaterialCommunityIcons";
//import Icon_phone from "@expo/vector-icons/Entypo";
import Icon_check from "@expo/vector-icons/Feather";
import Icon_back from "@expo/vector-icons/AntDesign";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "@env";

const Personal = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState({
        account: "",
        name: "",
        password: "",
        gender: "Male",
        avatar: "",
    });
    const onChangeAccount = (input) => {
        const data = {
            ...userInfo,
            account: input,
        };
        setUserInfo(data);
    };
    const onChangePassward = (input) => {
        const data = {
            ...userInfo,
            passward: input,
        };
        setUserInfo(data);
    };
    // const onChangeName = (input)=>{
    //     const data = {
    //         ...userInfo,
    //         name: input,
    //     };
    //     setUserInfo(data);
    // }
    const [human, onChangeHuman] = useState("Male");
    const [avatars, setAvatars] = useState([]);
    const [count, setCount] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
            const userInfo = await fetchUserInfo();
            const avatars = await fetchAvatar();
            console.log(userInfo);
            const newinfo = { ...userInfo };
            setCount(userInfo.avatar_id);
            setUserInfo(newinfo);
            setAvatars(avatars);
        };
        fetchData();
    }, []);
    const fetchUserInfo = async () => {
        const token = await SecureStore.getItemAsync("auth-token");
        const uid = JSON.parse(await SecureStore.getItemAsync("user-id"));
        const requestOption = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": JSON.parse(token),
            },
        };
        return fetch(`${API_URL}/user/getProfile/${uid}`, requestOption).then(
            (res) => res.json()
        );
    };
    const fetchAvatar = async () => {
        return fetch(`${API_URL}/data/allAvatar`).then((res) => res.json());
    };
    return (
        <ImageBackground
            source={require("../assets/personal_bg.png")}
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.back}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Icon_back name="arrowleft" size={25} color="#000" />
            </TouchableOpacity>
            <View style={styles.main_container}>
                <View style={styles.photo_box}>
                    <TouchableOpacity>
                        <Icon_left
                            name="chevron-small-left"
                            size={35}
                            color="#000"
                            onPress={() => {
                                setCount((current) => current - 1);
                            }}
                        />
                    </TouchableOpacity>
                    {count % 5 == 0 ? ( //aid = 5
                        <Image
                            source={{ uri: avatars[4] }}
                            style={styles.photo}
                        />
                    ) : count % 5 == 1 ? (
                        <Image
                            source={{ uri: avatars[0] }}
                            style={styles.photo}
                        />
                    ) : count % 5 == 2 ? (
                        <Image
                            source={{ uri: avatars[1] }}
                            style={styles.photo}
                        />
                    ) : count % 5 == 3 ? (
                        <Image
                            source={{ uri: avatars[2] }}
                            style={styles.photo}
                        />
                    ) : (
                        <Image
                            source={{ uri: avatars[3] }}
                            style={styles.photo}
                        />
                    )}

                    <TouchableOpacity>
                        <Icon_right
                            name="chevron-small-right"
                            size={35}
                            color="#000"
                            onPress={() => {
                                setCount((current) => current + 1);
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.info_bg}>
                    <View style={styles.info_bgf}>
                        <View style={styles.info_bgft}></View>
                        <View style={styles.info_box_name}>
                            <Text style={styles.info_name}>
                                {userInfo.name}
                            </Text>
                        </View>
                        <View style={styles.info_box}>
                            <Icon_account
                                name="account"
                                size={30}
                                color="#7B7B7B"
                            />
                            <TextInput
                                style={styles.info}
                                onChangeText={(input) => {
                                    onChangeAccount(input);
                                }}
                                value={userInfo.account}
                            />
                        </View>
                        <View style={styles.info_box}>
                            <Icon_passward
                                name="key"
                                size={29}
                                color="#7B7B7B"
                            />
                            <TextInput
                                style={styles.info}
                                onChangeText={(input) => {
                                    onChangePassward(input);
                                }}
                                value={userInfo.password}
                            />
                        </View>
                        <View style={styles.info_box_end}>
                            <Icon_human_male_female
                                name="human-male-female"
                                size={31}
                                color="#7B7B7B"
                            />
                            <TextInput
                                style={styles.info}
                                onChangeText={onChangeHuman}
                                value={human}
                            />
                        </View>

                        <View style={styles.save}>
                            <TouchableOpacity>
                                <Icon_check
                                    name="check"
                                    size={53}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "#FFF4B0",
        height: "100%",
    },
    back: {
        marginTop: "12%",
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    main_container: {
        marginTop: "15%",
        alignItems: "center",
    },
    photo_box: {
        alignItems: "center",
        flexDirection: "row",
    },
    photo: {
        width: 145,
        height: 145,
        borderRadius: 180,
        borderWidth: 10,
        borderColor: "#FFE153",
        marginLeft: 5,
        marginRight: 5,
    },
    info_bg: {
        marginTop: "22%",
        marginLeft: 12,
        backgroundColor: "#DBEEFF",
        width: 235,
        height: 370,
    },
    info_bgf: {
        marginLeft: -12,
        marginTop: -15,
        width: 235,
        height: 370,
        borderLeftWidth: 4,
        borderTopWidth: 4,
        borderRightWidth: 4,
        borderColor: "#000000",
    },
    info_bgft: {
        marginLeft: 90,
        width: 40,
        height: 8,
        borderBottomWidth: 4,
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderColor: "#000000",
    },
    info_box: {
        top: "7%",
        height: 60,
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: "#7B7B7B",
        borderBottomWidth: 1,
    },
    info_box_end: {
        top: "7%",
        height: 60,
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 10,
        paddingBottom: 10,
    },
    info_box_name: {
        top: "7%",
        height: 60,
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
    },
    info: {
        color: "#7B7B7B",
        fontSize: 20,
        marginLeft: 25,
        fontWeight: "bold",
    },
    info_name: {
        color: "#5B5B5B",
        fontSize: 26,
        marginLeft: 70,
        fontWeight: "bold",
    },
    save: {
        width: 53,
        height: 53,
        backgroundColor: "#FFE153",
        borderRadius: 90,
        marginLeft: 160,
        marginTop: 15,
    },
});

export default Personal;
