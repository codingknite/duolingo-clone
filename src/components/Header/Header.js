import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProgressBar from '../ProgressBar';

const Header = () => {

  return (
    <View style={{
      flexDirection: 'row',
      alignSelf: 'stretch',
      alignItems: 'center'
    }}>
      <ProgressBar />
    </View>
  )
}

export default Header;