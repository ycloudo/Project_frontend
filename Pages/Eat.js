import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const { width } = Dimensions.get("window");
import SelectDropdown from "react-native-select-dropdown";

const Option = ({ value1handler, value2handler }) => {
  const [option1, setOption1] = useState([]);
  const [option2, setOption2] = useState([]);
  const optionDropdownRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setOption1([
        {
          title: "餐廳特色",
          option2: [
            { title: "食物" },
            { title: "環境" },
            { title: "價錢" },
            { title: "服務" },
            { title: "交通" },
          ],
        },
        {
          title: "餐廳種類",
          option2: [
            { title: "中式" },
            { title: "日式" },
            { title: "韓式" },
            { title: "美式" },
            { title: "西式" },
            { title: "泰式" },
            { title: "義式料理" },
            { title: "輕食" },
          ],
        },
        { title: "自訂", option2: [{ title: "收藏" }, { title: "全部" }] },
      ]);
    }, 1000);
  }, []);

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.dropdownsRow}>
          <SelectDropdown
            data={option1}
            onSelect={(selectedItem, index) => {
              //console.log(selectedItem, index);
              optionDropdownRef.current.reset();
              setOption2([]);
              setOption2(selectedItem.option2);
              value1handler(index);
            }}
            defaultButtonText={"請選擇"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.title;
            }}
            rowTextForSelection={(item, index) => {
              return item.title;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
          <View style={styles.divider} />
          <SelectDropdown
            ref={optionDropdownRef}
            data={option2}
            onSelect={(selectedItem, index) => {
              //console.log(selectedItem, index);
              value2handler(index);
            }}
            defaultButtonText={"內容"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.title;
            }}
            rowTextForSelection={(item, index) => {
              return item.title;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "4%",
  },
  dropdownsRow: { flexDirection: "row", width: "100%", paddingHorizontal: 40 },
  dropdown1BtnStyle: {
    //上面框
    flex: 1,
    height: 35,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    //borderWidth: 1,
    //borderColor: '#444',
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" }, //上面字
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  }, //下面框
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" }, //下面字
  divider: { width: 12 },
  dropdown2BtnStyle: {
    flex: 1,
    height: 35,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    //borderWidth: 1,
    //borderColor: '#444',
  },
  dropdown2BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown2DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown2RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown2RowTxtStyle: { color: "#444", textAlign: "left" },
});

export default Option;
