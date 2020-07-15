import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        backgroundColor: "black"
    },
    scrollContainerSecond: {
        flex: 1,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "space-between"
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
    message: {
        color: "white",
        fontSize: 17,
        marginTop: 52
    },
    textInput: {
        backgroundColor: "#1c1c1e",
        width: "100%",
        marginTop: 32,
        paddingVertical: 19,
        paddingHorizontal: 24,
        borderRadius: 10,
        color: "white",
        fontSize: 17
    },
    forgotPasswordContainer: {
        alignSelf: "flex-end",
        marginTop: 18
    },
    forgotPasswordText: {
        color: "#ffffff",
        opacity: 0.3,
        fontSize: 14
    },
    button: {
        width: "100%",
        height: 48,
        marginTop: 48,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25
    },
    buttonText: {
        color: "white",
        fontWeight: "600"
    },
    dontHaveAccountText: {
        color: "white",
        fontSize: 17,
        fontWeight: "500",
        marginTop: 53
    },
    signUpButton: {
        width: "98.7%",
        height: 45.5,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25
    }
});

export default styles;
