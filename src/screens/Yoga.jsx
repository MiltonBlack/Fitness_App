import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../styles/Category'
import { data } from '../utils/data'
import Workout from '../components/Workout'
import WorkoutImg from '../components/WorkoutImg'
import Seperator from '../components/Seperator'
// import { NavigationProp } from '@react-navigation/native'

// type Props = {
//   route: NavigationProp<any>;
// }

const Yoga = () => {
  const renderItem = ({ item }) => (
    <Workout item={item} key={item.id} image={item.image} work={item.workout} />
  )
  const keyExtractor = (item, idx) => {
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