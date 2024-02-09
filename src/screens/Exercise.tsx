import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
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

const Exercise: React.FC<ExerciseProps> = ({ navigation }) => {
  const [state, setState] = useState({
    name: '',
    duration: '',
    calories: '',
    date: '',
  });

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
          alert(result.message);
          navigation.navigate('Today', {
            username: navigation.state.params.username,
            token: navigation.state.params.token,
          });
        } else {
          alert(result.message);
        }
      });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input_box: {
      width: '75%',
      height: 40,
      marginBottom: 25,
    },
    input_title: {
      color: '#121212',
      marginTop: -20,
    },
    input_placeholder: {
      flex: 1,
      padding: 10,
      borderRadius: 10,
      color: '#121212',
      backgroundColor: 'rgba(230,230,230,1)',
    },
    btn_shape: {
      backgroundColor: 'rgba(99,206,237,1)',
      borderRadius: 10,
      width: '40%',
      height: 40,
      marginBottom: 15,
      justifyContent: 'center',
    },
    btn_text: {
      color: 'rgba(255,255,255,1)',
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.input_box}>
        <Text style={styles.input_title}>Exercise Name</Text>
        <TextInput
          placeholder={'Exercise Name'}
          style={styles.input_placeholder}
          value={state.name}
          onChangeText={(input) => setState({ ...state, name: input })}
        />
      </View>
      <View style={styles.input_box}>
        <Text style={styles.input_title}>Duration</Text>
        <TextInput
          placeholder={'0'}
          style={styles.input_placeholder}
          value={state.duration}
          onChangeText={(input) => setState({ ...state, duration: input })}
        />
      </View>
      <View style={styles.input_box}>
        <Text style={styles.input_title}>Calories</Text>
        <TextInput
          style={styles.input_placeholder}
          value={state.calories}
          placeholder={'0'}
          onChangeText={(input) => setState({ ...state, calories: input })}
        />
      </View>
      <View style={[styles.input_box, { height: 55 }]}>
        <Text style={styles.input_title}>Date</Text>
        <View style={styles.input_placeholder}>
          <DatePicker
            style={{ width: '100%' }}
            date={state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Add Date"
            cancelBtnText="Cancel"
            onDateChange={(input) => setState({ ...state, date: input })}
          />
        </View>
      </View>
      <TouchableOpacity onPress={addActivity} style={styles.btn_shape}>
        <Text style={styles.btn_text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={[styles.btn_shape, { backgroundColor: 'red' }]}
      >
        <Text style={styles.btn_text}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exercise;