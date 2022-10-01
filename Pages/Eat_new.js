import React, {Component} from "react";
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import WheelOfFortune from 'react-native-wheel-of-fortune';
import  {DeviceEventEmitter} from 'react-native';
import Icon_down from "@expo/vector-icons/Entypo";
const participants = [
    '鹹水雞',
    '麥當勞',
    '麻辣酷',
    '燒烤',
    '小阿姨',
    '大智',
    '餛飩麵',
    '妃食',
    '統一',
  ];

  class Eat extends Component {
    
    constructor(props) {
      super(props);
  
      this.state = {
        winnerValue: null,
        winnerIndex: null,
        started: false,
        activeIndex: 0,
        startbutton: 0,
        topic1: 0,
        topic2: 0,
      };
      this.child = null;
    }
    buttonPress = () => {
      this.setState({
        started: true,
      });
      this.child._onPress();
    };
    
    render() {
    const wheelOptions = {
        rewards: participants,
        knobSize: 30,
        borderWidth: 10,
        borderColor: '#fff',
        innerRadius: 30,
        duration: 6000,
        backgroundColor: 'transparent',
        textAngle: 'horizontal',
        knobSource: require('./down-arrow.png'),
        onRef: ref => (this.child = ref),
    };
    
    var touchProps = {
        activeOpacity: 0.6,
        onPress: () => console.log('press'),
      }; 
    var starttouchProps = {
        activeOpacity: 1,
        //onPress: () => console.log('press'),
        onPress: () => {this.setState({ startbutton: 1 })},
      };       
      
    return (
        <View style={styles.scrollview_container}>
            <View style={styles.top}>
                <Text style={styles.top1}>今天</Text>
                <Text style={styles.top2}>要吃什麼呢？</Text>
            </View>
            <View style={styles.wheel_topic_box}>
              <Text style={styles.option_text}>轉盤內容</Text>
              <View style={styles.wheel_topic}>
                <Text style={styles.wheel_topic_text}>餐廳特色</Text>
                <Icon_down name="chevron-down" size={20} color='#000000' />
              </View>
              <View style={styles.wheel_topic}>
                <Text style={styles.wheel_topic_text}>食物</Text>
                <Icon_down name="chevron-down" size={20} color='#000000' />
              </View>
            </View>
            
          <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          <WheelOfFortune
            options={wheelOptions}
            getWinner={(value, index) => {
              this.setState({winnerValue: value, winnerIndex: index});
            }}
          />
          {!this.state.started && (
            <View style={styles.startButtonView}>
            <View style={styles.startButtonback}>
              <TouchableOpacity {...starttouchProps}
                onPress={() => this.buttonPress()}
                style={this.state.startbutton === 1 ? styles.startButtonActive : styles.startButton}
                >
                <Text style={styles.startButtonText}>START!</Text>
              </TouchableOpacity>
              </View>
            </View>
          )}
          
          {this.state.winnerIndex != null && (
            <View style={styles.winnerView}>
              <Text style={styles.winnerText}>
                Lets eat {participants[this.state.winnerIndex]}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({winnerIndex: null});
                  this.child._tryAgain();
                }}
                style={styles.tryAgainButton}>
                <Text style={styles.tryAgainText}>TRY AGAIN</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
            </View>
        
        
      );
    }
  }

const styles = StyleSheet.create({
    wheel_topic:{
      marginLeft: 10,
      backgroundColor:"#D9D9D9",
      paddingLeft:10,
      paddingRight:5,
      paddingBottom:5,
      paddingTop:5,
      borderRadius:10,
      flexDirection: "row",
    },
    wheel_topic_text: {
      color: "#7B7B7B",
      fontSize: 20,
    },
    wheel_topic_box: {
      flexDirection: "row",
      marginTop: 40,
      alignItems: 'center',
    },
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
        height: 195,
    },
    option_text: {
      color: "#7B7B7B",
      fontSize: 24,
      marginLeft: 40,
      fontWeight: "bold",
    },
    text: {
        padding: 5,
        fontSize: 12,
        marginTop:3,
    },
    container: {
        position: "relative",
        top: 40,
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
