import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Personal = () => {
    return (
        <View style={styles.main_container}>
            <Text>Personal</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main_container: {
        position: "relative",
        top: "8%",
        paddingLeft: "6%",
        paddingRight: "6%",
        display: "flex",
        flexDirection: "column",
    },
});

export default Personal;
