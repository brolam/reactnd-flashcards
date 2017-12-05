import {
  RECEIVE_DECKS,
  SELECT_DECK,
  SELECT_QUIZ,
  SET_APP_STATE,
  APP_STATES,
  SET_DECK
} from '../actions'

const INIT_STATE = {
  appState: APP_STATES.NAVIGATE_DECK,
  decks: [],
  selectedDeckKey: undefined,
  selectedDeckQuizzes: [],
  selectedIndexQuiz: -1
}

function decks(state = INIT_STATE, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        decks: action.decks,
      }
    case SELECT_DECK:
      return {
        ...state,
        appState: APP_STATES.NAVIGATE_DECK,
        selectedDeckKey: action.deckKey,
        selectedDeckQuizzes: action.deckQuizzes,
        selectedIndexQuiz: -1
      }
    case SELECT_QUIZ:
      return {
        ...state,
        appState: APP_STATES.STARTED_QUIZ,
        selectedIndexQuiz: action.selectIndexQuiz,
      }
    case SET_APP_STATE:
      return {
        ...state,
        appState: action.appState,
      }
    case SET_DECK:
      const decks = [action.deck, ...state.decks]
      return {
        ...state,
        decks
      }
    default:
      return state
  }
}

export default decks