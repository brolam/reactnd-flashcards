import reducer from '../reducers'
import { createStore } from 'redux'
import {
  receiveDecks,
  selectDeck,
  selectQuiz,
  setAppState,
  APP_STATES,
  setDeck
} from '../actions'
import {getNewDeck} from '../storage'

test('init status', () => {
  const store = createStore(reducer)
  expect(store.getState()).toEqual({
    appState: APP_STATES.NAVIGATE_DECK,
    decks: [],
    selectedDeckQuizzes: [],
    selectedIndexQuiz: -1,
  })
});

test('receiveDecks', () => {
  const store = createStore(reducer)
  store.dispatch(receiveDecks(deckDummies))
  expect(store.getState()).toEqual({
    appState: APP_STATES.NAVIGATE_DECK,
    decks: deckDummies,
    selectedDeckQuizzes: [],
    selectedIndexQuiz: -1,
  })
});

test('selectDeck', () => {
  const store = createStore(reducer)
  store.dispatch(selectDeck(deckDummies[1].key, quizzesDummy))
  expect(store.getState()).toEqual({
    appState: APP_STATES.NAVIGATE_DECK,
    decks: [],
    selectedDeckKey: deckDummies[1].key,
    selectedDeckQuizzes: quizzesDummy,
    selectedIndexQuiz: -1,
  })
});

test('setAppState', () => {
  const store = createStore(reducer)
  store.dispatch(setAppState(APP_STATES.ADDING_DECK_QUIZ))
  expect(store.getState()).toEqual({
    appState: APP_STATES.ADDING_DECK_QUIZ,
    decks: [],
    selectedDeckQuizzes: [],
    selectedIndexQuiz: -1,
  })
});

test('selectQuiz', () => {
  const store = createStore(reducer)
  store.dispatch(selectQuiz(-1))
  expect(store.getState()).toEqual({
    appState: APP_STATES.STARTED_QUIZ,
    decks: [],
    selectedDeckQuizzes: [],
    selectedIndexQuiz: -1
  })
});

test('setDeck', () => {
  const store = createStore(reducer)
  const newDeck = getNewDeck('One Deck')
  store.dispatch(setDeck(newDeck))
  expect(store.getState()).toEqual({
    appState: APP_STATES.NAVIGATE_DECK,
    decks: [newDeck],
    selectedDeckQuizzes: [],
    selectedIndexQuiz: -1
  })
});

const deckDummies = [
  { key: 'one-item', title: 'One Deck', amountOfCards: 10 },
  { key: 'two-item', title: 'Two Deck', amountOfCards: 11 },
  { key: 'three-item', title: 'Three Deck', amountOfCards: 12 }
]

const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]



