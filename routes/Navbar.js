import { React } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon_m from "@expo/vector-icons/MaterialIcons";
import Icon_mc from "@expo/vector-icons/MaterialCommunityIcons";
import Icon_i from "@expo/vector-icons/Ionicons";
import Main from "../Pages/Main";
import Eat from "../Pages/Eat";
import Favor from "../Pages/Favor";
import { MainStack } from "../Pages/index";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import SettingDrawer from "./SettingDrawer";

const Tab = createBottomTabNavigator();

const Navbar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.menu_container,
            }}
        >
            <Tab.Screen
                name="首頁"
                component={MainStack}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getRouteName(route),
                        backgroundColor: "#E0E0E0",
                        height: "10%",
                    },
                    tabBarIcon: ({ focused }) => {
                        const color = focused
                            ? "rgb(0,0,0)"
                            : "rgb(255,250,250)";
                        return (
                            <View style={styles.icon_container}>
                                <Icon_m name="home" size={30} color={color} />
                                <Text style={{ color: color }}>首頁</Text>
                            </View>
                        );
                    },
                })}
            />
            <Tab.Screen
                name="吃什麼"
                component={Eat}
                options={{
                    tabBarIcon: ({ focused }) => {
                        const color = focused
                            ? "rgb(0,0,0)"
                            : "rgb(255,250,250)";
                        return (
                            <View style={styles.icon_container}>
                                <Icon_mc
                                    name="ferris-wheel"
                                    size={30}
                                    color={color}
                                />
                                <Text style={{ color: color }}>吃什麼</Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="收藏"
                component={Favor}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getRouteName(route),
                        backgroundColor: "#E0E0E0",
                        height: "10%",
                    },
                    tabBarIcon: ({ focused }) => {
                        const color = focused
                            ? "rgb(0,0,0)"
                            : "rgb(255,250,250)";
                        return (
                            <View style={styles.icon_container}>
                                <Icon_m
                                    name="bookmark"
                                    size={30}
                                    color={color}
                                />
                                <Text style={{ color: color }}>收藏</Text>
                            </View>
                        );
                    },
                })}
            />
            <Tab.Screen
                name="設定"
                component={SettingDrawer}
                options={{
                    tabBarIcon: ({ focused }) => {
                        const color = focused
                            ? "rgb(0,0,0)"
                            : "rgb(255,250,250)";
                        return (
                            <View style={styles.icon_container}>
                                <Icon_i
                                    name="ios-settings-sharp"
                                    size={30}
                                    color={color}
                                />
                                <Text style={{ color: color }}>設定</Text>
                            </View>
                        );
                    },
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.openDrawer();
                    },
                })}
            />
        </Tab.Navigator>
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
    icon_container: {
        alignItems: "center",
    },
});

const getRouteName = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    //console.log(routeName);
    //console.log(route);
    if (routeName == "restaurant" || routeName == "price") {
        return "none";
    }
    return "flex";
};

export default Navbar;
