import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useAuth } from '../../utils/ContextAPI'
import { styles } from '../../styles/Admin'

const DeleteWorkouts: React.FC = () => {
  const { GetWorkouts, workouts, DeleteWorkout } = useAuth();
  
  useEffect(() => {
    GetWorkouts();
  }, []);

  return (
   <View style={styles.container}>
      <Text style={styles.title}>Delete a Workout Category</Text>
      {workouts ? workouts?.map((item: any, idx: Number) => (
        <TouchableOpacity
          style={styles.workoutCard}
          onPress={() => { DeleteWorkout(item?._id); console.log('delete') }}
          key={item?._id}>
          <Text style={styles.workoutTitle}>{item?.workout}</Text>
          <Text style={styles.workoutDescription}>{item?.categoryId}</Text>
          <Text style={styles.workoutDescription}>{item?.duration}</Text>
        </TouchableOpacity>
      )) : (<Text style={{textAlign:'center', color:'black', alignSelf:'center'}}>You Dont Have any Workouts Avaliable!!!</Text>)
      }
    </View>
  )
}

export default DeleteWorkouts