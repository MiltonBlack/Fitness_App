import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import WorkoutImg from '../components/WorkoutImg'
import Workout from '../components/Workout'
import Seperator from '../components/Seperator'
import { styles } from '../styles/Category'
import { data } from '../utils/data'

const PushUps = ({navigation}) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('trainingdetailed', { image: item.image, workout: item.workout })}>
      <Workout item={item} key={item.id} image={item.image} work={item.workout} />
    </TouchableOpacity>
  )
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Push Ups</Text>
      <WorkoutImg />
      <FlatList data={data} renderItem={renderItem} keyExtractor={data.id} ItemSeparatorComponent={Seperator} />
      <TouchableOpacity style={styles.start} onPress={()=> navigation.navigate('exercise')}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight:'bold' }}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PushUps