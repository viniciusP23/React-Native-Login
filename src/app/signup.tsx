import { Link } from "expo-router"
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

import { Button } from "./components/Button"
import { Input } from "./components/input"

export default function Signup() {

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.select({ios: "padding", android: "height"})}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                <View style={style.container}>

                    <Image source={require("./assets/img2.jpg")} style={style.illustration}/>

                    <Text style={style.title}>Cadastrar</Text>
                    <Text style={style.subtitle}>Crie sua conta para acessar.</Text>

                    <View style={style.form}>
                        <Input placeholder="Nome"/>
                        <Input placeholder="E-mail" keyboardType="email-address"/>

                        <Input placeholder="Senha" secureTextEntry />
                        <Input placeholder="Confirmar Senha" secureTextEntry/>

                        <Button label="Cadastrar" />
                    </View>

                    <Text style={style.footerText}>Já tem uma conta? {" "} <Link href="/" style={style.footerLink}>Entre aqui.</Link></Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
        textAlign: "center",
    },

    subtitle: {
        fontSize: 16,
        textAlign: "center",
    },

    form: {
        marginTop: 24,
        gap: 12,
    },

    footerText: {
        textAlign: "center",
        marginTop: 24,
        color: "#585860"
    },

    footerLink: {
        color: "#0f30c4",
        fontWeight: 700,
    }
})