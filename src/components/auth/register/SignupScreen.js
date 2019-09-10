import React from 'react';
import {
    View ,
    Text ,
    Platform ,
    StyleSheet ,
    KeyboardAvoidingView ,
    ScrollView ,
    Image ,
    TouchableWithoutFeedback
} from 'react-native';
import {AuthHeader} from '../AuthHeader'
import {TextField} from 'react-native-material-textfield';
import * as commonStyles from "../../../utils/commonStyles";
import {Strings} from "../../../utils/Strings";
import {checkValidEmail} from "../../../utils/Utils";

export default class SignupScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '' ,
            email: '' ,
            phone: '' ,
            password: ''
        }

    }

    handleValidations() {


        const {username , email , phone , password} = this.state

        if (username === undefined || username === '') {
            alert(Strings.USERNAME_EMPTY_MSG)
        } else if (email === undefined || email === '') {
            alert(Strings.EMAIL_EMPTY_MSG)
        } else if (checkValidEmail(email.trim())) {
            alert(Strings.EMAIL_VALID_MSG)
        } else if (phone === undefined || phone === '') {
            alert(Strings.PHONE_EMPTY_MSG)
        } else if (phone.trim().length < 10) {
            alert(Strings.PHONE_VALID_MSG)
        } else if (password === undefined || password === '') {
            alert(Strings.PASSWORD_EMPTY_MSG)
        } else if (password.trim().length < 6 || password.trim().length > 15) {
            alert(Strings.PASSWORD_LEN_MSG)
        } else {
            this.props.navigation.navigate('home')
        }
    }

    render() {
        return (
            <View style={{flex: 1 , backgroundColor: 'white' ,}}>

                <AuthHeader title={'Sign Up'} isSignin={false} isSignup={true}/>
                {(Platform.OS === 'ios') && <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                    {this._renderSignupUI()}
                </KeyboardAvoidingView>}
                {
                    !(Platform.OS === 'ios') && this._renderSignupUI()
                }

            </View>
        )
    }

    _renderSignupUI() {
        return (
            <ScrollView style={{flex: 1 ,}}>
                <View style={{marginHorizontal: 20}}>

                    {/********************* User Name View Start *******************/}
                    <View>
                        <Image source={require('../../../assests/images/user.png')}
                               style={commonStyles.emailPasswordImageView}/>

                        <TextField
                            containerStyle={{marginLeft: 30}}
                            label='User Name'
                            style={commonStyles.textInputStyle}
                            keyboardType='default'
                            value={this.state.username}
                            blurOnSubmit={false}
                            onSubmitEditing={() => {
                                this.textInputEmailRef.focus();
                            }}
                            returnKeyType='next'
                            onChangeText={(username) => this.setState({username})}
                        />
                    </View>
                    {/********************* User Name View End *******************/}

                    {/********************* Email View Start *******************/}
                    <View>
                        <Image source={require('../../../assests/images/email.png')}
                               style={commonStyles.emailPasswordImageView}/>

                        <TextField
                            ref={ref => this.textInputEmailRef = ref}
                            containerStyle={{marginLeft: 30}}
                            label='Email'
                            style={commonStyles.textInputStyle}
                            keyboardType='email-address'
                            value={this.state.email}
                            onSubmitEditing={() => {
                                this.textInputPhoneRef.focus();
                            }}
                            blurOnSubmit={false}
                            returnKeyType='next'
                            onChangeText={(email) => this.setState({email})}
                        />
                    </View>
                    {/********************* Email View End *******************/}

                    {/********************* phone View Start *******************/}

                    <View>
                        <Image source={require('../../../assests/images/phone.png')}
                               style={commonStyles.emailPasswordImageView}/>

                        <TextField
                            ref={ref => this.textInputPhoneRef = ref}
                            style={commonStyles.textInputStyle}
                            containerStyle={{marginLeft: 30}}
                            label='Mobile Number'
                            keyboardType='phone-pad'
                            maxLength={10}
                            value={this.state.phone}
                            onSubmitEditing={() => {
                                this.textInputPassRef.focus();
                            }}
                            blurOnSubmit={false}
                            returnKeyType='next'
                            onChangeText={(phone) => this.setState({phone})}
                        />
                    </View>
                    {/********************* phone View End *******************/}

                    {/********************* Password View Start *******************/}

                    <View>
                        <Image source={require('../../../assests/images/pass.png')}
                               style={commonStyles.emailPasswordImageView}/>
                        <TextField
                            containerStyle={{marginLeft: 30}}
                            ref={ref => this.textInputPassRef = ref}
                            label='Password'
                            style={commonStyles.textInputStyle}
                            maxLength={15}
                            secureTextEntry={true}
                            value={this.state.password}
                            returnKeyType='done'
                            onChangeText={(password) => this.setState({password})}
                        />
                    </View>
                    {/********************* Password View End *******************/}

                    <TouchableWithoutFeedback
                        onPress={() => this.handleValidations()}
                    >
                        <View style={[commonStyles.buttonStyle , {marginTop: 30}]}>

                            <Text style={commonStyles.buttonTextStyle}>{'REGISTER' + ' '}</Text>

                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>

        )
    }


}
