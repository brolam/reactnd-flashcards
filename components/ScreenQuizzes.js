import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import QuizCardQuestion from './QuizCardQuestion'

const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]

export default function ScreenQuizzes({ quizzes = quizzesDummy }) {
  return (
    <View style={styles.container}>
      <QuizCardQuestion {...quizzes[0]} />
    </View>
  )
}

ScreenQuizzes.propTypes = {
  quizzes: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});