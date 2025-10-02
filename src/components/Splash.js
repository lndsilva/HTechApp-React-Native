import React from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";

export default () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/logo_rtech.jpg")}
                style={styles.img} />
            <Text style={styles.txtSplash}>HTech - Tecnology</Text>
            <ActivityIndicator size="large"
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                color="#556F82" />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",       
    },
    txtSplash: {
        fontSize: 25,
        textAlign: "center",
        margin: 20,
    },
    img: {
        marginTop: 20,
        width: 150,
        height: 150,
        alignSelf: "center",
    }
})