import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthApp from './components/authentication';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" barStyle="dark-content" backgroundColor='#fff'/>
      <AuthApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
