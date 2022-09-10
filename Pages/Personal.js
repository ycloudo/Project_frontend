import React, { useState,Component } from "react";
import { View, Text, StyleSheet, Image,TextInput, TouchableOpacity, ImageBackground,Input} from "react-native";
import Icon_left from "@expo/vector-icons/Entypo";
import Icon_right from "@expo/vector-icons/Entypo";
import Icon_account from "@expo/vector-icons/MaterialCommunityIcons";
import Icon_passward from "@expo/vector-icons/Entypo";
import Icon_human_male_female from "@expo/vector-icons/MaterialCommunityIcons";
//import Icon_phone from "@expo/vector-icons/Entypo";
import Icon_check from "@expo/vector-icons/Feather";
import Icon_back from "@expo/vector-icons/AntDesign";
import RadioForm from 'react-native-simple-radio-button';

const Personal = ({navigation}) => {
    const [account, onChangeAccount] = React.useState("程尤欣欣向榮");
    const [passward, onChangePassward] = React.useState("123456789");
    const [gender, setGender] = useState("Male");
    //const [phone, onChangePhone] = React.useState("0932-xxx-xxx");
    const [name, onChangeName] = React.useState("程尤欣");
    const [count, setCount] = useState(1);
    const options = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
      ];
    
    
    return (
        <ImageBackground
                source={require("../assets/personal_bg.png")}
                style={styles.container}   
            >
        
            <TouchableOpacity style={styles.back}  onPress={() => {navigation.goBack();}}>
                <Icon_back name="arrowleft" size={25} color='#000'/>
            </TouchableOpacity>
            <View style={styles.main_container}> 
                <View style={styles.photo_box}>
                    <TouchableOpacity>
                        <Icon_left name="chevron-small-left" size={35} color='#000'
                        onPress={() => {setCount((current) => current - 1);}}/>
                    </TouchableOpacity>
                    {(count%3 == '0')
                            ?<Image
                            source={require("../assets/facebook.png")}
                            style={styles.photo}
                            />
                            :(count%3 == '1')
                                ?<Image
                                source={require("../assets/dcard.png")}
                                style={styles.photo}
                                />
                                :<Image
                                source={require("../assets/google.png")}
                                style={styles.photo}
                                />  
                    }

                    <TouchableOpacity>
                        <Icon_right name="chevron-small-right" size={35} color='#000'
                        onPress={() => {setCount((current) => current + 1);}}/>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.info_bg}>
                    <View style={styles.info_bgf}>
                    <View style={styles.info_bgft}></View>
                    <View style={styles.info_box_name}>
                        <Text style={styles.info_name}>{name}</Text>
                    </View>
                    <View style={styles.info_box}>
                        <Icon_account name="account" size={30} color="#7B7B7B"/>
                        <TextInput style={styles.info} onChangeText={onChangeAccount} value={account} />
                    </View>
                    <View style={styles.info_box}>
                        <Icon_passward name="key" size={29} color="#7B7B7B"/>
                        <TextInput style={styles.info} onChangeText={onChangePassward} value={passward} />
                    </View>
                    <View style={styles.info_box_end}>
                        <Icon_human_male_female name="human-male-female" size={31} color="#7B7B7B"/>
                        <RadioForm
                            style={styles.info}
                            radio_props={options}
                            initial={0}
                            //formHorizontal={true}
                            buttonColor={'#7B7B7B'}
                            buttonSize={10}
                            labelStyle={{fontSize: 20, color: '#7B7B7B',fontWeight:'bold'}}
                            selectedButtonColor={'#7B7B7B'}
                            onPress={(value) => {setGender(value);}}
                        />
                        </View>
                    <View style={styles.save}>
                        <TouchableOpacity>
                            <Icon_check name="check" size={53} color='#000'/>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>  
            </View>
            
            </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "#FFF4B0",
        height:"100%",
    },
    back: {
        marginTop: "12%",
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    main_container: {
        marginTop: "15%",
        alignItems: "center",
    },
    photo_box: {
        alignItems: "center",
        flexDirection: "row",
    },
    photo:{
        width:145,
        height:145,
        borderRadius:180,
        borderWidth:10,
        borderColor:"#FFE153",
        marginLeft:5,
        marginRight:5,
    },
    info_bg: {
        marginTop:"22%",
        marginLeft:12,
        backgroundColor: "#DBEEFF",
        width:235,
        height:370,
    },
    info_bgf: {
        marginLeft:-12,
        marginTop:-15,
        width:235,
        height:370,
        borderLeftWidth:4,
        borderTopWidth:4,
        borderRightWidth:4,
        borderColor:"#000000",
    },
    info_bgft: {
        marginLeft:90,
        width:40,
        height:8,
        borderBottomWidth:4,
        borderLeftWidth:4,
        borderRightWidth:4,
        borderColor:"#000000",
    },
    info_box: {
        top:"7%",
        height:60,
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 10,
        marginBottom:10,
        paddingBottom:10,
        borderBottomColor:"#7B7B7B",
        borderBottomWidth:1,
    },
    info_box_end: {
        top:"12%",
        height:60,
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 10,
        marginBottom:10,
        paddingBottom:10,
    },
    info_box_name: {
        top:"7%",
        height:60,
        alignItems: "center",
        flexDirection: "row",
        paddingTop:10,
        paddingBottom:10,
    },
    info: {
        color:"#7B7B7B",
        fontSize: 20,
        marginLeft:25,
        fontWeight:"bold",
    },
    info_name: {
        color:"#5B5B5B",
        fontSize: 26,
        marginLeft:70,
        fontWeight:"bold",
        
    },
    save: {
        width:53,
        height:53,
        backgroundColor:"#FFE153",
        borderRadius:90,
        marginLeft:160,
        marginTop:20,
    },
});

export default Personal;
