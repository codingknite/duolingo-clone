import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',


    // temp fix
    paddingTop: 75,
  },
  optionsContainer: {
    gap: 12,
    flex: 1,
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    // alignContent: 'space-between',
  },

  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'stretch',

    paddingBottom: 20,
  },

  optionContainer: {
    borderWidth: 2,
    borderRadius: 12,
    borderBottomWidth: 4,
    borderColor: '#fefefe',

    width: '45%',
    height: '45%',

    alignItems: 'center',
    padding: 15,
  },

  optionsImage: {
    flex: 1,
    width: '100%',
    // resizeMode: 'contain'
  },

  optionsText: {
    color: '#fff',
    fontWeight: '700'
  }
})

export default styles;