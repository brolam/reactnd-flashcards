import reducer from '../reducers'
import { createStore } from 'redux'
import { receiveDecks, selectDeck } from '../actions'

test('init status', () => {
  const store = createStore(reducer)
  expect(store.getState()).toEqual({"decks": [], "selectedDeckQuizzes": []})
});

test('receiveDecks', () => {
  const store = createStore(reducer)
  store.dispatch(receiveDecks(deckDummies))
  expect(store.getState()).toEqual({ decks: deckDummies, selectedDeckQuizzes: [] })
});

test('selectDeck', () => {
  const store = createStore(reducer)
  store.dispatch(selectDeck(deckDummies[1].id))
  expect(store.getState()).toEqual({ decks: [], selectedDeckId: deckDummies[1].id, selectedDeckQuizzes: quizzesDummy })
});

const deckDummies = [
  { id: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { id: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { id: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]

const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]


