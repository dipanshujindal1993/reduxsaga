import React from 'react';
import {View , Text , StyleSheet , Image , TouchableWithoutFeedback} from 'react-native';
import {Colors} from "../utils/Color";

const FIVE_SECONDS = 3000;

export default class PreviewScreen extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <View style={{flex: 1}}>

                <Image
                    source={require('./../assests/images/logo.png')}
                    style={{height: '60%' , width: '100%' ,}}/>

                <View style={{margin: 20 , height: '25%'}}>
                    <Text style={styles.digishopTitle}>{'Welcome to DIGISHOP'}</Text>
                    <View style={styles.lineView}/>
                    <Text style={{marginTop:10,lineHeight:25}}>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}</Text>
                </View>


                <TouchableWithoutFeedback
                    style={styles.bottomStyle}
                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                >
                    <View style={styles.bottomStyle}>

                        <Text style={styles.buttonStyle}

                        >{'GET STARTED'+' '}</Text>
                    </View>

                </TouchableWithoutFeedback>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    digishopTitle: {marginTop: 10 , alignSelf: 'center' , fontSize: 18} ,
    bottomStyle:{backgroundColor: Colors.primary , height: '10%' , justifyContent: 'center'},
    lineView:{justifyContent:'center',alignSelf: 'center' ,marginTop:10,width:30,height:2,backgroundColor:Colors.primary},
    buttonStyle:{alignSelf: 'center' , color: 'white' , fontSize: 18,fontWeight:'bold'},

});
