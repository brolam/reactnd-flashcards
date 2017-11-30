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

export class ScreenDecks extends React.PureComponent {
  constructor(props) {
    super();
    storeDispatch = props.dispatch
  }

  componentWillMount() {
    const { appState, navigation } = this.props
    if (appState === APP_STATES.NEW_DECK) navigation.navigate('Quizzes')
  }

  render() {
    const { decks, navigation, dispatch } = this.props
    return (
      <View style={styles.container}>
        <DeckCardList
          decks={decks}
          onSelectedOneDeck={(deck) => {
            dispatch(selectDeck(deck.key))
            navigation.navigate('Quizzes')
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

function mapStateToProps(decks) {
  return decks
}

const ScreenDecksConnected = connect(
  mapStateToProps,
)(ScreenDecks)

export default RootNavigator = StackNavigator({
  Home: {
    screen: ScreenDecksConnected,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Decks',
      headerRight: <Button title="Add" onPress={() => {
        storeDispatch(setAppState(APP_STATES.NEW_DECK))
        navigation.navigate('Quizzes')
      }} />,
    }),

  },
  Quizzes: {
    screen: ScreenQuizzes,
    navigationOptions: {
      headerTitle: 'Quizzes',
    },
  },
});