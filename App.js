import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Main from "./Pages/Main";
import Favor from "./Pages/Favor";
import Eat from "./Pages/Eat";
import Personal from "./Pages/Personal";
import Information from "./Pages/Information";
import Price from "./Pages/price";
import Restaurant from "./Pages/restaurant";

export default function App() {
    const [pageStatus, setPageStatus] = useState({
        //control the page status
        pages: {
            main: 1, //main page
            eat: 0, //eat what page
            favor: 0, //favor page
            personal: 0, //personal account page
            information: 0, //reataurant page
            restaurant: 0, //restaurantinfo page
            price: 0, //price page
        },
        navbar: 1, //navbar
    });
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {pageStatus.pages.main ? (
                <Main pageStatus={pageStatus} setPageStatus={setPageStatus} />
            ) : null}
            {pageStatus.pages.eat ? <Eat /> : null}
            {pageStatus.pages.favor ? <Favor /> : null}
            {pageStatus.pages.personal ? <Personal /> : null}
            {pageStatus.pages.information ? <Information /> : null}
            {pageStatus.pages.restaurant ? <Restaurant /> : null}
            {pageStatus.pages.price ? <Price /> : null}
            {pageStatus.navbar ? (
                <Navbar pageStatus={pageStatus} setPageStatus={setPageStatus} />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E0E0E0",
    },
});
