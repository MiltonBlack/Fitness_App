import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Onboarding'

const BodyType: React.FC = ({ onSelect }: any) => {
  const [bodyType, setBodyType] = useState('');
  const handleSelect = (selected: string) => {
    setBodyType(selected);
    onSelect('body', selected);
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
    </View>
  )
}

export default BodyType