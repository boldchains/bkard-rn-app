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
    recentPurchasesItemContainer: {
        marginHorizontal: 20,
        marginVertical: 30
    },
    horizontalDivider: {
        width: "100%",
        height: 1,
        backgroundColor: "white",
        alignSelf: "center"
    },
});

export default styles;