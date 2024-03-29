import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
      fontSize: 25,
      color: "black",
      marginVertical: 15,
      paddingHorizontal: 20
    },
    start:{
      padding: 18,
      backgroundColor: 'blue',
      borderRadius: 25,
      alignItems: 'center',
      flexDirection: 'column',
      marginHorizontal: 9,
      marginBottom: 5
    },
    done:{
      padding: 18,
      backgroundColor: 'blue',
      borderRadius: 25,
      alignItems: 'center',
      flexDirection: 'column',
      marginHorizontal: 9,
      marginBottom: 5,
      fontSize:25,
      width:'100%'
    },
    exerciseName:{
      color:'black',
      fontSize:25
    },
    execiseType:{
      color:'black'
    }, 
    exerciseTimer:{
      color:'black'
    },
    exerciseDuration:{
      color:'black'
    },
    container:{
      flex: 1
    },
    exerciseContainer:{
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-between',
      height:'100%'
    }
  })