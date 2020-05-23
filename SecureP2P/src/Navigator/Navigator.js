import { createStackNavigator } from 'react-navigation-stack';
import SignIn from '../Screens/SignIn/SignIn';
import SignUp from '../Screens/SignUp/SignUp';
import Category from '../Screens/Category/Category';

// base stacks for app flow (mainly functional component flows)
const AppNavigator = createStackNavigator({
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    Category: { screen: Category },
}, { initalRoute: 'SignIn', headerMode: 'none', }
);

export default AppNavigator;