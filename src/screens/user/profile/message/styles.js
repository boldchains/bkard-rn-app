import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "black"
    },
    scrollContainer: {
        backgroundColor: "black"
    },
    scrollContainerSecond: {
        flex: 1,
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
    searchPeopleContainer: {
        flexDirection: "row",
        marginTop: 30,
        alignItems: "center"
    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 11,
        marginLeft: 10,
        backgroundColor: "#1c1c1e",
        borderRadius: 10,
    },
    searchInput: {
        flex: 1,
        textAlignVertical: "top",
        paddingVertical: 7,
        fontSize: 17,
        color: "rgba(235,235,245,0.6)"
    },
    menu: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#1c1c1e",
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    toSubjectContainer: {
        backgroundColor: "#1c1c1e",
        borderRadius: 10,
        marginTop: 8,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    toSubjectText: {
        color: "rgba(235,235,245,0.6)",
        fontSize: 17,
        marginHorizontal: 10,
    },
    bodyContainer: {
        backgroundColor: "#1c1c1e",
        borderRadius: 10,
        marginTop: 8,
        marginHorizontal: 10,
    },
    sendButton: {
        width: "100%",
        height: 48,
        marginVertical: 48,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25
    },
    sendButtonText: {
        color: "white",
        fontWeight: "600"
    },
});

export default styles;