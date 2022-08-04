import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet, Text, Animated } from "react-native";
import Eye from "./Eye";

const Input = ({ label, Icon, secure, inputStateHandler, input }) => {
    const ani = useRef(new Animated.Value(0)).current;
    const [isFocused, setFocused] = useState(0);
    const [showPwd, setShowPwd] = useState(secure);
    const [inputLen, setInputLen] = useState(0);
    useEffect(() => {
        Animated.timing(ani, {
            toValue: isFocused || inputLen ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isFocused]);
    const focusHandler = () => {
        setFocused(1);
    };
    const blurHandler = () => {
        setFocused(0);
    };
    const inputHandler = (text) => {
        inputStateHandler(text);
        setInputLen(text.length);
    };
    const text = {
        position: "absolute",
        left: "18%",
        top: ani.interpolate({
            inputRange: [0, 1],
            outputRange: ["10%", "-35%"],
        }),
        fontSize: ani.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 11],
        }),
        color: "gray",
    };
    const icon_color = isFocused || inputLen ? "black" : "gray";

    return (
        <View style={styles.input_ctr}>
            <Icon size={30} color={icon_color} />
            <Animated.Text style={text}>{label}</Animated.Text>
            <TextInput
                style={styles.input}
                onFocus={focusHandler}
                onBlur={blurHandler}
                onChangeText={inputHandler}
                secureTextEntry={showPwd}
                autoComplete="off"
                autoCorrect={false}
                autoCapitalize="none"
                value={input}
            />
            {secure && isFocused ? (
                <Eye showPwd={showPwd} setShowPwd={setShowPwd} />
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input_ctr: {
        display: "flex",
        flexDirection: "row",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        paddingBottom: "2%",
        paddingLeft: "5%",
        width: "100%",
        justifyContent: "space-around",
    },
    input: {
        width: "100%",
        fontSize: 20,
        paddingLeft: "10%",
    },
});

export default Input;
