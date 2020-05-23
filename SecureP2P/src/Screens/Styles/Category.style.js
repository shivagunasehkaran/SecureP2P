import { StyleSheet } from 'react-native';
import Colors from '../../Themes/Color';
import Fonts from '../../Themes/Fonts';

export const styles = StyleSheet.create({
    passwordContainer: {
        flex: 2,
        height: 180,
        backgroundColor: Colors.appColor
    },
    text: {
        fontSize: 22,
        fontFamily: Fonts.FONT_BLACK,
        color: Colors.white,
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
    passwordIcon: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginTop: 50
    }
});