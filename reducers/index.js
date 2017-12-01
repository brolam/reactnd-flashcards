import {
  RECEIVE_DECKS,
  SELECT_DECK,
  SET_APP_STATE
} from '../actions'

const INIT_STATE = {
  decks: [],
  selectedDeckQuizzes: []
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
        selectedDeckKey: action.selectDeckId,
        selectedDeckQuizzes: quizzesDummy
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

const quizzesDummy = [
  { question: 'One Quetion' },
  { question: 'Two Quetion' },
  { question: 'Three Quetion' }
]

export default decks