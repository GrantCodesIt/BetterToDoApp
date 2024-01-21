import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

export default function App(){
    return (
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
    );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#white',
      },
      createContainer: {
        flex:1,
        borderRadius: 30,
        margin:10,
        backgroundColor: 'brown',
        justifyContent: 'center',
        alignItems: 'flex-start',
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
  });