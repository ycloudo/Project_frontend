import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import Option from '../Pages/Eat';
import ActionButton from 'react-native-action-button';
import Icon_zoom from '@expo/vector-icons/Entypo';
import Modal_r from '../Components/Modal_restaurant';
import { API_URL } from '@env';
import * as SecureStore from 'expo-secure-store';

const participants = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

// const setStatusFilter = (status) => {
//   if (status !== '全部') {
//     setDatalist([...data.filter((e) => e.status === status)]);
//   } else {
//     setDatalist(data);
//   }
//   setStatus(status);
// };

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
      isModalVisible: false,
      value1: -1,
      value2: -1,
      item: [],
    };
    this.child = null;
  }
  setvalue1 = (index) => {
    this.setState({
      value1: index,
    });
  };
  setvalue2 = (index) => {
    this.setState({
      value2: index,
    });
  };
  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };
  closeHandler = (index) => {
    this.setState({
      isModalVisible: index,
    });
  };
  seeresHandler = () => {
    this.setState({
      isModalVisible: true,
    });
  };
  setItem = (item) => {
    this.setState({
      item: item,
    });
  };
  async componentDidMount() {
    const uid = await SecureStore.getItemAsync('user-id');
    const requestOption = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`${API_URL}/user/recommend/${uid}`, requestOption)
      .then((res) => res.json())
      .then((json) => {
        let arr = [];
        json.forEach((e, index) => {
          arr[index] = e.name;
        });
        this.setItem(arr);
      });
  }
  render() {
    const wheelOptions = {
      rewards: participants,
      knobSize: 30,
      borderWidth: 10,
      borderColor: '#fff',
      innerRadius: 30,
      duration: 6000, //轉動時間//原本6000
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('./down-arrow.png'),
      onRef: (ref) => (this.child = ref),
    };
    var touchProps = {
      activeOpacity: 0.6,
      onPress: () => console.log('press'),
    };
    var starttouchProps = {
      activeOpacity: 1,
      //onPress: () => console.log('press'),
      onPress: () => {
        this.setState({ startbutton: 1 });
      },
    };
    // const item =
    //   (this.state.value1 == 0) & (this.state.value2 == 0) //value1有0-2，value2依照value1有不同數量(value1:0，value2:0-4。value1:1，value2:0-7。value1:2，value2:0-2。)
    //     ? ["御典茶", "妃食不可", "八方雲集", "麥當勞", "統一天下", "dor留", "弘爺漢堡", "丸浜霜淇淋", "元福燒肉飯"]
    //     : ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2", "I2"];

    return (
      <View style={styles.scrollview_container}>
        <View style={styles.top}>
          <Text style={styles.top1}>今天</Text>
          <Text style={styles.top2}>要吃什麼呢？</Text>
        </View>
        <Text style={styles.option_text}>轉盤內容</Text>
        {/* <Option value1handler={this.setvalue1} value2handler={this.setvalue2} /> */}
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          <WheelOfFortune
            options={wheelOptions}
            getWinner={(value, index) => {
              this.setState({ winnerValue: value, winnerIndex: index });
            }}
          />
          {!this.state.started && (
            <View style={styles.startButtonView}>
              <View style={styles.startButtonback}>
                <TouchableOpacity
                  {...starttouchProps}
                  onPress={() => this.buttonPress()}
                  style={
                    this.state.startbutton === 1
                      ? styles.startButtonActive
                      : styles.startButton
                  }
                >
                  <Text style={styles.startButtonText}>START!</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {this.state.winnerIndex != null && (
            <View style={styles.winnerView}>
              <Text style={styles.winnerText}>
                Lets eat {this.state.item[this.state.winnerIndex]}
              </Text>
              <View style={styles.tryAgainandGoButton}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ winnerIndex: null });
                    this.child._tryAgain();
                  }}
                  style={styles.tryAgainButton}
                >
                  <Text style={styles.tryAgainText}>再轉一次</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('首頁')}
                  style={styles.GoButton}
                >
                  <Text style={styles.GoText}>馬上前往!!</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          )}
          {this.state.isModalVisible && (
            <Modal_r
              modal={this.closeHandler}
              item={this.state.item}
              win={this.state.winnerIndex}
            />
          )}
        </View>
        <ActionButton
          buttonColor="#FFFFFF"
          onPress={() => this.seeresHandler()}
          renderIcon={() => (
            <View>
              <Icon_zoom name="magnifying-glass" size={25} color="#FFD24D" />
            </View>
          )}
          size={40}
          position="right"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  GoText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFD24D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  GoButton: {
    marginLeft: 20,
    padding: 5,
    marginTop: 8,
    backgroundColor: '#fff',
    borderColor: '#FFD24D',
    borderWidth: 2,
  },
  tryAgainandGoButton: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  scrollview_container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  top1: {
    marginTop: 90,
    marginLeft: 40,
    color: '#4E5B6B',
    fontSize: 32,
    fontWeight: 'bold',
  },
  top2: {
    marginLeft: 40,
    color: '#4E5B6B',
    fontSize: 24,
  },
  top: {
    backgroundColor: '#FFF4B0',
    height: 195,
  },
  option_text: {
    color: '#7B7B7B',
    fontSize: 24,
    marginLeft: 40,
    fontWeight: 'bold',
    marginTop: 40,
  },
  text: {
    padding: 5,
    fontSize: 12,
    marginTop: 3,
  },
  container: {
    position: 'relative',
    top: 35,
    marginLeft: '6%',
    marginRight: '6%',
    display: 'flex',
    backgroundColor: '#FFF4B0',
    height: 445,
    borderRadius: 30,
    alignItems: 'center',
    paddingBottom: 70,
    //justifyContent: 'center',
  },
  startButtonView: {
    position: 'absolute',
  },
  startButton: {
    //backgroundColor: '#FFD24D',
    padding: 5,
    borderColor: '#000000',
    borderWidth: 2,
    marginTop: -5,
    marginLeft: -5,
    width: 140,
    height: 55,
  },
  startButtonActive: {
    padding: 5,
    borderColor: '#000000',
    borderWidth: 2,
    width: 140,
    height: 55,
  },
  startButtonback: {
    backgroundColor: '#FFD24D',
    marginTop: 370,
    marginLeft: 5,
    width: 140,
    height: 55,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  winnerText: {
    fontSize: 32,
    //padding: 5,
    fontWeight: 'bold',
    color: '#FFD24D',
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
