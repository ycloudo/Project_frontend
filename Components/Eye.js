import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon_i from "@expo/vector-icons/Ionicons";

const Eye = (props) => {
    const Icon_eye = props.showPwd ? (
        <Icon_i name="ios-eye" size={20} />
    ) : (
        <Icon_i name="ios-eye-off" size={20} />
    );
    const eyePressHandler = () => {
        props.setShowPwd(!props.showPwd);
    };
    return (
        <Pressable style={styles.eye} onPress={eyePressHandler}>
            {() => Icon_eye}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    eye: {
        right: "80%",
    },
});

export default Eye;
