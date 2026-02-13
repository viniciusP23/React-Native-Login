import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

import { Button } from "./assets/components/Button"
import { Input } from "./assets/components/input"

export default function Index() {

    return (
        <ScrollView>
            <View style={style.container}>

                <Image source={require("./assets/img1.jpg")} style={style.illustration} />

                <Text style={style.title}>Entrar</Text>
                <Text style={style.subtitle}>Acesse sua conta com e-mail e senha.</Text>

                <View style={style.form}>
                    <Input placeholder="E-mail" keyboardType="email-address" />
                    <Input placeholder="Senha" secureTextEntry />
                    <Button label="Entrar"/>
                </View>

            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdfdfd",
        padding: 32
    },

    illustration: {
        width: "100%",
        height: 330,
        resizeMode: "contain",
        marginTop: 62,
    },

    title: {
        fontSize: 32,
        fontWeight: 900,
    },

    subtitle: {
        fontSize: 16,
    },

    form: {
        marginTop: 24,
        gap: 12,
    }
})