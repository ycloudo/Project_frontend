import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    TouchableOpacity,
} from "react-native";
import Icon_ma from "@expo/vector-icons/MaterialCommunityIcons";
import Icon_f from "@expo/vector-icons/Feather";
import Icon_o from "@expo/vector-icons/Octicons";
import Input from "../../Components/Input";
import AuthButton from "../../Components/AuthButton";

const Signup = () => {
    const Icon_name = (props) => <Icon_ma {...props} name="text-account" />;
    const Icon_account = (props) => <Icon_f {...props} name="user" />;
    const Icon_pwd = (props) => <Icon_o {...props} name="key" />;
    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-250}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={ctr.main}>
                    <View style={ctr.header}></View>
                    <View style={ctr.content}>
                        <Text style={content.title}>建立帳號</Text>
                        <View style={content.input}>
                            <Input
                                label="姓名"
                                Icon={Icon_name}
                                secure={false}
                                inputStateHandler={() => {}}
                                input={""}
                            />
                            <Input
                                label="帳號"
                                Icon={Icon_account}
                                secure={false}
                                inputStateHandler={() => {}}
                                input={""}
                            />
                            <Input
                                label="密碼"
                                Icon={Icon_pwd}
                                secure={true}
                                inputStateHandler={() => {}}
                                input={""}
                            />
                            <Input
                                label="確認密碼"
                                Icon={Icon_pwd}
                                secure={true}
                                inputStateHandler={() => {}}
                                input={""}
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
                                styles={signup_btn}
                            >
                                註冊
                            </AuthButton>
                        </View>
                    </View>
                    <View style={ctr.bottom}>
                        <Text style={{ color: "gray", fontSize: 16 }}>
                            已經有帳號了?
                            <Text
                                style={{ color: "#FFC107", fontWeight: "500" }}
                                onPress={() => {}}
                            >
                                立即登入
                            </Text>
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const ctr = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: "#FFFAFA",
        display: "flex",
        flexDirection: "column",
    },
    header: {
        height: "25%",
        borderBottomWidth: 1,
        borderBottomColor: "red",
    },
    content: {
        height: "65%",
        paddingLeft: "13%",
        paddingRight: "10%",
        paddingTop: "5%",
        // borderBottomWidth: 1,
        // borderBottomColor: "red",
    },
    bottom: {
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
    input: {
        paddingRight: "10%",
        paddingTop: "8%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "65%",
    },
    btn: {
        paddingRight: "10%",
        height: "10%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
});
const signup_btn = StyleSheet.create({
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

export default Signup;
