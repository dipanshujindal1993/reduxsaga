import {StyleSheet , Platform , Dimensions} from 'react-native'
import {Colors} from "./Color";


const window = Dimensions.get('window');
const width = window.width;
const height = window.height;
module.exports = StyleSheet.create({

    mainContainer: {
        flex: 1 ,
    } ,
    titleView: {
        color: 'black' ,
        fontWeight: 'bold' ,
        fontSize: 20 ,
        alignSelf: 'center'
    } ,

    emailPasswordImageView: {
        position: 'absolute' ,
        height: 18 ,
        width: 18 ,
        padding: 0 ,
        marginRight: 15 ,
        marginTop: 40 ,
        tintColor: Colors.primary
    } ,
    textInputStyle:{
      color:'green'
    },
    buttonStyle:{
        backgroundColor:Colors.primary,
        height:45,
        borderRadius:50,
        justifyContent:'center'
    },
    buttonTextStyle:{
        fontWeight: 'bold' ,
        fontSize: 18 ,
        color: 'white' ,
        alignSelf: 'center'
    }

});
