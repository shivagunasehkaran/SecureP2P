import React, { Component, useState } from 'react';
import { FlatList, TouchableOpacity, Text, View, Image, Alert } from 'react-native';
import { updateTodoList, deleteTodoList, queryAllTodoLists } from '../../Databases/allSchemas';
import realm from '../../Databases/allSchemas';
import Swipeout from 'react-native-swipeout';

import { styles } from '../../Screens/Components/Styles/Items.style';
import Navigation from '../../Navigator/Navigation';
import { ConvertDate } from '../../Utils/utilities';

import Colors from '../../Themes/Color';
import Fonts from '../../Themes/Fonts';
import AddIcon from '../../Assets/add.png';
import PasswordIcon from '../../Assets/password.png';
import StarIconActive from '../../Assets/staractive.png';
import StarIconInActive from '../../Assets/starinactive.png';

const FlatListItem = props => {
    const { id, name, creationDate, onPressItem } = props.item;
    const [active, setActive] = useState(true);

    // flag for add favorite
    const setActiveState = () => {
        setActive(!active);
    };

    // moving to edit screen
    const showEditModal = () => {
        const existingTodoList = {
            id: id,
            name: name,
        };

        Navigation.navigate('AddDetails', { isEditExisting: true, existingTodoList: existingTodoList })
    };

    const showDeleteConfirmation = () => {
        Alert.alert(
            'Delete',
            'Delete a todoList',
            [
                {
                    text: 'No', onPress: () => { },//Do nothing
                    style: 'cancel'
                },
                {
                    text: 'Yes', onPress: () => {
                        deleteTodoList(id).then().catch(error => {
                            alert(`Failed to delete todoList with id = ${id}, error=${error}`);
                        });
                    }
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <Swipeout right={[
            {
                text: 'Edit',
                backgroundColor: 'rgb(81,134,237)',
                onPress: () => showEditModal()
            },
            {
                text: 'Delete',
                backgroundColor: 'rgb(217, 80, 64)',
                onPress: () => showDeleteConfirmation()
            }
        ]} autoClose={true}>
            <TouchableOpacity onPress={onPressItem}>
                <View style={styles.item}>
                    <Image source={PasswordIcon} style={styles.categoryImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subTitle}>{ConvertDate(creationDate)}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setActiveState()}>
                        <Image source={(!active) ? StarIconActive : StarIconInActive} style={styles.favIcon} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Swipeout >
    );
};

class Category extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Categories',
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

    constructor(props) {
        super(props);
        this.state = {
            todoLists: []
        };
        this.reloadData();
        realm.addListener('change', () => {
            this.reloadData();
        });
    }

    reloadData = () => {
        queryAllTodoLists().then((todoLists) => {
            this.setState({ todoLists });
        }).catch((error) => {
            this.setState({ todoLists: [] });
        });
        console.log(`reloadData`);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ backgroundColor: Colors.grayShade }}
                    data={this.state.todoLists}
                    renderItem={({ item }) => <FlatListItem item={item}
                        onPressItem={() => {
                            alert(`You pressed item`);
                        }} />}
                    keyExtractor={item => item.id}
                />
            </View>

        )
    }
};

export default Category;