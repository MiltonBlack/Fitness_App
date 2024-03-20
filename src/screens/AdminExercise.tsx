import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  // Alert
} from 'react-native';
import DatePicker from 'react-native-datepicker';

interface ExerciseProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
    state: {
      params: {
        username: string;
        token: string;
      };
    };
  };
}

const AdminExercise: React.FC<ExerciseProps> = ({ navigation }) => {
  const [state, setState] = useState({
    name: '',
    duration: '',
    calories: '',
    date: '',
  });

  function Navigate(route: string) {
    navigation.navigate(`${route}`);
  }

  const addActivity = () => {
    const { name, duration, calories } = state;
    const token = navigation.state.params.token;

    fetch('https://avigael-shop-fitness.herokuapp.com/activities', {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        'x-access-token': token,
        Connection: 'keep-alive',
        'cache-control': 'no-cache',
      },
      body: JSON.stringify({
        name,
        calories,
        duration,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'Activity created!') {
          // Alert(result.message);
          navigation.navigate('Today', {
            username: navigation.state.params.username,
            token: navigation.state.params.token,
          });
        } else {
          // Alert(result.message);
        }
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.workoutCard} onPress={() => Navigate('category')}>
        <Text style={styles.workoutTitle}>Create a Category</Text>
        <Text style={styles.workoutDescription}>Target: Classify workouts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workoutCard} onPress={() => Navigate('workouts')}>
        <Text style={styles.workoutTitle}>Create a Workout</Text>
        <Text style={styles.workoutDescription}>Target: Workout creation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workoutCard} onPress={() => Navigate('deletecat')}>
        <Text style={styles.workoutTitle}>Delete a Category</Text>
        <Text style={styles.workoutDescription}>Target: Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.workoutCard} onPress={() => Navigate('deletework')}>
        <Text style={styles.workoutTitle}>Remove a Workout</Text>
        <Text style={styles.workoutDescription}>Target: Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminExercise;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  workoutCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  workoutImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black'
  },
  workoutDescription: {
    fontSize: 14,
    color: '#666',
  },
});