import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../styles/Category'
import { data } from '../utils/data'
import Workout from '../components/Workout'
import WorkoutImg from '../components/WorkoutImg'
import Seperator from '../components/Seperator'

const ButtNHips = () => {
  const renderItem = ({ item }) => (
    <Workout item={item} key={item.id} />
  )
  return (
    <View style={{flex:1}}>
      <Text style={styles.header}>Push Ups</Text>
      <WorkoutImg />
      {/* onpress filter data by id and pass filtered data to the detailed screen */}
      <FlatList data={data} renderItem={renderItem} keyExtractor={data.id} ItemSeparatorComponent={Seperator}/>
    </View>
  )
}

export default ButtNHips