import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import WorkoutImg from '../components/WorkoutImg'
import Workout from '../components/Workout'
import Seperator from '../components/Seperator'
import { data } from '../utils/data'
import { styles } from '../styles/Category'

export default function Planks({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('trainingdetailed', { image: item.image, workout: item.workout, desc: item.description, duration: item.duration, repeats: item.repeats })}>
      <Workout item={item} key={item.id} image={item.image} work={item.workout} />
    </TouchableOpacity>
  )
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Planks</Text>
      <WorkoutImg />
      <FlatList data={data} renderItem={renderItem} keyExtractor={data.id} ItemSeparatorComponent={Seperator} />
      <TouchableOpacity style={styles.start} onPress={()=> navigation.goBack()}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight:'bold' }}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}