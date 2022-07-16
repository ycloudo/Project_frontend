import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MenuDrawer from "react-native-side-drawer";
const SettingButton = () => {
    return (
        <View>
            <MenuDrawer
                open={1}
                position={"left"}
                drawerPercentage={45}
                animationTime={250}
                overlay={true}
                opacity={0.4}
            >
                <TouchableOpacity style={styles.body}>
                    <Text>Open</Text>
                </TouchableOpacity>
            </MenuDrawer>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        zIndex: 0,
    },
    animatedBox: {
        flex: 1,
        backgroundColor: "#38C8EC",
        padding: 10,
    },
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F04812",
    },
});
export default SettingButton;
