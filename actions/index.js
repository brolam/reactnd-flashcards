export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const SELECT_DECK = 'SELECT_DECK'
export const SET_APP_STATE = 'SET_APP_STATE'
export const SELECT_QUIZ = 'SELECT_QUIZ'
export const SHOW_QUIZ_ANSWER = 'SHOW_QUIZ_ANSWER'
export const APP_STATES = {
  NAVIGATE_DECK: 'navigate_deck',
  ADDING_DECK_QUIZ: 'adding_deck_quiz',
  EDITING_DECK_QUIZ: 'editing_deck_quiz',
  STARTED_QUIZ: 'started_quiz'
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function selectDeck(deckKey) {
  return {
    type: SELECT_DECK,
    deckKey,
  }
}

export function setAppState(appState) {
  return {
    type: SET_APP_STATE,
    appState
  }
}

export function selectQuiz(index) {
  return {
    type: SELECT_QUIZ,
    selectIndexQuiz: index
  }
}

export function showQuizAnswer(show) {
  return {
    type: SHOW_QUIZ_ANSWER,
    showQuizAnswer: show
  }
}