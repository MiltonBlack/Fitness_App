import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import WorkoutImg from '../components/WorkoutImg'
import Seperator from '../components/Seperator'
import Workout from '../components/Workout'
import { styles } from '../styles/Category'
import { data } from '../utils/data'

type Props = {
  navigation: NavigationProp<any>;
}

export default function BodyBuilding({ navigation }: Props) {

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('trainingdetailed', { image: item.image, workout: item.workout, desc: item.description, duration: item.duration, repeats: item.repeats })}>
      <Workout item={item} key={item.id} />
    </TouchableOpacity>
  )

  const keyExtractor = (item: any, idx: number) => {
    return idx.toString();
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Squats</Text>
      <WorkoutImg />
      <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} ItemSeparatorComponent={Seperator} />
      <TouchableOpacity style={styles.start} onPress={() => navigation.goBack()}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}
