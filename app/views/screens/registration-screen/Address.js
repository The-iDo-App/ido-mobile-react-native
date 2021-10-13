import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text, ImageBackground, KeyboardAvoidingView, Keyboard, Platform, TextInput} from 'react-native';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback  } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import STYLES from '../../../src/styles';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from "../../../src/consts/colors";


export default function Address({navigation}) {
    return(
        <SafeAreaView style={STYLES.regWrapper}>
                 <StatusBar /> 
                    <View style={STYLES.header}>
                        <ImageBackground source={require('../../../src/assets/logo1.png')} resizeMode="contain" style={STYLES.headerLogo} />
                    </View>
                    {/* Body */}
                    <View style={STYLES.linkWrapper}> 
                                <TouchableOpacity onPress={()=>navigation.goBack()}>
                                    <Text style={STYLES.linkWrapperText}>Back</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>navigation.navigate('EmploymentStatus')}>
                                    <Text style={STYLES.linkWrapperText}>Skip</Text>
                                </TouchableOpacity>
                    </View>

                <View style={STYLES.addressWrapper} >
                    <Text style={STYLES.addressTextTitle}>I live at</Text>

                    
                            <View style={STYLES.addressInputWrapper}>
                                            <TextInput placeholder="Address" autoCapitalize="words" placeholderTextColor={COLORS.grey} style={STYLES.addressInputText}/>
                            </View>
                       
                            <Text style={STYLES.orText}>OR</Text>

                            
                 
                         <TouchableOpacity style={STYLES.nextButton} onPress={()=>navigation.navigate('EmploymentStatus')}>
                            <Text style={STYLES.nextText}>Next</Text>
                        </TouchableOpacity>
                   
                   
                </View>
         
        </SafeAreaView>
    );
}