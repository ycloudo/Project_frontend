import {
    StyleSheet,
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
            <TouchableOpacity onPress={click}>
                <View style={styles.searchbotton}>
                    <Icon
                        name="ios-search-outline"
                        size={40}
                        color="#FFFAFA"
                    ></Icon>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#FFFAFA",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        flexGrow: 1,
        fontSize: 17,
    },
    searchbox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    searchbotton: {
        padding: 5,
        backgroundColor: "#FFC107",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
});

export default SearchBox;
