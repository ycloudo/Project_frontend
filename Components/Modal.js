import React from "react";
import ReactNativeModal from "react-native-modal";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";

const CustomModal = ({ message, setModal, navigate, isNavigate }) => {
    const closeModalHandler = () => {
        setModal(false);
        if (isNavigate) {
            navigate();
        }
    };
    return (
        <ReactNativeModal isVisible={true} animationIn="bounceIn">
            <View style={styles.main_ctr}>
                <View style={styles.msg_ctr}>
                    <Text style={styles.msg}>{message}</Text>
                    <Pressable
                        style={styles.button}
                        onPressIn={closeModalHandler}
                    >
                        <Text
                            style={{
                                color: "#423067",
                                fontSize: 16,
                                fontWeight: "500",
                            }}
                        >
                            確認
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ReactNativeModal>
    );
};

const styles = StyleSheet.create({
    main_ctr: {
        flex: 1,
        justifyContent: "center",
    },
    msg_ctr: {
        backgroundColor: "#DBEEFF",
        height: 150,
        flexDirection: "column",
        justifyContent: "space-around",
        borderRadius: 10,
        alignItems: "center",
    },
    msg: {
        textAlign: "center",
        fontSize: 22,
    },
    button: {
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
        width: 60,
        height: 40,
        backgroundColor: "#FFE153",
    },
});

export default CustomModal;
