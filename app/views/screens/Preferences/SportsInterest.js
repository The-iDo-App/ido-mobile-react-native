import React, { useState } from 'react'
import { StatusBar } from "expo-status-bar";
import {View, Text, ImageBackground, FlatList} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity  } from "react-native-gesture-handler";
import { Chip } from 'react-native-paper';
import STYLES from '../../../src/styles';
import COLORS from '../../../src/consts/colors';

// datalist
import SportList from '../../../model/Sports';




const SportsInterest = ({navigation}) => {
    const [selectSport, setSelectedSport] = useState([]);

    //function to select at least 5 sport interest
    const handleSports = (index) => {
        let max = 5; 

        setSelectedSport(index);

    }

    return (
        <SafeAreaView style={STYLES.regWrapper}>
            <StatusBar /> 
            <View style={STYLES.header}>
                     <ImageBackground source={require('../../../src/assets/logo1.png')} resizeMode="contain" style={STYLES.headerLogo} />
            </View>
            <View style={STYLES.linkWrapper}> 
                                <TouchableOpacity onPress={()=>navigation.goBack()}>
                                    <Text style={STYLES.linkWrapperText}>Back</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>navigation.navigate('SportsInterest')}>
                                    <Text style={STYLES.linkWrapperText}>Skip</Text>
                                </TouchableOpacity>
            </View>
               
            
            <View style={{marginTop: 60}}>
                <View style={STYLES.createAccountWrap}>
                    <View style={STYLES.createAccountTitleWrap}>
                        <Text style={STYLES.createAccountTitleText}>Choose your interests!</Text>
                        <Text style={STYLES.createAccountDesText}>Choose at least five interests in each sections</Text>
                    
                        <View style={{width: 360, marginTop: 40}}>
                            <Text style={STYLES.interestText}>SPORTS</Text>
                        </View>
                    </View>
                    
                    {/*Accordion collapse and flatlist (multiple select)*/}

                   
                        


                </View>
                <View style={STYLES.interestWrapper}>

                    {
                        
                        SportList.map((item, index) => {
                            const color =  index === selectSport  ? COLORS.white : COLORS.grey;
                            const borderColor = index === selectSport ? COLORS.darkPink: COLORS.grey;
                            const backgroundColor = index === selectSport? COLORS.darkPink: COLORS.white;

                           return (
                                <TouchableOpacity style={{ margin: 2}} key={index} onPress={()=>handleSports(index)} >
                                    <View>
                                        <Text style={{color: color,
                                                            backgroundColor: backgroundColor, 
                                                            borderColor: borderColor,
                                                            margin: 2, 
                                                            fontSize: 14, 
                                                            padding: 10,
                                                            borderWidth: 1, 
                                                            borderRadius: 25,
                                                            textAlign: 'center'
                                                            }}>{item.sports}</Text>
    
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        
                        )
                    }


                </View>
                         
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 200}}>
                    <Text style={{color: COLORS.blue, fontSize: 16}}>1&nbsp;/</Text><Text style={{color: COLORS.grey, fontSize: 16, fontWeight: 'bold'}}>&nbsp;7</Text>
                </View> 

            </View>
            
                            
             <TouchableOpacity style={STYLES.nextButton} onPress={()=> navigation.navigate('Questions')}>
                      <Text style={STYLES.nextText}>Next</Text>
              </TouchableOpacity>
                                
                             

        </SafeAreaView>
    )
}

export default SportsInterest
