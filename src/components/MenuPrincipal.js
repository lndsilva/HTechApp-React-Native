import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default () => {
    return (
        <View>
            <Text style={styles.txtTitulo}>Dashboard</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtTitulo: {
        fontSize: 24,
        alignSelf: "center",
    }
})