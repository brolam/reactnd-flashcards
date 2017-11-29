import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import PanelQuizzes from './PanelQuizzes'
import { connect } from 'react-redux'

export function ScreenQuizzes(props) {
  const { quizzes } = props
  return (
    <View style={styles.container}>
      <PanelQuizzes quizzes={quizzes} />
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

function mapStateToProps(decks) {
  return {
    quizzes: decks.selectedDeckQuizzes,
    ...decks
  }
}

const ScreenQuizzesConnected = connect(
  mapStateToProps,
)(ScreenQuizzes)

export default ScreenQuizzesConnected