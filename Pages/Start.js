import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon_a from "@expo/vector-icons/AntDesign";

const Start = () => {
    return (
        <View style={styles.main_ctr}>
            <View style={styles.header_ctr}>
                <Text>Start</Text>
            </View>
            <View style={styles.logo_ctr}></View>
            <View style={styles.bottom_ctr}>
                <TouchableOpacity style={styles.btn_ctr}>
                    <View style={styles.btn}>
                        <Text style={styles.btn_text}>Getting Start !</Text>
                        <Icon_a name="right" size={25} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main_ctr: {
        height: "100%",
        backgroundColor: "#FFFAFA",
        display: "flex",
        flexDirection: "column",
    },
    header_ctr: {
        height: "30%",
        borderBottomWidth: 1,
        borderBottomColor: "red",
    },
    logo_ctr: {
        height: "50%",
        borderBottomWidth: 1,
        borderBottomColor: "red",
    },
    bottom_ctr: {
        height: "20%",
        alignItems: "center",
        paddingTop: "10%",
    },
    btn_ctr: {
        backgroundColor: "#FFC107",
        width: "80%",
        height: "40%",
        borderRadius: 20,
        paddingLeft: "4%",
        paddingRight: "6%",
        justifyContent: "center",
    },
    btn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btn_text: {
        color: "white",
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "bold",
    },
});

export default Start;
