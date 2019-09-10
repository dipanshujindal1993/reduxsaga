import React from 'react';
import {
    Image ,
    KeyboardAvoidingView ,
    Platform ,
    ScrollView ,
    Text ,
    TouchableWithoutFeedback ,
    View
} from 'react-native';


export  default class HomeScreen extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '' ,
            password: ''
        }

    }

    render(){
        return(
            <View style={{backgroundColor:'red',flex:1}}>

            </View>
        )
    }

}
