import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import WorkoutImg from '../components/WorkoutImg'
import Workout from '../components/Workout'
import Seperator from '../components/Seperator'

const PushUps = () => {
  const data = [
    {
      id: 1,
      image: require('../assets/images/yoga.jpeg'),
      workout: 'Heel Touch'
    },
    {
      id: 2,
      image: require('../assets/images/yoga.jpeg'),
      workout: 'Jumping Jacks'
    },
    {
      id: 3,
      image: require('../assets/images/yoga.jpeg'),
      workout: 'Russian Twist'
    },
    {
      id: 4,
      image: require('../assets/images/yoga.jpeg'),
      workout: 'Leg Raises'
    },
    {
      id: 5,
      image: require('../assets/images/yoga.jpeg'),
      workout: 'Abdominal Crunches'
    },
    {
      id: 6,
      image: require('../assets/images/yoga.jpeg'),
      workout: 'Abdominal Crunches'
    },
    {
      id: 7,
      image: require('../assets/images/yoga.jpeg'),
      workout: 'Abdominal Crunches'
    },
  ]

  const renderItem = ({ item }) => (
    <Workout item={item} key={item.id} />
  )
  return (
    <View style={{flex:1}}>
      <Text style={styles.header}>Push Ups</Text>
      <WorkoutImg />
      {/* <ScrollView>
        <Workout item={data}/>
        <Seperator/>
        <Workout item={data}/>
        <Seperator/>
        <Workout item={data}/>
        <Seperator/>
        <Workout item={data}/>
        <Seperator/>
        <Workout item={data}/>
        <Seperator/>
        <Workout item={data}/>
        <Seperator/>
        <Workout item={data}/>
        <Seperator/>
        <Workout item={data}/>
        <Seperator/>
        <Workout item={data}/>
        <Seperator/>
      </ScrollView> */}
      <FlatList data={data} renderItem={renderItem} keyExtractor={data.id} ItemSeparatorComponent={Seperator}/>
    </View>
  )
}

export default PushUps

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: "black",
    marginVertical: 15,
    paddingHorizontal: 20
  }
})