import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import PanelQuizzes from './PanelQuizzes'
import { connect } from 'react-redux'
import { selectQuiz, APP_STATES, setAppState } from '../actions/index';

export function ScreenQuizzes(props) {
  if (props.navigation)
    props.navigation.state.params.title = props.deck.title
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
  const deck = props.decks.find(deck => deck.key === props.selectedDeckKey)
  const quizzes = deck.quizzes ? deck.quizzes : []
  return {
    deck,
    quizzes,
    ...props
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch
  }
}

const ScreenQuizzesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenQuizzes)

export default ScreenQuizzesConnected