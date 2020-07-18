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
    },
    paymentContainer: {
        marginTop: 35
    },
    savedPaymentText: {
        color: "white",
        fontSize: 17,
        fontWeight: "800",
        marginLeft: 10
    },
    cardContainer: {
        borderColor: "#656565",
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingLeft: 10,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardNameText: {
        color: "white",
        fontSize: 17
    },
    editButton: {
        marginRight: 10
    },
    editButtonText: {
        color: "#5a91f7",
        fontSize: 17
    },
    addPhoneContainer: {
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15
    },
    phoneButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    addNewText: {
        color: "white",
        fontSize: 17,
        marginLeft: 10
    }
});

export default styles;