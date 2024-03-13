import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  text: {
    marginBottom: 30,
    color: 'black',
    fontSize: 30,
    textAlign: 'center'
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    width: '100%',
    height: 120,
    backgroundColor:'gray'
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  complete: {
    padding: 10,
    width: '70%',
    height: 50,
    borderRadius: 15
  }
});