import { View, Text, FlatList } from 'react-native'
import React from 'react'
import WorkoutImg from '../components/WorkoutImg'
import Seperator from '../components/Seperator'
import Workout from '../components/Workout'
import { styles } from '../styles/Category'
import { data } from '../utils/data'

export default function Squats() {
  const renderItem = ({ item }) => (
    <Workout item={item} key={item.id} image={item.image} work={item.workout} />
  )

  return (
    <View style={{flex:1}}>
      <Text style={styles.header}>Push Ups</Text>
      <WorkoutImg />
      <FlatList data={data} renderItem={renderItem} keyExtractor={data.id} ItemSeparatorComponent={Seperator}/>
    </View>
  )
}
