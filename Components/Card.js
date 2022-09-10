import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon_save from "@expo/vector-icons/FontAwesome";
const Card = ({navigation,item,counter}) => {
    
    return (
        
        ((counter)%2 == '1')
        ?<TouchableOpacity onPress={() => navigation.navigate('price',item)}>
            <View  style={styles.container1}>
            <View style={styles.card1}>
                <View>
                    <View style={styles.name_bg1}>
                        <View style={styles.name1}>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    </View> 
                </View>
                        {item.save == '0'
                            ?<TouchableOpacity>
                                <Icon_save name="bookmark-o" size={30} color='#000000' style={styles.favor1}/>
                            </TouchableOpacity>
                            :<TouchableOpacity>
                                <Icon_save name="bookmark" size={30} color='#000000' style={styles.favor1}/>
                            </TouchableOpacity>
                        }
                    <Text>{item.name}</Text>
                    
                    <Text>{item.num}</Text>
                    
                </View>
            </View>
        </TouchableOpacity>
    
        :<TouchableOpacity onPress={() => navigation.navigate('price',item)}>
            <View  style={styles.container2}>
                <View style={styles.card2}>
                <View>
                    <View style={styles.name_bg2}>
                        <View style={styles.name2}>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    </View> 
                </View>
                        {item.save == '0'
                            ?<TouchableOpacity>
                                <Icon_save name="bookmark-o" size={30} color='#000000' style={styles.favor2}/>
                            </TouchableOpacity>
                            :<TouchableOpacity>
                                <Icon_save name="bookmark" size={30} color='#000000' style={styles.favor2}/>
                            </TouchableOpacity>
                        }
                    <Text>{item.name}</Text>
                    <Text>{item.num}</Text>
                </View>
            </View>
        </TouchableOpacity>
    
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFAFA",
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
