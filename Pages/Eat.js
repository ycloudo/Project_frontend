import React, {Component} from "react";
import { View, Text, Image, StyleSheet, StatusBar, Animated,TouchableOpacity } from "react-native";
import WheelOfFortune from 'react-native-wheel-of-fortune';
import AnimatedFade from '../Components/AnimatedFade';

const participants = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
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
        duration: 100,
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
            <AnimatedFade>
                <Text style={styles.top1}>今天</Text>
                <Text style={styles.top2}>要吃什麼呢？</Text>
            </AnimatedFade>
                <View style={styles.choice_container}>
                    <View style={styles.boxf}>
                      <TouchableOpacity {...touchProps}
                      onPress={() => {
                        this.setState({ activeIndex: 0, started: false, winnerValue: null, winnerIndex: null });
                        this.child.resetWheelState();
                        this.child.prepareWheel();
                        this.child.angleListener();
                      }}
                      >
                          <View style={this.state.activeIndex === 0 ? styles.optionActive : styles.option}>
                              <Image
                                  source={require("../assets/money.png")}
                                  style={styles.photo}
                              />
                              <Text style={styles.text}>中式</Text>
                          </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                      <TouchableOpacity {...touchProps}
                      onPress={() => {
                        this.setState({ activeIndex: 1, started: false, winnerValue: null, winnerIndex: null });
                        this.child.resetWheelState();
                        this.child.prepareWheel();
                        this.child.angleListener();
                      }}
                      >
                          <View style={this.state.activeIndex === 1 ? styles.optionActive : styles.option}>
                              <Image
                                  source={require("../assets/service.png")}
                                  style={styles.photo}
                              />
                              <Text style={styles.text}>日式</Text>
                          </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                      <TouchableOpacity {...touchProps}
                      onPress={() => {
                        this.setState({ activeIndex: 2, started: false, winnerValue: null, winnerIndex: null });
                        this.child.resetWheelState();
                        this.child.prepareWheel();
                        this.child.angleListener();
                      }}
                      >
                          <View style={this.state.activeIndex === 2 ? styles.optionActive : styles.option}>
                              <Image
                                  source={require("../assets/food.png")}
                                  style={styles.photo}
                              />
                              <Text style={styles.text}>韓式</Text>
                          </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                      <TouchableOpacity {...touchProps}
                      onPress={() => {
                        this.setState({ activeIndex: 3, started: false, winnerValue: null, winnerIndex: null });
                        this.child.resetWheelState();
                        this.child.prepareWheel();
                        this.child.angleListener();
                      }}
                      >
                          <View style={this.state.activeIndex === 3 ? styles.optionActive : styles.option}>
                              <Image
                                  source={require("../assets/money.png")}
                                  style={styles.photo}
                              />
                              <Text style={styles.text}>美式</Text>
                          </View>
                      </TouchableOpacity>
                    </View>
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