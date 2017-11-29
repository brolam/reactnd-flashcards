import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import QuizCardQuestion from './QuizCardQuestion'

export default function PanelQuizzes({ quizzes }) {
  return (
    <View style={styles.container}>
      {quizzes.length > 0 ?
        <QuizCardQuestion {...quizzes[0]} />
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