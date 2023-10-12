import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  title: {
    alignSelf: 'stretch',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },
  row: {
    gap: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: '30%',
    aspectRatio: 3 / 4,
    resizeMode: 'contain'
  },
  sentenceContainer: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray'
  },
  sentence: {
    fontSize: 15,
    fontWeight: '500',
  },

  textInput: {
    backgroundColor: '#ebebeb',
    flex: 1,
    alignSelf: 'stretch',
    margin: 12,
    marginTop: 0,
    padding: 12,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 4,

    alignItems: 'center'
  }
});

export default styles;