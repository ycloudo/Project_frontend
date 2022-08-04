import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon_i from "@expo/vector-icons/Ionicons";
import CustomDrawer from "../Pages/CustomDrawer";
import Personal from "../Pages/Personal";
import Navbar from "./Navbar";
import FavorSetting from "../Pages/FavorSetting";
import Icon_m from "@expo/vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();

const SettingDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: "50%",
                },
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontSize: 15,
                },
                drawerActiveBackgroundColor: "#FFC107",
                drawerActiveTintColor: "#FFFAFA",
                drawerInactiveTintColor: "#333",
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={Navbar}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon_i
                            name="ios-home-outline"
                            size={25}
                            color={color}
                        />
                    ),
                    // drawerItemStyle: {
                    //     display: "none",
                    // },
                }}
            />
            <Drawer.Screen
                name="個人檔案"
                component={FavorSetting}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon_m
                            name="account-outline"
                            size={25}
                            color={color}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="偏好設定"
                component={FavorSetting}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon_i
                            name="ios-settings-outline"
                            size={25}
                            color={color}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default SettingDrawer;
