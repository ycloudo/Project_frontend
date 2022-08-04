import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from "react-native";
import Input from "../../Components/Input";
import Icon_f from "@expo/vector-icons/Feather";
import Icon_o from "@expo/vector-icons/Octicons";
import AuthButton from "../../Components/AuthButton";

const Login = () => {
    const Icon_user = (props) => <Icon_f {...props} name="user" />;
    const Icon_pwd = (props) => <Icon_o {...props} name="key" />;
    const [account, setAccount] = useState("");
    const [password, setPwd] = useState("");
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={ctr.main_ctr}>
                <View style={ctr.header_ctr}></View>
                <View style={ctr.content_ctr}>
                    <Text style={content.title}>登入</Text>
                    <Text style={content.disscription}>
                        立即登入以獲取美食評論!
                    </Text>
                    <View style={content.input}>
                        <Input
                            label="使用者帳號"
                            Icon={Icon_user}
                            secure={false}
                            inputStateHandler={setAccount}
                            input={account}
                        />
                        <Input
                            label="使用者密碼"
                            Icon={Icon_pwd}
                            secure={true}
                            inputStateHandler={setPwd}
                            input={password}
                        />
                    </View>
                    <View style={content.btn}>
                        <AuthButton
                            Icon={() => (
                                <Icon_f
                                    name="arrow-right"
                                    size={25}
                                    color="white"
                                />
                            )}
                            styles={login_btn}
                        >
                            登入
                        </AuthButton>
                    </View>
                </View>
                <View style={ctr.bottom_ctr}>
                    <Text style={{ color: "gray", fontSize: 16 }}>
                        還沒有帳號嗎?
                        <Text
                            style={{ color: "#FFC107", fontWeight: "500" }}
                            onPress={() => {}}
                        >
                            立即註冊
                        </Text>
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const ctr = StyleSheet.create({
    main_ctr: {
        height: "100%",
        backgroundColor: "#FFFAFA",
        display: "flex",
        flexDirection: "column",
    },
    header_ctr: {
        height: "25%",
        borderBottomWidth: 1,
        borderBottomColor: "red",
    },
    content_ctr: {
        height: "65%",
        paddingLeft: "13%",
        paddingRight: "10%",
        paddingTop: "5%",
        // borderBottomWidth: 1,
        // borderBottomColor: "red",
    },
    bottom_ctr: {
        height: "10%",
        paddingTop: "10%",
        alignItems: "center",
    },
});
const content = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "500",
    },
    disscription: {
        paddingTop: "2%",
        fontSize: 16,
        color: "gray",
    },
    input: {
        paddingRight: "10%",
        paddingTop: "20%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "45%",
    },
    btn: {
        paddingRight: "10%",
        height: "10%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
});
const login_btn = StyleSheet.create({
    btn_ctr: {
        backgroundColor: "#FFC107",
        width: "40%",
        borderRadius: 30,
        paddingLeft: "4%",
        paddingRight: "4%",
        justifyContent: "space-around",
    },
    btn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    btn_text: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
        marginRight: 5,
        marginLeft: 8,
    },
});

export default Login;
