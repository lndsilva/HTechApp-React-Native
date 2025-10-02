import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import JanelaA from "../views/JanelaA"
import JanelaB from "../views/JanelaB"
import JanelaC from "../views/JanelaC"
import NavStack from "../components/NavStack"

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator
        initialRouteName="JanelaA"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="JanelaA"
            options={{ title: "Informações iniciais" }}>
            {props => (
                <NavStack {...props} avancar="JanelaB">
                    <JanelaA />
                </NavStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="JanelaB">
            {props => (
                <NavStack {...props} avancar="JanelaC" voltar>
                    <JanelaB />
                </NavStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="JanelaC" component={JanelaC} />
    </Stack.Navigator>
)