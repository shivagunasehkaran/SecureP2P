import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

import Item from '../Components/Item';
import Colors from '../../Themes/Color';
import Fonts from '../../Themes/Fonts';

const DATA = [
    {
        id: 1,
        bank: 'ICICI',
        username: 'shivaa'
    },
    {
        id: 2,
        bank: 'AXIS',
        username: 'Chaiiii'
    }
];

class Favorites extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Favorites',
            headerStyle: {
                backgroundColor: Colors.white,
            },
            headerTintColor: Colors.appColor,
            headerRight: () =>
                <TouchableOpacity onPress={() => alert('Logout')}>
                    <Text
                        style={{
                            color: Colors.appColor,
                            fontFamily: Fonts.FONT_BLACK,
                            paddingRight: 12
                        }}>
                        {'Logout'}
                    </Text>
                </TouchableOpacity>,
        };
    };

    render() {
        return (
            <FlatList
                style={{ backgroundColor: Colors.grayShade }}
                data={DATA}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
        )
    }
};

export default Favorites;