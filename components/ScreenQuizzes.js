import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import PanelQuizzes from './PanelQuizzes'
import { connect } from 'react-redux'
import { selectQuiz, APP_STATES, setAppState } from '../actions/index';

export function ScreenQuizzes(props) {
  return (
    <View style={styles.container}>
      <PanelQuizzes {...props} />
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

function mapStateToProps(props) {
  return {
    deck: props.decks.find(deck => deck.key === props.selectedDeckKey),
    quizzes: props.selectedDeckQuizzes,
    isWriteCard: props.appState === APP_STATES.ADDING_DECK_QUIZ,
    ...props
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onStartQuiz: () => dispatch(selectQuiz(0)),
    onAddQuiz: () => dispatch(setAppState(APP_STATES.ADDING_DECK_QUIZ)),
  }
}

const ScreenQuizzesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenQuizzes)

export default ScreenQuizzesConnected