import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  Animated,
} from 'react-native';
import Icon_save from '@expo/vector-icons/FontAwesome';
import { UserContext } from '../content/UserContext';

const Card = ({ navigation, item, counter }) => {
  const [isFavor, setIsFavor] = useState(false);
  const [favorIndex, setFavorIndex] = useState(-1); //喜好餐廳在array中的位置
  const { UserInfoState, userContext } = useContext(UserContext);
  useEffect(() => {
    const index = UserInfoState.favor.findIndex((element) => {
      return element == item.id;
    });
    if (index > -1) {
      //在favorlist中
      setIsFavor(true);
    }
    setFavorIndex(index);
  }, []);
  const favorEditHandler = (isFavor, favorIndex, rid) => {
    const res = userContext.setfavor(isFavor, favorIndex, rid);
    if (!isFavor) {
      if (res) {
        setIsFavor(true);
      }
    }
  };
  item = {
    ...item,
    favorIndex: favorIndex,
    isFavor: isFavor,
  };
  return counter % 2 == 1 ? (
    <TouchableOpacity onPress={() => navigation.navigate('price', item)}>
      <Animated.View style={styles.container1} shouldRasterizeIOS={true}>
        <ImageBackground source={{ uri: item.photo }} style={styles.card1}>
          <View style={styles.size1}>
            <View style={styles.name_bg1}>
              <View style={styles.name1}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </View>
          </View>
          {!isFavor ? (
            <TouchableOpacity
              onPress={() => {
                favorEditHandler(isFavor, favorIndex, item.id);
              }}
            >
              <Icon_save
                name="bookmark-o"
                size={30}
                color="#000000"
                style={styles.favor1}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                favorEditHandler(isFavor, favorIndex, item.id);
              }}
            >
              <Icon_save
                name="bookmark"
                size={30}
                color="#000000"
                style={styles.favor1}
              />
            </TouchableOpacity>
          )}
        </ImageBackground>
      </Animated.View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => navigation.navigate('price', item)}>
      <Animated.View style={styles.container2} shouldRasterizeIOS={true}>
        <ImageBackground style={styles.card2} source={{ uri: item.photo }}>
          <View>
            <View style={styles.size2}>
              <View style={styles.name_bg2}>
                <View style={styles.name2}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </View>
            </View>
          </View>
          {!isFavor ? (
            <TouchableOpacity
              onPress={() => {
                favorEditHandler(isFavor, favorIndex, item.id);
              }}
            >
              <Icon_save
                name="bookmark-o"
                size={30}
                color="#000000"
                style={styles.favor2}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                favorEditHandler(isFavor, favorIndex, item.id);
              }}
            >
              <Icon_save
                name="bookmark"
                size={30}
                color="#000000"
                style={styles.favor2}
              />
            </TouchableOpacity>
          )}
        </ImageBackground>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  size1: {
    alignItems: 'baseline',
  },
  size2: {
    alignItems: 'baseline',
    alignItems: 'flex-end',
    marginRight:5,
  },
  name_bg1: {
    height: 35,
    backgroundColor: '#FFF4B0',
    marginLeft: -8, 
    marginTop: -15,
    borderRadius: 5,
  },
  name1: {
    height: 35,
    borderWidth: 2,
    borderColor: '#423067',
    marginLeft: -3.5,
    marginRight: 3.5,
    marginTop: -3.5,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
  },
  name: {
    color: '#423067',
    fontSize: 18,
  },
  name_bg2: {
    height: 35,
    backgroundColor: '#FFF4B0',
    marginTop: -15,
    borderRadius: 5,
  },
  name2: {
    height: 35,
    borderWidth: 2,
    borderColor: '#423067',
    marginLeft: -3.5,
    marginRight: 3.5,
    marginTop: -3.5,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favor1: {
    marginTop: -10,
    marginLeft: '90%',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  },
  favor2: {
    marginTop: 5,
    marginLeft: '88%',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  },
  container1: {
    transform: [{ rotate: '-1.2deg' }],
  },
  container2: {
    transform: [{ rotate: '1.2deg' }],
  },
  card1: {
    //backgroundColor: "#FFFAFA",
    backgroundColor: 'yellow',
    width: '100%',
    height: 180,
    marginBottom: '15%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  },
  card2: {
    //backgroundColor: "#FFFAFA",
    backgroundColor: 'red',
    width: '100%',
    height: 180,
    marginBottom: '15%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  },
});

export default Card;
