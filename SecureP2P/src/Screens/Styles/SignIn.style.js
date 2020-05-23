import { StyleSheet } from 'react-native';
import Colors from '../../Themes/Color';
import Fonts from '../../Themes/Fonts';

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 150,
        backgroundColor: Colors.appColor
    },
    headerTitle: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: Fonts.FONT_BLACK,
        marginTop: 50,
        paddingLeft: 30
    },
    headerSubTitle: {
        color: Colors.white,
        fontSize: 15,
        fontFamily: Fonts.FONT_BLACK,
        paddingLeft: 30,
        paddingTop: 10
    },
    cententer: {
        width: '100%',
        height: 600,
        backgroundColor: Colors.appBackGround
    },
    cententerTitle: {
        color: Colors.black,
        fontSize: 13,
        fontFamily: Fonts.FONT_MEDIUM,
        paddingLeft: 30
    },
    errorMessage: {
        color: Colors.errorMessage,
        fontSize: 13,
        fontFamily: Fonts.FONT_MEDIUM,
        paddingLeft: 30
    },
    textInput: {
        fontSize: 15,
        paddingLeft: 10,
        marginLeft: 30,
        marginTop: 12,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: Colors.borderColor,
        height: 45,
        marginRight: 30
    },
    submit: {
        height: 50,
        backgroundColor: Colors.appColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        borderRadius: 5,
        marginTop: 40
    },
    submitTitle: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: Fonts.FONT_BLACK,
    },
    alreadySignInLabel: {
        color: Colors.appColor,
        fontSize: 15,
        fontFamily: Fonts.FONT_BLACK,
        textAlign: 'center'
    },
});