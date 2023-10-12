import styles from './App.styles';
import { View, Alert, Text, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header';
import questions from './assets/data/allQuestions';
import OpenEndedQuestion from './src/components/OpenEndedQuestion';

import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQns';



export default function App() {

  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('YOU WIN🎉🎉🎉🎉');
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex])

  function correctAns() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function wrongAns() {
    Alert.alert('Ooooops....Try Again')
  }

  return (
    <View style={styles.container}>
      <Header />
      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' ? (
        <ImageMultipleChoiceQuestion currentQuestion={currentQuestion} onCorrect={correctAns} onWrong={wrongAns} />
      ) : (
        <OpenEndedQuestion currentQuestion={currentQuestion} onCorrect={correctAns} onWrong={wrongAns} />
      )}
    </View>
  );
}