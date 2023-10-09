import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import axios from 'axios'

export default function Homepage({ navigation }) {
  const [message, setMessage] = useState('hello world')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Homepage</Text>
      <Text>{message}</Text>
    </View>
  )
}