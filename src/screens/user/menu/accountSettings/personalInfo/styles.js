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
        fontWeight: "600"
    },
    nameContainer: {
        marginTop: 45,
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 17,
        marginLeft: 10
    },
    inputField: {
        flex: 1,
        color: "white",
        fontSize: 17,
        borderBottomWidth: 1,
        borderColor: "#656565"
    },
    contactInfoContainer: {
        marginTop: 24
    },
    contactInfoText: {
        color: "white",
        fontSize: 17,
        fontWeight: "600",
        marginLeft: 10
    },
    phoneContainer: {
        marginTop: 32,
        borderBottomWidth: 1,
        borderColor: "#656565",
        flexDirection: "row",
        paddingBottom: 15,
        paddingHorizontal: 10
    },
    phoneButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    addPhoneContainer: {
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center"
    }
});

export default styles;