import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import WorkoutImg from '../components/WorkoutImg'
import Workout from '../components/Workout'
import Seperator from '../components/Seperator'

const PushUps: React.FC = () => {
  return (
    <View>
      <Text style={styles.header}>PushUps</Text>
      <WorkoutImg />
      <ScrollView>
        <Workout/>
        <Seperator/>
        <Workout/>
        <Seperator/>
        <Workout/>
        <Seperator/>
        <Workout/>
        <Seperator/>
      </ScrollView>
    </View>
  )
}

export default PushUps

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: "black",
    marginVertical: 15
  }
})