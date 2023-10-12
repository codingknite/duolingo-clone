import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "lightgrey",
    height: 20,
    borderRadius: 15,
    flex: 1,
  },
  fg: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#FAC800",
  },
})

const ProgressBar = () => {
  return (
    <View>
      <View style={styles.bg} />
      <View style={styles.fg} />
    </View>
  )
}

export default ProgressBar;