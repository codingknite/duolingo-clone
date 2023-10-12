import styles from './styles';
import { Pressable, Text } from 'react-native';

export default function Button({ text, onPress, disabled }) {

  return (
    <Pressable
      style={[styles.container, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}