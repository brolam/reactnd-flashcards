import {
  RECEIVE_DECKS,
  receiveDecks
} from '../actions'

test('receiveDecks', () => {
  expect(receiveDecks(deckDummies)).toEqual(
    {
      type: RECEIVE_DECKS,
      decks: deckDummies,
    }
  )
});

const deckDummies = [
  { id: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { id: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { id: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]
