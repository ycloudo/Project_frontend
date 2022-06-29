import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";
import Optionssmall from "../Components/optionssmall";
import Infosmall from "../Components/infosmall";
import Price_comment from "../Components/price_comment";

export default function Price() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/photo.jpg")}
                style={styles.imageBackground}
                imageStyle={{ height: 190 }}
            >
                <View style={styles.top}>
                    <View style={styles.backbackground}>
                        <TouchableOpacity>
                            <Image
                                source={require("../assets/back.png")}
                                style={styles.back}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.savebackground}>
                        <TouchableOpacity>
                            <Image
                                source={require("../assets/save.png")}
                                style={styles.save}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Infosmall />
            </ImageBackground>
            <Optionssmall />
            <Price_comment />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DFE0E2",
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    imageBackground: {
        marginBottom: 30,
    },
    backbackground: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DFE0E2",
        marginTop: 40,
        marginLeft: 25,
        height: 55,
        width: 55,
        borderRadius: 90,
    },
    back: {
        height: 40,
        width: 40,
    },
    top: {
        flexDirection: "row",
    },
    savebackground: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DFE0E2",
        marginTop: 40,
        marginLeft: 230,
        height: 55,
        width: 55,
        borderRadius: 90,
    },
    save: {
        height: 35,
        width: 35,
    },
});
