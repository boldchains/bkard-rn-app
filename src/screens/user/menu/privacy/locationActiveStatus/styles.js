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
    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 30
    },
    shareLocationText: {
        color: "white",
        fontSize: 17
    },
    greyText: {
        color: "rgba(255,255,255,0.4)",
        fontSize: 13,
        marginLeft: 10
    }
});

export default styles;