import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import Icon_m from "@expo/vector-icons/MaterialIcons";

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.avatar_container}></View>
            <View style={styles.item_container}>
                <DrawerItemList {...props} />
            </View>

            <View style={styles.footer_container}>
                <TouchableOpacity>
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
    avatar_container: {
        backgroundColor: "#FFF4B0",
        height: 300,
        width: "100%",
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
