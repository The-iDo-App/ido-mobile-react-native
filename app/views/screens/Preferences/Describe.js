import React, {useState} from 'react'
import { StatusBar } from "expo-status-bar";
import {View, Text, TextInput,  ImageBackground, FlatList} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity  } from "react-native-gesture-handler";
import { Divider, Input, ListItem, Button} from 'react-native-elements';

import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import STYLES from '../../../src/styles';
import COLORS from '../../../src/consts/colors';

// data list

import AstrologicalSign from '../../../model/Astrological';
import PoliticalViews from '../../../model/PolitcalViews';
import Religion from '../../../model/Religion';
import SmokeList from '../../../model/Smoking';
import DrinkingHabit from '../../../model/DrinkingHabits';
import WantKidsList from '../../../model/WantKids';

import { Icon } from 'react-native-elements/dist/icons/Icon';
import { BottomSheet } from 'react-native-elements/dist/bottomSheet/BottomSheet';



const Describe = ({navigation}) => {
    
    const [selected, setSelected] = useState();
    const [bottomSheetShow, setBottomSheetShow] = useState(false);
    const [religionBSShow, setReligionBSShow] = useState(false);
    const [politicalBSShow, setPoliticalBSShow] = useState(false);
    const [smokeBSShow, setSmokeBSShow] = useState(false);
    const [drinkBSShow, setDrinkBSShow] = useState(false);
    const [wantKidsBSShow, setWantKidsBSShow] = useState(false);





    const handleItem = (sign) => {
        
        setBottomSheetShow(false);
    }

    const religionHandleItem = (belief) => {
        
        setReligionBSShow(false);
    }

     const politicalHandleItem = (view) => {
        
        setPoliticalBSShow(false);
    }

     const smokeHandleItem = (smoke) => {
        
        setSmokeBSShow(false);
    }


     const drinkHandleItem = (habit) => {
        
        setDrinkBSShow(false);
    }

     const wantKidsHandleItem = (want) => {
        
        setWantKidsBSShow(false);
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
               
            <ScrollView style={{margin: 10}}> 
                <View style={STYLES.createAccountWrap}>
                    <View style={STYLES.createAccountTitleWrap}>
                        <Text style={STYLES.createAccountTitleText}>What describes you the most?</Text>
                        <Text style={STYLES.createAccountDesText}>Choose only one per section</Text>
                    </View>
                    
                    {/*Describe yourself*/}
                    <View style={{marginTop: 40}}></View>
                    <View style={{width: 400, padding: 10}}>
                        {/*AstrologicalSign*/}
                        <Text style={STYLES.labelText}>1. What is your Astrological Sign?</Text>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}> 
                            <TextInput  editable={false} placeholder="Choose one" style={{fontSize: 16, color: COLORS.grey}} />
                            <TouchableOpacity onPress={() => setBottomSheetShow(true)}>
                                 <Icon  type="ant-design" name="down" size={16} color={COLORS.grey} />
                            </TouchableOpacity>
                           
                        </View>
                        <Divider orientation="horizontal" />
                    </View>

                    <View style={{width: 400, padding: 10}}>
                        {/*Religion*/}
                        <Text style={STYLES.labelText}>2. What is your Religion?</Text>
                         <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}> 
                            <TextInput  editable={false} placeholder="Choose one" style={{fontSize: 16, color: COLORS.grey}} />
                            <TouchableOpacity onPress={() => setReligionBSShow(true)}>
                                 <Icon  type="ant-design" name="down" size={16} color={COLORS.grey} />
                            </TouchableOpacity>
                           
                        </View>
                         <Divider orientation="horizontal" />
                    </View>

                    <View style={{width: 400, padding: 10}}>
                        {/*Political View*/}
                        <Text style={STYLES.labelText}>3. What is your Political View?</Text>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}> 
                            <TextInput  editable={false} placeholder="Choose one" style={{fontSize: 16, color: COLORS.grey}} />
                            <TouchableOpacity onPress={() => setPoliticalBSShow(true)}>
                                 <Icon  type="ant-design" name="down" size={16} color={COLORS.grey} />
                            </TouchableOpacity>
                           
                        </View>
                         <Divider orientation="horizontal" />
                    </View>

                    <View style={{width: 400, padding: 10}}> 
                        {/*Drinking Habits*/}
                        <Text style={STYLES.labelText}>4. How often do you drink?</Text>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}> 
                            <TextInput  editable={false} placeholder="Choose one" style={{fontSize: 16, color: COLORS.grey}} />
                            <TouchableOpacity onPress={() => setDrinkBSShow(true)}>
                                 <Icon  type="ant-design" name="down" size={16} color={COLORS.grey} />
                            </TouchableOpacity>
                           
                        </View>
                         <Divider orientation="horizontal" />
                    </View>

                    <View style={{width: 400, padding: 10}}>
                        {/*Smoking*/}
                        <Text style={STYLES.labelText}>5. How often do you smoke?</Text>
                         <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}> 
                            <TextInput  editable={false} placeholder="Choose one" style={{fontSize: 16, color: COLORS.grey}} />
                            <TouchableOpacity onPress={() => setSmokeBSShow(true)}>
                                 <Icon  type="ant-design" name="down" size={16} color={COLORS.grey} />
                            </TouchableOpacity>
                           
                        </View>
                         <Divider orientation="horizontal" />
                    </View>

                    <View style={{width: 400, padding: 10}}>
                        {/*WantKids*/}
                        <Text style={STYLES.labelText}>6. Do you want kids?</Text>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}> 
                            <TextInput  editable={false} placeholder="Choose one" style={{fontSize: 16, color: COLORS.grey}} />
                            <TouchableOpacity onPress={() => setWantKidsBSShow(true)}>
                                 <Icon  type="ant-design" name="down" size={16} color={COLORS.grey} />
                            </TouchableOpacity>
                           
                        </View>
                         <Divider orientation="horizontal" />
                    </View>





                </View>
            

            

            


            </ScrollView>

            
                
                <TouchableOpacity style={STYLES.nextButton} onPress={()=> navigation.navigate('SportsInterest')}>
                    <Text style={STYLES.nextText}>Next</Text>
                </TouchableOpacity>

                {/*Bottomsheet for Astrological Sign*/}
                <BottomSheet isVisible={bottomSheetShow}>
                    <View style={{backgroundColor: COLORS.white, padding: 20}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={STYLES.labelText}>Astrological Sign</Text>  
                            <Button onPress={()=>setBottomSheetShow(false)} buttonStyle={{backgroundColor: 'transparent'}} icon={<Icon type="font-awesome" size={10}  name="window-minimize" color={COLORS.grey} />} /> 
                        </View>
                        {
                            AstrologicalSign.map((l, i) => 
                              
                            (
                                <ListItem key={i} onPress={handleItem} >
                                    <ListItem.Content>
                                        <ListItem.Title style={{color: COLORS.grey}}>{l.sign}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>    
                            ) )
                        }
                    </View>

                </BottomSheet>
                
                {/*Bottomsheet for Religion*/}
                <BottomSheet isVisible={religionBSShow}>
                    <View style={{backgroundColor: COLORS.white, padding: 20}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={STYLES.labelText}>Religion</Text>  
                            <Button onPress={()=>setReligionBSShow(false)} buttonStyle={{backgroundColor: 'transparent'}} icon={<Icon type="font-awesome" size={10}  name="window-minimize" color={COLORS.grey} />} /> 
                        </View>
                        {
                            Religion.map((j, k) => 
                              
                            (
                                <ListItem key={k} onPress={religionHandleItem} >
                                    <ListItem.Content>
                                        <ListItem.Title style={{color: COLORS.grey}}>{j.belief}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>    
                            ) )
                        }
                    </View>

                </BottomSheet>

                {/*Bottomsheet for Political Views*/}
                <BottomSheet isVisible={politicalBSShow}>
                    <View style={{backgroundColor: COLORS.white, padding: 20}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={STYLES.labelText}>Political View</Text>  
                            <Button onPress={()=>setPoliticalBSShow(false)} buttonStyle={{backgroundColor: 'transparent'}} icon={<Icon type="font-awesome" size={10}  name="window-minimize" color={COLORS.grey} />} /> 
                        </View>
                        {
                            PoliticalViews.map((m, n) => 
                              
                            (
                                <ListItem key={n} onPress={politicalHandleItem} >
                                    <ListItem.Content>
                                        <ListItem.Title style={{color: COLORS.grey}}>{m.view}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>    
                            ) )
                        }
                    </View>

                </BottomSheet>
                
                {/*Bottomsheet for Drinking Habit*/}
                <BottomSheet isVisible={drinkBSShow}>
                    <View style={{backgroundColor: COLORS.white, padding: 20}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={STYLES.labelText}>Religion</Text>  
                            <Button onPress={()=>setDrinkBSShow(false)} buttonStyle={{backgroundColor: 'transparent'}} icon={<Icon type="font-awesome" size={10}  name="window-minimize" color={COLORS.grey} />} /> 
                        </View>
                        {
                            DrinkingHabit.map((o, p) => 
                              
                            (
                                <ListItem key={p} onPress={drinkHandleItem} >
                                    <ListItem.Content>
                                        <ListItem.Title style={{color: COLORS.grey}}>{o.habit}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>    
                            ) )
                        }
                    </View>

                </BottomSheet>


                {/*Bottomsheet for Smoking*/}
                <BottomSheet isVisible={smokeBSShow}>
                    <View style={{backgroundColor: COLORS.white, padding: 20}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={STYLES.labelText}>How often do you smoke?</Text>  
                            <Button onPress={()=>setSmokeBSShow(false)} buttonStyle={{backgroundColor: 'transparent'}} icon={<Icon type="font-awesome" size={10}  name="window-minimize" color={COLORS.grey} />} /> 
                        </View>
                        {
                            SmokeList.map((q, r) => 
                              
                            (
                                <ListItem key={r} onPress={smokeHandleItem} >
                                    <ListItem.Content>
                                        <ListItem.Title style={{color: COLORS.grey}}>{q.smoke}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>    
                            ) )
                        }
                    </View>

                </BottomSheet>
                
                {/*Bottomsheet for Want Kids*/}
                <BottomSheet isVisible={wantKidsBSShow}>
                    <View style={{backgroundColor: COLORS.white, padding: 20}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={STYLES.labelText}>Do you want kids?</Text>  
                            <Button onPress={()=>setWantKidsBSShow(false)} buttonStyle={{backgroundColor: 'transparent'}} icon={<Icon type="font-awesome" size={10}  name="window-minimize" color={COLORS.grey} />} /> 
                        </View>
                        {
                            WantKidsList.map((t, u) => 
                              
                            (
                                <ListItem key={u} onPress={wantKidsHandleItem} >
                                    <ListItem.Content>
                                        <ListItem.Title style={{color: COLORS.grey}}>{t.want}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>    
                            ) )
                        }
                    </View>

                </BottomSheet>





        </SafeAreaView>
    )
}

export default Describe
