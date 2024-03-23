import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useAuth } from '../../utils/ContextAPI'
import { styles } from '../../styles/Admin'

const DeleteCategory: React.FC = () => {
  const { GetCategory, categories, RemoveCategory, GetWorkouts, workouts } = useAuth();

  useEffect(() => {
    GetWorkouts();
    GetCategory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete a Workout Category</Text>
      {categories ? categories?.map((item: any, idx: Number) => (
        <TouchableOpacity
          style={styles.workoutCard}
          onPress={() => { workouts.length !== 0 && RemoveCategory(item?._id); console.log('delete') }}
          key={item?._id}>
          <Text style={styles.workoutTitle}>{item?.category}</Text>
          <Text style={styles.workoutDescription}>{item?.duration}</Text>
        </TouchableOpacity>
      )) : (<Text style={{ textAlign: 'center', color: 'black', alignSelf: 'center' }}>You Dont Have any Workout Categories</Text>)
      }
    </View>
  )
}

export default DeleteCategory