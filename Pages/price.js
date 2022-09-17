import React, { useState } from "react";
import {
    ScrollView,
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
import { data_r } from "../data_r";

const listTab = [
    {
        status:'全部'
    },
    {
        status:'價錢'
    },
    {
        status:'服務'
    },
    {
        status:'食物'
    },
    {
        status:'環境'
    },
    {
        status:'交通'
    }
]

const Price = ({navigation}) => {
    const route = useRoute();
    let option = 0;
    let comment = 0;
    const [status, setStatus] = useState('全部')
    const [datalist, setDatalist] = useState(data_r)
    const setStatusFilter = status =>{
        if (status !== '全部'){
            setDatalist([...data_r.filter(e => e.status === status)])
        }else{
            setDatalist(data_r)
        }
        setStatus(status)
    }
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
            <View style={styles.listTab}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                        {
                            listTab.map(e =>{
                                option +=1;
                                return(
                                <TouchableOpacity 
                                    style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                                    onPress={() =>setStatusFilter(e.status)}
                                    key={option}
                                >
                                    <View style={styles.option_box}>
                                        <Image
                                                source={require("../assets/money.png")}
                                                style={styles.option_photo}
                                        />
                                    </View>
                                    <Text style={styles.textTab}>{e.status}</Text>
                                </TouchableOpacity>
                                );
                            })
                        }
                    </ScrollView>
                </View> 
                <ScrollView>
                    <View>
                        {datalist.map((item) => { 
                            comment +=1;
                            return(
                                <Price_comment
                                item={item}
                                resource={item.resource}
                                navigation={navigation}
                                comment={comment}
                                key={comment}/>
                            );
                        })}
                </View>     
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    option_box: {
        width:50,
        //height:50,
        //borderWidth:2,
        //borderColor:"#D0D0D0",
        //backgroundColor:"#7B7B7B",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius:45,
    },
    categories: {
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom:10,
        fontSize:16,
    },
    option_photo:{
        width:45,
        height:45,
        marginBottom:10,
        marginTop:10,
    },
    listTab: {
        flexDirection: "row",
        marginLeft: 30,
       //marginRight: 30,
    },
    btnTab: {
        //backgroundColor:"red",
        marginRight: 20,
        marginBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 10,
        alignItems: "center",
        //shadowColor: "#000",
        //shadowOffset: {
            //width: 0,
            //height: 2,
        //},
        //shadowOpacity: 0.25,
        //shadowRadius: 3.84,
        elevation: 5,
        
    },
    textTab: {
        padding: 5,
        fontSize: 13,
        fontWeight:"bold",
    },
    btnTabActive: {
        //backgroundColor:"yellow",
       
    },
    container: {
        flex: 1,
        backgroundColor: "#EFFAFF",
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    imageBackground: {
        marginBottom: 20,
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