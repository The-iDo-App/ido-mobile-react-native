import React from "react";
import {View, Text} from 'react-native';
import { ScrollView , TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Address({navigation}) {
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>I live at</Text>

                    
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}