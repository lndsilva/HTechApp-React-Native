import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import TelaPrincipal from "./components/TelaPrincipal";
import JanelaA from "./views/JanelaA";
import JanelaB from "./views/JanelaB";
import JanelaC from "./views/JanelaC";

// import MenuPrincipal from "./components/MenuPrincipal";
// import Login from "./components/Login";
// import Splash from "./components/Splash";

export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <JanelaA/>
            <JanelaB/>
            <JanelaC/>
            {/* <TelaPrincipal>App</TelaPrincipal> */}
            {/* <MenuPrincipal/> */}
            {/* <Login/> */}
            {/* <Splash /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})