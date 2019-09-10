import {View , Text , StyleSheet , Image , TouchableWithoutFeedback} from 'react-native';
import * as Styles from "./login/Styles";
import React from "react";
import {Colors} from "../../utils/Color";

export const AuthHeader = (props) => {
    return <View style={{margin:20}}>

        <View style={{flexDirection: 'row' , justifyContent: 'space-between'}}>
            <Image
                source={require('../../assests/images/logo.png')}
                style={{height: 40 , width: 150 ,}}/>
            <Text style={{marginTop:10,marginRight: 10}}>{'Skip'}</Text>

        </View>
        <Text style={styles.titleView}>{props.title}</Text>

        <View style={{flexDirection: 'row' , justifyContent: 'center'}}>
            <View style={[styles.lineView,{backgroundColor: props.isSignin?Colors.primary:'#E4E4E4'}]}/>
            <View style={[styles.lineView,{backgroundColor: props.isSignup?Colors.primary:'#E4E4E4'}]}/>
        </View>

    </View>

}


const styles = StyleSheet.create({
    titleView: {
        color: 'black' ,
        fontWeight: 'bold' ,
        fontSize: 20 ,
        alignSelf: 'center',
        marginTop:20
    } ,
    lineView: {
        justifyContent: 'center' ,
        alignSelf: 'center' ,
        marginTop: 10 ,
        width: 20 ,
        height: 2 ,
        marginLeft:2,
        marginRight:2,
        backgroundColor: Colors.primary
    } ,
});
