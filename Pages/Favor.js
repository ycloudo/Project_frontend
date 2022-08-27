import React, { useState } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import Card from "../Components/Card";
import SearchBox from "../Components/SearchBox";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { data } from "../data";
import Icon_favor from "@expo/vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";

const listTab = [
    {
        status:'全部'
    },
    {
        status:'台式'
    },
    {
        status:'日式'
    },
    {
        status:'韓式'
    },
    {
        status:'其他'
    }
]


const Favor = ({ navigation }) => {
    const [status, setStatus] = useState('全部')
    const [datalist, setDatalist] = useState(data)
    const setStatusFilter = status =>{
        if (status !== '全部'){
            setDatalist([...data.filter(e => e.status === status)])
        }else{
            setDatalist(data)
        }
        setStatus(status)
    }
    const renderItem =({item, index}) =>{
        return(
            <View>
                <Card
                    item={item}
                    navigation={navigation}
                    key={item.id}
                />
            </View>
            
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.main_container}>
                <View style={styles.back_favor}>
                    <Icon_favor name="bookmark" size={30} color='#FFC107' />
                    <Text style={styles.favor_title}>我的收藏</Text>
                </View>    
                <SafeAreaView>
                    <View style={styles.listTab}>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >
                            {
                                listTab.map(e =>(
                                    <TouchableOpacity 
                                        style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                                        onPress={() =>setStatusFilter(e.status)}
                                    >
                                        <Text style={styles.textTab}>{e.status}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View style={styles.card_container}>
                        <FlatList
                            data={datalist}
                            keyExtractor={(e, i) =>i.toString()}
                            renderItem={renderItem}
                        />
                    </View>
                </SafeAreaView>
            </View>     
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#EFFAFF",
    },
    main_container: {
        top: "10%",
        paddingLeft: "6%",
        paddingRight: "6%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 70,
    },
    listTab: {
        flexDirection: "row",
        
    },
    btnTab: {
        width:70,
        flexDirection: "row",
        borderBottomWidth:2,
        borderBottomColor:"#EFFAFF",
        paddingBottom:7,
        marginLeft:15,
        marginRight:15,
        justifyContent: 'center',
    },
    textTab: {
        fontSize:15,
    },
    btnTabActive: {
        borderBottomColor:"#FFC107",
    },
    back_favor: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom:15,
    },
    favor_title: {
        marginLeft:10,
        fontSize:17,
        fontWeight:'bold',
    },
    card_container: {
        top: 20,
        display: "flex",
        flexDirection: "column",
        marginBottom:200,
    },
});

export default Favor;
