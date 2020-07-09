import { StyleSheet } from 'react-native';
import Colors from '../../../Themes/Color';
import Fonts from '../../../Themes/Fonts';

export const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.appColor,
        height: 85,
        padding: 6,
        marginVertical: 0.3,
        marginHorizontal: 1,
        borderColor: Colors.grayShade,
        borderRadius: 5,
        flexDirection: 'row'
    },
    categoryImage: {
        height: 50,
        width: 40,
        margin: 10
    },
    textContainer: {
        flex: 1,
        paddingVertical: 10,
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.FONT_MEDIUM,
        color: Colors.white,
        paddingHorizontal: 20
    },
    subTitle: {
        fontSize: 13,
        fontFamily: Fonts.FONT_OBLIQUE,
        color: Colors.white,
        paddingHorizontal: 21,
        paddingTop: 4
    },
    favIcon: {
        margin: 15,
        height: 45,
        width: 45
    }
});