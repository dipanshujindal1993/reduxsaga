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
import {AuthHeader} from '../AuthHeader'
import {TextField} from 'react-native-material-textfield';
import * as commonStyles from "../../../utils/commonStyles";
import {checkValidEmail} from "../../../utils/Utils";
import {Strings} from "../../../utils/Strings";

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '' ,
            password: ''
        }

    }

    handleValidations() {
        const {email , password} = this.state;
        if (email === undefined || email === '') {
            alert(Strings.EMAIL_EMPTY_MSG)
        } else if (checkValidEmail(email.trim())) {
            alert(Strings.EMAIL_VALID_MSG)
        } else if (password === undefined || password === '') {
            alert(Strings.PASSWORD_EMPTY_MSG)
        } else if (password.trim().length < 6 || password.trim().length > 15) {
            alert(Strings.PASSWORD_LEN_MSG)
        } else {
            this.props.navigation.navigate('SignupScreen')
        }
    }

    render() {
        return (
            <View style={{flex: 1 , backgroundColor: 'white'}}>
                <AuthHeader title={'Sign In'} isSignin={true} isSignup={false}/>

                {(Platform.OS === 'ios') && <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                    {this._renderLoginUI()}
                </KeyboardAvoidingView>}
                {
                    !(Platform.OS === 'ios') && this._renderLoginUI()
                }

            </View>
        )
    }

    _renderLoginUI() {
        return (
            <ScrollView style={{flex: 1 ,}}>
                <View style={{marginHorizontal: 20}}>
                    {/********************* Email View Start *******************/}
                    <View>
                        <Image source={require('../../../assests/images/email.png')}
                               style={commonStyles.emailPasswordImageView}/>

                        <TextField
                            containerStyle={{marginLeft: 30}}
                            label='Email'
                            keyboardType='email-address'
                            value={this.state.email}
                            onSubmitEditing={() => {
                                this.textInputPassRef.focus();
                            }}
                            style={commonStyles.textInputStyle}
                            returnKeyType='next'
                            onChangeText={(email) => this.setState({email})}
                        />
                    </View>
                    {/********************* Email View End *******************/}

                    {/********************* Password View Start *******************/}
                    <View>
                        <Image source={require('../../../assests/images/pass.png')}
                               style={commonStyles.emailPasswordImageView}/>
                        <TextField
                            containerStyle={{marginLeft: 30}}
                            ref={ref => this.textInputPassRef = ref}
                            label='Password'
                            maxLength={15}
                            secureTextEntry={true}
                            style={commonStyles.textInputStyle}
                            value={this.state.password}
                            returnKeyType='done'
                            onChangeText={(password) => this.setState({password})}
                        />
                    </View>
                    {/********************* Password View End *******************/}

                    <View style={{flexDirection: 'row-reverse'}}>
                        <Text>Forgot Password</Text>
                    </View>

                    <TouchableWithoutFeedback
                        onPress={() => this.handleValidations()}
                    >
                        <View style={[commonStyles.buttonStyle , {marginTop: 30}]}>

                            <Text style={commonStyles.buttonTextStyle}>{'LOGIN' + ' '}</Text>

                        </View>
                    </TouchableWithoutFeedback>

                </View>
            </ScrollView>
        )
    }


}
