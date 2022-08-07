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
import Header from "../../Components/SignPage/Header";

const Signup = ({ navigation, route }) => {
    const Icon_name = (props) => <Icon_ma {...props} name="text-account" />;
    const Icon_account = (props) => <Icon_f {...props} name="user" />;
    const Icon_pwd = (props) => <Icon_o {...props} name="key" />;
    const signinHandler = () => {
        navigation.navigate("login");
    };
    const onSignup = () => {};
    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-250}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={ctr.main}>
                    <View style={ctr.header}>
                        <Header pagename={route.name} />
                    </View>
                    <View style={ctr.content}>
                        <Text style={content.title}>註冊</Text>
                        <Text style={content.discription}>
                            建立帳號以獲取美食評論!
                        </Text>
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
                                handler={onSignup}
                            >
                                註冊
                            </AuthButton>
                            <View style={content.bottom}>
                                <Text
                                    onPress={signinHandler}
                                    style={content.bottom_text}
                                >
                                    已經有帳號了?
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={ctr.bottom}></View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const ctr = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: "#F6FFFF",
        display: "flex",
        flexDirection: "column",
    },
    header: {
        height: "17%",
        paddingTop: "17%",
    },
    content: {
        alignItems: "center",
        height: "70%",
        width: "100%",
    },
    bottom: {
        // height: "23%",
        paddingTop: "10%",
        alignItems: "center",
    },
});
const content = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "500",
        color: "#423067",
    },
    discription: {
        paddingTop: "2%",
        fontSize: 16,
        color: "#423067",
    },
    input: {
        width: "80%",
        paddingTop: "10%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "70%",
    },
    btn: {
        height: "10%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        left: "15%",
    },
    bottom: {
        borderColor: "#FFCE2D",
        borderBottomWidth: 2,
        width: 110,
    },
    bottom_text: {
        bottom: "30%",
        color: "gray",
        fontSize: 16,
    },
});
const signup_btn = StyleSheet.create({
    btn_ctr: {
        width: "70%",
        height: 100,
    },
    btn_text: {
        color: "#423067",
        fontSize: 20,
        fontWeight: "500",
        marginRight: 5,
        marginLeft: 8,
        top: "100%",
        textAlign: "center",
    },
});

export default Signup;
