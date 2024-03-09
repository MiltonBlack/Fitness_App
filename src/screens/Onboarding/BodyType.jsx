import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Onboarding'

const BodyType = ({ onSelect, navigation }) => {
  const [bodyType, setBodyType] = useState('');
  const handleSelect = (selected) => {
    setBodyType(selected);
    onSelect('gender', selected);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Your Body Type</Text>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Slim')}>
        <Text style={styles.optionText}>Slim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Athletic')}>
        <Text style={styles.optionText}>Athletic</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Chubby')}>
        <Text style={styles.optionText}>Chubby</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('Fat')}>
        <Text style={styles.optionText}>Fat</Text>
      </TouchableOpacity>
      <Button title='Next' onPress={() => navigation.replace('bottomnav')} />
    </View>
  )
}

export default BodyType