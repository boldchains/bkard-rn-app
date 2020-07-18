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
    saveButtonContainer: {
        position: "absolute",
        right: 10
    },
    saveButtonText: {
        fontSize: 17,
        color: "rgb(90,145,247)"
    },
    passwordContainer: {
        marginTop: 35
    },
    inputField: {
        borderBottomWidth: 1,
        borderColor: "#656565",
        paddingVertical: 15,
        color: "white",
        fontSize: 17,
        paddingLeft: 10
    }
});

export default styles;