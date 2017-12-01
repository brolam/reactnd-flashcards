import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import PanelQuizzes from './PanelQuizzes'
import { connect } from 'react-redux'

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
    ...props
  }
}

const ScreenQuizzesConnected = connect(
  mapStateToProps,
)(ScreenQuizzes)

export default ScreenQuizzesConnected