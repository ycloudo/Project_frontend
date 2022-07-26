import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import Icon from "@expo/vector-icons/Ionicons";

const SearchBox = ({ navigation, styles, color, placeholder }) => {
    const [input, setInput] = useState(""); //get user input value
    const [counter, setCounter] = useState(0);
    const inputRef = useRef(); //foucs input
    const inputHandler = (text) => {
        setInput(text);
        setCounter(text.length);
    };
    const click = () => {
        if (counter == 0) {
            inputRef.current.focus();
        } else {
            navigation.navigate("result", { input: input });
            setInput("");
            setCounter(0);
        }
    };
    return (
        <View style={styles.searchbox}>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                onChangeText={inputHandler}
                value={input}
                ref={inputRef}
            ></TextInput>
            <TouchableOpacity onPress={click}>
                <View style={styles.searchbotton}>
                    <Icon
                        name="ios-search-outline"
                        size={40}
                        color={color}
                    ></Icon>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBox;
