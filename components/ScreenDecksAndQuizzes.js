import React from 'react'
import { StyleSheet } from 'react-native'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { orange, white } from '../styles/colors'
import DeckCardList from './DeckCardList'
import PanelQuizzes from './PanelQuizzes'
import { connect } from 'react-redux'
import { selectDeck, selectQuiz, setAppState, APP_STATES } from '../actions'
import { Ionicons } from '@expo/vector-icons'

const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]


export function ScreenDecksAndQuizzes(props) {
  const { decks, selectedDeckQuizzes, dispatch } = props
  return (
    <View style={styles.container} >
      <View style={styles.containerDeckList}>
        <DeckCardList
          decks={decks}
          onSelectedOneDeck={(deck) => dispatch(selectDeck(deck.key, quizzesDummy))}
        />
        <TouchableOpacity id={'addFabButton'} style={[styles.fabButton, styles.addButton]}
          onPress={() => dispatch(setAppState(APP_STATES.NEW_DECK))}>
          <Ionicons name='md-add' size={30} color={white} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerDeckQuizzes}>
        <PanelQuizzes {...props} />
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
  }, fabButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  addButton: {
    backgroundColor: orange,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    elevation: 4,
  },
})

function mapStateToProps(props) {
  return {
    deck: props.decks.find(deck => deck.key === props.selectedDeckKey),
    quizzes: props.selectedDeckQuizzes,
    ...props
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onStartQuiz: () => {
      dispatch(selectQuiz(0))
    },
    dispatch
  }
}

const ScreenDecksAndQuizzesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenDecksAndQuizzes)


export default ScreenDecksAndQuizzesConnected