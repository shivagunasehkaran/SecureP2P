import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    photosContainer: {
        flex: 2,
        height: 180,
        backgroundColor: '#D96F9E'
    },
    text: {
        fontSize: 22,
        fontFamily: 'Avenir-Black',
        color: '#fff',
        marginTop: 80,
        textAlign: 'center'
    },
    photoIcon: {
        marginTop: 50,
        alignSelf: 'center',
        width: 80,
        height: 80,
        borderRadius: 80 / 2
    },
    passwordContainer: {
        flex: 2,
        height: 180,
        backgroundColor: '#8541B0'
    },
    passwordIcon: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginTop: 50
    }
});