import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, TextInput } from 'react-native';

import { styles } from '../Styles/AddDetails.style';
import Colors from '../../Themes/Color';
import Fonts from '../../Themes/Fonts';
import SaveIcon from '../../Assets/save.png';

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

    state = {
        category: '',
        description: '',
        isDescriptionEmpty: false,
        isCategoryEmpty: false,
    };

    // save details
    doSaveDetails = () => {
        if (this.isValid()) {

        } else {
            alert("Fill out all the fields");
        }
    };

    // validation of text inputs
    isValid = () => {
        const { category, description } = this.state;

        if (category.length === 0) {
            this.setState({
                isCategoryEmpty: true,
            });
        } else {
            this.setState({ isCategoryEmpty: false });
        }

        if (description.length === 0) {
            this.setState({
                isDescriptionEmpty: true,
            });
        } else {
            this.setState({ isDescriptionEmpty: false });
        }

        return (
            description.length > 0 &&
            category.length > 0
        );
    };

    render() {
        take = this;
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>{'Categories'} :</Text>
                    <TextInput
                        style={styles.textContainer}
                        placeholder="Enter category "
                        onChangeText={category => this.setState({ category, isCategoryEmpty: false })}
                    />
                    <Text style={styles.titleText}>{'Description'} :</Text>
                    <TextInput
                        style={styles.textContainer}
                        placeholder="Enter a description "
                        onChangeText={description => this.setState({ description, isDescriptionEmpty: false })}
                    />
                </View>
            </View>
        );
    }
};

export default AddDetails;