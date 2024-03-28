import { Image, StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'

const Home = ({ navigation }: any) => {

  function Navigate(route: string) {
    navigation.navigate(`${route}`);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 10 }}>
        <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#a1c4e7', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: '700' }}>FO</Text>
        </View>
        <Text style={styles.title}>Favour Oghechi</Text>
      </View>
      <TouchableOpacity style={styles.workoutCard} onPress={() => Navigate('personnalized')}>
        <Image
          source={require('../assets/images/shoulders.jpg')}
          style={styles.workoutImage}
        />
        <Text style={styles.workoutTitle}>Push-ups</Text>
        <Text style={styles.workoutDescription}>Customized just for You</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workoutCard} onPress={() => Navigate('bodybuilding')}>
        <Image
          source={require('../assets/images/glutes-1.jpg')}
          style={styles.workoutImage}
        />
        <Text style={styles.workoutTitle}>Body Building and Fitness</Text>
        <Text style={styles.workoutDescription}>Target: Full Body</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workoutCard} onPress={() => Navigate('hiit')}>
        <Image
          source={require('../assets/images/muscles.jpg')}
          style={styles.workoutImage}
        />
        <Text style={styles.workoutTitle}>High Intensive Training</Text>
        <Text style={styles.workoutDescription}>Target: Chest, Arms and Core muscles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workoutCard} onPress={() => Navigate('buttnhips')}>
        <Image
          source={require('../assets/images/ButtnHips.jpg')}
          style={styles.workoutImage}
        />
        <Text style={styles.workoutTitle}>Butt and Hips</Text>
        <Text style={styles.workoutDescription}>Target: Butt, Hips and Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workoutCard} onPress={() => Navigate('equipment')}>
        <Image
          source={require('../assets/images/ButtnHips.jpg')}
          style={styles.workoutImage}
        />
        <Text style={styles.workoutTitle}>Equipment Training</Text>
        <Text style={styles.workoutDescription}>Target: Full Body</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workoutCard} onPress={() => Navigate('yoga')}>
        <Image
          source={require('../assets/images/yoga.jpeg')}
          style={styles.workoutImage}
        />
        <Text style={styles.workoutTitle}>Yoga</Text>
        <Text style={styles.workoutDescription}>Target: Yoga and Flexibility</Text>
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
    color: 'black'
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
    color: 'black'
  },
  workoutDescription: {
    fontSize: 14,
    color: '#666',
  },
});