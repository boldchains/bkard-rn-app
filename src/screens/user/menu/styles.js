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
    collapseMenuContainer: {
        marginLeft: 50
    },
    optionsContainer: {
        marginVertical: 45,
        paddingHorizontal: 10
    },
    optionsItem: {
        flexDirection: "row",
        alignItems: "center"
    },
    optionsItemIcon: {
        width: 40,
        alignItems: "center"
    },
    optionsItemButton: {
        flex: 1,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: "#656565"
    },
    optionsItemButtonText: {
        color: "white",
        fontSize: 17,
        marginTop: 30
    }
});

export default styles;