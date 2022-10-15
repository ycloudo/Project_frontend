import React,{useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert,Image } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import Icon_next from "@expo/vector-icons/AntDesign";
import Modal from "../Components/Modal";

const FavorSetting = ({ navigation }) => {
    const [food,setFood] = useState(false);
    const [price,setPrice] = useState(false);
    const [environment,setEnvironment] = useState(false);
    const [service,setService] = useState(false);
    const [traffic,setTraffic] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [isNavigate, setIsNavigate] = useState(false);
    const navigate= () => {
        setTimeout(() => {
            navigation.navigate("root",{screen:"首頁"});
        }, 300);
    }
    
    let counter = 0;
    const click = () =>{
        counter = 0;
        if(food === true){
            counter +=1;
        }
        if(price === true){
            counter +=1;
        }
        if(environment === true){
            counter +=1;
        }
        if(service === true){
            counter +=1;
        }
        if(traffic === true){
            counter +=1;
        }
        if(counter==2){
            setModalVisible(false);
            navigation.navigate("favorsetting2");
        }else if(counter<2){
            setMessage("請選擇2個");
            setModalVisible(true);
        }else{
            setMessage("只能選擇2個喔！");
            setModalVisible(true);
        }
        
    }
    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>偏好設定</Text>
            <View style={styles.qt_box}>
                <Text style={styles.qt_text}>請選擇2個您用餐時最在意的「餐廳特色」</Text>
            </View>
            <View style={styles.option_row}>
                <View style={styles.option}>
                    <Image
                        source={require('../assets/food.png')}
                        style={styles.photo}
                    />
                    <CheckBox
                        title="食物"
                        checked={food}
                        onPress={()=>setFood(!food)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        containerStyle={{backgroundColor:"#FDF6DD",borderColor:"#FDF6DD"}}
                        style={styles.option_text}
                        checkedColor="#7B7B7B"
                    />
                </View>
                <View style={styles.option}>
                    <Image
                            source={require('../assets/money.png')}
                            style={styles.photo}
                        />
                    <CheckBox
                        title="價錢"
                        checked={price}
                        onPress={()=>setPrice(!price)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        containerStyle={{backgroundColor:"#FDF6DD",borderColor:"#FDF6DD"}}
                        checkedColor="#7B7B7B"
                    />
                </View>
                <View style={styles.option}>
                    <Image
                        source={require('../assets/environment.png')}
                        style={styles.photo}
                    />
                    <CheckBox
                        title="環境"
                        checked={environment}
                        onPress={()=>setEnvironment(!environment)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        containerStyle={{backgroundColor:"#FDF6DD",borderColor:"#FDF6DD"}}
                        checkedColor="#7B7B7B"
                    />
                </View>
            </View>
            <View style={styles.option_row}>
                <View style={styles.option}>
                    <Image
                            source={require('../assets/service.png')}
                            style={styles.photo}
                        />
                    <CheckBox
                        title="服務"
                        checked={service}
                        onPress={()=>setService(!service)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        containerStyle={{backgroundColor:"#FDF6DD",borderColor:"#FDF6DD"}}
                        checkedColor="#7B7B7B"
                    />
                </View>
                <View style={styles.option}>
                    <Image
                            source={require('../assets/traffic.png')}
                            style={styles.photo}
                        />
                    <CheckBox
                        title="交通"
                        checked={traffic}
                        onPress={()=>setTraffic(!traffic)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        containerStyle={{backgroundColor:"#FDF6DD",borderColor:"#FDF6DD"}}
                        checkedColor="#7B7B7B"
                    />
                </View>
            </View>
            <Image
                source={require('../assets/personal_fork2.png')}
                style={styles.leftdown_bg2}
            />
            <Image
                source={require('../assets/personal_fork.png')}
                style={styles.leftdown_bg}
            />
            {isModalVisible ? (
                <Modal
                    message={message}
                    setModal={setModalVisible}
                    navigate={navigate}
                    isNavigate={isNavigate}
                />
            ) : null}
            <View style={styles.next}>
                <TouchableOpacity onPress={click}>
                    <Icon_next
                        name="arrowright"
                        size={50}
                        color="#7B7B7B"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    leftdown_bg: {
        width:315,
        height:315,
        marginLeft:-40,
        marginTop:-315,
        transform: [{ rotate: "20deg" }],
    },
    leftdown_bg2: {
        width:315,
        height:315,
        marginLeft:-28,
        marginTop:5,
        transform: [{ rotate: "20deg" }],
    },
    option: {
        alignItems:"center",
        marginLeft:5,
        marginRight:5,
    },
    option_row: {
        flexDirection:"row",
        justifyContent: 'center',
        marginBottom:30,
    },
    photo: {
        width:60,
        height:60,
    },
    container: {
        backgroundColor: "#FDF6DD",
        height: "100%",
        paddingTop: "15%",
    },
    title: {
        color: "#7B7B7B",
        fontSize:26,
        fontWeight:"bold",
        marginLeft:20,
    },
    qt_box: {
        backgroundColor:"#CFE988",
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        marginBottom:40,
        borderRadius:10,
    },
    qt_text: {
        color:"#FFFFFF",
        fontSize:20,
        fontWeight:"bold",
        margin:15,
        marginLeft:10,
        marginRight:10,
    },
    next: {
        width: 53,
        height: 53,
        backgroundColor: "#FFE153",
        borderRadius: 90,
        marginLeft: 300,
        marginTop: -80,
        alignItems:"center",
        justifyContent:"center",
    },
});

export default FavorSetting;
