import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import AssetExample from '../components/AssetExample';

import NavigationBar from '../navigation/navigationBar';
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
//import { createStackNavigator } from '../../node_modules/@react-navigation/stack';

export default function HomeScreen() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const handleTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  
    const handleDelete = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy);
    }
    return (
      <SafeAreaView style={styles.container}>
        {/* Task List */}
        <View style={styles.taskContainer}>
        <ScrollView>
        {
          taskItems.map((item,index) => {
           return  (
            <TouchableOpacity onPress={() => handleDelete(index)} key={index}>
           <AssetExample text={item} />
           </TouchableOpacity>
           )
          })
        }
        </ScrollView>
        </View>
          {/* Create Task Bar */}
          <View style={styles.createContainer}>
          <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1,flexDirection:'row',}}>
          <TextInput style={styles.textInput} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleTask()}>
            <View style={styles.addButton}>
            <Text> + </Text>
            </View>
          </TouchableOpacity>
          </KeyboardAvoidingView>
          </View>
          {/*End of Create Task Bar */}
          {/*Navigation*/}
         
          <NavigationBar/>

      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    title: {
      fontSize:50,
      backgroundColor:'#343063',
      flex:1,
    },
    container: {
      flex: 1,
      backgroundColor: '#white',
    },
    taskContainer:{
      flex:4,
      backgroundColor: 'green',
      padding:10,
      paddingTop:10,
    },
    createContainer: {
      flex:1,
      left:0,
      padding:20,
      backgroundColor: 'brown',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    textInput: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: 'pink',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addButton: {
      width: 60,
      height: 60,
      backgroundColor: 'yellow',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    createTaskBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex:1,
      backgroundColor: '#ffff',
    },
  });