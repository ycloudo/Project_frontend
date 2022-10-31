import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Optionssmall from "../Components/optionssmall";
import Infosmall from "../Components/infosmall";
import Price_comment from "../Components/price_comment";
import { useRoute } from "@react-navigation/native";
import Icon_save from "@expo/vector-icons/FontAwesome";
import Icon_back from "@expo/vector-icons/AntDesign";
import ActionButton from "react-native-action-button";
import Icon_add from "@expo/vector-icons/SimpleLineIcons";
import { API_URL } from "@env";
import Modal from "../Components/Modal_comment";
import Modal_c from "../Components/Modal";

const listTab = [
    {
        index: 5,
        status: "全部",
    },
    {
        index: 4,
        status: "價錢",
    },
    {
        index: 3,
        status: "服務",
    },
    {
        index: 1,
        status: "食物",
    },
    {
        index: 2,
        status: "環境",
    },
    {
        index: 0,
        status: "交通",
    },
];

const Price = ({ navigation }) => {
    const route = useRoute();
    let option = -1;
    let comment = 0;
     const [isModalVisible, setModalVisible] = useState(false); //true跳到Modal_comment，填寫評論
  const [isModalVisible_c, setModalVisible_c] = useState(false); //true跳到Modal，顯示是否成功
  const [message, setMessage] = useState("成功送出"); //可能要有失敗的訊息
  const submitHandler = async () => {
    setModalVisible(true);
  };
  const navigate = () => {
    setTimeout(() => {
      navigation.navigate("首頁");
    }, 300);
  };
    const [isFavor, setFavor] = useState(route.params.isFavor);
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(5);
    const [datalist, setDatalist] = useState(reviews);
    const favorStatusHandler = (isFavor) => {
        route.params.favorEditHandler(
            isFavor,
            route.params.favorIndex,
            route.params.id
        );
    };
    const setStatusFilter = (status) => {
        if (status !== 5) {
            let result = [];
            reviews.map((e) => {
                const array = e.type;
                const type = array.find((element) => element == status);
                if (type != undefined) {
                    result.push(e);
                }
            });
            result.sort(() => {
                return 0.5 - Math.random();
            });
            setDatalist([...result]);
        } else {
            setDatalist(reviews);
        }
        setStatus(status);
    };
    useEffect(() => {
        const fetchdata = async () => {
            const result = await fetchReviews();
            const reviews = result.reviews;
            setReviews(reviews);
            setDatalist(reviews);
        };
        fetchdata();
    }, []);
    const fetchReviews = async () => {
        const rid = route.params.id;
        const requestOption = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        return fetch(`${API_URL}/restaurant/info/${rid}`, requestOption).then(
            (res) => res.json()
        );
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: route.params.photo }}
                style={styles.imageBackground}
                imageStyle={{ height: 190 }}
            >
                <View style={styles.top}>
                    <View style={styles.backbackground}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                        >
                            <Icon_back
                                name="arrowleft"
                                size={25}
                                color="#000000"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.savebackground}>
                        {!isFavor ? (
                            <TouchableOpacity
                                onPressIn={() => favorStatusHandler(isFavor)}
                            >
                                <Icon_save
                                    name="bookmark-o"
                                    size={25}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPressIn={() => favorStatusHandler(isFavor)}
                            >
                                <Icon_save
                                    name="bookmark"
                                    size={25}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <Infosmall
                    name={route.params.name}
                    address={route.params.address}
                    star={route.params.rate}
                />
            </ImageBackground>
            <View style={styles.listTab}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {listTab.map((e) => {
                        option += 1;
                        return (
                            <TouchableOpacity
                                style={[
                                    styles.btnTab,
                                    status === e.index && styles.btnTabActive,
                                ]}
                                onPress={() => setStatusFilter(e.index)}
                                key={option}
                            >
                                {/*<View style={styles.option_box}>
                                        <Image
                                                source={require("../assets/money.png")}
                                                style={styles.option_photo}
                                        />
                                    </View>*/}
                                <Text style={styles.textTab}>
                                    {e.status}
                                    {option == 0
                                        ? null
                                        : route.params.class_rate[option - 1]}
                                </Text>
                                {option == 0 ? null : (
                                    <Image
                                        source={require("../assets/star.png")}
                                        style={styles.option_star}
                                    />
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
            <ScrollView>
            <View>
              {datalist.map((item) => {
                comment += 1;
                return (
                  <Price_comment
                    item={item}
                    resource={item.resource}
                    navigation={navigation}
                    comment={comment}
                    key={comment}
                  />
                );
              })}
              {comment == "0" ? (
                <View style={styles.comment_no_box}>
                  <Text style={styles.comment_no}>該類別暫無評論資料</Text>
                </View>
              ) : null}
            </View>
          </ScrollView>
            {isModalVisible ? (
              <Modal
                name={route.params.name}
                setModal={setModalVisible}
                setModal_c={setModalVisible_c}
              />
            ) : null}
            {isModalVisible_c ? (
              <Modal_c
                setModal={setModalVisible_c}
                message={message}
                navigate={navigate}
                isNavigate={isNavigate}
              />
            ) : null}
            <ActionButton
                buttonColor="#FFFFFF"
                onPress={submitHandler}
                renderIcon={() => (
                    <View>
                        <Icon_add name="note" size={30} color="#82B1DB" />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  comment_no: {
    color: "#7B7B7B",
    fontSize: 25,
    marginTop: 30,
  },
  comment_no_box: {
    alignItems: "center",
  },
  option_star: {
    width: 16,
    height: 16,
  },
  option_box: {
    width: 50,
    //height:50,
    //borderWidth:2,
    //borderColor:"#D0D0D0",
    //backgroundColor:"#7B7B7B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
  },
  categories: {
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontSize: 16,
  },
  option_photo: {
    width: 45,
    height: 45,
    marginBottom: 10,
    marginTop: 10,
  },
  listTab: {
    flexDirection: "row",
    marginLeft: 35,
    //marginRight: 30,
  },
  btnTab: {
    backgroundColor: "#fff",
    marginRight: 20,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  textTab: {
    padding: 8,
    fontSize: 14,
    //fontWeight:"bold",
  },
  btnTabActive: {
    backgroundColor: "#FFF4B0",
    borderWidth: 2,
    borderColor: "#423067",
    color: "#423067",
  },

  container: {
    flex: 1,
    backgroundColor: "#EFFAFF",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  imageBackground: {
    marginBottom: 20,
  },
  backbackground: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFFAFF",
    marginRight: 120,
    height: 40,
    width: 40,
    borderRadius: 90,
  },
  top: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 45,
  },
  savebackground: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFFAFF",
    marginLeft: 120,
    height: 40,
    width: 40,
    borderRadius: 90,
  },
});

export default Price;
