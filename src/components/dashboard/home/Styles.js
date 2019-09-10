import {StyleSheet , Platform , Dimensions} from 'react-native'
import {Colors} from "../../../utils/Color";

const window = Dimensions.get('window');
const width = window.width;
const height = window.height;
module.exports = StyleSheet.create({

    mainContainer: {
        flex: 1 ,

    } ,
    headerView: {
        //height:80,

      //  flex:1,
        flexDirection: 'row' ,
        justifyContent:'space-between',
        padding: 10 ,
        //margin:5,
        backgroundColor: Colors.primary
    } ,
    searchParentView: {
        //flex:1,
       width: '50%' ,
        height: 40 ,
        borderColor: '#E4E4E4' ,
        borderWidth: 1 ,
        backgroundColor: 'white'
    } ,
    slide:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor:'red',
        paddingBottom:10
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:10
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:20
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:40
    },

});
