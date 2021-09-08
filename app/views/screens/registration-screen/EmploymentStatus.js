import React from "react";
import {View, Text} from 'react-native';
import { ScrollView , TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EmploymentStatus({navigation}) {
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Employment Status</Text>

                    
                    <TouchableOpacity onPress={()=>navigation.navigate('Address')}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}