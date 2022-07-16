import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";
import Options from "../Components/options";
import Info from "../Components/info";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';

const Restaurant = ({navigation}) => {
    const route = useRoute();
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/photo.jpg")}
                style={styles.imageBackground}
                imageStyle={{ height: 210 }}
            >
                <View style={styles.top}>
                    <View style={styles.backbackground}>
                        <TouchableOpacity onPress={() => {navigation.goBack();}}>
                            <Image
                                source={require("../assets/back.png")}
                                style={styles.back}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.savebackground}>
                        {route.params.save == '0'
                            ?<TouchableOpacity>
                                <Image
                                source={require("../assets/save.png")}
                                style={styles.save}
                                />
                            </TouchableOpacity>
                            :<TouchableOpacity>
                                <Image
                                source={require("../assets/saved.png")}
                                style={styles.save}
                                />
                            </TouchableOpacity>
                        } 
                    </View>
                </View>
                <Info name={route.params.name} address={route.params.address} star={route.params.star}/>
            </ImageBackground>
            <Options navigation={navigation} id={route.params.id} name={route.params.name} address={route.params.address} star={route.params.star} save={route.params.save}/>
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
        marginBottom: 40,
    },
    backbackground: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DFE0E2",
        marginTop: 40,
        marginLeft: 25,
        height: 45,
        width: 45,
        borderRadius: 90,
    },
    back: {
        height: 27,
        width: 27,
    },
    top: {
        flexDirection: "row",
    },
    savebackground: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DFE0E2",
        marginTop: 40,
        marginLeft: 245,
        height: 45,
        width: 45,
        borderRadius: 90,
    },
    save: {
        height: 23,
        width: 23,
    },
});


export default Restaurant;