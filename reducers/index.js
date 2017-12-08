import {
  RECEIVE_DECKS,
  SELECT_DECK,
  SELECT_QUIZ,
  SET_APP_STATE,
  APP_STATES,
  SHOW_QUIZ_ANSWER,
} from '../actions'

const INIT_STATE = {
  appState: APP_STATES.NAVIGATE_DECK,
  decks: [],
  selectedDeckKey: undefined,
  selectedIndexQuiz: -1,
  showQuizAnswer: false
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
        selectedIndexQuiz: -1
      }
    case SELECT_QUIZ:
      return {
        ...state,
        appState: APP_STATES.STARTED_QUIZ,
        selectedIndexQuiz: action.selectIndexQuiz,
        showQuizAnswer: false,
      }
    case SHOW_QUIZ_ANSWER:
      return {
        ...state,
        showQuizAnswer: action.showQuizAnswer,
      }
    case SET_APP_STATE:
      return {
        ...state,
        appState: action.appState,
      }
    default:
      return state
  }
}

export default decks