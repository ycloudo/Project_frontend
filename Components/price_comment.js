import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

const Price_comment = ({navigation,item,comment,resource}) => {
    
    return (
        ((comment)=='1')
        ?<View>
                <View style={styles.detail}>
                    {(resource) == "dcard" ? ( 
                        <Image
                            source={require("../assets/dcard.png")}
                            style={styles.resource}
                        />
                    ) : (resource) == "ptt" ? (
                        <Image
                            source={require("../assets/ptt.png")}
                            style={styles.resource}
                        />
                    ) : (
                        <Image
                            source={require("../assets/google.png")}
                            style={styles.resource}
                        />
                    )}
                <Text style={styles.comment}>{item.comment}</Text>
            </View>
        </View>  
        :<View>
            <View style={styles.line}></View>
                <View style={styles.detail}>
                    {(resource) == "dcard" ? ( 
                        <Image
                            source={require("../assets/dcard.png")}
                            style={styles.resource}
                        />
                    ) : (resource) == "ptt" ? (
                        <Image
                            source={require("../assets/ptt.png")}
                            style={styles.resource}
                        />
                    ) : (
                        <Image
                            source={require("../assets/google.png")}
                            style={styles.resource}
                        />
                    )}
                <Text style={styles.comment}>{item.comment}</Text>
            </View>
        </View>  
    );
}

const styles = StyleSheet.create({
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
    resource: {
        width: 35,
        height: 35,
    },
    comment: {
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