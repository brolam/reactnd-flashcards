import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import QuizCardStart from './QuizCardStart'
import QuizCardQuestion from './QuizCardQuestion'
import QuizCardWrite from './QuizCardWrite'

export default function PanelQuizzes(
  { deck,
    quizzes,
    selectedIndexQuiz = -1,
    onStartQuiz = () => { },
    isWriteCard = false
  }) {

  function hasQuiz(quizzes) {
    return quizzes && quizzes.length > 0
  }

  function getQuizCardByIndex(index) {
    return (index === -1) ?
      <QuizCardStart deck={deck} quizzes={quizzes} onStart={onStartQuiz} />
      :
      <QuizCardQuestion {...quizzes[index]} />
  }

  if (isWriteCard)
    return (
      <View style={styles.container}>
        <QuizCardWrite />
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

PanelQuizzes.propTypes = {
  quizzes: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});