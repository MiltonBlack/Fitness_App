import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
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