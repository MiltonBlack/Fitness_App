import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    // alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  text: {
    marginBottom: 30,
    color: 'black',
    fontSize: 40,
    textAlign: 'center'
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
    width: '100%',
    height: 120,
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  optionText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800'
  },
  complete: {
    padding: 25,
    width: '100%',
    borderRadius: 25,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginHorizontal: 9,
    marginBottom: 5
  },
});