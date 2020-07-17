import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        borderBottomWidth: 1,
        borderColor: "#656565"
    },
    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        color: "white",
        fontSize: 17,
        marginLeft: 10
    },
    body: {
        padding: 10,
        paddingTop: 0
    },
    touchView: {
        flex: 1,
        height: 54,
        alignItems: "center",
        flexDirection: "row"
    },
    expandIcon: {
        position: "absolute",
        right: 0,
    }
});
export default styles;