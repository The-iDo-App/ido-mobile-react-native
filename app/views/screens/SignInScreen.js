
import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { Alert, Text, View, Image, TextInput, TouchableOpacity, useColorScheme} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../src/styles';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from '../../src/consts/colors';
import Users from '../../model/users';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../../components/context';

export default function SignInPage({navigation}){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const handleUserlogin = async ()=>{
        const res = await fetch(`http://192.168.0.107:5000/api/logins/email/${username}`,{
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({password})
        });
        const data = await res.json();
        console.log(data);
        if(data)
        navigation.navigate('MainTab');
        else
            return Alert.alert("Incorrect username or password!")
    }

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if(val.trim().length >= 4){
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true,
            });
        }
        else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
    }

    const handlePasswordChange = (val) => {
        if(val.trim().length >= 8){
            setData({
                ...data, 
                password: val,
                isValidPassword: true,
            });
        }
        else{
            setData({
                ...data, 
                password: val,
                isValidPassword: false,
            }); 
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    }

    const handleValidUser = (val) => {
        if(val.trim().length >= 4 ){
            setData({
                ...data,
                isValidUser: true
            });
        }
        else{
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    /* for validation to for email and pass, di ko magawa huhu
    const loginHandle =(email, password) => {
        const foundUser = Users.filter( item => {
            return email = item.email && password === item.password;
        });

        if(data.email.length === 0 || data.password.length === 0){
            Alert.alert('Invalid input', 'Email or password field cannot be empty',[
                {text:'Okay'}
            ]);
            return;
        }

        if(foundUser.length === 0){
            Alert.alert('Invalid user','Email address or password is incorrect', [
                {text: 'Okay'}
            ]);
            return;
        }

       signIn(foundUser);
    }*/
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
                            <TextInput placeholder="example@email.com" 
                                       style={STYLES.textInput}
                                       onChangeText={(val)=>{
                                            textInputChange(val)
                                            setUsername(val)
                                        }}
                                       onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)} />
                            {data.check_textInputChange ?
                            <Feather name="check-circle" color="#77BC7E" size={20} />
                            : null}
                        </View>
                        {/*email address error message*/}
                        {data.isValidUser ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={STYLES.errorMsg}>You must enter a valid email address</Text>
                        </Animatable.View>
                        }

                        {/*password*/}
                        <View style={STYLES.action}>
                            <FontAwesome name="lock" color="#8999a8" size={30} />
                            <TextInput secureTextEntry={data.secureTextEntry ? true : false} placeholder="Password" style={STYLES.textInput} 
                            onChangeText={(val)=>  {
                                handlePasswordChange(val)
                                setPassword(val)
                            }}/>
                            <TouchableOpacity onPress={updateSecureTextEntry}>
                                {data.secureTextEntry ?
                                    <Feather name="eye-off" color="#91C2D0" size={20}/>
                                    : 
                                    <Feather name="eye" color={COLORS.blue} size={20}/>
                                }
                            </TouchableOpacity>
                            
                            
                        </View>
                        {/*password error message*/}
                        {data.isValidPassword ? null :
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={STYLES.errorMsg}>You must enter a valid password</Text>
                            </Animatable.View>
                        }
                        


                        {/*forget password*/}
                        <View style={STYLES.forgotWrap}>
                            <TouchableOpacity>
                                <Text style={STYLES.forgotText}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>
                        {/*Log in button*/}
                        <TouchableOpacity onPress={/*()=> {signIn()}*/ () => handleUserlogin(username,password)}>
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

