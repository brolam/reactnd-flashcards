import {
  RECEIVE_DECKS,
  SELECT_DECK,
  SET_APP_STATE,
  APP_STATES,
  receiveDecks,
  selectDeck,
  setAppState
} from '../actions'

test('receiveDecks', () => {
  expect(receiveDecks(deckDummies)).toEqual(
    {
      type: RECEIVE_DECKS,
      decks: deckDummies,
    }
  )
});

test('selectDeck', () => {
  expect(selectDeck(deckDummies[2].id)).toEqual(
    {
      type: SELECT_DECK,
      selectDeckId: deckDummies[2].id,
    }
  )
});

test('setAppState', () => {
  expect(setAppState(APP_STATES.NEW_DECK)).toEqual(
    {
      type: SET_APP_STATE,
      appState: APP_STATES.NEW_DECK
    }
  )
});


const deckDummies = [
  { id: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { id: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { id: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]
