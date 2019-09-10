import React from 'react';
import {
    TextInput ,
    Image ,
    KeyboardAvoidingView ,
    Platform ,
    ScrollView ,
    Text ,
    FlatList ,
    TouchableWithoutFeedback ,
    View
} from 'react-native';
import {Colors} from "../../../utils/Color";
import * as Styles from "./Styles";
import * as commonStyles from "../../../utils/commonStyles";
import Swiper from 'react-native-swiper'


var arrList = ['https://raw.githubusercontent.com/leecade/react-native-swiper/master/examples/components/Swiper/img/1.jpg' , 'https://raw.githubusercontent.com/leecade/react-native-swiper/master/examples/components/Swiper/img/2.jpg' , 'https://raw.githubusercontent.com/leecade/react-native-swiper/master/examples/components/Swiper/img/3.jpg' , 'https://raw.githubusercontent.com/leecade/react-native-swiper/master/examples/components/Swiper/img/4.jpg']
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '' ,
            password: '' ,
            imagesList: arrList
        }

    }

    render() {
        return (

            <View style={{flex: 1}}>

                {/***************** Search View Start *************/}
                <View style={Styles.headerView}>

                    <View style={Styles.searchParentView}>
                        <TextInput
                            style={{height: 40 , paddingLeft: 10}}
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

                    <View style={{justifyContent: 'center' , marginRight: 20}}>
                        <Text style={{color: 'white'}}>{'UserName'}</Text>
                    </View>

                    <View style={{justifyContent: 'center' , marginLeft: 20 ,}}>
                        <Image source={require('../../../assests/images/bell.png')}
                               style={{height: 18 , width: 18 ,}}/>

                    </View>

                </View>
                {/***************** Search View End *************/}

                <View style={{margin: 10}}>
                    <Image
                        source={require('../../../assests/images/logo.png')}
                        style={{height: 40 , width: 150 ,}}/>
                </View>

                {/**********  Crausol Start *******/}
                  <View style={{height: 200 ,}}>

                    <Swiper
                        autoplay={true}
                        dot={
                            <View style={{
                                backgroundColor: '#D4D4D4' ,
                                width: 13 ,
                                height: 13 ,
                                borderRadius: 7 ,
                                marginLeft: 7 ,
                                marginRight: 7
                            }}/>}
                        activeDot={<View style={{
                            backgroundColor: 'grey' ,
                            width: 13 ,
                            height: 13 ,
                            borderRadius: 7 ,
                            marginLeft: 7 ,
                            marginRight: 7
                        }}/>}
                        paginationStyle={{
                            bottom: 0
                        }}
                        loop={true}>

                        <View style={Styles.slide3}>
                            <Image
                                style={{height: 190 , width: '100%'}}
                                source={{uri: 'https://raw.githubusercontent.com/leecade/react-native-swiper/master/examples/components/Swiper/img/1.jpg'}}
                            />

                        </View>

                        <View style={Styles.slide3}>
                            <Image
                                style={{height: 190 , width: '100%'}}
                                source={{uri: 'https://raw.githubusercontent.com/leecade/react-native-swiper/master/examples/components/Swiper/img/2.jpg'}}
                            />

                        </View>
                        <View style={Styles.slide3}>
                            <Image
                                style={{height: 190 , width: '100%'}}
                                source={{uri: 'https://raw.githubusercontent.com/leecade/react-native-swiper/master/examples/components/Swiper/img/3.jpg'}}
                            />
                        </View>

                        <View style={Styles.slide3}>
                            <Image
                                style={{height: 190 , width: '100%'}}
                                source={{uri: 'https://raw.githubusercontent.com/leecade/react-native-swiper/master/examples/components/Swiper/img/4.jpg'}}
                            />
                        </View>

                    </Swiper>

                </View>
                {/**********  Crausol End*******/}




                <ScrollView style={{flex: 1,backgroundColor:'#F4F4F4',marginTop:10}}>

                    <FlatList
                        style={{marginTop:10,marginLeft:5,marginRight:5,}}
                        extraData={this.state.imagesList}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.imagesList}
                        horizontal
                        renderItem={({item , index}) => {
                            return (
                                <View style={{ height: 120 ,width:100 , marginLeft:5,marginRight:5}}>
                                    <Image
                                        style={{height: 90 ,width:100}}
                                        source={{uri: item}}
                                    />
                                    <Text style={{alignSelf:'center',marginTop:5}}>{'Nature'}</Text>

                                </View>)
                        }
                        }
                        keyExtractor={(item , index) => index}

                    />


                    <FlatList
                        style={{marginTop:10,marginLeft:5,marginRight:5,}}
                        extraData={this.state.imagesList}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.imagesList}
                        horizontal
                        renderItem={({item , index}) => {
                            return (
                                <View style={{ height: 120 ,width:100 , marginLeft:5,marginRight:5}}>
                                    <Image
                                        style={{height: 90 ,width:100}}
                                        source={{uri: item}}
                                    />
                                    <Text style={{alignSelf:'center',marginTop:5}}>{'Weather'}</Text>

                                </View>)
                        }
                        }
                        keyExtractor={(item , index) => index}

                    />

                </ScrollView>


            </View>
        )
    }

}
