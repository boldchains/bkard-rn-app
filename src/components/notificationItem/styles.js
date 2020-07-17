import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 12
    },
    avatar: {
        width: 47,
        height: 47,
        borderRadius: 25
    },
    informationContainer: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 20
    },
    informationText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },
    timeContainer: {
        justifyContent: "center"
    },
    timeText: {
        color: "#8d8d89",
        fontSize: 13
    }
});

export default styles;