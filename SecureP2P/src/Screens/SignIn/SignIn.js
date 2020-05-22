import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { styles } from './Styles/SignIn.style';

const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // error message
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    // text input focus
    const passwordInput = useRef();

    // move to next screen
    const goToSignup = () => {
        navigation.navigate('SignUp');
    };

    // email & password validations
    const isValid = () => {
        if (email.length === 0) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (password.length === 0) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        return (
            email.length > 0 &&
            password.length > 0
        );
    };

    // login success actions
    const loginSuccess = () => {
        if (isValid()) {
            alert("valid")
        }
    };

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'space-between',
        }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{'Here you can Login'}</Text>
                <Text style={styles.headerSubTitle}>{"Let's join us :)"}</Text>
            </View>
            <View style={styles.cententer}>
                <Text style={[styles.cententerTitle, { marginTop: 50 }]}>{'Email'}</Text>
                <TextInput
                    autoFocus
                    placeholder={'Enter Email'}
                    style={styles.textInput}
                    onChangeText={(value) => setEmail(value)}
                    keyboardType={'email-address'}
                    returnKeyType='next'
                    onSubmitEditing={() => passwordInput.current.focus()}
                />
                {
                    emailError && (
                        <Text style={[styles.errorMessage, { marginTop: 10 }]}>{'This field cannot be empty.'}</Text>
                    )
                }
                <Text style={[styles.cententerTitle, { marginTop: 25 }]}>{'Password'}</Text>
                <TextInput
                    placeholder={'Enter Password'}
                    style={styles.textInput}
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry={true}
                    ref={passwordInput}
                />
                {
                    passwordError && (
                        <Text style={[styles.errorMessage, { marginTop: 10 }]}>{'This field cannot be empty.'}</Text>
                    )
                }
                <TouchableOpacity style={styles.submit} onPress={() => loginSuccess()}>
                    <Text style={styles.submitTitle}>{'Login'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 15 }} onPress={() => goToSignup()}>
                    <Text style={styles.alreadySignInLabel}>{'Already have account? Signup'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer} />
        </View>
    );
};

SignIn.navigationOptions = () => ({
    title: 'SignIn'
})

export default SignIn;