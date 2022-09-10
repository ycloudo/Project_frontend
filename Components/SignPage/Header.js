import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = (props) => {
    const bgColor_c1 = props.pagename == "login" ? "#fcde6c" : "transparent";
    const bgColor_c2 = props.pagename == "signup" ? "#fcde6c" : "transparent";
    const text_c1 = props.pagename == "login" ? "700" : "500";
    const text_c2 = props.pagename == "signup" ? "700" : "500";
    return (
        <View style={styles.main_ctr}>
            <View style={styles.component_ctr}>
                <View style={[styles.btn_ctr, { backgroundColor: bgColor_c1 }]}>
                    <Text style={[styles.text, { fontWeight: text_c1 }]}>
                        登入
                    </Text>
                </View>
                <View style={[styles.btn_ctr, { backgroundColor: bgColor_c2 }]}>
                    <Text style={[styles.text, { fontWeight: text_c2 }]}>
                        註冊
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main_ctr: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-end",
    },
    component_ctr: {
        flexDirection: "row",
        width: "55%",
        justifyContent: "space-evenly",
        // borderBottomColor: "#bae1e5",
        // borderBottomWidth: 3,
        // paddingBottom: 10,
        // right: "3%",
        // shadowOpacity: 0.5,
    },
    btn_ctr: {
        padding: 15,
        width: "35%",
        alignItems: "center",
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        color: "#423067",
    },
});

export default Header;
