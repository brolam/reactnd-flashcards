import React from 'react';
import { Text, View } from 'react-native';
import appStyles from './styles/appStyles'
import AppStatusBar from './components/AppStatusBar'
import DeckList from './components/DeckCardList'

export default class App extends React.Component {
  render() {
    return (
      <View style={appStyles.container}>
        <AppStatusBar />
        <DeckList decks={[
          { key: 'one-item', title: 'One Deck', amountOfCards: 10 },
          { key: 'two-item', title: 'Two Deck', amountOfCards: 11 },
          { key: 'three-item', title: 'Three Deck', amountOfCards: 12 }
        ]} />
      </View>
    );
  }
}
