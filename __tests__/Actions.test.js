import {
  RECEIVE_DECKS,
  SELECT_DECK,
  receiveDecks,
  selectDeck
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


const deckDummies = [
  { id: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { id: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { id: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]
