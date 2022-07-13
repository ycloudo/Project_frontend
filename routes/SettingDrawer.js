import { createDrawerNavigator } from "@react-navigation/drawer";
import FavorSetting from "../Pages/FavorSetting";

const Drawer = createDrawerNavigator();

const SettingDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                // headerShown: false,
                drawerStyle: {
                    width: 200,
                },
            }}
        >
            <Drawer.Screen name="偏好設定" component={FavorSetting} />
        </Drawer.Navigator>
    );
};

export default SettingDrawer;
