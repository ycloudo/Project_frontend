import { React } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon_m from "@expo/vector-icons/MaterialIcons";
import Icon_mc from "@expo/vector-icons/MaterialCommunityIcons";
import Icon_i from "@expo/vector-icons/Ionicons";
const Navbar = (props) => {
    const mainStatusHandler = () => {
        props.setPageStatus((prev) => ({
            ...prev,
            pages: {
                ...(prev.pages = 0),
                main: 1,
            },
        }));
    };
    const eatStatusHandler = () => {
        props.setPageStatus((prev) => ({
            ...prev,
            pages: {
                ...(prev.pages = 0),
                eat: 1,
            },
        }));
    };
    const favorStatusHandler = () => {
        props.setPageStatus((prev) => ({
            ...prev,
            pages: {
                ...(prev.pages = 0),
                favor: 1,
            },
        }));
    };
    const personalStatusHandler = () => {
        props.setPageStatus((prev) => ({
            ...prev,
            pages: {
                ...(prev.pages = 0),
                personal: 1,
            },
        }));
    };
    const main_color = props.pageStatus.pages.main
        ? "rgb(0,0,0)"
        : "rgb(255,250,250)";
    const eat_color = props.pageStatus.pages.eat
        ? "rgb(0,0,0)"
        : "rgb(255,250,250)";
    const favor_color = props.pageStatus.pages.favor
        ? "rgb(0,0,0)"
        : "rgb(255,250,250)";
    const personal_color = props.pageStatus.pages.personal
        ? "rgb(0,0,0)"
        : "rgb(255,250,250)";
    return (
        <View style={styles.menu_container}>
            <View style={styles.sub_container}>
                <TouchableOpacity
                    style={styles.icon_container}
                    onPress={mainStatusHandler}
                >
                    <Icon_m name="home" size={30} color={main_color} />
                    <Text style={{ color: main_color }}>首頁</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon_container}
                    onPress={eatStatusHandler}
                >
                    <Icon_mc name="ferris-wheel" size={30} color={eat_color} />
                    <Text style={{ color: eat_color }}>吃什麼</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon_container}
                    onPress={favorStatusHandler}
                >
                    <Icon_i name="bookmark" size={30} color={favor_color} />
                    <Text style={{ color: favor_color }}>收藏</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon_container}
                    onPress={personalStatusHandler}
                >
                    <Icon_i name="person" size={30} color={personal_color} />
                    <Text style={{ color: personal_color }}>個人資訊</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    menu_container: {
        position: "absolute",
        top: "90%",
        width: "100%",
        height: "10%",
        backgroundColor: "#E0E0E0",
    },
    sub_container: {
        top: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    icon_container: {
        alignItems: "center",
    },
});

export default Navbar;
