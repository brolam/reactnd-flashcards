import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import DeckCardList from './DeckCardList'
import { StackNavigator } from 'react-navigation';
import ScreenQuizzes from './ScreenQuizzes'

const deckDummies = [
  { key: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { key: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { key: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]

function ScreenDecks({ navigation }) {
  return (
    <View style={styles.container}>
      <DeckCardList
        decks={deckDummies}
        onSelectedOneDeck={(deck) => navigation.navigate('Details')}
      />
    </View>
  )
}

const RootNavigator = StackNavigator({
  Home: {
    screen: ScreenDecks,
    navigationOptions: {
      headerTitle: 'Decks',
    },
  },
  Details: {
    screen: ScreenQuizzes,
    navigationOptions: {
      headerTitle: 'Quizzes',
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default RootNavigator;