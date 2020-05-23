import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { styles } from '../Styles/SignUp.style';

const SignUp = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // error message
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    // text input focus
    const emailInput = useRef();
    const passwordInput = useRef();

    // email & password validations
    const isValid = () => {
        if (name.length === 0) {
            setNameError(true);
        } else {
            setNameError(false);
        }

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
            name.length > 0 &&
            email.length > 0 &&
            password.length > 0
        );
    };

    // login success actions
    const signSuccess = () => {
        if (isValid()) {
            alert("SignUp completed")
        }
    };

    // move to next screen
    const goToLogin = () => {
        navigation.navigate('SignIn');
    };

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'space-between',
        }}>
            <StatusBar
                backgroundColor="#8541B0"
                barStyle="light-content"
            />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{'Here you can Sign up'}</Text>
                <Text style={styles.headerSubTitle}>{"Sign up for free and injoy it :)"}</Text>
            </View>
            <View style={styles.cententer}>
                <Text style={[styles.cententerTitle, { marginTop: 50 }]}>{'Name'}</Text>
                <TextInput
                    autoFocus
                    placeholder={'Enter Name'}
                    style={styles.textInput}
                    onChangeText={(value) => setName(value)}
                    keyboardType={'email-address'}
                    returnKeyType='next'
                    onSubmitEditing={() => emailInput.current.focus()}
                />
                {
                    nameError && (
                        <Text style={[styles.errorMessage, { marginTop: 10 }]}>{'This field cannot be empty.'}</Text>
                    )
                }
                <Text style={[styles.cententerTitle, { marginTop: 18 }]}>{'Email'}</Text>
                <TextInput
                    placeholder={'Enter Email'}
                    style={styles.textInput}
                    onChangeText={(value) => setEmail(value)}
                    keyboardType={'email-address'}
                    returnKeyType='next'
                    ref={emailInput}
                    onSubmitEditing={() => passwordInput.current.focus()}
                />
                {
                    emailError && (
                        <Text style={[styles.errorMessage, { marginTop: 10 }]}>{'This field cannot be empty.'}</Text>
                    )
                }
                <Text style={[styles.cententerTitle, { marginTop: 18 }]}>{'Password'}</Text>
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
                <TouchableOpacity style={styles.submit} onPress={() => signSuccess()}>
                    <Text style={styles.submitTitle}>{'Sign up'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 15 }} onPress={() => goToLogin()}>
                    <Text style={styles.alreadySignInLabel}>{"Already have account? Login"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

SignUp.navigationOptions = () => ({
    title: 'SignUp'
})

export default SignUp;