import React, { } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import PasswordIcon from '../../Assets/password.png';
import ShivaIcon from '../../Assets/shiva.jpg';
import { styles } from '../Styles/Category.style';

const Category = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor="#D96F9E"
                barStyle="light-content"
            />
            <TouchableOpacity style={styles.photosContainer} onPress={() => alert('clicked')}>
                <Text style={styles.text}>{"Secure all of your Photos"}</Text>
                <Image source={ShivaIcon} style={styles.photoIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.passwordContainer} onPress={() => alert('clicked')}>
                <Text style={styles.text}>{"Secure all of your Password"}</Text>
                <Image source={PasswordIcon} style={styles.passwordIcon} />
            </TouchableOpacity>
        </View>
    )
}

Category.navigationOptions = () => ({
    title: 'Category'
});

export default Category;