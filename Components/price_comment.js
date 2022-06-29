import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

const Price_comment = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.detail}>
                    <Image
                        source={require("../assets/dcard.png")}
                        style={styles.photo}
                    />
                    <Text style={styles.text}>asdf</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.detail}>
                    <Image
                        source={require("../assets/facebook.png")}
                        style={styles.photo}
                    />
                    <Text style={styles.text}>asdf</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.detail}>
                    <Image
                        source={require("../assets/dcard.png")}
                        style={styles.photo}
                    />
                    <Text style={styles.text}>asdf</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.detail}>
                    <Image
                        source={require("../assets/google.png")}
                        style={styles.photo}
                    />
                    <Text style={styles.text}>asdf</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.detail}>
                    <Image
                        source={require("../assets/ptt.png")}
                        style={styles.photo}
                    />
                    <Text style={styles.text}>asdf</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.detail}>
                    <Image
                        source={require("../assets/facebook.png")}
                        style={styles.photo}
                    />
                    <Text style={styles.text}>asdf</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    detail: {
        flexDirection: "row",
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 10,
        //backgroundColor: '#fff',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 5,
        alignItems: "center",
    },
    photo: {
        width: 35,
        height: 35,
    },
    text: {
        padding: 15,
        fontSize: 20,
    },
    line: {
        backgroundColor: "#5B5B5B",
        height: 1,
        marginBottom: 5,
        marginHorizontal: 30,
    },
});


export default Price_comment;