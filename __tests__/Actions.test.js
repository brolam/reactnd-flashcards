import {
  RECEIVE_DECKS,
  SELECT_DECK,
  SELECT_QUIZ,
  SET_APP_STATE,
  SET_DECK,
  APP_STATES,
  receiveDecks,
  selectDeck,
  setAppState,
  selectQuiz,
  setDeck
} from '../actions'

import {getNewDeck} from '../storage'

test('receiveDecks', () => {
  expect(receiveDecks(deckDummies)).toEqual(
    {
      type: RECEIVE_DECKS,
      decks: deckDummies,
    }
  )
});

test('selectDeck', () => {
  expect(selectDeck(deckDummies[2].key)).toEqual(
    {
      type: SELECT_DECK,
      deckKey: deckDummies[2].key,
    }
  )
});

test('setAppState', () => {
  expect(setAppState(APP_STATES.ADDING_DECK_QUIZ)).toEqual(
    {
      type: SET_APP_STATE,
      appState: APP_STATES.ADDING_DECK_QUIZ
    }
  )
});

test('selectIndexQuiz', () => {
  expect(selectQuiz(0)).toEqual(
    {
      type: SELECT_QUIZ,
      selectIndexQuiz: 0
    }
  )
});

const deckDummies = [
  { key: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { key: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { key: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]
