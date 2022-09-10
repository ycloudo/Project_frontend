import React, {Component} from "react";
import { View, Text, Image, StyleSheet, StatusBar, Animated,TouchableOpacity } from "react-native";
import WheelOfFortune from 'react-native-wheel-of-fortune';
import AnimatedFade from '../Components/AnimatedFade';

const Eat = () => {
    return (
        <View style={styles.main_container}>
            <Text>Eat</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollview_container: {
        backgroundColor: "#fff",
        height: "100%",
    },
    top1: {
        marginTop: 90,
        marginLeft: 40,
        color: "#4E5B6B",
        fontSize: 32,
        fontWeight: "bold",
    },
    top2: {
        marginLeft: 40,
        color: "#4E5B6B",
        fontSize: 24,
    },
    top: {
        backgroundColor: "#FFF4B0",
        height: 225,
    },
    choice_container: {
        marginTop:5,
        position: "relative",
        top: "10%",
        marginLeft: "6%",
        marginRight: "6%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    optionActive: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      width: 75,
      height:75,
    },
    option: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      width: 75,
      height:75,
      opacity:0.5,
    },
    box: {
        backgroundColor:"red",
        marginLeft: 15,
        justifyContent: "center",
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
        width: 75,
        height:75,
    },
    boxf: {
        backgroundColor:"yellow",
        justifyContent: "center",
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
        width: 75,
        height:75,
    },
    
    photo: {
        marginTop:5,
        width: 40,
        height: 40,
    },
    text: {
        padding: 5,
        fontSize: 12,
        marginTop:3,
    },
    container: {
        position: "relative",
        top: 75,
        marginLeft: "6%",
        marginRight: "6%",
        display: "flex",
        backgroundColor:"#FFF4B0",
        height:435,
        borderRadius: 30,
        alignItems: 'center',
        paddingBottom:70,
        //justifyContent: 'center',
      },
      startButtonView: {
        position: 'absolute',
      },
      startButton: {
        //backgroundColor: '#FFD24D',
        padding: 5,
        borderColor:"#000000",
        borderWidth: 2,
        marginTop: -5,
        marginLeft: -5,
        width:140,
        height:55,
      },
      startButtonActive: {
        padding: 5,
        borderColor:"#000000",
        borderWidth: 2,
        width:140,
        height:55,
      },
      startButtonback: {
        backgroundColor: '#FFD24D',
        marginTop: 360,
        marginLeft: 5,
        width:140,
        height:55,
      },
      startButtonText: {
        fontSize: 35,
        color: '#000000',
        fontWeight: 'bold',
      },
      winnerView: {
        position: 'absolute',
        //justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:"yellow",
      },
      tryAgainButton: {
        padding: 5,
        marginTop: 8,
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      winnerText: {
        fontSize: 32,
        //padding: 5,
        fontWeight: 'bold',
        color:'#FFD24D',
        marginTop: 345,
        //backgroundColor:'yellow',
      },
      tryAgainText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
});

export default Eat;
