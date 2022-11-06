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
    listPacote: {
        width: "100%",
        height: "80%",
    },
    cardPacote: {
        marginHorizontal: "10%",
        width: "80%",
        borderWidth: 3,
        marginBottom: 30,
        alignItems: "center",
        borderRadius: 25,
        borderColor: "#852E7C",
    },
    txtNomePacote: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: "#852E7C",
        textDecorationLine: "underline",
        marginTop: 5,
    },
    txtSubTitulo: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        color: "#852E7C",
        marginTop: 10,
    },
    inclusosView: {
        marginHorizontal: "25%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
        marginBottom: 10,
    },
    txtDescricao: {
        marginVertical: 10,
        textAlign: "center",
        color: "#852e7c"
    },
    pacoteIcons: {
        fontSize: 25,
    }
})

export default styles