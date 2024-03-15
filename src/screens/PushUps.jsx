import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import WorkoutImg from '../components/WorkoutImg'
import Workout from '../components/Workout'
import Seperator from '../components/Seperator'
import { styles } from '../styles/Category'
import { data } from '../utils/data'

const PushUps = () => {

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

export default PushUps