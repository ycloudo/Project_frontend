import React from 'react';
import ReactNativeModal from 'react-native-modal';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const Modal_r = ({ modal, item, win }) => {
  const closeModalHandler = () => {
    modal(false);
  };
  return (
    <ReactNativeModal isVisible={true} animationIn="bounceIn">
      <View style={styles.main_ctr}>
        <View style={styles.msg_ctr}>
          {win == '0' ? (
            <Text style={styles.msg_win}>A：{item[0]}</Text>
          ) : (
            <Text style={styles.msg}>A：{item[0]}</Text>
          )}
          {win == '1' ? (
            <Text style={styles.msg_win}>B：{item[1]}</Text>
          ) : (
            <Text style={styles.msg}>B：{item[1]}</Text>
          )}
          {win == '2' ? (
            <Text style={styles.msg_win}>C：{item[2]}</Text>
          ) : (
            <Text style={styles.msg}>C：{item[2]}</Text>
          )}
          {win == '3' ? (
            <Text style={styles.msg_win}>D：{item[3]}</Text>
          ) : (
            <Text style={styles.msg}>D：{item[3]}</Text>
          )}
          {win == '4' ? (
            <Text style={styles.msg_win}>E：{item[4]}</Text>
          ) : (
            <Text style={styles.msg}>E：{item[4]}</Text>
          )}
          {win == '5' ? (
            <Text style={styles.msg_win}>F：{item[5]}</Text>
          ) : (
            <Text style={styles.msg}>F：{item[5]}</Text>
          )}
          {win == '6' ? (
            <Text style={styles.msg_win}>G：{item[6]}</Text>
          ) : (
            <Text style={styles.msg}>G：{item[6]}</Text>
          )}
          {win == '7' ? (
            <Text style={styles.msg_win}>H：{item[7]}</Text>
          ) : (
            <Text style={styles.msg}>H：{item[7]}</Text>
          )}
          {win == '8' ? (
            <Text style={styles.msg_win}>I：{item[8]}</Text>
          ) : (
            <Text style={styles.msg}>I：{item[8]}</Text>
          )}
          <Pressable style={styles.button} onPress={closeModalHandler}>
            <Text
              style={{
                color: '#423067',
                fontSize: 16,
                fontWeight: '500',
              }}
            >
              關閉
            </Text>
          </Pressable>
        </View>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  main_ctr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg_ctr: {
    backgroundColor: '#DBEEFF',
    height: 550,
    width: 200,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 10,
    alignItems: 'center',
  },
  msg: {
    textAlign: 'center',
    fontSize: 22,
  },
  msg_win: {
    textAlign: 'center',
    fontSize: 22,
    color: '#000000',
    borderWidth: 4,
    borderColor: '#FFF',
    padding: 10,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: 60,
    height: 40,
    backgroundColor: '#FFE153',
  },
});

export default Modal_r;
