import React, { useState, useRef, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    TouchableWithoutFeedback,
    Animated,
} from "react-native";

const AuthButton = ({ Icon, children, styles, handler }) => {
    const ani = useRef(new Animated.Value(0)).current;
    const [IsPressed, setIsPressed] = useState(0);
    useEffect(() => {
        Animated.timing(ani, {
            toValue: IsPressed ? 1 : 0,
            duration: 250,
            useNativeDriver: false,
        }).start();
    }, [IsPressed]);
    const pressHandler = () => {
        setIsPressed(1);
        handler();
    };
    const pressOutHandler = () => {
        setIsPressed(0);
    };
    const base_style = {
        backgroundColor: "#FFCE2D",
        width: "100%",
        height: "65%",
        borderRadius: 35,
        opacity: ani.interpolate({
            inputRange: [0, 1],
            outputRange: [1.0, 0.3],
        }),
    };
    const outline_style = {
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "#423067",
        borderWidth: 5,
        width: "100%",
        height: "70%",
        borderRadius: 35,
        top: ani.interpolate({
            inputRange: [0, 1],
            outputRange: [10, 0],
        }),
        right: ani.interpolate({
            inputRange: [0, 1],
            outputRange: [10, 0],
        }),
    };
    return (
        <TouchableWithoutFeedback
            onPressIn={pressHandler}
            onPressOut={pressOutHandler}
            delayPressOut={120}
        >
            <View style={styles.btn_ctr}>
                <Animated.View style={base_style}>
                    <View>
                        <Text style={styles.btn_text}>{children}</Text>
                        {/* <Icon /> */}
                    </View>
                </Animated.View>
                <Animated.View style={outline_style} />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AuthButton;
