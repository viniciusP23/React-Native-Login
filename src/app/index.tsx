import { StyleSheet, Text, View } from "react-native"

export default function Index() {

    return (
        <View style={style.container}>
            <Text style={style.title}>Ola</Text>
        
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold" 
    }
})