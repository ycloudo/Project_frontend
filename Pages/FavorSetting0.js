import React,{useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert,Image } from "react-native";


const FavorSetting0 = ({ navigation }) => {//只有第一次進入app要跳動畫
    return (
            <View>
                <Image style={styles.container}
                    source={require('../assets/favorsetting.gif')} 
                />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
});

export default FavorSetting0;
