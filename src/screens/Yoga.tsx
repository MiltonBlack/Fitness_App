import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../styles/Category'
import { IData, data } from '../utils/data'
import Workout from '../components/Workout'
import WorkoutImg from '../components/WorkoutImg'
import Seperator from '../components/Seperator'

const Yoga = () => {
  const renderItem = ({ item }: any) => (
    <Workout item={item} key={item.id} />
  )
  const keyExtractor = (item: any, idx: number) => {
    return idx.toString();
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Push Ups</Text>
      <WorkoutImg />
      <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} ItemSeparatorComponent={Seperator} />
    </View>
  )
}

export default Yoga