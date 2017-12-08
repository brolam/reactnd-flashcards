import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import cardStyle from '../styles/cardStyles'
import buttonStyle from '../styles/buttonStyles'
import { green, red, white, } from '../styles/colors';
import { showQuizAnswer } from '../actions/index';

export default function QuizCardQuestion({
  deck,
  selectedIndexQuiz = 0,
  onAnswer,
  showQuizAnswer = false,
  dispatch = (action) => { console.log('dispatch') } }) {
  const quiz = deck.quizzes[selectedIndexQuiz]
  return (
    <View style={[cardStyle, styles.container]}>
      <View style={styles.headerContainer}>
        <Text>{selectedIndexQuiz + 1}/{deck.amountOfCards}</Text>
      </View>
      {showQuizAnswer
        ? <Answer quiz={quiz} dispatch={dispatch} />
        : <Question quiz={quiz} dispatch={dispatch} />
      }
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonAnswerCorrect]}
          onPress={() => onAnswer(deck, selectedIndexQuiz, true)}>
          <Text style={styles.textButtons}>Correct?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[buttonStyle, styles.buttonAnswerIncorrect]}
          onPress={() => onAnswer(deck, selectedIndexQuiz, false)}>
          <Text style={styles.textButtons}>Incorrect?</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

function Question(props) {
  const { quiz, dispatch } = props
  return (
    <View>
      <Text style={styles.question}>{quiz.question}</Text>
      <TouchableOpacity
        onPress={() => dispatch(showQuizAnswer(true))}>
        <Text style={styles.buttonShowAnswer}>show answer</Text>
      </TouchableOpacity>
    </View>
  )
}

function Answer(props) {
  const { quiz, dispatch } = props
  return (
    <View>
      <Text style={styles.answer}>{quiz.answer}</Text>
      <TouchableOpacity
        onPress={() => dispatch(showQuizAnswer(false))}>
        <Text style={styles.buttonShowAnswer}>show question</Text>
      </TouchableOpacity>
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
    fontSize: 32,
    fontWeight: '400',
    textAlign: 'center',
  },
  answer: {
    fontSize: 36,
    fontWeight: '500',
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
  buttonAnswerCorrect: {
    backgroundColor: green,
    margin: 5
  },
  buttonAnswerIncorrect: {
    backgroundColor: red,
    margin: 5
  },
  textButtons: {
    color: white,
    fontSize: 24
  },
});