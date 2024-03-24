import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Onboarding'

const Goal = ({ onSelect }) => {
  const handleSelect = (selectedFocus) => {
    onSelect('goal', selectedFocus);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select your exercise focus:</Text>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Cardiovascular')}>
        <Text style={styles.optionText}>Cardiovascular</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Strength')}>
        <Text style={styles.optionText}>Strength</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Body Shape')}>
        <Text style={styles.optionText}>Body Shape Fitness</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Calorie Burn')}>
        <Text style={styles.optionText}>Calorie Burn (Fat)</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Goal