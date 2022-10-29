import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react';
import {
  ScrollView,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import Card from '../Components/Card';
import SearchBox from '../Components/SearchBox';
import { useScrollToTop } from '@react-navigation/native';
import { API_URL } from '@env';
import { UserContext } from '../content/UserContext';
import { getItemAsync } from 'expo-secure-store';

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
const Main = ({ navigation }) => {
  const { UserInfoState } = useContext(UserContext);
  const placeholder = '...來點日式料理?';
  const color = '#FFFAFA';
  const ref = useRef(null);
  useScrollToTop(ref);
  //for data setting
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(99);
  const [datalist, setDatalist] = useState([]);
  //for lazy load
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMoredata = () => {
    setPage((prev) => prev + 1);
  };
  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };
  const renderItem = ({ item, index }) => (
    <Card
      item={item}
      navigation={navigation}
      counter={index + 1}
      key={item.id}
      favorList={UserInfoState.favor}
    />
  );
  const setStatusFilter = (id) => {
    if (id != 99) {
      setDatalist([...data.filter((e) => e.res_type == id)]);
    } else {
      setDatalist(data);
    }
    setStatus(id);
  };
  const fetchdata = () => {
    const requestOption = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setIsLoading(true);
    fetch(`${API_URL}/restaurant/all/${page}`, requestOption)
      .then((res) => res.json())
      .then((json) => {
        json.map((e) => {
          console.log(e.name);
        });
        setData([...data, ...json]);
        setDatalist([...data, ...json]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    console.log(page);
    fetchdata();
  }, [page]);
  return (
    <View style={styles.container}>
      <View style={styles.option_container}>
        <SearchBox
          navigation={navigation}
          styles={Seacrhbox_style}
          placeholder={placeholder}
          color={color}
        />
        <View style={styles.listTab}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {listTab.map((e, index) => {
              return (
                <TouchableOpacity
                  style={[styles.btnTab, status == e.id && styles.btnTabActive]}
                  onPress={() => setStatusFilter(e.id)}
                  key={index}
                >
                  <View style={styles.box}>
                    {e.status == '全部' ? (
                      <Image
                        source={require('../assets/food.png')}
                        style={styles.photo}
                      />
                    ) : e.status == '中式' ? (
                      <Image
                        source={require('../assets/food1.png')}
                        style={styles.photo}
                      />
                    ) : e.status == '日式' ? (
                      <Image
                        source={require('../assets/food2.png')}
                        style={styles.photo}
                      />
                    ) : e.status == '韓式' ? (
                      <Image
                        source={require('../assets/food3.png')}
                        style={styles.photo}
                      />
                    ) : e.status == '西式' ? (
                      <Image
                        source={require('../assets/food5.png')}
                        style={styles.photo}
                      />
                    ) : e.status == '泰式' ? (
                      <Image
                        source={require('../assets/food7.png')}
                        style={styles.photo}
                      />
                    ) : e.status == '美式' ? (
                      <Image
                        source={require('../assets/food4.png')}
                        style={styles.photo}
                      />
                    ) : e.status == '異國料理' ? (
                      <Image
                        source={require('../assets/food6.png')}
                        style={styles.photo}
                      />
                    ) : (
                      <Image
                        source={require('../assets/food8.png')}
                        style={styles.photo}
                      />
                    )}
                  </View>

                  <Text style={styles.textTab}>{e.status}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.card_container}
        data={data}
        renderItem={renderItem}
        onMomentumScrollEnd={() => {
          fetchMoredata();
        }}
        onEndReachedThreshold={0.2}
        onMomentumScrollBegin={() => {
          setIsLoading(true);
        }}
        ListFooterComponent={renderLoader}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
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
    width: 65,
    height: 65,
  },
  photo: {
    width: 40,
    height: 40,
  },
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
    paddingBottom: 90,
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
    marginTop: 25,
    flexDirection: 'row',
  },
  btnTab: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    //透明度要調整
  },
  textTab: {
    fontSize: 15,
    marginTop: 10,
  },
  btnTabActive: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    alignItems: 'center',
  },
});
const Seacrhbox_style = StyleSheet.create({
  input: {
    backgroundColor: '#FFFAFA',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flexGrow: 1,
    fontSize: 17,
  },
  searchbox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  searchbotton: {
    padding: 5,
    backgroundColor: '#FFC107',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default Main;
