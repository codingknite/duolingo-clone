import React, { useState } from 'react';
import styles from './styles'
import Button from '../Button';
import mascot from '../../../assets/images/mascot.png'
import { Text, View, TextInput, Image, Pressable, Keyboard } from 'react-native';

const OpenEndedQuestion = ({ currentQuestion, onCorrect, onWrong }) => {

  const [input, setInput] = useState('');

  const handleButtonPress = () => {
    if (currentQuestion.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect()
    } else {
      onWrong();
    }
    // implement logic
  }
  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>

      <View style={styles.row}>
        <Image source={mascot} style={styles.image} />

        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{currentQuestion.text}</Text>
        </View>
      </View>



      <TextInput
        placeholder='Input Some Text Here'
        style={styles.textInput}
        value={input}
        onChangeText={setInput}
        multiline
        textAlignVertical='top'
        blurOnSubmit={true}
      />
      <Button text='Check' disabled={!input} onPress={handleButtonPress} />

    </>
  )
}

export default OpenEndedQuestion;