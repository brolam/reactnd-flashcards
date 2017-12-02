import React from 'react'
import { StyleSheet } from 'react-native'
import { View, FlatList, TouchableOpacity, Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import { orange, white, red, blue } from '../styles/colors'
import cardStyle from '../styles/cardStyles'
import DeckCardList from './DeckCardList'
import PanelQuizzes from './PanelQuizzes'
import { connect } from 'react-redux'
import { selectDeck, selectQuiz, setAppState, APP_STATES } from '../actions'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]

export function ScreenDecksAndQuizzes(props) {
  const { decks, selectedDeckQuizzes, deck, dispatch } = props
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
        {deck && (
          <View style={[cardStyle, styles.toolbar]} >
            <Text style={styles.toolbarText}>{deck.title}</Text>
            <TouchableOpacity
              onPress={() => console.log('Edit deck')}>
              <FontAwesome style={styles.toolbarButton} name='edit' />
            </TouchableOpacity>
          </View>
        )}
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
  toolbar: {
    flex: 0,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 0,
    height: 48,
  },
  toolbarText: {
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 24
  },
  toolbarButton: {
    paddingRight: 10,
    fontSize: 32
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
    isWriteCard: props.appState === APP_STATES.NEW_DECK,
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