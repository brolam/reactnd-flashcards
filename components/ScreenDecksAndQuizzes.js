import React from 'react'
import { StyleSheet } from 'react-native'
import { View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import DeckCardList from './DeckCardList'
import PanelQuizzes from './PanelQuizzes'

export default function ScreenDecksAndQuizzes(
  { decks,
    quizzes = [{ question: 'New Question' }] }) {
  return (
    <View style={styles.container} >
      <View style={styles.containerDeckList}>
        <DeckCardList decks={decks} />
      </View>
      <View style={styles.containerDeckQuizzes}>
        <PanelQuizzes quizzes={quizzes} />
      </View>
    </View>
  )
}

ScreenDecksAndQuizzes.propTypes = {
  decks: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  containerDeckList: {
    width: '40%'
  },
  containerDeckQuizzes: {
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    width: '60%'
  }
})