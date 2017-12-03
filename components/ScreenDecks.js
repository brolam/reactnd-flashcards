import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'
import DeckCardList from './DeckCardList'
import { StackNavigator } from 'react-navigation';
import ScreenQuizzes from './ScreenQuizzes'
import { connect } from 'react-redux'
import { selectDeck, setAppState, SET_APP_STATE, APP_STATES } from '../actions'

const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]

let storeDispatch = {}

export class ScreenDecks extends React.PureComponent {
  constructor(props) {
    super();
    storeDispatch = props.dispatch
  }

  componentWillMount() {
    const { appState, navigation, deck } = this.props
    if ((appState === APP_STATES.ADDING_DECK_QUIZ) || (appState === APP_STATES.STARTED_QUIZ)){
      navigation.navigate('Quizzes', { title: deck.title })
    }
  }

  render() {
    const { decks, navigation, dispatch } = this.props
    return (
      <View style={styles.container}>
        <DeckCardList
          decks={decks}
          onSelectedOneDeck={(deck) => {
            dispatch(selectDeck(deck.key, quizzesDummy))
            navigation.navigate('Quizzes', { title: deck.title })
          }}
        />
      </View>
    )
  }
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
    ...props
  }
}

const ScreenDecksConnected = connect(
  mapStateToProps,
)(ScreenDecks)

export default RootNavigator = StackNavigator({
  Home: {
    screen: ScreenDecksConnected,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Decks',
      headerRight: <Button title="Add" onPress={() => console.log('Add Deck')} />,
    }),

  },
  Quizzes: {
    screen: ScreenQuizzes,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      headerRight: <Button title="Edit" onPress={() => {
        console.log('Edit Deck')
      }} />,
    }),
  },
});