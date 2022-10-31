import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  Animated,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon_save from "@expo/vector-icons/FontAwesome";

const Card = ({ navigation, item, counter }) => {
  return counter % 2 == "1" ? (
    <TouchableOpacity onPress={() => navigation.navigate("price", item)}>
      <Animated.View style={styles.container1} shouldRasterizeIOS={true}>
        <ImageBackground
          source={require("../assets/photo.jpg")}
          style={styles.card1}
        >
          {/* <View> */}
          <View style={styles.name_bg1}>
            <View style={styles.name1}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </View>
          {/* </View> */}
          {item.save == "0" ? (
            <TouchableOpacity>
              <Icon_save
                name="bookmark-o"
                size={30}
                color="#000000"
                style={styles.favor1}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Icon_save
                name="bookmark"
                size={30}
                color="#000000"
                style={styles.favor1}
              />
            </TouchableOpacity>
          )}
          <Text>{item.name}</Text>

          <Text>{item.num}</Text>
        </ImageBackground>
      </Animated.View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => navigation.navigate("price", item)}>
      <Animated.View style={styles.container2} shouldRasterizeIOS={true}>
        <View style={styles.card2}>
          <View>
            <View style={styles.name_bg2}>
              <View style={styles.name2}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </View>
          </View>
          {item.save == "0" ? (
            <TouchableOpacity>
              <Icon_save
                name="bookmark-o"
                size={30}
                color="#000000"
                style={styles.favor2}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Icon_save
                name="bookmark"
                size={30}
                color="#000000"
                style={styles.favor2}
              />
            </TouchableOpacity>
          )}
          <Text>{item.name}</Text>
          <Text>{item.num}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name_bg1: {
    height: 35,
    backgroundColor: "#FFF4B0",
    width: 120,
    marginLeft: -8,
    marginTop: -15,
    borderRadius: 5,
  },
  name1: {
    height: 35,
    borderWidth: 2,
    borderColor: "#423067",
    width: 120,
    marginLeft: -3.5,
    marginTop: -3.5,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "#423067",
    fontSize: 18,
  },
  name_bg2: {
    height: 35,
    backgroundColor: "#FFF4B0",
    width: 120,
    marginLeft: "60%",
    marginTop: -15,
    borderRadius: 5,
  },
  name2: {
    height: 35,
    borderWidth: 2,
    borderColor: "#423067",
    width: 120,
    marginLeft: -3.5,
    marginTop: -3.5,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  favor1: {
    marginTop: -10,
    marginLeft: "90%",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  },
  favor2: {
    marginTop: 5,
    marginLeft: "88%",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  },
  container1: {
    transform: [{ rotate: "-1.2deg" }],
  },
  container2: {
    transform: [{ rotate: "1.2deg" }],
  },
  card1: {
    //backgroundColor: "#FFFAFA",
    backgroundColor: "yellow",
    width: "100%",
    height: 180,
    marginBottom: "15%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  },
  card2: {
    //backgroundColor: "#FFFAFA",
    backgroundColor: "red",
    width: "100%",
    height: 180,
    marginBottom: "15%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  },
});

export default Card;
