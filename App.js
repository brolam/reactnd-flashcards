import React from 'react';
import { Text, View } from 'react-native';
import appStyles from './styles/appStyles'
import AppStatusBar from './components/AppStatusBar'
import DeckList from './components/DeckCardList'
import DecksAndQuizzesPanels from './components/DecksAndQuizzesPanels'
import { isPossibleTwoPanels } from './util/ScreenHelper';
import Dimensions from 'Dimensions';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = { isTwoPanels: props.isTwoPanels };
  }

  onLayoutChanged = event => {
    this.setState({ isTwoPanels: isPossibleTwoPanels(Dimensions.get('window')) });
  }

  render() {
    return (
      <View style={appStyles.container} onLayout={this.onLayoutChanged} >
        <AppStatusBar />
        {
          (this.state.isTwoPanels) ?
            (
              <DecksAndQuizzesPanels decks={[
                { key: 'one-item', title: 'One Deck', amountOfCards: 10 },
                { key: 'two-item', title: 'Two Deck', amountOfCards: 11 },
                { key: 'three-item', title: 'Three Deck', amountOfCards: 12 }
              ]}
              />
            ) :
            (
              <DeckList decks={[
                { key: 'one-item', title: 'One Deck', amountOfCards: 10 },
                { key: 'two-item', title: 'Two Deck', amountOfCards: 11 },
                { key: 'three-item', title: 'Three Deck', amountOfCards: 12 }
              ]} />
            )
        }
      </View>
    );
  }
}
