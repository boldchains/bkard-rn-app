import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
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
    menuContainer: {
        position: "absolute",
        right: 0
    },
    menu: {
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    userInformationContainer: {
        alignItems: "center",
        marginTop: 38
    },
    heartButtonContainer: {
        position: "absolute",
        zIndex: 10,
        right: 10
    },
    heartButton: {
        width: 38,
        height: 38,
        borderRadius: 5,
        backgroundColor: "#1c1c1e",
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        width: 121,
        height: 121,
        borderRadius: 65
    },
    userFullName: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
        marginTop: 5
    },
    userCity: {
        color: "#8d8d89",
        fontSize: 15
    },
    horizontalDivider: {
        width: "95%",
        height: 1,
        backgroundColor: "white",
        marginTop: 30,
        alignSelf: "center"
    },
    campaignTextContainer: {
        marginTop: 24,
        paddingHorizontal: 24
    },
    campaignText: {
        color: "white",
        fontSize: 25,
        fontWeight: "900"
    },
    campaignItemText: {
        color: "#8d8d89",
        fontSize: 16
    },
    campaignItem: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export default styles;