import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import cardStyle from '../styles/cardStyles'
import buttonStyle from '../styles/buttonStyles'
import { green, red, white, } from '../styles/colors';

export default function QuizCardQuestion({
  deck,
  selectedIndexQuiz = 0,
  onAnswerCorrect }) {
  const quiz = deck.quizzes[selectedIndexQuiz]
  return (
    <View style={[cardStyle, styles.container]}>
      <View style={styles.headerContainer}>
        <Text>{selectedIndexQuiz + 1}/{deck.amountOfCards}</Text>
      </View>
      <View>
        <Text style={styles.question}>{quiz.question}</Text>
        <TouchableOpacity
          onPress={() => console.log('show answer')}>
          <Text style={styles.buttonShowAnswer}>show answer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonSaveAsCorrect]}
          onPress={() => onAnswerCorrect(deck, selectedIndexQuiz)}>
          <Text style={styles.textButtons}>Correct?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonSaveAsIncorrect]}
          onPress={() => console.log('Answered Incorrect')}>
          <Text style={styles.textButtons}>Incorrect?</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

QuizCardQuestion.propTypes = {
  deck: PropTypes.shape({
    amountOfCards: PropTypes.number.isRequired,
    quizzes: PropTypes.array.isRequired,
  }),
  selectedIndexQuiz: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    marginBottom: 10
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    marginLeft: 8,
    marginTop: 8,
    position: 'absolute',
    top: 0
  },
  question: {
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
  buttonShowAnswer: {
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 30,
    marginBottom: 20,
    position: 'absolute',
    bottom: 0
  },
  buttonSaveAsCorrect: {
    backgroundColor: green,
    margin: 5
  },
  buttonSaveAsIncorrect: {
    backgroundColor: red,
    margin: 5
  },
  textButtons: {
    color: white,
    fontSize: 24
  },
});