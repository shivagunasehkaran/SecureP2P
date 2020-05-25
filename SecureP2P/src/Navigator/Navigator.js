import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Category from '../Screens/Category/Category';
import Favorites from '../Screens/Favorites/Favorites';
import Settings from '../Screens/Settings/Settings';
import AddDetails from '../Screens/AddDetails/AddDetails';

import Color from '../Themes/Color';
import Fonts from '../Themes/Fonts';

// Base stacks for app flow
const FavoriteStack = createStackNavigator({
    Favorites: Favorites,
    AddDetails: AddDetails
});
const CategoryStack = createStackNavigator({
    Category: Category,
    AddDetails: AddDetails
});
const SettingStack = createStackNavigator({
    Settings: Settings
});

// Tab navigators
const TabNavigator = createBottomTabNavigator(
    {
        Favorites: {
            screen: FavoriteStack,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ textAlign: 'center', fontSize: 12, fontFamily: Fonts.FONT_ROMAN, color: tintColor }}>
                        {('Favorites')}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="star" size={horizontal ? 20 : 22} color={tintColor} />,
            },
        },
        Category: {
            screen: CategoryStack,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ textAlign: 'center', fontSize: 12, fontFamily: Fonts.FONT_ROMAN, color: tintColor }}>
                        {('Category')}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="layer-group" size={horizontal ? 20 : 22} color={tintColor} />,
            },
        },
        Settings: {
            screen: SettingStack,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ textAlign: 'center', fontSize: 12, fontFamily: Fonts.FONT_ROMAN, color: tintColor }}>
                        {('Settings')}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="cogs" size={horizontal ? 20 : 22} color={tintColor} />,
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Color.appColor,
            inactiveTintColor: Color.grayShade,
            style: {
                backgroundColor: Color.white,
            },
        },
    },
);

export default TabNavigator;