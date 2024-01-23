import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import AssetExample from './src/components/AssetExample';
import NavigationBar from './src/navigation/navigationBar';
import HomeScreen from './src/screens/HomeScreen';
// import { NavigationContainer } from './node_modules/@react-navigation/native';
// import { createStackNavigator } from './node_modules/@react-navigation/stack';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
  },
});