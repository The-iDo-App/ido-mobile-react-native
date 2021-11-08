import { StatusBar } from "expo-status-bar";
import React , {useState, useEffect} from "react";
import {View, Text, ImageBackground, KeyboardAvoidingView, Keyboard, Platform, TextInput} from 'react-native';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback  } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import STYLES from '../../../src/styles';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from "../../../src/consts/colors";
import * as Location from 'expo-location';
import * as Permissions from 'expo-location';



const MultilineText = (props) => {
    return (
        <TextInput 
            {...props}
            editable
            placeholder="Address"
            placeholderTextColor={COLORS.grey}
            style={STYLES.addressInputText}
        />
    )
}

export default function Address({navigation}) {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [textValue, textOnChangeText] = useState('');
    


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

                    <ScrollView>
                        <View style={STYLES.addressWrapper} >
                            <Text style={STYLES.addressTextTitle}>I live at</Text>

                            
                                    <View style={STYLES.addressInputWrapper}>

                                          <MultilineText 
                                            multiline
                                            numberOfLines={textValue === '' ? 1 : 3}
                                            onChangeText={text => textOnChangeText(text)}
                                            value={textValue}
                                            
                                          />
                                          {/* 
                                            malalagay ung value ng geocode
                                            
                                          */}

                                        
                                    </View>

                                

                                    {/*pag kinlick tong button , dapat maprocess ung "Get location" -> "reverse geocoding" -> "display address"} */ }
                                <TouchableOpacity>
                                        <View style={STYLES.locationButton}>
                                            <Text style={{color: COLORS.grey, fontSize: 16, textAlign: 'center'}}>Enable Location</Text>
                                        </View>
                                </TouchableOpacity>
                        
           
                    
                        </View>
                    </ScrollView>
                                <TouchableOpacity style={STYLES.nextButton} onPress={()=>navigation.navigate('EmploymentStatus')}>
                                    <Text style={STYLES.nextText}>Next</Text>
                                </TouchableOpacity>
                        
                                            
        </SafeAreaView>
    );
}