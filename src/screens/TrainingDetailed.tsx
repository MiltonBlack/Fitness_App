import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
}

function TrainingDetailed({ route, navigation }: Props) {
  let image = route?.params?.image;
  let heading = route?.params?.workout;
  return (
    <ScrollView style={styles.container}>
      <Image source={image} style={{ width: '100%', height: 250, marginBottom: 10 }} />
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.description}>description</Text>
      <Text style={styles.focusAreaHead}>Focus Area</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 14 }}>
        <View style={styles.focusArea}>
          <Text style={styles.focusAreaText}>
            Shoulders
          </Text>
        </View>
        <View style={styles.focusArea}>
          <Text style={styles.focusAreaText}>
            Quadriceps
          </Text>
        </View>
        <View style={styles.focusArea}>
          <Text style={styles.focusAreaText}>
            Adductors
          </Text>
        </View>
        <View style={styles.focusArea}>
          <Text style={styles.focusAreaText}>
            Glutes
          </Text>
        </View>
        <View style={styles.focusArea}>
          <Text style={styles.focusAreaText}>
            Calves
          </Text>
        </View>
        <View style={styles.focusArea}>
          <Text style={styles.focusAreaText}>
            Chest
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.close} onPress={()=> navigation.goBack()}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight:'bold' }}>Close</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default TrainingDetailed;

const styles = StyleSheet.create({
  focusArea: {
    padding: 10,
    backgroundColor: '#289aaa',
    borderRadius: 8,
    marginRight: 9,
    marginBottom: 7
  },
  focusAreaHead:{
    color:'black',
    fontSize: 27,
    paddingVertical: 14
  },
  container: {
    padding: 15,
    flex: 1
  },
  heading: {
    fontSize: 37,
    fontWeight: '800',
    color: 'black',
    paddingVertical: 4
  },
  description: {
    fontSize: 17,
    color: 'black',
    paddingVertical: 4
  },
  focusAreaText: {
    color: 'black'
  },
  close: {
    padding: 18,
    backgroundColor: 'blue',
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'column'
  },
});