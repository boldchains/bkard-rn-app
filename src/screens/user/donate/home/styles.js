import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    headerContainer: {
        flexDirection: "row",
        marginTop: 5
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
        paddingVertical: 7,
        fontSize: 17,
        color: "rgba(235,235,245,0.6)"
    },
    menu: {
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        color: "white",
        fontSize: 25,
        fontWeight: "800",
        marginLeft: 10,
        marginTop: 20
    },
    donateItemContainer: {
        marginTop: 20,
        paddingHorizontal: 10
    }
});

export default styles;