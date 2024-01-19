import React, {useState} from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import AssetExample from './components/AssetExample';
import homeStyle from './styles/styleList';
import NavigationBar from './components/navigationBar';

export default function App() {
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
    <SafeAreaView style={homeStyle.container}>
      {/* Task List */}
      <View style={homeStyle.taskContainer}>
      {
        taskItems.map((item,index) => {
         return  (
          <TouchableOpacity onPress={() => handleDelete(index)} key={index}>
         <AssetExample text={item} />
         </TouchableOpacity>
         )
        })
      }
      </View>
        {/* Create Task Bar */}
        <View style={homeStyle.createContainer}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1,flexDirection:'row',}}>
        <TextInput style={homeStyle.textInput} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleTask()}>
          <View style={homeStyle.addButton}>
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
