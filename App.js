import React from 'react';
import { Text, View } from 'react-native';
import appStyles from './styles/appStyles'
import AppStatusBar from './components/AppStatusBar'
import ScreenDecks from './components/ScreenDecks'
import ScreenDecksAndQuizzes from './components/ScreenDecksAndQuizzes'
import { isPossibleTwoPanels } from './util/ScreenHelper';
import Dimensions from 'Dimensions';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { receiveDecks } from './actions'
import reducer from './reducers'

const store = createStore(reducer)

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {  ...this.state, isTwoPanels: props.isTwoPanels, selectedDeck: undefined };
  }

  componentDidMount(){
    store.dispatch(receiveDecks(deckDummies))
  }

  onLayoutChanged = event => {
    this.setState({ isTwoPanels: isPossibleTwoPanels(Dimensions.get('window')) });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={appStyles.container} onLayout={this.onLayoutChanged} >
          <AppStatusBar />
          {
            (this.state.isTwoPanels) ?
              <ScreenDecksAndQuizzes/>
              :
              <ScreenDecks/>
          }
        </View>
      </Provider>
    );
  }
}

const deckDummies = [
  { key:'deck1', title: 'One Deck', amountOfCards: 10 },
  { key:'deck2', title: 'Two Deck', amountOfCards: 11 },
  { key:'deck3', title: 'Three Deck', amountOfCards: 12 }
]

