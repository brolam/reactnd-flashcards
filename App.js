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
      isAddingDeck: false,
      isEditingDeck: false,
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

  onClickEditDeck = () => {
    this.setState({ isEditingDeck: true })
  }

  onClickCancelAddDeck = () => {
    this.setState({
      isAddingDeck: false,
      isEditingDeck: false,
    })
  }

  onSaveDeck = (title) => {
    const unSaveDeck = this.state.isEditingDeck
      ? { ...this.getSelectedDeck(), title }
      : getNewDeck(title)
    setDeck(unSaveDeck).then(decks => {
      store.dispatch(receiveDecks(decks))
      this.setState({
        isAddingDeck: false,
        isEditingDeck: false,
      })
    })
  }

  getSelectedDeck() {
    const { decks, selectedDeckKey } = store.getState()
    return decks.find(deck => deck.key === selectedDeckKey)
  }

  render() {
    const { isAddingDeck, isEditingDeck } = this.state
    return (
      <Provider store={store}>
        <View style={appStyles.container} onLayout={this.onLayoutChanged} >
          <AppStatusBar />
          {
            (this.state.isTwoPanels) ?
              <ScreenDecksAndQuizzes onClickAddDeck={this.onClickAddDeck} />
              :
              <ScreenDecks screenProps={{
                onClickAddDeck: this.onClickAddDeck,
                onClickEditDeck: this.onClickEditDeck
              }} />
          }
          {isAddingDeck &&
            <DeckWriteModal
              title="New Deck"
              onCancel={this.onClickCancelAddDeck}
              onSave={this.onSaveDeck}
            />
          }
          {isEditingDeck &&
            <DeckWriteModal
              title="Edit Deck"
              deck={this.getSelectedDeck()}
              onCancel={this.onClickCancelAddDeck}
              onSave={this.onSaveDeck}
            />
          }
        </View>
      </Provider>
    );
  }
}
