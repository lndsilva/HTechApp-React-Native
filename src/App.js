import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import MenuPrincipal from "./components/MenuPrincipal";
// import Login from "./components/Login";
// import Splash from "./components/Splash";

export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <MenuPrincipal/>
            {/* <Login/> */}
            {/* <Splash /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    }
})