import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'
import DeckCardList from './DeckCardList'
import { StackNavigator } from 'react-navigation';
import ScreenQuizzes from './ScreenQuizzes'
import { connect } from 'react-redux'
import { selectDeck, setAppState, SET_APP_STATE, APP_STATES } from '../actions'

let storeDispatch = {}

export function ScreenDecks(props) {
  const { decks, navigation, dispatch } = props
  storeDispatch = dispatch
  return (
    <View style={styles.container}>
      <DeckCardList
        decks={decks}
        onSelectedOneDeck={(deck) => {
          dispatch(selectDeck(deck.key))
          navigation.navigate('Details')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});

function mapStateToProps(decks) {
  return decks
}

const ScreenDecksConnected = connect(
  mapStateToProps,
)(ScreenDecks)

export default RootNavigator = StackNavigator({
  Home: {
    screen: ScreenDecksConnected,
    navigationOptions: {
      headerTitle: 'Decks',
      headerRight: <Button title="Add" onPress={() => storeDispatch(
        setAppState(APP_STATES.NEW_DECK)
      )} />,
    },

  },
  Details: {
    screen: ScreenQuizzes,
    navigationOptions: {
      headerTitle: 'Quizzes',
    },
  },
});