/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import PreviewScreen from "./src/components/PreviewScreen";
import LoginScreen from "./src/components/auth/login/LoginScreen";
import SplashScreen from "react-native-splash-screen";
import SignupScreen from "./src/components/auth/register/SignupScreen";
import AppNavigator from "./src/navigator/AppNavigator";

class App extends React.Component {

    componentDidMount(): void {
        console.disableYellowBox = true;
        SplashScreen.hide()
    }

    render() {
        return <AppNavigator/>
    }

}

/*

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
    },
    SignupScreen: {
        screen: SignupScreen ,
        navigationOptions: {
            header: null ,
            gesturesEnabled: false ,
        }
    },

} , {
    initialRouteName: 'LoginScreen'
});


const Navigator = createAppContainer(RootNavigator);
*/


export default App
