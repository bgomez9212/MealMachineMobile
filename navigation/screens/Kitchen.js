import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TextInput, Pressable, StyleSheet } from 'react-native'
import axios from 'axios'

export default function Kitchen({ navigation }) {
  const [input, setInput] = useState('')
  const [ingredients, setIngredients] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/api/ingredients')
      .catch(err => console.log(err))
      .then((result) => setIngredients(result.data))
  }, [])
  console.log(ingredients)
  return (
    <View className="container">
      <TextInput
        style={styles.textInput}
        placeholder="Stock your kitchen!"
        onChangeText={newText => setInput(newText)}
        defaultValue={input}
      />
        <FlatList style={{ marginHorizontal: 10 }} data={ingredients}
          renderItem={({item}) => {
            return (
            <View style={styles.listItem}>
              <Text style={{fontSize: 20}}>{item.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Pressable style={styles.addButton}>
                  <Text style={styles.buttonText}>+</Text>
                </Pressable>
                <Pressable style={styles.removeButton}>
                  <Text style={styles.buttonText}>-</Text>
                </Pressable>
              </View>
            </View>
            )}} />
    </View>
  )
}

const styles = StyleSheet.create({
  addButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'green',
    marginRight: 5
  },
  removeButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'red'
  },
  textInput: {
    height: 40,
    backgroundColor: 'white',
    marginTop: 15,
    marginHorizontal: 10,
    marginBottom: 30
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
})