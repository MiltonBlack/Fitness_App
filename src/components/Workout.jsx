import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Workout = ({ item, image, work, navigation }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={navigation.navigate('trainingdetailed', { image, work })}>
      <Image style={styles.cardImage} source={item.image} />
      <Text style={styles.cardText}>{item.workout}</Text>
    </TouchableOpacity>
  )
}

export default Workout

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    // backgroundColor: 'orange',
    marginBottom: 5,
    borderBottomColor: 'black'
  },
  cardImage: {
    width: 60,
    height: 60,
  },
  cardText: {
    color: 'black',
    fontSize: 20
  }
})