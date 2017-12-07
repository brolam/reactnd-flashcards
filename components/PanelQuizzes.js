import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import QuizCardStart from './QuizCardStart'
import QuizCardQuestion from './QuizCardQuestion'
import QuizCardWrite from './QuizCardWrite'
import { setQuiz, getNewQuiz } from '../storage/index';
import { receiveDecks, selectDeck, selectQuiz } from '../actions/index';

export default function PanelQuizzes(
  { deck,
    quizzes,
    selectedIndexQuiz = -1,
    onStartQuiz = () => { },
    onAddQuiz = () => { },
    isWriteCard = false,
    dispatch = action => { },
  }) {

  function hasQuiz(quizzes) {
    return deck !== undefined
  }

  function onSaveQuiz(question, answer, answerExpect) {
    const quiz = getNewQuiz(question, answer, answerExpect)
    setQuiz(deck, quiz).then(decks => {
      dispatch(receiveDecks(decks))
      dispatch(selectDeck(deck.key, deck.quizzes))
    })

  }

  function getQuizCardByIndex(index) {
    return (index === -1) ?
      <QuizCardStart
        deck={deck}
        quizzes={quizzes}
        onStart={onStartQuiz}
        onAddQuiz={onAddQuiz} />
      :
      <QuizCardQuestion
        question={quizzes[index].question}
        indexCard={selectedIndexQuiz}
        amountOfCards={deck.amountOfCards}
      />
  }

  if (isWriteCard)
    return (
      <View style={styles.container}>
        <QuizCardWrite onSave={onSaveQuiz} />
      </View>
    )
  else if (hasQuiz(quizzes))
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
  if (selectedIndexQuiz + 1 < quizzes.length) selectedIndexQuiz++
  else selectedIndexQuiz = 0
  dispatch(selectQuiz(selectedIndexQuiz))
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