import { RECEIVE_DECKS, SELECT_DECK } from '../actions'

const INIT_STATE = {
  decks: []
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
        selectedDeckId: action.selectDeckId
      }
    default:
      return state
  }
}

export default decks