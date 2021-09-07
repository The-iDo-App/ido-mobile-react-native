import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Linking, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import STYLES from '../../src/styles';

export default function SignUpPage({navigation}) {

    return (
        <SafeAreaView style={STYLES.authWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <StatusBar style="auto" />
                    <Image source={require('../../src/assets/idoWhite.png')} style={STYLES.idoLogo} />
                    <Text style={STYLES.txtLogIn}>Register to continue</Text>
                    <View style={STYLES.formWrapper}>

                        <Text style={STYLES.txtStyle}>Email Address</Text>
                        <TextInput style={STYLES.inputBox} placeholder={"Email Address"} />
                        <Text style={STYLES.txtStyle}>Password</Text>
                        <TextInput style={STYLES.inputBox} placeholder={"Password"} />
                        <Text style={STYLES.txtStyle}>Confirm Password</Text>
                        <TextInput style={STYLES.inputBox} placeholder={"Confirm Password"} />

                        <TouchableOpacity>
                            <View style={STYLES.logInWrapper}>
                                <Text style={STYLES.logInText}>REGISTER</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={STYLES.orLogInWrapper}>
                        <View style={STYLES.Line1}></View>
                        <Text style={STYLES.orLogInText}>OR REGISTER WITH</Text>
                        <View style={STYLES.Line2}></View>
                    </View>

                    {/*Authentication buttons to Google and Facebook*/}
                    <View style={STYLES.authenticationWrapper}>

                        <TouchableOpacity>
                            <View style={STYLES.facebookWrapper}>
                                <Text style={STYLES.facebookText}>f</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={STYLES.googleWrapper}>
                                <Text style={STYLES.googleText}>G</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={STYLES.paginationWrapper}>
                        {/* Don't have an account? Create an account */}
                        <Text style={STYLES.noAccountText}>Already have an account?&nbsp;</Text>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Text style={STYLES.createAccountText}>Log in!</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );



}

