import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const Goal = () => {
  return (
    <View>
      <Text>Your Main Goal</Text>
      <View>
        <View>
          <Text>Loose Weight</Text>
          <Image/>
        </View>
        <View>
          <Text>Build Muscle</Text>
          <Image/>
        </View>
        <View>
          <Text>Get Toned</Text>
          <Image/>
        </View>
        <View>
          <Text>Burn Fat</Text>
          <Image/>
        </View>
      </View>
      <Button title='Next' />
    </View>
  )
}

export default Goal