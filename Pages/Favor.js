import React, { useState, useEffect, useContext } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Card from '../Components/Card';
import Icon_favor from '@expo/vector-icons/FontAwesome';
import { useScrollToTop } from '@react-navigation/native';
import { API_URL } from '@env';
import * as SecureStore from 'expo-secure-store';
import { UserContext } from '../content/UserContext';

const listTab = [
  {
    id: 99,
    status: '全部',
  },
  {
    id: 1,
    status: '中式',
  },
  {
    id: 2,
    status: '日式',
  },
  {
    id: 3,
    status: '韓式',
  },
  {
    id: 4,
    status: '美式',
  },
  {
    id: 5,
    status: '西式',
  },
  {
    id: 6,
    status: '異國料理',
  },
  {
    id: 7,
    status: '泰式',
  },
  {
    id: 8,
    status: '輕食',
  },
];
const Favor = ({ navigation }) => {
  const { UserInfoState, userContext } = useContext(UserContext);
  let counter = 0;
  let option = 0;
  const ref = React.useRef(null);
  useScrollToTop(ref);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(99);
  const [datalist, setDatalist] = useState(data);
  const [loading, setLoading] = useState(true);
  const setStatusFilter = (id) => {
    if (id != 99) {
      setDatalist([...data.filter((e) => e.res_type == id)]);
    } else {
      setDatalist(data);
    }
    setStatus(id);
  };
  const fetchres = async (favors) => {
    const requestOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        favors: favors,
      }),
    };
    return fetch(`${API_URL}/restaurant/getInfoById`, requestOption).then(
      (res) => res.json()
    );
  };
  useEffect(() => {
    const fetchdata = async () => {
      const restaurants = await fetchres(UserInfoState.favor);
      setData(restaurants);
      setDatalist(restaurants);
    };
    fetchdata();
    setLoading(false);
  }, [UserInfoState]);
  return (
    <View style={styles.container}>
      <View style={styles.option_container}>
        <View style={styles.back_favor}>
          <Icon_favor name="bookmark" size={30} color="#FFC107" />
          <Text style={styles.favor_title}>我的收藏</Text>
        </View>
        <View style={styles.listTab}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {listTab.map((e) => {
              option += 1;
              return (
                <TouchableOpacity
                  style={[styles.btnTab, status == e.id && styles.btnTabActive]}
                  onPress={() => setStatusFilter(e.id)}
                  key={option}
                >
                  <Text style={styles.textTab}>{e.status}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.card_container} ref={ref}>
        <View>
          {datalist.map((item) => {
            counter += 1;
            return (
              <Card
                item={item}
                navigation={navigation}
                counter={counter}
                key={counter}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFFAFF',
    height: '100%',
  },
  option_container: {
    //top:80,
    top: '10%',
    paddingLeft: '6%',
    paddingRight: '6%',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 100,
  },
  card_container: {
    //top:20,
    top: '5%',
    paddingLeft: '6%',
    paddingRight: '6%',
    display: 'flex',
    flexDirection: 'column',
  },
  listTab: {
    flexDirection: 'row',
  },
  btnTab: {
    width: 70,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#EFFAFF',
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 15,
  },
  btnTabActive: {
    borderBottomColor: '#FFC107',
  },
  back_favor: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  favor_title: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Favor;
