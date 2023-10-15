import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize:50,
    backgroundColor:'#343063',
    flex:1,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskContainer:{
    flex:1,
    backgroundColor: 'green',
    borderRadius: 30,
    margin:10,
  },
  createContainer: {
    flex:1,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'flex-end',
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
})