import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Animated,
  Pressable,
  TextInput,
} from 'react-native';

const CustomModal = ({ name, setModal }) => {
  const closeModalHandler = () => {
    setModal(false);
  };
  return (
    <ReactNativeModal isVisible={true} animationIn="bounceIn">
      <View style={styles.main}>
        <View style={styles.card}>
          <Animated.View style={styles.name_bg} shouldRasterizeIOS={true}>
            <Animated.View style={styles.name} shouldRasterizeIOS={true}>
              <Text style={styles.name_text}>{name}</Text>
            </Animated.View>
          </Animated.View>
          <TextInput
            style={styles.comment_text}
            placeholder="評論～"
            placeholderTextColor="#6C6C6C"
          />
        </View>
        <View style={styles.buttom_button}>
          <Pressable style={styles.button_l} onPress={closeModalHandler}>
            <Text
              style={{
                color: '#7B7B7B',
                fontSize: 16,
                fontWeight: '500',
              }}
            >
              取消
            </Text>
          </Pressable>
          <Pressable style={styles.button_r} onPress={closeModalHandler}>
            <Text
              style={{
                color: '#423067',
                fontSize: 16,
                fontWeight: '500',
              }}
            >
              完成
            </Text>
          </Pressable>
        </View>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  comment_text: {
    color: '#6C6C6C',
    marginLeft: 15,
    marginTop: 8,
  },
  card: {
    //backgroundColor: "#FFFAFA",
    backgroundColor: '#FFFFFF',
    height: 100,
    //marginBottom: "15%",
    borderColor: '#423067',
    borderWidth: 2,
    width: 275,
    marginTop: 40,
  },
  name_bg: {
    height: 35,
    backgroundColor: '#FFF4B0',
    width: 120,
    marginLeft: -10,
    marginTop: -15,
    borderRadius: 5,
    transform: [{ rotate: '-1deg' }],
  },
  name: {
    height: 35,
    borderWidth: 2,
    borderColor: '#423067',
    width: 120,
    marginLeft: -3.5,
    marginTop: -3.5,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-1deg' }],
  },
  name_text: {
    color: '#423067',
    fontSize: 18,
    transform: [{ rotate: '-1deg' }],
  },
  main: {
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#EFFAFF',
    height: 220,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttom_button: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button_r: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 40,
    backgroundColor: '#FFE153',
    marginLeft: 25,
    borderRadius: 50,
  },
  button_l: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 40,
    backgroundColor: '#D6D6D6',
    marginRight: 25,
    borderRadius: 50,
  },
});

export default CustomModal;
