import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const Card = (props) => {
    const cardHadler = () => {
        props.setPageStatus((prev) => ({
            ...prev,
            pages: {
                ...(prev.pages = 0),
                information: 1,
            },
            navbar: 0,
        }));
    };
    return (
        <TouchableOpacity onPress={cardHadler}>
            <View style={styles.container}></View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFAFA",
        width: "100%",
        height: 200,
        marginBottom: "10%",
    },
});

export default Card;
