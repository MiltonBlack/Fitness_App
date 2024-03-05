import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

type Props = {}

function Report({ }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Report</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>Total Workouts: 10</Text>
        <Text style={styles.stat}>Total Duration: 5 Hours</Text>
        <Text style={styles.stat}>Average Calories Burned: 200</Text>
        <Text style={styles.subTitle}>Recent Workouts:</Text>
        <View style={styles.workOutList}>
          {/* list of recent workouts */}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    color: 'black'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  statsContainer: {
    marginBottom: 20
  },
  stat: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black'
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginTop: 10
  },
  workOutList: {
    flex: 1
  }
})
export default Report;