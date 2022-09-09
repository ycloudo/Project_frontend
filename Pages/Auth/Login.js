import React, { useContext, useState } from "react";
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
import Header from "../../Components/SignPage/Header";
import { AuthContext } from "../../content/AuthContext";
import ErrorMsg from "../../Components/SignPage/ErrorMsg";

const Login = ({ navigation, route }) => {
    const Icon_user = (props) => <Icon_f {...props} name="user" />;
    const Icon_pwd = (props) => <Icon_o {...props} name="key" />;
    const { login } = useContext(AuthContext);
    const [account, setAccount] = useState("");
    const [password, setPwd] = useState("");
    const [InputValid, setInputValid] = useState(true); //控制error message
    const signupHandler = () => {
        navigation.navigate("signup");
    };
    const LoginHandler = async () => {
        if (account === "" || password === "") {
            setInputValid(false);
        } else {
            const res = await login(account, password);
            if (res.message) {
                setInputValid(false);
            }
        }
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={ctr.main_ctr}>
                <View style={ctr.header_ctr}>
                    <Header pagename={route.name} />
                </View>
                <View style={ctr.content_ctr}>
                    <Text style={content.title}>登入</Text>
                    <Text style={content.discription}>
                        立即登入以獲取美食評論!
                    </Text>
                    <View style={content.input}>
                        <Input
                            label="使用者帳號"
                            Icon={Icon_user}
                            secure={false}
                            inputStateHandler={setAccount}
                            input={account}
                            isValid={InputValid}
                            setInputValid={setInputValid}
                        />
                        <Input
                            label="使用者密碼"
                            Icon={Icon_pwd}
                            secure={true}
                            inputStateHandler={setPwd}
                            input={password}
                            isValid={InputValid}
                            setInputValid={setInputValid}
                        />
                    </View>
                    {!InputValid ? <ErrorMsg /> : null}
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
                            handler={LoginHandler}
                        >
                            登入
                        </AuthButton>
                        <View style={content.bottom}>
                            <Text
                                onPress={signupHandler}
                                style={content.bottom_text}
                            >
                                還沒有帳號嗎?
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={ctr.bottom_ctr}></View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const ctr = StyleSheet.create({
    main_ctr: {
        height: "100%",
        backgroundColor: "#EFFAFF",
        display: "flex",
        flexDirection: "column",
    },
    header_ctr: {
        paddingTop: "20%",
        height: "20%",
    },
    content_ctr: {
        alignItems: "center",
        height: "55%",
        width: "100%",
    },
    bottom_ctr: {
        height: "25%",
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "50%",
    },
    btn: {
        top: "10%",
        height: "10%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        left: "15%",
    },
    bottom: {
        top: "20%",
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
const login_btn = StyleSheet.create({
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

export default Login;
