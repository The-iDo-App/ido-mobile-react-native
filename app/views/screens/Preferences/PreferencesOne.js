import React, {useState, useRef} from 'react'
import { StatusBar } from "expo-status-bar";
import {View, Text, ImageBackground, FlatList, Button} from 'react-native';
import {Slider} from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput, TouchableOpacity  } from "react-native-gesture-handler";
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import STYLES from '../../../src/styles';
import COLORS from '../../../src/consts/colors';



const screenGenderList = [
    {key: 0, sgender: 'Women'},
    {key: 1,  sgender: 'Men'},
    {key: 2,  sgender: 'Everyone'},
]

const Item =({item, onPress, backgroundColor, borderColor, color}) => {
    return(
    <TouchableOpacity onPress={onPress}>
            <View style={[STYLES.chips, backgroundColor, borderColor]}>
                <Text style={[STYLES.chipsText,color]}>{item.sgender}</Text>
            </View>
    </TouchableOpacity>
    )
}


const PreferencesOne = ({navigation}) => {
    const [selectGender, setSelectGender] = useState("");
    const [value, setValue] = useState(18);
    const [distance, setDistance] = useState(100);
    
    const  registerUser = async() =>{
        try{
            const gender = screenGenderList[selectGender].sgender;
            const distanceConverter = (distance/1000).toFixed(2) + "km";
            // await AsyncStorage.setItem("gender", gender);
            // await AsyncStorage.setItem("distance", distanceConverter);
            // await AsyncStorage.setItem("age", value);
            if(gender && distanceConverter && value)
                navigation.navigate('Describe');
        }catch(err){
            throw err;
        }
      }
    return (
        <>
            <SafeAreaView style={STYLES.regWrapper}>
                <StatusBar /> 
                <View style={STYLES.header}>
                    <ImageBackground source={require('../../../src/assets/logo1.png')} resizeMode="contain" style={STYLES.headerLogo} />
                </View>   
                <View style={STYLES.createAccountWrap}>
                        <View style={STYLES.createAccountTitleWrap}>
                            <Text style={STYLES.createAccountTitleText}>Show me</Text>
                            <Text  style={STYLES.createAccountDesText}>What are your preferences for an ideal partner?</Text>
                        </View>
                        <View style={{margin:10}}></View>
                        {/*chipset for genders*/}
                        <FlatList 
                            scrollEnabled={true}
                            data={screenGenderList}
                            renderItem={({item}) => {
                                const backgroundColor = item.key === selectGender ? COLORS.darkPink : COLORS.white;
                                const borderColor = item.key === selectGender  ? COLORS.darkPink : COLORS.grey;  
                                const color = item.key === selectGender  ? COLORS.white : COLORS.grey;      
                                return (
                                    <Item
                                    item={item}
                                    onPress={()=>setSelectGender(item.key)}
                                    backgroundColor={{backgroundColor}}
                                    borderColor={{borderColor}}
                                    color={{color}}
                                    /> 
                                )
                                }}
                            keyExtractor={item=> item.key.toString()}
                            style={{marginTop: 20, marginBottom: -40}}
                        />

                        {/*ranges*/}
                        <View style={STYLES.rangeWrapper}>
                            <Text style={STYLES.labelText}>Age</Text>
                            <Slider 
                                thumbStyle={{height: 20, width: 20, backgroundColor: COLORS.blue}}
                                value={value}
                                onValueChange={setValue}
                                maximumValue={65}
                                minimumTrackTintColor={COLORS.blue}
                                minimumValue={18}
                                step={1}
                                
                            />
                            <Text style={{color: COLORS.grey}}>
                                {value === 18 ? "" : "18-"}{value}
                            </Text>
                        </View>
                        
                        <View style={STYLES.rangeWrapper}>
                            <Text  style={STYLES.labelText}>Distance</Text>
                            <Slider 
                                thumbStyle={{height: 20, width: 20, backgroundColor: COLORS.blue}}
                                value={distance}
                                onValueChange={setDistance}
                                maximumValue={20000}
                                minimumTrackTintColor={COLORS.blue}
                                minimumValue={100}
                                step={1}
                                
                            />
                            <Text style={{color: COLORS.grey}}>{
                                (distance === 100)||(distance < 1000) ? distance + "m" : (distance/1000).toFixed(2) + "km"

                            }
                            
                            
                            </Text>
                        </View>
  
                        
                        
                    
                </View>

            

                <TouchableOpacity style={STYLES.nextButton} onPress={()=> registerUser()}>
                    <Text style={STYLES.nextText}>Next</Text>
                </TouchableOpacity>
               
            </SafeAreaView>
        </>
        
    )
}

export default PreferencesOne
