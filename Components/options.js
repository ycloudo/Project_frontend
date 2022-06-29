import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Options = (props) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.boxl}>
                    <TouchableOpacity>
                        <View style={styles.boxli}>
                            <Image
                                source={require("../assets/money.png")}
                                style={styles.photo}
                            />
                            <Text style={styles.text}>價錢</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxr}>
                    <TouchableOpacity>
                        <View style={styles.boxri}>
                            <Image
                                source={require("../assets/service.png")}
                                style={styles.photo}
                            />
                            <Text style={styles.text}>服務</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.boxl}>
                    <TouchableOpacity>
                        <View style={styles.boxli}>
                            <Image
                                source={require("../assets/food.png")}
                                style={styles.photo}
                            />
                            <Text style={styles.text}>食物</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxr}>
                    <TouchableOpacity>
                        <View style={styles.boxri}>
                            <Image
                                source={require("../assets/others.png")}
                                style={styles.photo}
                            />
                            <Text style={styles.text}>其他</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor:'pink',
    },
    boxl: {
        marginRight: 20,
        marginBottom: 20,
    },
    boxli: {
        paddingTop: 25,
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    boxr: {
        marginLeft: 20,
        marginBottom: 20,
    },
    boxri: {
        paddingTop: 25,
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    photo: {
        width: 70,
        height: 70,
    },
    text: {
        padding: 15,
        fontSize: 20,
    },
});


export default Options;