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
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );



}

