import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const Info = ({name,address,star}) => {
    return (
        <View style={styles.box}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
            <View style={styles.star}>
                <ImageBackground
                    source={require("../assets/star.png")}
                    style={styles.starphoto}
                >
                    <Text style={styles.starnum}>{star}</Text>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        backgroundColor: "#fff",
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 40,
        //alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name: {
        paddingBottom: 10,
        fontSize: 30,
    },
    address: {
        fontSize: 18,
        color: "#7B7B7B",
    },
    star: {
        alignItems: "center",
        justifyContent: "center",
    },
    starphoto: {
        width: 150,
        height: 150,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    starnum: {
        fontSize: 30,
    },
});

export default Info;
