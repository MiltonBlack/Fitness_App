import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Workout = () => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} />
      <Text>Workout</Text>
    </View>
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
    backgroundColor: 'orange',
    marginBottom: 5,
    borderBottomColor: 'black'
  },
  cardImage: {
    width: 60,
    height: 60,
    backgroundColor: 'gray'
  }
})