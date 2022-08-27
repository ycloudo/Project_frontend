import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Card = ({navigation,item}) => {
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('price',item)}>
            <View style={styles.container}>
                <Text>{item.name}</Text>
            </View>
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
