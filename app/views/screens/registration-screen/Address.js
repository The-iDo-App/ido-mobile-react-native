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
import AsyncStorage from "@react-native-async-storage/async-storage";


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
    const [userLocation, setUserLocation]= useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [textValue, textOnChangeText] = useState('');

    const enableLocation = async()=>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        return;
        }
        
        try{
            let coords = await Location.getCurrentPositionAsync({});
            setTimeout(() => {
                 setUserLocation(coords); 
            }, 1000);
        }catch(err){
            throw err;
        }

        try{
            let codedLocation =  await Location.reverseGeocodeAsync({latitude :  userLocation.coords.latitude,longitude :userLocation.coords.longitude}); 
            const address = {
            country: codedLocation[0].country,
            province: codedLocation[0].subregion,
            city: codedLocation[0].city,
            street: codedLocation[0].street,
            postalCode: codedLocation[0].postalCode,
            latitude: userLocation.coords.latitude,
            longitude: userLocation.coords.longitude,
            }
            
            // full address
            // await AsyncStorage.setItem("city",address.city);
            // await AsyncStorage.setItem("country",address.country);
            // await AsyncStorage.setItem("province",address.province);
            // await AsyncStorage.setItem("street",address.street);
            // await AsyncStorage.setItem("latitude",address.latitude.toString());
            // await AsyncStorage.setItem("longitude",address.longitude.toString());
            
            const currentLocation = `${address.street}, ${address.city}, ${address.province}, ${address.country}`;
            setLocation(currentLocation);
            navigation.navigate('EmploymentStatus')
        }
        catch(err){
            console.log(err)
        } 
    }   
   
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

                                       <MultilineText 
                                            multiline
                                            numberOfLines={textValue === '' ? 1 : 3}
                                            value={location}
                                            
                                        />
                            </View>

                            

                            <Text style={STYLES.orText}>OR</Text>


                            {/*pag kinlick tong button , dapat maprocess ung "Get location" -> "reverse geocoding" -> "display address"} */ }
                           <TouchableOpacity onPress={enableLocation}>
                                <View style={STYLES.locationButton}>
                                    <Text style={{color: COLORS.grey, fontSize: 16, textAlign: 'center'}} >Enable Location</Text>
                                </View>
                           </TouchableOpacity>
                           
                         <TouchableOpacity style={STYLES.nextButton} onPress={()=>navigation.navigate('EmploymentStatus')}>
                            <Text style={STYLES.nextText}>Next</Text>
                        </TouchableOpacity>
                   
                   
                </View>
         
        </SafeAreaView>
    );
}