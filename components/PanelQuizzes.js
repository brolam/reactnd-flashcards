import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import QuizCardStart from './QuizCardStart'
import QuizCardQuestion from './QuizCardQuestion'
import QuizCardWrite from './QuizCardWrite'
import { setDeck, setQuiz, getNewQuiz, startDeckQuiz } from '../storage/index';
import { receiveDecks, selectDeck, selectQuiz, setAppState, APP_STATES } from '../actions/index';

export default function PanelQuizzes(
  { deck,
    quizzes,
    selectedIndexQuiz = -1,
    isWriteCard = false,
    dispatch = action => { },
  }) {

  function hasQuiz() {
    return deck && quizzes && quizzes.length > 0
  }

  function onStartQuiz() {
    dispatch(selectQuiz(0))
    startDeckQuiz(deck).then(decks => {
      dispatch(receiveDecks(decks))
    })
  }

  function onSaveQuiz(question, answer, answerExpect) {
    const quiz = getNewQuiz(question, answer, answerExpect)
    setQuiz(deck, quiz).then(decks => {
      dispatch(receiveDecks(decks))
      dispatch(selectDeck(deck.key, deck.quizzes))
    })
  }

  function onAnswerQuiz(deck, indexQuiz, answered) {
    deck.quizzes[indexQuiz].answered = answered
    setDeck(deck).then(decks => {
      dispatch(receiveDecks(decks))
      nextQuiz(dispatch, indexQuiz, deck.quizzes)
    })
  }

  function getQuizCardByIndex(index) {
    return (index === -1) ?
      <QuizCardStart
        deck={deck}
        quizzes={quizzes}
        onStart={() => onStartQuiz()}
        onAddQuiz={() => dispatch(setAppState(APP_STATES.ADDING_DECK_QUIZ))} />
      :
      <QuizCardQuestion
        deck={deck}
        quizzes={quizzes}
        selectedIndexQuiz={index}
        onAnswer={onAnswerQuiz}
      />
  }

  if (isWriteCard || hasQuiz() === false )
    return (
      <View style={styles.container}>
        <QuizCardWrite onSave={onSaveQuiz} />
      </View>
    )
  else if (hasQuiz())
    return (
      <View style={styles.container}>
        {getQuizCardByIndex(selectedIndexQuiz)}
      </View>
    )
  else return (
    <View style={styles.container}>
      <Text>There are not quizzes</Text>
    </View>
  )
}

export function nextQuiz(dispatch, selectedIndexQuiz, quizzes) {
  nextIndexQuiz = quizzes.findIndex(quiz => quiz.answered === undefined)
  dispatch(selectQuiz(nextIndexQuiz))
}

PanelQuizzes.propTypes = {
  quizzes: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});