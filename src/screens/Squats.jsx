import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import WorkoutImg from '../components/WorkoutImg'
import Seperator from '../components/Seperator'
import Workout from '../components/Workout'
import { styles } from '../styles/Category'
import { data } from '../utils/data'

export default function Squats({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('trainingdetailed', { image: item.image, workout: item.workout })}>
      <Workout item={item} key={item.id} image={item.image} work={item.workout} />
    </TouchableOpacity>
  )

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Squats</Text>
      <WorkoutImg />
      <FlatList data={data} renderItem={renderItem} keyExtractor={data.id} ItemSeparatorComponent={Seperator} />
      <TouchableOpacity style={styles.start} onPress={()=> navigation.goBack()}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight:'bold' }}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}
