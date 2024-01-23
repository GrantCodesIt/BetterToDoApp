import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import AssetExample from './src/components/AssetExample';
import NavigationBar from './src/navigation/navigationBar';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from './node_modules/@react-navigation/native';
 import { createStackNavigator } from './node_modules/@react-navigation/stack';
import Auth from './src/navigation/Auth';

export default function App() {
  return (
    <Auth/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
  },
});