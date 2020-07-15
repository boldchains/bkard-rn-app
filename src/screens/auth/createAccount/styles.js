import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        backgroundColor: "black"
    },
    scrollContainerSecond: {
        paddingHorizontal: 16,
        alignItems: "center"
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
    textContainer: {
        backgroundColor: "green",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    headerText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },
    imagePlus: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#1c1c1e",
        position: "absolute",
        right: 26,
        bottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        width: 160,
        height: 160,
        borderRadius: 80
    },
    logo: {
        width: 213,
        height: 198,
    },
    appName: {
        color: "#ffffff",
        fontSize: 30,
        marginTop: 6,
        marginBottom: 47
    },
    textInput: {
        backgroundColor: "#1c1c1e",
        width: "100%",
        marginTop: 8,
        paddingVertical: 19,
        paddingHorizontal: 24,
        borderRadius: 10,
        color: "white",
        fontSize: 17
    },
    privacyPolicyContainer: {
        paddingHorizontal: 25,
        flexDirection: "row",
        marginTop: 23,
    },
    privacyPolicyCheckButton: {
        width: 20,
        height: 20,
        backgroundColor: "#222222",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    privacyPolicyText: {
        color: "#ffffff",
        opacity: 0.3,
        fontSize: 14,
        marginLeft: 13
    },
    button: {
        width: "100%",
        height: 48,
        marginVertical: 48,
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
    },
    birtdateInput: {
        width: "100%",
        //height: 30,
        backgroundColor: "#1c1c1e",
        borderRadius: 10,
        marginTop: 8,
        paddingVertical: 19,
        paddingHorizontal: 24,
    },
    birthdateText: {
        color: "white",
        fontSize: 17
    }
});

export default styles;
