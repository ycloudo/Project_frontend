import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet, Text, Animated } from "react-native";
import Eye from "./Eye";

const Input = ({
    label,
    Icon,
    secure,
    inputStateHandler,
    input,
    isValid,
    setInputValid,
}) => {
    const ani = useRef(new Animated.Value(0)).current;
    const [isFocused, setFocused] = useState(0);
    const [showPwd, setShowPwd] = useState(secure);
    const [inputLen, setInputLen] = useState(0);
    useEffect(() => {
        Animated.timing(ani, {
            toValue: isFocused || inputLen ? 1 : 0,
            duration: 250,
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
        setInputValid(true);
    };
    let color;
    if (isValid) {
        color = isFocused || inputLen ? "#423067" : "gray";
    } else {
        color = !isValid && inputLen !== 0 ? "#423067" : "red";
    }
    const bgColor = isFocused || inputLen ? "#ffffff" : "transparent";
    const text = {
        position: "absolute",
        left: "22%",
        top: ani.interpolate({
            inputRange: [0, 1],
            outputRange: ["28%", "-50%"],
        }),
        fontSize: ani.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 14],
        }),
        fontWeight: ani.interpolate({
            inputRange: [0, 1],
            outputRange: ["400", "500"],
        }),
        color: color,
    };

    return (
        <View
            style={[
                styles.input_ctr,
                { borderColor: color, backgroundColor: bgColor },
            ]}
        >
            <Icon size={30} color={color} />
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
        borderWidth: 2,
        paddingLeft: "10%",
        width: "100%",
        height: 50,
        justifyContent: "space-around",
        borderRadius: 35,
        alignItems: "center",
    },
    input: {
        width: "100%",
        fontSize: 20,
        paddingLeft: "10%",
        color: "#423067",
    },
});

export default Input;
