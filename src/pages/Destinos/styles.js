import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    txtDestinos: {
        color: "#FFF",
        fontSize: 30,
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "#852E7C",
        textDecorationLine: "underline",
    },
    txtView: {
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    destinosList: {
        height: 375,
        backgroundColor: "#f4f4f4",
        borderColor: "#852E7C",
        borderWidth: 5,
        borderRadius: 25,
        marginHorizontal: 20,

    },
    itemDestino: {
        color: "#852E7C",
        fontWeight: "bold",
        textAlign: "center",
        margin: 5,
        borderBottomWidth: 1.5,
        borderBottomColor: "#852E7C",
        fontSize: 25,
    }
})

export default styles