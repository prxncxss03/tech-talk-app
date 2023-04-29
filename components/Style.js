import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        margin: 4,
        backgroundColor: '#fff',
    },

    postWrapper: {
        padding: 5,
        margin: 5,
        borderRadius: 3,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderWidth: 1,
        marginVertical: 5,
    },

    content:{
        fontSize: 20,
        fontWeight: 'bold',

    },

    addButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 16,
    },
        
    floatingBtn: {
        position: 'absolute',
        bottom: 10,
        right: 0,
        margin: 16,

    },
});