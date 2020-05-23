import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './Styles/Items.style';
import PasswordIcon from '../../Assets/password.png';
import StarIconActive from '../../Assets/staractive.png';
import StarIconInActive from '../../Assets/starinactive.png';

const Item = (props) => {
    const [active, setActive] = useState(true);

    const setActiveState = () => {
        setActive(!active);
    };

    return (
        <View style={styles.item}>
            <Image source={PasswordIcon} style={styles.categoryImage} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.item.bank}</Text>
                <Text style={styles.subTitle}>{props.item.username}</Text>
            </View>
            <TouchableOpacity onPress={() => setActiveState()}>
                <Image source={(!active) ? StarIconActive : StarIconInActive} style={styles.favIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default Item;

