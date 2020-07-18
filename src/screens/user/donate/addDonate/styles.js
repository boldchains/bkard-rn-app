import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    headerContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    backButton: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    headerText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    donateContainer: {
        backgroundColor: "#1c1c1e",
        alignItems: "center",
        paddingHorizontal: 16,
        borderRadius: 10,
        marginHorizontal: 16,
        marginVertical: 50,
        paddingVertical: 25
    },
    nameOfBusinessText: {
        color: "white",
        fontSize: 22,
        fontWeight: "600"
    },
    paymentMethodTextContainer: {
        width: "100%",
        marginTop: 30
    },
    paymentMethodText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },
    priceContainer: {
        width: "100%",
        height: 40,
        borderRadius: 5,
        backgroundColor: "#2a2b2a",
        marginTop: 17,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16
    },
    numberContainer: {
        width: "100%",
        marginTop: 60,
    },
    numberRowContainer: {
        flexDirection: "row"
    },
    numberButton: {
        borderRadius: 4,
        flex: 1,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#444745",
    },
    deleteNumberButton: {
        flex: 1,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    numberButtonText: {
        color: "white",
        fontSize: 22
    },
    noteContainer: {
        width: "100%",
        height: 40,
        borderRadius: 5,
        backgroundColor: "#2a2b2a",
        marginTop: 30,
        alignItems: "center",
        flexDirection: "row"
    },
    noteText: {
        color: "#98989f",
        fontSize: 16,
        marginLeft: 16,
        marginRight: 5,
        marginTop: -3
    },
    noteInputField: {
        //backgroundColor: "red",
        textAlignVertical: "center",
        flex: 1,
        color: "#98989f",
        fontSize: 16,
    },
    button: {
        width: "70%",
        height: 48,
        marginTop: 48,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 25
    },
    buttonText: {
        color: "white",
        fontWeight: "600"
    },
});

export default styles;