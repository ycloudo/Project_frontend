import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Card from "../Components/Card";
import SearchBox from "../Components/SearchBox";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { data } from "../data";
import { useScrollToTop } from '@react-navigation/native';


const Main = ({ navigation }) => {
    let counter = 0;
    const ref = React.useRef(null);
    useScrollToTop(ref);
    return (
        <View style={styles.scrollview_container}>
            <ScrollView
                contentContainerStyle={styles.main_container}
                keyboardDismissMode="on-drag"
                ref={ref}
            >
                <SearchBox />
                
                <View style={styles.card_container}>
                    {data.map((item) => {
                        counter +=1;
                        //console.log({counter});
                        return(
                        <Card
                        item={item}
                        navigation={navigation}
                        counter={counter}
                        key={counter}
                        /> 
                        );
                    })}
                    
                    {/* <Text>到底囉</Text> */}
                </View>
                <View>
                    <View style={styles.name_bg1}>
                        <View style={styles.name1}>
                            <Text style={styles.name}>AAA</Text>
                        </View>
                    </View> 
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    name_bg1: {
        height:35,
        backgroundColor:"#FFF4B0",
        width:120,
        marginLeft:-8,
        marginTop:-15,
        borderRadius: 5,
    },
    name1: {
        height:35,
        borderWidth:2,
        borderColor:"#423067",
        width:120,
        marginLeft:-3.5,
        marginTop:-3.5,
        borderRadius: 5,
        paddingLeft:5,
        paddingRight:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        color:"#423067",
        fontSize:18,
    },
    scrollview_container: {
        //height: "90%",
        backgroundColor: "#EFFAFF",
    },
    main_container: {
        top: "10%",
        //top:80,
        paddingLeft: "6%",
        paddingRight: "6%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 100,
    },
    card_container: {
        //top: 55,
        top:"5%",
        display: "flex",
        flexDirection: "column",
    },
});

export default Main;
