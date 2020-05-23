import React from 'react';
import { Text } from 'react-native';

const Settings = ({ navigation }) => {
    return (
        <Text>{'Settings'}</Text>
    )
};

Settings.navigationOptions = () => ({
    title: 'Settings'
})

export default Settings;