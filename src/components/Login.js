import React from "react";
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

export default () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo_rtech.jpg')} style={styles.img} />
            <Text style={styles.txtTitulo}>Welcome the HTech Tecnology</Text>
            <TextInput placeholder="E-mail" style={styles.caixaEntrada} />
            <TextInput placeholder="Password" style={styles.caixaEntrada} />
            <Text style={styles.txtForgot}>Forgot yor password?</Text>
            <TouchableOpacity style={styles.botao}>
                <Text style={{ color: "#ffffffff" }}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.txtAccount}>Don't have an account? Sign up</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 30
    },
    txtTitulo: {
        marginTop: 20,
        marginBottom: 20,
        color: "#000000ff",
        fontSize: 24,
        alignSelf: "center",
    },
    caixaEntrada: {
        borderColor: "#556F82",
        borderWidth: 2,
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        padding: 20,
        height: 65,
        fontSize: 20,
    },
    txtForgot: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        color: "#050505ff",
        fontSize: 14,
        alignSelf: "flex-end",
        textAlign: "center",
    },
    txtAccount: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        color: "#050505ff",
        fontSize: 14,
        textAlign: "center",
    },
    botao: {
        borderColor: "#000",
        borderWidth: 2,
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "#000",
        color: "#ffffffff",
        backgroundColor: "#556F82",
        padding: 20,
    },
    img: {
        marginTop: 20,
        width: 180,
        height: 180,
        alignSelf: "center",
    }
})