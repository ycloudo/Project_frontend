import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Exclamation from "@expo/vector-icons/FontAwesome5";

const ErrorMsg = (props) => {
    return (
        <View style={[styles.msg_ctr, { ...props.bottom }]}>
            <Exclamation name="exclamation-triangle" color="red" size={20} />
            <Text> 無效的帳號或密碼</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    msg_ctr: {
        flexDirection: "row",
    },
});

export default ErrorMsg;
