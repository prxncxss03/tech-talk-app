import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        margin: 4,
        backgroundColor: '#fff',
        padding: 10,
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

    input:{
        padding: 10,
    },
        
    floatingBtn: {
        position: 'absolute',
        bottom: 10,
        right: 0,
        marginRight: 5,
        marginBottom: 50,
        
        color: '#5aa55a',
        backgroundColor: 'transparent',
        width: 65,
        height: 65,
        borderRadius: 50,
    },
});