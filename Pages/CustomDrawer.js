import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import Icon_m from "@expo/vector-icons/MaterialIcons";
import { AuthContext } from "../content/AuthContext";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "@env";

const CustomDrawer = (props) => {
    const { logout } = useContext(AuthContext);
    const [info, setInfo] = useState({
        name: "",
        avatar: "",
    });
    const logoutHandler = () => {
        logout();
    };
    useEffect(() => {
        const fetchData = async () => {
            const userInfo = await fetchUserInfo();
            let avatar_id = userInfo.avatar_id + 1;
            const avatar = await fetchAvatar(avatar_id);
            setInfo({ name: userInfo.name, avatar: avatar.base64 });
        };
        fetchData();
    }, [props.state.routes]);
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
        return fetch(
            `${API_URL}/user/getDrawerInfo/${uid}`,
            requestOption
        ).then((res) => res.json());
    };
    const fetchAvatar = async (avatar_id) => {
        return fetch(`${API_URL}/user/getAvatar/${avatar_id}`).then((res) =>
            res.json()
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.avatar_container}>
                <Image
                    source={{ uri: info.avatar }} //還沒串
                    style={styles.photo}
                />
                <Text style={styles.name}>{info.name}</Text>
            </View>
            <View style={styles.item_container}>
                <DrawerItemList {...props} />
            </View>

            <View style={styles.footer_container}>
                <TouchableOpacity onPress={logoutHandler}>
                    <View style={styles.logout_container}>
                        <Icon_m name="logout" size={25} />
                        <Text style={{ marginLeft: 5, fontSize: 17 }}>
                            登出
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        marginTop: 15,
        fontSize: 23,
        fontWeight: "bold",
        paddingLeft: 15,
        paddingRight: 15,
    },
    photo: {
        width: 115,
        height: 115,
        borderRadius: 180,
        borderWidth: 10,
        borderColor: "#FFE153",
        marginTop: 100,
    },
    avatar_container: {
        backgroundColor: "#FFF4B0",
        paddingBottom: 30,
        //height: 300,
        width: "100%",
        //justifyContent: 'center',
        alignItems: "center",
    },
    item_container: {
        flex: 1,
        paddingTop: 15,
    },
    footer_container: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
    },
    logout_container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
    },
});

export default CustomDrawer;
