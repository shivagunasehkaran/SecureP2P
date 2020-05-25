import { StyleSheet } from 'react-native';
import Colors from '../../Themes/Color';
import Fonts from '../../Themes/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    titleText: {
        fontSize: 16,
        fontFamily: Fonts.FONT_ROMAN,
        color: Colors.black,
        marginTop: 14
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    textContainer: {
        flex: 2,
        height: 45,
        backgroundColor: Colors.white,
        borderColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowColor: Colors.black,
        shadowOpacity: 0.2,
        elevation: 1,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        fontSize: 16,
        paddingLeft: 15,
        fontFamily: Fonts.FONT_ROMAN,
    },
    textInputIcons: {
        height: 45,
        backgroundColor: Colors.white,
        borderColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowColor: Colors.black,
        shadowOpacity: 0.2,
        elevation: 1,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    icons: {
        height: 23,
        width: 23,
        margin: 10
    },
    errorMessage: {
        color: Colors.errorMessage,
        fontSize: 13,
        fontFamily: Fonts.FONT_MEDIUM,
    },
});