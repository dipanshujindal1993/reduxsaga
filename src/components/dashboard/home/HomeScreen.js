import React from 'react';
import {
    TextInput,
    Image ,
    KeyboardAvoidingView ,
    Platform ,
    ScrollView ,
    Text ,
    TouchableWithoutFeedback ,
    View
} from 'react-native';
import {Colors} from "../../../utils/Color";
import * as Styles from "./Styles";
import * as commonStyles from "../../../utils/commonStyles";
import Swiper from 'react-native-swiper'


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '' ,
            password: ''
        }

    }

    render() {
        return (

            <View style={{flex: 1}}>

                {/***************** Search View Start *************/}
                <View style={Styles.headerView}>

                    <View style={Styles.searchParentView}>
                        <TextInput
                            style={{height:40,paddingLeft:10}}
                            placeholder='Search'
                            secureTextEntry={false}
                            placeholderTextColor='grey'
                            onSubmitEditing={() => {
                                this.textInputPassRef.focus();
                            }}
                            underlineColorAndroid='transparent'
                            onChangeText={(username) => this.setState({username})}
                            value={this.state.username}
                            keyboardType='email-address'
                        />

                    </View>

                    <View style={{justifyContent:'center',marginRight:20}}>
                        <Text style={{color:'white'}}>{'UserName'}</Text>
                    </View>

                    <View style={{justifyContent:'center',marginLeft:20, }}>
                        <Image source={require('../../../assests/images/bell.png')}
                               style={{height: 18 , width: 18 ,}}/>

                    </View>

                </View>
                {/***************** Search View End *************/}

                <View style={{marginVertical:10}}>
                    <Image
                        source={require('../../../assests/images/logo.png')}
                        style={{height: 40 , width: 150 ,}}/>
                </View>

                {/**********  Crausol Start *******/}
                <View style={{height:150,backgroundColor:'grey'}}>

                    <Swiper
                        autoplay={true}
                            dot={
                                <View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                            activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                            paginationStyle={{
                                bottom:0
                            }}
                            loop={true}>

                        <View style={Styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>

                        </View>

                        <View style={Styles.slide1} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>

                        </View>
                        <View style={Styles.slide2} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                        </View>
                        <View style={Styles.slide3} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
                        </View>

                    </Swiper>

                </View>
                {/**********  Crausol End*******/}

            </View>
        )
    }

}
