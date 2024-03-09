import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Onboarding'

const Weight = ({ onSelect }) => {
  const [weight, setWeight] = useState('');
  const handleSelect = (selected) => {
    setWeight(selected);
    onSelect('gender', selected);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Your Weight Range</Text>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('50')}>
        <Text style={styles.optionText}>50Kg</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('60')}>
        <Text style={styles.optionText}>51 to 60Kg</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('70')}>
        <Text style={styles.optionText}>61 to 70Kg</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleSelect('80')}>
        <Text style={styles.optionText}>71 to 80Kg</Text>
      </TouchableOpacity>
      {weight !== '' && <Button title='Next' />}
    </View>
  )
}

export default Weight