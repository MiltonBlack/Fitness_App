import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import WorkoutImg from '../components/WorkoutImg'
import Workout from '../components/Workout'
import Seperator from '../components/Seperator'
import { styles } from '../styles/Category'
import { data } from '../utils/data'
import { useAuth } from '../utils/ContextAPI'
import Button from '../components/Button'

const Personnalized = async ({ navigation }: any) => {
  const { info, retrieveData } = useAuth();
  useEffect(()=> {
    info === null && retrieveData()
  },[]);
  async function filterData(filter: string) {
    return data.filter(item => item.tags[0] === filter || item.tags[1] === filter || item.tags[1] === filter);
  }
  const filtered = filterData(info?.goal?.toLowerCase().toString());
  console.log(filtered);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('trainingdetailed', { image: item.image, workout: item.workout, desc: item.description, duration: item.duration, repeats: item.repeats })}>
      <Workout item={item} key={item.id} />
    </TouchableOpacity>
  )
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Push Ups</Text>
      <WorkoutImg />
      {/* <FlatList data={filtered} renderItem={renderItem} keyExtractor={data.id} ItemSeparatorComponent={Seperator} refreshing={true}/> */}
      {(await filtered)?.map((item: any, idx: number) => (
        <TouchableOpacity onPress={() => navigation.navigate('trainingdetailed', { image: item.image, workout: item.workout, desc: item.description, duration: item.duration, repeats: item.repeats })}>
        <Workout item={item} key={item.id} />
      </TouchableOpacity>
      ))}
      <Seperator/>
      {/* <Button to='exercise' data={filtered}/> */}
      <TouchableOpacity style={styles.start} onPress={() => navigation.navigate('exercise')}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Personnalized