export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const SELECT_DECK = 'SELECT_DECK'
export const SET_APP_STATE = 'SET_APP_STATE'
export const SELECT_QUIZ = 'SELECT_QUIZ'
export const APP_STATES = {
  NAVIGATE_DECK: 'navigate_deck',
  NEW_DECK: 'newDeck',
  STARTED_QUIZ: 'started_quiz'
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function selectDeck(deckKey, deckQuizzes) {
  return {
    type: SELECT_DECK,
    deckKey,
    deckQuizzes,
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