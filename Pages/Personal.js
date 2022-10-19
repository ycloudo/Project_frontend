import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Icon_left from "@expo/vector-icons/Entypo";
import Icon_right from "@expo/vector-icons/Entypo";
import Icon_account from "@expo/vector-icons/MaterialCommunityIcons";
import Icon_passward from "@expo/vector-icons/Entypo";
import Icon_human_male_female from "@expo/vector-icons/MaterialCommunityIcons";
import RadioForm from "react-native-simple-radio-button";
//import Icon_phone from "@expo/vector-icons/Entypo";
import Icon_check from "@expo/vector-icons/Feather";
import Icon_back from "@expo/vector-icons/AntDesign";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "@env";
import Modal from "../Components/Modal";

const Personal = ({ navigation }) => {
    const radioButtonRef = useRef(null);
    const isFocused = useIsFocused();
    const options = [
        { label: "Male", value: true },
        { label: "Female", value: false },
    ];
    const [userInfo, setUserInfo] = useState({
        name: "",
        account: "",
        password: "",
        gender: null,
        avatar_id: 0,
    });
    const [message, setMessage] = useState("");
    const onChangeAccount = (acc) => {
        const data = {
            ...userInfo,
            account: acc,
        };
        setUserInfo(data);
    };
    const onChangePassword = (pwd) => {
        const data = {
            ...userInfo,
            password: pwd,
        };
        setUserInfo(data);
    };
    const onChangeGender = (input) => {
        if (typeof input == "object") {
            input = input.value;
        }
        const data = {
            ...userInfo,
            gender: input,
        };
        setUserInfo(data);
    };
    const [avatars, setAvatars] = useState([]);
    const [count, setCount] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const userInfo = await fetchUserInfo();
            const avatars = await fetchAvatar();
            const newinfo = { ...userInfo };
            setCount(userInfo.avatar_id);
            setUserInfo(newinfo);
            setAvatars(avatars);
            radioButtonRef.current.updateIsActiveIndex(newinfo.gender ? 0 : 1);
        };
        fetchData();
    }, [isFocused]);
    const fetchUserInfo = async () => {
        const token = await SecureStore.getItemAsync("auth-token");
        const uid = await SecureStore.getItemAsync("user-id");
        const requestOption = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
        };
        return fetch(`${API_URL}/user/getProfile/${uid}`, requestOption).then(
            (res) => res.json()
        );
    };
    const fetchAvatar = async () => {
        return fetch(`${API_URL}/data/allAvatar`).then((res) => res.json());
    };
    const submitHandler = async () => {
        const token = await SecureStore.getItemAsync("auth-token");
        const uid = await SecureStore.getItemAsync("user-id");
        const requestOption = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify({
                ...userInfo,
                avatar_id: Math.abs(count) % 5,
            }),
        };
        try {
            const res = await fetch(
                `${API_URL}/user/editProfile/${uid}`,
                requestOption
            );
            const json = await res.json();
            if (json.message == "edit success") {
                setModalVisible(true);
                setMessage("修改成功!");
            } else {
                setModalVisible(true);
                setMessage("修改失敗!");
            }
        } catch (err) {
            console.error(e);
        }
    };
    const navigate = () => {
        setTimeout(() => {
            navigation.navigate("首頁");
        }, 300);
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
                    {Math.abs(count) % 5 == 0 ? (
                        <Image
                            source={{ uri: avatars[0] }}
                            style={styles.photo}
                        />
                    ) : Math.abs(count) % 5 == 1 ? (
                        <Image
                            source={{ uri: avatars[1] }}
                            style={styles.photo}
                        />
                    ) : Math.abs(count) % 5 == 2 ? (
                        <Image
                            source={{ uri: avatars[2] }}
                            style={styles.photo}
                        />
                    ) : Math.abs(count) % 5 == 3 ? (
                        <Image
                            source={{ uri: avatars[3] }}
                            style={styles.photo}
                        />
                    ) : (
                        <Image
                            source={{ uri: avatars[4] }}
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
                                    onChangePassword(input);
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
                            <RadioForm
                                style={styles.info}
                                radio_props={options}
                                initial={userInfo.gender ? 0 : 1}
                                //formHorizontal={true}
                                buttonColor={"#7B7B7B"}
                                buttonSize={10}
                                labelStyle={{
                                    fontSize: 20,
                                    color: "#7B7B7B",
                                    fontWeight: "bold",
                                }}
                                ref={radioButtonRef}
                                selectedButtonColor={"#7B7B7B"}
                                onPress={(input) => {
                                    onChangeGender(input);
                                }}
                            />
                        </View>
                        {isModalVisible ? (
                            <Modal
                                message={message}
                                setModal={setModalVisible}
                                navigate={navigate}
                                isNavigate={true}
                            />
                        ) : null}
                        <View style={styles.save}>
                            <TouchableOpacity onPress={submitHandler}>
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
