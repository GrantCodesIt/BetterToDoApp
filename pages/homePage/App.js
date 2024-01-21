import React, {useState} from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import AssetExample from './components/AssetExample';
import homeStyle from '../../styles/styleList';
import NavigationBar from '../../components/navigationBar';
import CreateTask from './components/CreateTask';
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
      <ScrollView style={homeStyle.taskContainer}>
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
        {/* Create Task Bar */}
        <CreateTask/>
        {/*End of Create Task Bar */}
        {/*Navigation*/}
        <NavigationBar/>
    </SafeAreaView>
  );
}
