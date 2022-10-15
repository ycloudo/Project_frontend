import React, { useState } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity, Text,Image } from "react-native";
import Card from "../Components/Card";
import SearchBox from "../Components/SearchBox";
import { data } from "../data";
import { useScrollToTop } from "@react-navigation/native";
const listTab = [
    {
        status:'全部'
    },
    {
        status:'中式'
    },
    {
        status:'日式'
    },
    {
        status:'韓式'
    },
    {
        status:'美式'
    },
    {
        status:'西式'
    },
    {
        status:'異式'
    },
    {
        status:'泰式'
    },
    {
        status:'輕食'
    }
]
const Main = ({ navigation }) => {
    const placeholder = "...來點日式料理?";
    const color = "#FFFAFA";
    let counter = 0;
    let option = 0;
    const ref = React.useRef(null);
    useScrollToTop(ref);
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
    return (
        <View style={styles.container}>
            <View style={styles.option_container}>
            <SearchBox
                    navigation={navigation}
                    styles={Seacrhbox_style}
                    placeholder={placeholder}
                    color={color}
                />    
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
                                    <View style={styles.box}>
                                    {e.status == "全部" ? ( //aid = 5
                                        <Image
                                        source={require("../assets/food.png")}
                                        style={styles.photo}
                                        />
                                    ) : e.status  == "中式" ? (
                                        <Image
                                        source={require("../assets/food1.png")}
                                        style={styles.photo}
                                        />
                                    ) : e.status  == "日式" ? (
                                        <Image
                                        source={require("../assets/food2.png")}
                                        style={styles.photo}
                                        />
                                    ) : e.status  == "韓式" ? (
                                        <Image
                                        source={require("../assets/food3.png")}
                                        style={styles.photo}
                                        />
                                    ) : e.status  == "西式" ? (
                                        <Image
                                        source={require("../assets/food5.png")}
                                        style={styles.photo}
                                        />
                                    ) : e.status  == "泰式" ? (
                                        <Image
                                        source={require("../assets/food7.png")}
                                        style={styles.photo}
                                        />
                                    ) : e.status  == "美式" ? (
                                        <Image
                                        source={require("../assets/food4.png")}
                                        style={styles.photo}
                                        />
                                    ) : e.status  == "異式" ? (
                                        <Image
                                        source={require("../assets/food6.png")}
                                        style={styles.photo}
                                        />
                                    ) : (
                                        <Image
                                            source={require("../assets/food8.png")}
                                            style={styles.photo}
                                        />
                                    )}
                                            
                                        
                                    </View>
                                    
                                    <Text style={styles.textTab}>{e.status}</Text>
                                </TouchableOpacity>
                                );
                            })
                        }
                    </ScrollView>
                </View> 
            </View>
            <ScrollView 
                contentContainerStyle={styles.card_container}
                ref={ref}
            >
                <View>
                    {/*<FlatList
                            data={datalist}
                            keyExtractor={(e, i) =>i.toString()}
                            renderItem={renderItem}
                        />*/}
                    {datalist.map((item) => { 
                        counter +=1;
                        return(
                            <Card
                            item={item}
                            navigation={navigation}
                            counter={counter}
                            key={counter}
                        />
                        );
                    })}
               </View>     
            </ScrollView>
        </View> 
    );
};

const styles = StyleSheet.create({
    box: {
        //marginLeft: 15,
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
        width: 65,
        height:65,
    },
    photo: {
        width: 40,
        height: 40,
    },
    container: {
        backgroundColor: "#EFFAFF",
        height: "100%",
    },
    option_container: {
        //top:80,
        top:"10%",
        paddingLeft: "6%",
        paddingRight: "6%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 90,
    },
    card_container: {
        //top:20,
        top:"5%",
        paddingLeft: "6%",
        paddingRight: "6%",
        display: "flex",
        flexDirection: "column",
    },
    listTab: {
        marginTop:25,
        flexDirection: "row",
    },
    btnTab: {
        marginRight:20,
        justifyContent: "center",
        alignItems: "center",
        //透明度要調整
    },
    textTab: {
        fontSize:15,
        marginTop:10,
    },
    btnTabActive: {
        marginRight:20,
        justifyContent: "center",
        alignItems: "center",
    },
});
const Seacrhbox_style = StyleSheet.create({
    input: {
        backgroundColor: "#FFFAFA",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        flexGrow: 1,
        fontSize: 17,
    },
    searchbox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    searchbotton: {
        padding: 5,
        backgroundColor: "#FFC107",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
});

export default Main;


