import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PreviewScreen from "../components/PreviewScreen";
import LoginScreen from "../components/auth/login/LoginScreen";
import SignupScreen from "../components/auth/register/SignupScreen";
import {createDrawerNavigator , DrawerNavigatorItems} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from "../components/dashboard/home/HomeScreen";
import ProfileScreen from "../components/dashboard/profile/ProfileScreen";
import SearchScreen from "../components/dashboard/search/SearchScreen";
import {drawerNavigator} from "./DrawerNavigator";

const stackNav = createStackNavigator(
    {
        drawer: drawerNavigator ,
        homeScreen: HomeScreen ,
        PreviewScreen: PreviewScreen
    }
)
const bottomTabs = createBottomTabNavigator({

    //HomeScreen: stackNav ,
    HomeScreen:{
        screen:HomeScreen,

    },
    SearchScreen: SearchScreen ,
    ProfileScreen: ProfileScreen

},
    )

const RootNavigator = createStackNavigator({

    PreviewScreen: {
        screen: PreviewScreen ,
        navigationOptions: {
            header: null ,
            gesturesEnabled: false ,
        }
    } ,
    LoginScreen: {
        screen: LoginScreen ,
        navigationOptions: {
            header: null ,
            gesturesEnabled: false ,
        }
    } ,
    SignupScreen: {
        screen: SignupScreen ,
        navigationOptions: {
            header: null ,
            gesturesEnabled: false ,
        }
    } ,
    home: bottomTabs ,


} , {
    initialRouteName: 'home',
    headerMode:'none'
});


const AppNavigator = createAppContainer(RootNavigator);
export default AppNavigator

