import { React } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import Icon_m from "@expo/vector-icons/MaterialIcons";
//import Icon_mc from "@expo/vector-icons/MaterialCommunityIcons";
import Icon_i from "@expo/vector-icons/Ionicons";
//import Icon_f from "@expo/vector-icons/Foundation";
import Main from "../Pages/Main";
import Eat from "../Pages/Eat_new";
import Favor from "../Pages/Favor";
import { MainStack } from "../routes/IndexStackNav";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import FavorSetting from "../Pages/FavorSetting";

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
                //listeners={{
                    //tabPress: e => {
                      // Prevent default action
                      //e.preventDefault();
                        
                      //Any custom code here
                      //alert(123);
                    //},
                  //}}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getRouteName(route),
                        backgroundColor: "#EFFAFF",
                        height: "10%",
                    },
                    
                    tabBarIcon: ({ focused }) => {
                        const height = focused
                            ? 48
                            : 40;
                        const width = focused
                            ? 15
                            : 12.5;
                        const rotate = focused
                            ? '-45deg'
                            : '0deg';
                        return (
                            <View style={styles.icon_container}>
                                <Image
                                source={require("../assets/spoon.png")}
                                style={{height:height,width:width,transform: [{rotateZ:rotate}]}}
                                />
                                <Text>首頁</Text>
                            </View>
                        );
                    },
                })}
            />
            <Tab.Screen
                name="吃什麼"
                component={Eat}
            
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getRouteName(route),
                        backgroundColor: "#fff",
                        height: "10%",
                    },
                    
                    tabBarIcon: ({ focused }) => {
                        const height = focused
                            ? 48
                            : 40;
                        const width = focused
                            ? 15
                            : 12.5;
                        const rotate = focused
                            ? '-45deg'
                            : '0deg';
                        return (
                            <View style={styles.icon_container}>
                                <Image
                                source={require("../assets/fork.png")}
                                style={{height:height,width:width,transform: [{rotateZ:rotate}]}}
                                />
                                <Text>吃什麼</Text>
                            </View>
                        );
                    },
                })}
            />
            <Tab.Screen
                name="收藏"
                component={Favor}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getRouteName(route),
                        backgroundColor: "#EFFAFF",
                        height: "10%",
                    },
                    tabBarIcon: ({ focused }) => {
                        const height = focused
                            ? 48
                            : 40;
                        const width = focused
                            ? 15
                            : 12.5;
                        const rotate = focused
                            ? '-45deg'
                            : '0deg';
                        return (
                            <View style={styles.icon_container}>
                                <Image
                                source={require("../assets/knife.png")}
                                style={{height:height,width:width,transform: [{rotateZ:rotate}]}}
                                />
                                <Text>收藏</Text>
                            </View>
                        );
                    },
                })}
            />
            <Tab.Screen
                name="設定"
                component={FavorSetting}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.icon_container}>
                            <Image
                            source={require("../assets/plate.png")}
                            style={styles.icon}
                            />
                            <Text>設定</Text>
                        </View>
                    ),
                }}
                listeners={({ navigation }) => ({
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
        width: "100%",
        height: "10%",
        backgroundColor: "#E0E0E0",
    },
    icon_container: {
        marginTop:10,
        alignItems: "center",
    },
    icon: {
        height: 40,
        width: 40,
    },
});

const getRouteName = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    //console.log(routeName);
    //console.log(route);
    if (
        routeName == "restaurant" ||
        routeName == "price" ||
        routeName == "result"
    ) {
        return "none";
    }
    return "flex";
};

export default Navbar;
