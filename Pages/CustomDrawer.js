import React, { useContext } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image,
} from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import Icon_m from "@expo/vector-icons/MaterialIcons";
import { AuthContext } from "../content/AuthContext";

const CustomDrawer = (props) => {
    const { logout } = useContext(AuthContext);
    const logoutHandler = () => {
        logout();
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.header_container}>
                <View style={styles.avatar_container}>
                    <Image
                        source={require("../assets/temp_avatar/kplin.jpg")}
                        style={styles.avatar}
                    />
                </View>
                <Text style={styles.name}>程尤欣欣向榮</Text>
            </ImageBackground>
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
    avatar_container: {
        backgroundColor: "#FFF4B0",
        height: 300,
        width: "100%",
        alignItems: "center",
        paddingTop: "40%",
    },
    avatar_container: {
        height: 120,
        width: 120,
    },
    avatar: {
        borderRadius: 60,
        maxHeight: "100%",
        maxWidth: "100%",
    },
    name: {
        top: "10%",
        fontSize: 18,
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
