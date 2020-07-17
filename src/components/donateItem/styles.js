import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#1c1c1e",
        paddingHorizontal: 16,
        paddingTop: 16
    },
    avatarNameContainer: {
        flexDirection: "row",
    },
    avatar: {
        width: 74,
        height: 74,
        borderRadius: 10,
        backgroundColor: "red"
    },
    infoContainer: {
        marginLeft: 16
    },
    nameOfBusinessText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600"
    },
    secondInfoText: {
        color: "#8d8d89",
        fontSize: 15,
        marginTop: 5
    },
    goalContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 18
    },
    goalText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },
    goalPrice: {
        color: "#98989f",
        fontSize: 16
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    button: {
        paddingVertical: 14,
        justifyContent: "center",
        alignItems: "center",
        width: 170,
        borderRadius: 30,
        marginVertical: 24
    },
    buttonText: {
        color: "white",
        fontWeight: "600"
    },
    shareButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    shareButtonText: {
        color: "#007aff",
        fontSize: 17,
        fontWeight: "600",
        marginRight: 6
    },
});

export default styles;