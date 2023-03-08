import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View,FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import Addtodo from './components/addtodo';
import Sandbox from './components/sandbox';


export default function App() {

  const [todos, setTodos] = useState([
    {text: 'Buy Coffee', key: '1'},
    {text: 'create an App', key: '2'},
    {text: 'Play on the switch', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => { 
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3){
      setTodos((prrevTodos) => {
        return[
          {text: text, key: Math.random().toString() },
          ...prrevTodos
        ]
      })
    } else {
      Alert.alert("Opps!","Todo's must be over 3 chars long", [
        {text: 'Understood', onPress: ()=> console.log('alert closed')}
      ])
    }

   
  }


  return (
    //<Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      console.log('dismiss keyboard')
      Keyboard.dismiss()
    }}>
    <View style={styles.container} >
      {/* Header */}
      <Header/>
      <View style={styles.content}>
        {/* to form */}
        <Addtodo submitHandler = {submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler = {pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //marginTop: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40,
    //backgroundColor: '#add',
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
    //backgroundColor: '#add'
  },
});
