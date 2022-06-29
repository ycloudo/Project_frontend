import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

export default function Optionssmall() {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.box1}>
                    <TouchableOpacity>
                        <View style={styles.box1i}>
                            <Image
                                source={require("../assets/money.png")}
                                style={styles.photo}
                            />
                            <Text style={styles.text}>價錢</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity>
                        <View style={styles.boxi}>
                            <Image
                                source={require("../assets/service.png")}
                                style={styles.photo}
                            />
                            <Text style={styles.text}>服務</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity>
                        <View style={styles.boxi}>
                            <Image
                                source={require("../assets/food.png")}
                                style={styles.photo}
                            />
                            <Text style={styles.text}>食物</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity>
                        <View style={styles.boxi}>
                            <Image
                                source={require("../assets/others.png")}
                                style={styles.photo}
                            />
                            <Text style={styles.text}>其他</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    box1: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
    },
    box1i: {
        flexDirection: "row",
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 10,
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
    box: {
        marginRight: 30,
        marginBottom: 20,
    },
    boxi: {
        opacity: 0.6,
        flexDirection: "row",
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 10,
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
        width: 35,
        height: 35,
    },
    text: {
        padding: 15,
        fontSize: 25,
    },
});
