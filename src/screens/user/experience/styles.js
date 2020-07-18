import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    mainModalContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalImage: {
        width: 40,
        height: 40,
        marginTop: 24,
    },
    modalText: {
        color: "white",
        fontSize: 14
    },
    modalButtonContainer: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderColor: "#656565"
    },
    modalButton: {
        flex: 1,
        height: 43,
        justifyContent: "center",
        alignItems: "center"
    },
    modalButtonText: {
        color: "#5a91f7"
    },
    textContainer: {
        marginVertical: 14,
        marginHorizontal: 26,
        justifyContent: "center",
        alignItems: "center"
    },
    experienceContainer: {
        borderRadius: 14,
        width: 270,
        backgroundColor: "#262626",
        alignItems: "center"
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
    mainImage: {
        width: "100%",
        height: 189,
        borderRadius: 10,
    },
    shopTextContainer: {
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    shopText: {
        color: "white",
        fontSize: 25,
        fontWeight: "800"
    },
    productsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    businessNameText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },
    secondInfoText: {
        color: "#8d8d89",
        fontSize: 13
    },
    soldContainer: {
        position: "absolute",
        zIndex: 10,
        left: 12,
        top: 12,
        backgroundColor: "red",
        padding: 2,
        borderRadius: 10
    },
    soldText: {
        color: "white",
        fontWeight: "500",
        fontSize: 8
    }
});

export default styles;