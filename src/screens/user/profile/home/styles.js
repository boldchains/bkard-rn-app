import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "orange"
    },
    modalMenuContainer: {
        width: 300,
        height: 300,
        backgroundColor: "red"
    },
    modalMenuButton: {
        backgroundColor: "blue"
    },
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#000000"
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
    businessContainer: {
        marginTop: 38,
        marginHorizontal: 10,
        flexDirection: "row"
    },
    businessAvatar: {
        width: 104,
        height: 104,
        borderRadius: 10,
    },
    businessInformationContainer: {
        flex: 1,
        marginLeft: 10,
    },
    businessWebAddress: {
        color: "#5a91f7",
        fontSize: 15
    },
    businessGoalContainer: {
        paddingHorizontal: 10,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    goalContainer: {
        flexDirection: "row"
    },
    goalText: {
        color: "white",
        fontSize: 15
    },
    goalPrice: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 5
    },
    donateButton: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 6,
        width: 121,
        borderRadius: 25
    },
    donateButtonText: {
        color: "white",
        fontWeight: "600"
    },


    userInformationContainer: {
        alignItems: "center",
        marginTop: 38
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
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 20,
        paddingHorizontal: 10
    },
    button: {
        flex: 1,
        height: 38,
        borderRadius: 5,
        marginRight: 8,
        backgroundColor: "#1c1c1e",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "600"
    },
    heartButton: {
        width: 38,
        height: 38,
        borderRadius: 5,
        backgroundColor: "#1c1c1e",
        justifyContent: "center",
        alignItems: "center"
    },
    followersContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30
    },
    followersItem: {
        alignItems: "center",
        width: 82
    },
    followersNumber: {
        color: "white",
        fontSize: 18,
        fontWeight: "600"
    },
    followersText: {
        color: "white",
        fontSize: 12,
    },
    verticalDivider: {
        height: "100%",
        width: 1,
        backgroundColor: "white"
    },
    horizontalDivider: {
        width: "95%",
        height: 1,
        backgroundColor: "white",
        marginTop: 30,
        alignSelf: "center"
    },
    purchasesContainer: {
        marginTop: 20
    },
    purchasesHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10
    },
    recentPurchasesText: {
        color: "white",
        fontSize: 25,
        fontWeight: "900"
    },
    seeAllButton: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    seeAllButtonText: {
        color: "#ea465b",
        fontSize: 16,
        fontWeight: "600"
    },
    productsServicesContainer: {
        marginTop: 20,
        //paddingLeft: 10
    },
    sellingText: {
        fontSize: 16,
        color: "#8d8d89",
        marginVertical: 15
    },
    purchaseImage: {
        width: 88,
        height: 88,
        borderRadius: 10,
        marginRight: 10
    },
    businessPhotos: {
        width: 109,
        height: 109,
        borderRadius: 7,
        marginRight: 10
    }
});

export default styles;