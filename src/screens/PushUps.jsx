import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import WorkoutImg from '../components/WorkoutImg'
import Workout from '../components/Workout'
import Seperator from '../components/Seperator'
import { styles } from '../styles/Category'
import { data } from '../utils/data'
import { useAuth } from '../utils/ContextAPI'

const PushUps = ({ navigation }) => {
  const { info, retrieveData } = useAuth();
  useEffect(()=> {
    retrieveData()
  },[]);
  async function filterData(filter) {
    return data.filter(item => item.tags[0] === filter || item.tags[1] === filter || item.tags[1] === filter);
  }
  const filtered = filterData(info?.goal?.toLowerCase().toString());
  console.log(filtered);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('trainingdetailed', { image: item.image, workout: item.workout, desc: item.description, duration: item.duration, repeats: item.repeats })}>
      <Workout item={item} key={item.id} image={item.image} work={item.workout} />
    </TouchableOpacity>
  )
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Push Ups</Text>
      <WorkoutImg />
      {/* <FlatList data={filtered} renderItem={renderItem} keyExtractor={data.id} ItemSeparatorComponent={Seperator} refreshing={true}/> */}
      {filtered.map((item, idx) => (
        <TouchableOpacity onPress={() => navigation.navigate('trainingdetailed', { image: item.image, workout: item.workout, desc: item.description, duration: item.duration, repeats: item.repeats })}>
        <Workout item={item} key={item.id} image={item.image} work={item.workout} />
      </TouchableOpacity>
      ))}
      <Seperator/>
      <TouchableOpacity style={styles.start} onPress={() => navigation.navigate('exercise')}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PushUps