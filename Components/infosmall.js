import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    DatePickerAndroid,
} from "react-native";

export default function Infosmall() {
    return (
        <View style={styles.box}>
            <View style={styles.namestar}>
                <Text style={styles.name}>早頓小室</Text>
                <View style={styles.star}>
                    <ImageBackground
                        source={require("../assets/star.png")}
                        style={styles.starphoto}
                    >
                        <Text style={styles.starnum}>4.4</Text>
                    </ImageBackground>
                </View>
            </View>
            <Text style={styles.address}>高雄市鼓山區捷興二街29-1號</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 15,
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
    },
    address: {
        fontSize: 18,
        color: "#7B7B7B",
    },
    star: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 100,
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
