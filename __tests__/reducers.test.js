import reducer from '../reducers'
import { createStore } from 'redux'
import {
  receiveDecks,
  selectDeck,
  selectQuiz,
  setAppState,
  APP_STATES,
  setDeck,
  showQuizAnswer
} from '../actions'
import {getNewDeck} from '../storage'

test('init status', () => {
  const store = createStore(reducer)
  expect(store.getState()).toEqual({
    appState: APP_STATES.NAVIGATE_DECK,
    decks: [],
    selectedIndexQuiz: -1,
    showQuizAnswer: false
  })
});

test('receiveDecks', () => {
  const store = createStore(reducer)
  store.dispatch(receiveDecks(deckDummies))
  expect(store.getState()).toEqual({
    appState: APP_STATES.NAVIGATE_DECK,
    decks: deckDummies,
    selectedIndexQuiz: -1,
    showQuizAnswer: false
  })
});

test('selectDeck', () => {
  const store = createStore(reducer)
  store.dispatch(selectDeck(deckDummies[1].key))
  expect(store.getState()).toEqual({
    appState: APP_STATES.NAVIGATE_DECK,
    decks: [],
    selectedDeckKey: deckDummies[1].key,
    selectedIndexQuiz: -1,
    showQuizAnswer: false
  })
});

test('setAppState', () => {
  const store = createStore(reducer)
  store.dispatch(setAppState(APP_STATES.ADDING_DECK_QUIZ))
  expect(store.getState()).toEqual({
    appState: APP_STATES.ADDING_DECK_QUIZ,
    decks: [],
    selectedIndexQuiz: -1,
    showQuizAnswer: false
  })
});

test('selectQuiz', () => {
  const store = createStore(reducer)
  store.dispatch(selectQuiz(-1))
  expect(store.getState()).toEqual({
    appState: APP_STATES.STARTED_QUIZ,
    decks: [],
    selectedIndexQuiz: -1,
    showQuizAnswer: false
  })
});

test('showQuizAnswer', () => {
  const store = createStore(reducer)
  store.dispatch(showQuizAnswer(true))
  expect(store.getState()).toEqual({
    appState: APP_STATES.NAVIGATE_DECK,
    decks: [],
    selectedIndexQuiz: -1,
    showQuizAnswer: true
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



