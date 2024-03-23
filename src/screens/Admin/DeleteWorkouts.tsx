import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { useAuth } from '../../utils/ContextAPI'
import { styles } from '../../styles/Admin'

const DeleteWorkouts: React.FC = () => {
  const { GetWorkouts, workouts, DeleteWorkout, categories, GetCategories } = useAuth();
  const [selected, setSelected] = useState<any>("");

  useEffect(() => {
    GetCategories();
    GetWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete a Workout Category</Text>
      <SelectList
        setSelected={(val: any) => setSelected(val)}
        data={categories}
        save='value' />
      <View style={{ marginVertical: 10 }}></View>
      {workouts ? workouts?.filter((item: any) => item?.categoryId === selected?._id)?.map((item: any, idx: Number) => (
        <TouchableOpacity
          style={styles.workoutCard}
          onPress={() => { DeleteWorkout(item?._id); console.log('delete') }}
          key={item?._id}>
          <Text style={styles.workoutTitle}>{item?.workout}</Text>
          <Text style={styles.workoutDescription}>{item?.categoryId}</Text>
          <Text style={styles.workoutDescription}>{item?.duration}</Text>
        </TouchableOpacity>
      )) : (<Text style={{ textAlign: 'center', color: 'black', alignSelf: 'center' }}>You Dont Have any Workouts Avaliable!!!</Text>)
      }
    </View>
  )
}

export default DeleteWorkouts