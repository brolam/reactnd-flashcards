import React from 'react'
import { StyleSheet } from 'react-native'
import { View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import DeckCardList from './DeckCardList'
import PanelQuizzes from './PanelQuizzes'
import { connect } from 'react-redux'
import { selectDeck } from '../actions'

export function ScreenDecksAndQuizzes(props) {
  const { decks, selectedDeckQuizzes, dispatch } = props
  return (
    <View style={styles.container} >
      <View style={styles.containerDeckList}>
        <DeckCardList
          decks={decks}
          onSelectedOneDeck={(deck) => dispatch(selectDeck(deck.key))} />
      </View>
      <View style={styles.containerDeckQuizzes}>
        <PanelQuizzes quizzes={selectedDeckQuizzes} />
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
    marginBottom: 20,
    width: '60%'
  }
})

function mapStateToProps(decks) {
  return decks
}

const ScreenDecksAndQuizzesConnected = connect(
  mapStateToProps,
)(ScreenDecksAndQuizzes)


export default ScreenDecksAndQuizzesConnected