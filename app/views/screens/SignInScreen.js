
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Linking, TouchableOpacity, useColorScheme} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../src/styles';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from '../../src/consts/colors';

export default function SignInPage({navigation}){
    
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
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

    const updateSecureTextEntry = () => {
        setData({
            ... data,
            secureTextEntry: !data.secureTextEntry,
        });
    }

        return (
            <SafeAreaView style={STYLES.authWrapper}>
               <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <StatusBar style="auto"/>
                        {/*Logo*/}
                        <View style={STYLES.logoWrapper}>
                            <Image source={require('../../src/assets/logo1.png')} resizeMode='contain' style={STYLES.logo}/>
                        </View>
                        {/*Log in to continue*/}
                        <View style={STYLES.textWrapper}>
                            <Text style={STYLES.textText}>Log in to continue</Text>
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
                        {/*forget password*/}
                        <View style={STYLES.forgotWrap}>
                            <TouchableOpacity>
                                <Text style={STYLES.forgotText}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>
                        {/*Log in button*/}
                        <TouchableOpacity>
                            <View style={STYLES.loginBtn}>
                                <Text style={STYLES.loginText}>LOG IN</Text>
                            </View>
                        </TouchableOpacity>
                        {/*or log in with*/}
                        <View style={STYLES.orWrap}>
                            <View style={STYLES.line1}></View>
                            <Text style={STYLES.orText}>&nbsp;OR LOG IN WITH&nbsp;</Text>
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
                            <Text style={STYLES.noAccountText}>Don't have an account?&nbsp;</Text>
                            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                                <Text style={STYLES.noAccountLink}>Create an account!</Text>
                            </TouchableOpacity>
                        </View>               
                    </View>
               </ScrollView>
           </SafeAreaView>
        );
 
  

}

