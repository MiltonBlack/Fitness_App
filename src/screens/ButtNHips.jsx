import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from '../styles/Category'
import { data } from '../utils/data'
import Workout from '../components/Workout'
import WorkoutImg from '../components/WorkoutImg'
import Seperator from '../components/Seperator'

const ButtNHips = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('trainingdetailed', { image: item.image, workout: item.workout, desc: item.description, duration: item.duration, repeats: item.repeats })}>
      <Workout item={item} key={item.id} image={item.image} work={item.workout} />
    </TouchableOpacity>
  )
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Butt and Hips</Text>
      <WorkoutImg />
      {/* onpress filter data by id and pass filtered data to the detailed screen */}
      <FlatList data={data} renderItem={renderItem} keyExtractor={data.id} ItemSeparatorComponent={Seperator} />
      <TouchableOpacity style={styles.start} onPress={()=> navigation.goBack()}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight:'bold' }}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtNHips