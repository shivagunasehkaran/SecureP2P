import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, Image } from 'react-native';

import Item from '../Components/Item';
import Colors from '../../Themes/Color';
import Fonts from '../../Themes/Fonts';
import AddIcon from '../../Assets/add.png';

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
                <TouchableOpacity onPress={() => navigation.navigate('AddDetails')}>
                    <View style={{ flex: 1, width: 60 }}>
                        <Image source={AddIcon} style={{ height: 30, width: 30, margin: 13 }} />
                    </View>
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