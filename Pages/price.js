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
import { useRoute } from '@react-navigation/native';
import Icon_save from "@expo/vector-icons/FontAwesome";
import Icon_back from "@expo/vector-icons/AntDesign";

const Price = ({navigation}) => {
    const route = useRoute();
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/photo.jpg")}
                style={styles.imageBackground}
                imageStyle={{ height: 190 }}
            >
                <View style={styles.top}>
                    <View style={styles.backbackground}>
                        <TouchableOpacity onPress={() => {navigation.goBack();}}>
                            <Icon_back name="arrowleft" size={25} color='#000000' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.savebackground}>
                        {route.params.save == '0'
                            ?<TouchableOpacity>
                                <Icon_save name="bookmark-o" size={25} color='#000000' />
                            </TouchableOpacity>
                            :<TouchableOpacity>
                                <Icon_save name="bookmark" size={25} color='#000000' />
                            </TouchableOpacity>
                        }
                    </View>
                </View>
                <Infosmall name={route.params.name} address={route.params.address} star={route.params.star}/>
            </ImageBackground>
            <Optionssmall id={route.params.id}/>
            <Price_comment id={route.params.id}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFFAFF",
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    imageBackground: {
        marginBottom: 30,
    },
    backbackground: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFFAFF",
        marginRight: 120,
        height: 40,
        width: 40,
        borderRadius: 90,
    },
    top: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 45,
    },
    savebackground: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFFAFF",
        marginLeft: 120,
        height: 40,
        width: 40,
        borderRadius: 90,
    },
});

export default Price;