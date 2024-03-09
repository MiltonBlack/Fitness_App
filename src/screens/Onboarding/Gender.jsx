import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const Gender = () => {
  return (
    <View>
      <Text>Choose your Gender</Text>
      <View>
        <Image />
        <Image />
      </View>
      <View>
        <Text>Male</Text>
        <Text>Female</Text>
      </View>
      <Button title='Next' />
    </View>
  )
}

export default Gender