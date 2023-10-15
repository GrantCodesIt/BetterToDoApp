import React, {useState} from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import AssetExample from './components/AssetExample';
import mystyle from './styles/styleList';

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
    <SafeAreaView style={mystyle.container}>
      {/* Task List */}
      <View style={mystyle.taskContainer}>
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
        <View style={mystyle.createContainer}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1,flexDirection:'row',}}>
        <TextInput style={mystyle.textInput} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleTask()}>
          <View style={mystyle.addButton}>
          <Text> + </Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
        {/*End of Create Task Bar */}

    </SafeAreaView>
  );
}
