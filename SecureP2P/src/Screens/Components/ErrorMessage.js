import React from 'react';
import { Text } from 'react-native';

import { styles } from '../Styles/SignIn.style';

const ErrorMessage = () => {
    return (
        <Text style={[styles.errorMessage, { marginTop: 7 }]}>{'This field cannot be empty.'}</Text>
    )
};

export default ErrorMessage;