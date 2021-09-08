import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Linking, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../src/styles';
import COLORS from '../../src/consts/colors';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';

export default function SignUpPage({navigation}) {
    
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true,
    });

    const textInputChange = (val) => {
        if(val.length !== 0){
            setData({
                ... data,
                email: val,
                check_textInputChange: true
            });
        }
        else{
            setData({
                ... data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ... data, 
            password: val
        });
    }

       const handleConfirmPasswordChange = (val) => {
        setData({
            ... data, 
            confirmPassword: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ... data,
            secureTextEntry: !data.secureTextEntry,
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ... data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry,
        });
    }
    return (
        <SafeAreaView style={STYLES.authWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <StatusBar style="auto" />
                     {/*Logo*/}
                        <View style={STYLES.logoWrapper}>
                            <Image source={require('../../src/assets/logo1.png')} resizeMode='contain' style={STYLES.logo}/>
                        </View>
                        {/*Log in to continue*/}
                        <View style={STYLES.textWrapper}>
                            <Text style={STYLES.textText}>Register to continue</Text>
                        </View>
                        {/*email address*/}
                        <View style={STYLES.action}>
                            <FontAwesome name="envelope" color="#8999a8" size={20} />
                            <TextInput placeholder="example@email.com" style={STYLES.textInput} onChangeText={(val)=>textInputChange(val)} />
                            {data.check_textInputChange ?
                            <Feather name="check-circle" color="#77BC7E" size={20} />
                            : null}
                        </View>
                        {/*password*/}
                        <View style={STYLES.action}>
                            <FontAwesome name="lock" color="#8999a8" size={30} />
                            <TextInput secureTextEntry={data.secureTextEntry ? true : false} placeholder="Password" style={STYLES.textInput} onChangeText={(val)=>handlePasswordChange(val)}/>
                            <TouchableOpacity onPress={updateSecureTextEntry}>
                                {data.secureTextEntry ?
                                    <Feather name="eye-off" color="#91C2D0" size={20}/>
                                    : 
                                    <Feather name="eye" color={COLORS.blue} size={20}/>
                                }
                            </TouchableOpacity>
                            
                            
                        </View>
                        {/*Confirm password*/}
                        <View style={STYLES.action}>
                            <FontAwesome name="lock" color="#8999a8" size={30} />
                            <TextInput secureTextEntry={data.confirmSecureTextEntry ? true : false} placeholder="Confirm password" style={STYLES.textInput} onChangeText={(val)=>handleConfirmPasswordChange(val)}/>
                            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                                {data.confirmSecureTextEntry ?
                                    <Feather name="eye-off" color="#91C2D0" size={20}/>
                                    : 
                                    <Feather name="eye" color={COLORS.blue} size={20}/>
                                }
                            </TouchableOpacity>
                            
                            
                        </View>
                        
                        {/*Log in button*/}
                        <TouchableOpacity onPress={()=> navigation.navigate('CreateAccount')}>
                            <View style={STYLES.loginBtn}>
                                <Text style={STYLES.loginText}>REGISTER</Text>
                            </View>
                        </TouchableOpacity>
                        {/*or log in with*/}
                        <View style={STYLES.orWrap}>
                            <View style={STYLES.line1}></View>
                            <Text style={STYLES.orText}>&nbsp;OR REGISTER WITH&nbsp;</Text>
                            <View style={STYLES.line2}></View>
                        </View>
                        {/*facebook and google*/}
                        <View style={STYLES.authenticationWrap}>
                            <TouchableOpacity>
                                <View style={STYLES.fbBtn}>
                                    <FontAwesome name="facebook-f" color="#4267B2" size={35}></FontAwesome>
                                </View>
                            </TouchableOpacity>
                             <TouchableOpacity>
                                <View style={STYLES.googleBtn}>
                                    <AntDesign name="google" color="#DB4437" size={35}></AntDesign>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/*Don' have an account? Create an account!*/}     
                        <View style={STYLES.noAccountWrap}>
                            <Text style={STYLES.noAccountText}>Already have an account?&nbsp;</Text>
                            <TouchableOpacity onPress={()=> navigation.goBack()}>
                                <Text style={STYLES.noAccountLink}>Log in!</Text>
                            </TouchableOpacity>
                        </View>       
                </View>
            </ScrollView>
        </SafeAreaView>
    );



}

