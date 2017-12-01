import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import QuizCardStart from './QuizCardStart'
import QuizCardQuestion from './QuizCardQuestion'

export default function PanelQuizzes(
  { deck,
    quizzes,
    selectedIndexQuiz = -1,
    onStartQuiz = () => { }
  }) {
  function getQuizByIndex(index) {
    return (index === -1) ?
      <QuizCardStart deck={deck} quizzes={quizzes} onStart={onStartQuiz} />
      :
      <QuizCardQuestion {...quizzes[index]} />
  }

  return (
    <View style={styles.container}>
      {quizzes && quizzes.length > 0 ?
        getQuizByIndex(selectedIndexQuiz)
        :
        <Text>There are not quizzes</Text>
      }
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