import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const AuthButton = ({ Icon, children, styles }) => {
    return (
        <TouchableOpacity style={styles.btn_ctr}>
            <View style={styles.btn}>
                <Text style={styles.btn_text}>{children}</Text>
                <Icon />
            </View>
        </TouchableOpacity>
    );
};

export default AuthButton;
