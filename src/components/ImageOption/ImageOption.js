import styles from './styles';
import { View, Image, Text, Pressable } from 'react-native';

export default function ImageOption({ image, text, isSelected, onPress }) {

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isSelected && styles.selected]}>
      <Image
        resizeMode='contain'
        source={{
          uri: image
        }}
        style={styles.image}
      />
      <Text style={isSelected ? styles.selectedText : styles.text}>{text}</Text>
    </Pressable>
  )
}