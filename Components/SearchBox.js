import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ScrollView,
} from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/Ionicons";

const SearchBox = () => {
    const click = () => {
        Keyboard.dismiss();
    };
    return (
        <View style={styles.searchbox}>
            <TextInput
                placeholder="  ...來點日式料理?"
                style={styles.input}
            ></TextInput>
            <TouchableOpacity style={styles.searh_button} onPress={click}>
                <Icon
                    name="ios-search-circle-outline"
                    size={50}
                    color="#FFC107"
                ></Icon>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#FFFAFA",
        borderRadius: 5,
        width: "80%",
        fontSize: 17,
    },
    searchbox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

export default SearchBox;
