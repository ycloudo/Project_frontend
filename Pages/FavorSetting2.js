import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import Icon_back from '@expo/vector-icons/AntDesign';
import Icon_click from '@expo/vector-icons/Feather';
import Modal from '../Components/Modal';
import { AuthContext } from '../content/AuthContext';

const FavorSetting2 = ({ navigation }) => {
  const [food1, setFood1] = useState(false);
  const [food2, setFood2] = useState(false);
  const [food3, setFood3] = useState(false);
  const [food4, setFood4] = useState(false);
  const [food5, setFood5] = useState(false);
  const [food6, setFood6] = useState(false);
  const [food7, setFood7] = useState(false);
  const [food8, setFood8] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [isNavigate, setIsNavigate] = useState(false);
  const { wroteFavor } = useContext(AuthContext);
  let counter = 0;
  const navigate = () => {
    wroteFavor();
    setTimeout(() => {
      navigation.navigate('root', { screen: 'home' });
    }, 300);
  };
  const click = () => {
    if (food1 === true) {
      counter += 1;
    }
    if (food2 === true) {
      counter += 1;
    }
    if (food3 === true) {
      counter += 1;
    }
    if (food4 === true) {
      counter += 1;
    }
    if (food5 === true) {
      counter += 1;
    }
    if (food6 === true) {
      counter += 1;
    }
    if (food7 === true) {
      counter += 1;
    }
    if (food8 === true) {
      counter += 1;
    }
    if (counter == 3) {
      setMessage('設定完成');
      setModalVisible(true);
      setIsNavigate(true);
    } else if (counter < 3) {
      setMessage('請選擇3個');
      setModalVisible(true);
    } else {
      setMessage('只能選擇3個喔！');
      setModalVisible(true);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>偏好設定</Text>
      <View style={styles.qt_box}>
        <Text style={styles.qt_text}>
          請選擇3種您用餐時最喜愛的「餐廳種類」
        </Text>
      </View>
      <View style={styles.back}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon_back name="arrowleft" size={40} color="#7B7B7B" />
        </TouchableOpacity>
      </View>
      <View style={styles.option_row}>
        <View style={styles.option}>
          <View style={styles.box}>
            <Image
              source={require('../assets/food1.png')}
              style={styles.photo}
            />
          </View>
          <CheckBox
            title="中式"
            checked={food1}
            onPress={() => setFood1(!food1)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: '#FDF6DD',
              borderColor: '#FDF6DD',
              alignItems: 'center',
            }}
            style={styles.option_text}
            checkedColor="#7B7B7B"
          />
        </View>
        <View style={styles.option}>
          <View style={styles.box}>
            <Image
              source={require('../assets/food2.png')}
              style={styles.photo}
            />
          </View>
          <CheckBox
            title="日式"
            checked={food2}
            onPress={() => setFood2(!food2)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: '#FDF6DD',
              borderColor: '#FDF6DD',
              alignItems: 'center',
            }}
            checkedColor="#7B7B7B"
          />
        </View>
      </View>
      <View style={styles.option_row}>
        <View style={styles.option}>
          <View style={styles.box}>
            <Image
              source={require('../assets/food3.png')}
              style={styles.photo}
            />
          </View>
          <CheckBox
            title="韓式"
            checked={food3}
            onPress={() => setFood3(!food3)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: '#FDF6DD',
              borderColor: '#FDF6DD',
              alignItems: 'center',
            }}
            style={styles.option_text}
            checkedColor="#7B7B7B"
          />
        </View>
        <View style={styles.option}>
          <View style={styles.box}>
            <Image
              source={require('../assets/food4.png')}
              style={styles.photo}
            />
          </View>
          <CheckBox
            title="美式"
            checked={food4}
            onPress={() => setFood4(!food4)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: '#FDF6DD',
              borderColor: '#FDF6DD',
              alignItems: 'center',
            }}
            checkedColor="#7B7B7B"
          />
        </View>
      </View>
      <View style={styles.option_row}>
        <View style={styles.option}>
          <View style={styles.box}>
            <Image
              source={require('../assets/food5.png')}
              style={styles.photo}
            />
          </View>
          <CheckBox
            title="西式"
            checked={food5}
            onPress={() => setFood5(!food5)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: '#FDF6DD',
              borderColor: '#FDF6DD',
              alignItems: 'center',
            }}
            style={styles.option_text}
            checkedColor="#7B7B7B"
          />
        </View>
        <View style={styles.option}>
          <View style={styles.box}>
            <Image
              source={require('../assets/food6.png')}
              style={styles.photo}
            />
          </View>
          <CheckBox
            title="異國料理"
            checked={food6}
            onPress={() => setFood6(!food6)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: '#FDF6DD',
              borderColor: '#FDF6DD',
              alignItems: 'center',
            }}
            checkedColor="#7B7B7B"
          />
        </View>
      </View>
      <View style={styles.option_row}>
        <View style={styles.option}>
          <View style={styles.box}>
            <Image
              source={require('../assets/food7.png')}
              style={styles.photo}
            />
          </View>
          <CheckBox
            title="泰式"
            checked={food7}
            onPress={() => setFood7(!food7)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: '#FDF6DD',
              borderColor: '#FDF6DD',
              alignItems: 'center',
            }}
            style={styles.option_text}
            checkedColor="#7B7B7B"
          />
        </View>
        <View style={styles.option}>
          <View style={styles.box}>
            <Image
              source={require('../assets/food8.png')}
              style={styles.photo}
            />
          </View>
          <CheckBox
            title="輕食"
            checked={food8}
            onPress={() => setFood8(!food8)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: '#FDF6DD',
              width: 100,
              borderColor: '#FDF6DD',
              alignItems: 'center',
            }}
            checkedColor="#7B7B7B"
          />
        </View>
      </View>
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
          <Icon_click name="check" size={50} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    //marginLeft: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 70,
    height: 70,
  },
  option: {
    alignItems: 'center',
    width: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  option_row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  photo: {
    width: 50,
    height: 50,
  },
  container: {
    backgroundColor: '#FDF6DD',
    height: '100%',
    paddingTop: '15%',
  },
  title: {
    color: '#7B7B7B',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  qt_box: {
    backgroundColor: '#C5DFEE',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  qt_text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  next: {
    width: 53,
    height: 53,
    backgroundColor: '#FFE153',
    borderRadius: 90,
    marginLeft: 310,
    marginTop: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: 40,
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 90,
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default FavorSetting2;
