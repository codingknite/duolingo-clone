import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

});

export default styles;