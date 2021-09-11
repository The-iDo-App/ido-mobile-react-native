import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text, ImageBackground, Image} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Modal, Portal , Provider} from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import STYLES from '../../../src/styles';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from "../../../src/consts/colors";
import { Avatar } from "react-native-elements";




export default function CreateAccount({navigation}) {

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 10};
  
 

    return(
        <SafeAreaView style={STYLES.regWrapper}>
            <StatusBar />
            
            <View style={STYLES.header}>
                <ImageBackground source={require('../../../src/assets/logo1.png')} resizeMode="contain" style={STYLES.headerLogo} />
            </View>
            
           
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={STYLES.createAccountWrap}>
                    <View style={STYLES.createAccountTitleWrap}>
                         <Text style={STYLES.createAccountTitleText}>Let's set you up an account</Text>
                         <Text style={STYLES.createAccountDesText}>Upload your photo or select with the available avatars</Text>
                    </View>
                    <View style={STYLES.choosePhotoWrapper}>
                        
                        <View style={STYLES.imageWrapper}>
                            <Image source={require('./Avatar/avatar.png')} resizeMode={"cover"} style={{height: 150, width: 150, borderRadius: 100}} />
                        </View>
                        
                        <TouchableOpacity onPress={showModal}>
                            <View style={STYLES.addButton}>
                                <Feather name="plus" size={15} color={COLORS.blue} />
                                <Text style={STYLES.addText} >  &nbsp;Add an avatar or upload a photo</Text>
                            </View>
                        </TouchableOpacity>

                                
                         
                           
                           {/*<Image source={require('../../../src/assets/Avatar PNG/Asset 156.png')}   style={{width: 100, height: 100}}/> */}
                       
                    </View>

                            
                                        
                            
                         

                    {
                        /* <TouchableOpacity onPress={()=>navigation.navigate('Sexuality')}>
                        <Text>Next</Text>
                    </TouchableOpacity>*/
                    }
                    
                    
                </View>
            </ScrollView>
                    <Provider>
                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={STYLES.modalWrapper} children={true}>
                                
                                <View style={STYLES.modalHeader}>
                                    <Text style={STYLES.modalHeaderText}>Example Modal</Text>
                                    <TouchableOpacity onPress={hideModal}>
                                        <Text style={STYLES.modalHeaderCloseButton}>&times;</Text>
                                    </TouchableOpacity>
                                </View>
                                
                                                            
                               
                          
                            </Modal>
                        </Portal>
                    </Provider>
        </SafeAreaView>
    );
}