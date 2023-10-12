import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#58cc02',

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 12,
    marginVertical: 20,
    paddingVertical: 20,
    borderBottomWidth: 5,
    borderColor: '#57a600'
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },

  disabledButton: {
    backgroundColor: 'lightgray',
    borderColor: 'gray',
  }
});

export default styles;