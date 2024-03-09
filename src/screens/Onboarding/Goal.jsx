import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Onboarding'

const Goal = ({ onSelect }) => {
  const handleSelect = (selectedFocus) => {
    onSelect('exerciseFocus', selectedFocus);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select your exercise focus:</Text>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Cardio')}>
        <Text style={styles.optionText}>Cardio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Strength')}>
        <Text style={styles.optionText}>Strength</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Goal