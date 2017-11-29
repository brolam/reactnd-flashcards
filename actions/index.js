export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const SELECT_DECK = 'SELECT_DECK'
export const SET_APP_STATE = 'SET_APP_STATE'
export const APP_STATES = {
  NEW_DECK: 'newDeck'
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function selectDeck(selectDeckId) {
  return {
    type: SELECT_DECK,
    selectDeckId,
  }
}

export function setAppState(appState) {
  return {
    type: SET_APP_STATE,
    appState
  }
}