import { Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.title}>Home Workouts</Text>
    <TouchableOpacity style={styles.workoutCard}>
      <Image
        source={require('../assets/images/shoulders.jpg')}
        style={styles.workoutImage}
      />
      <Text style={styles.workoutTitle}>Push-ups</Text>
      <Text style={styles.workoutDescription}>Target: Chest, Shoulders, Triceps</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.workoutCard}>
      <Image
        source={require('../assets/images/glutes-1.png')}
        style={styles.workoutImage}
      />
      <Text style={styles.workoutTitle}>Squats</Text>
      <Text style={styles.workoutDescription}>Target: Quads, Hamstrings, Glutes</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.workoutCard}>
      <Image
        source={require('../assets/images/muscles.jpg')}
        style={styles.workoutImage}
      />
      <Text style={styles.workoutTitle}>Plank</Text>
      <Text style={styles.workoutDescription}>Target: Core muscles</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.workoutCard}>
      <Image
        source={require('../assets/images/muscles.jpg')}
        style={styles.workoutImage}
      />
      <Text style={styles.workoutTitle}>Plank</Text>
      <Text style={styles.workoutDescription}>Target: Butt, Hips and Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.workoutCard}>
      <Image
        source={require('../assets/images/yoga.jpeg')}
        style={styles.workoutImage}
      />
      <Text style={styles.workoutTitle}>Plank</Text>
      <Text style={styles.workoutDescription}>Target: Yoga</Text>
    </TouchableOpacity>
  </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  workoutCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  workoutImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  workoutDescription: {
    fontSize: 14,
    color: '#666',
  },
});