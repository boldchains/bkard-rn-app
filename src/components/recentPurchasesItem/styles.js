import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 12
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 10
    },
    informationContainer: {
        flex: 1,
        marginHorizontal: 20
    },
    informationText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600"
    },
    dateText: {
        fontSize: 15,
        color: "#8d8d89"
    },
    priceContainer: {
    },
    priceText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600"
    }
});

export default styles;