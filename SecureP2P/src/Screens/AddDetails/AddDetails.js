import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';

import { styles } from '../Styles/AddDetails.style';
import Colors from '../../Themes/Color';

import SaveIcon from '../../Assets/save.png';
import CategoryIcon from '../../Assets/category.png';
import UserIcon from '../../Assets/user.png';
import PasswordIcon from '../../Assets/passwrd.png';
import WebsiteIcon from '../../Assets/website.png';
import ErrorMessage from '../Components/ErrorMessage';

// get 'this' context to use function in 'navigationOptions'
let take = null;
class AddDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add Details',
            headerStyle: {
                backgroundColor: Colors.white
            },
            headerTintColor: Colors.appColor,
            headerRight: () =>
                <TouchableOpacity onPress={() => take.doSaveDetails()}>
                    <View style={{ flex: 1, width: 60 }}>
                        <Image source={SaveIcon} style={{ height: 32, width: 32, margin: 13 }} />
                    </View>
                </TouchableOpacity>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            username: '',
            password: '',
            website: '',
            isCategoryEmpty: false,
            isUsernameEmpty: false,
            isPasswordEmpty: false,
            isWebsiteEmpty: false
        };
        this.categoryInput = React.createRef();
        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
        this.websiteInput = React.createRef();
    }

    // save details
    doSaveDetails = () => {
        if (this.isValid()) {
            alert('Added');
        }
    };

    // validation of text inputs
    isValid = () => {
        const { category, username, password, website } = this.state;

        if (category.length === 0) {
            this.setState({
                isCategoryEmpty: true,
            });
        } else {
            this.setState({ isCategoryEmpty: false });
        }

        if (username.length === 0) {
            this.setState({
                isUsernameEmpty: true,
            });
        } else {
            this.setState({ isUsernameEmpty: false });
        }

        if (password.length === 0) {
            this.setState({
                isPasswordEmpty: true,
            });
        } else {
            this.setState({ isPasswordEmpty: false });
        }

        if (website.length === 0) {
            this.setState({
                isWebsiteEmpty: true,
            });
        } else {
            this.setState({ isWebsiteEmpty: false });
        }

        return (
            category.length > 0 &&
            username.length > 0 &&
            password.length > 0 &&
            website.length > 0
        );
    };

    render() {
        take = this;
        const { isCategoryEmpty, isUsernameEmpty, isPasswordEmpty, isWebsiteEmpty } = this.state;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>{'Categories'}</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            ref={this.categoryInput}
                            style={styles.textContainer}
                            placeholder='Enter Category'
                            returnKeyType='next'
                            onChangeText={category => this.setState({ category, isCategoryEmpty: false })}
                            onSubmitEditing={() => this.usernameInput.current.focus()}
                        />
                        <View style={styles.textInputIcons}>
                            <Image source={CategoryIcon} style={styles.icons} />
                        </View>
                    </View>
                    {
                        isCategoryEmpty && <ErrorMessage />
                    }
                    <Text style={styles.titleText}>{'Username'}</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            ref={this.usernameInput}
                            style={styles.textContainer}
                            placeholder='Enter Username'
                            returnKeyType='next'
                            onChangeText={username => this.setState({ username, isUsernameEmpty: false })}
                            onSubmitEditing={() => this.passwordInput.current.focus()}
                        />
                        <View style={styles.textInputIcons}>
                            <Image source={UserIcon} style={styles.icons} />
                        </View>
                    </View>
                    {
                        isUsernameEmpty && <ErrorMessage />
                    }
                    <Text style={styles.titleText}>{'Password'}</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            ref={this.passwordInput}
                            style={styles.textContainer}
                            placeholder='Enter Password'
                            returnKeyType='next'
                            onChangeText={password => this.setState({ password, isPasswordEmpty: false })}
                            onSubmitEditing={() => this.websiteInput.current.focus()}
                        />
                        <View style={styles.textInputIcons}>
                            <Image source={PasswordIcon} style={styles.icons} />
                        </View>
                    </View>
                    {
                        isPasswordEmpty && <ErrorMessage />
                    }
                    <Text style={styles.titleText}>{'Website'}</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            ref={this.websiteInput}
                            style={styles.textContainer}
                            placeholder='Enter Website'
                            returnKeyType='done'
                            onChangeText={website => this.setState({ website, isWebsiteEmpty: false })}
                        />
                        <View style={styles.textInputIcons}>
                            <Image source={WebsiteIcon} style={styles.icons} />
                        </View>
                    </View>
                    {
                        isWebsiteEmpty && <ErrorMessage />
                    }
                </View>
            </ScrollView>
        );
    }
};

export default AddDetails;