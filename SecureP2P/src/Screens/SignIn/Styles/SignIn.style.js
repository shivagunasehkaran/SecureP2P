import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 150,
        backgroundColor: '#64c0d1'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Avenir-Black',
        marginTop: 50,
        paddingLeft: 30
    },
    headerSubTitle: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Avenir-Black',
        paddingLeft: 30,
        paddingTop: 10
    },
    cententer: {
        width: '100%',
        height: 550,
        backgroundColor: '#daeaed'
    },
    cententerTitle: {
        color: '#000',
        fontSize: 13,
        fontFamily: 'Avenir-Medium',
        paddingLeft: 30
    },
    errorMessage: {
        color: '#f02424',
        fontSize: 13,
        fontFamily: 'Avenir-Medium',
        paddingLeft: 30
    },
    textInput: {
        fontSize: 15,
        paddingLeft: 10,
        marginLeft: 30,
        marginTop: 12,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#718185',
        height: 45,
        marginRight: 30
    },
    submit: {
        height: 50,
        backgroundColor: '#64c0d1',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        borderRadius: 5,
        marginTop: 40
    },
    submitTitle: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Avenir-Black'
    },
    alreadySignInLabel: {
        color: '#64c0d1',
        fontSize: 15,
        fontFamily: 'Avenir-Black',
        textAlign: 'center'
    },
});