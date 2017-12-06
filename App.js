import React from 'react';
import { Text, View } from 'react-native';
import appStyles from './styles/appStyles'
import AppStatusBar from './components/AppStatusBar'
import ScreenDecks from './components/ScreenDecks'
import ScreenDecksAndQuizzes from './components/ScreenDecksAndQuizzes'
import DeckWriteModal from './components/DeckWriteModal'
import { isPossibleTwoPanels } from './util/ScreenHelper';
import Dimensions from 'Dimensions';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { receiveDecks } from './actions'
import reducer from './reducers'
import { fetchDecks, getNewDeck, setDeck } from './storage/index';


const store = createStore(reducer)

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isTwoPanels: props.isTwoPanels,
      isAddingDeck: false
    };
  }

  componentDidMount() {
    fetchDecks().then(decks => store.dispatch(receiveDecks(decks)))
  }

  onLayoutChanged = event => {
    this.setState({ isTwoPanels: isPossibleTwoPanels(Dimensions.get('window')) });
  }

  onClickAddDeck = () => {
    this.setState({ isAddingDeck: true })
  }

  onClickCancelAddDeck = () => {
    this.setState({ isAddingDeck: false })
  }

  onSaveDeck = (title) => {
    const newDeck = getNewDeck(title)
    setDeck(newDeck).then(decks => {
      store.dispatch(receiveDecks(decks))
      this.setState({ isAddingDeck: false })
    })
  }

  render() {
    const { isAddingDeck } = this.state
    return (
      <Provider store={store}>
        <View style={appStyles.container} onLayout={this.onLayoutChanged} >
          <AppStatusBar />
          {
            (this.state.isTwoPanels) ?
              <ScreenDecksAndQuizzes onClickAddDeck={this.onClickAddDeck} />
              :
              <ScreenDecks screenProps={{ onClickAddDeck: this.onClickAddDeck }} />
          }
          {isAddingDeck &&
            <DeckWriteModal
              title="New Deck"
              onCancel={this.onClickCancelAddDeck}
              onSave={this.onSaveDeck}
            />
          }
        </View>
      </Provider>
    );
  }
}
