import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
} from "react-native";

const Infosmall = ({name,address,star}) => {
    return (
        <View style={styles.box}>
            <View style={styles.namestar}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.star}>
                    <ImageBackground
                        source={require("../assets/star.png")}
                        style={styles.starphoto}
                    >
                        <Text style={styles.starnum}>{star}</Text>
                    </ImageBackground>
                </View>
            </View>
            <Text style={styles.address}>{address}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20,
        backgroundColor: "#fff",
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20,
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
    namestar: {
        flexDirection: "row",
        marginBottom: 10,
    },
    name: {
        marginTop: 10,
        fontSize: 30,
        width: 200,
    },
    address: {
        fontSize: 18,
        color: "#7B7B7B",
        width: "100%",
    },
    star: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 25,
    },
    starphoto: {
        width: 50,
        height: 50,
        //margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    starnum: {
        fontSize: 15,
    },
});

export default Infosmall;