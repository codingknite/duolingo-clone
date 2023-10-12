import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 12,
    borderBottomWidth: 4,
    borderColor: '#333',

    width: '45%',
    height: '45%',

    alignItems: 'center',
    padding: 15,
  },

  image: {
    flex: 1,
    width: '100%',
    // resizeMode: 'contain'
  },

  text: {
    color: '#000',
    fontWeight: 'bold'
  },

  selectedText: {
    color: '#006494',
    fontWeight: 'bold'
  },

  selected: {
    backgroundColor: '#d7e3fc',
    borderColor: '#8093f1'
  }
})

export default styles;