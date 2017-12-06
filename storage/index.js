
import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'FLASH_CARDS:DECKS'

function getDeckQuizzesStorageKey(deckKey) {
  return `FLASH_CARDS:DECK:QUIZZES:${deckKey}`
}

function newKey() {
  return Math.random().toString(36).substr(-15)
}

export function getNewDeck(title, amountOfCards = 0) {
  return {
    key: newKey(),
    title,
    amountOfCards,
    lastUpdated: Date.now()
  }
}

export function getNewQuiz(question, answer, answerExpect, answered = undefined) {
  return {
    key: newKey(),
    question,
    answer,
    answerExpect,
    answered
  }
}

export function setDecks(decks) {
  const stringifyDecks = JSON.stringify(decks)
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, stringifyDecks)
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(decksStored => decksStored ? JSON.parse(decksStored) : [])
}

export const setDeck = deckUnSaved => new Promise(function (then) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(decksStored => {
      let decksStoredWithoutDeckUnSaved = []
      if (decksStored) {
        decksStoredWithoutDeckUnSaved = JSON.parse(decksStored).filter(
          deck => deck.key !== deckUnSaved.key
        )
        deckUnSaved.lastUpdated = Date.now()
      }
      const updatedDecks = [deckUnSaved, ...decksStoredWithoutDeckUnSaved]
      setDecks(updatedDecks).then(then(updatedDecks))
    })
})

export const setQuiz = (deck, quizUnsaved) => new Promise(function (then) {
  if (!deck.quizzes) deck.quizzes = [quizUnsaved]
  else deck.quizzes = [
    quizUnsaved,
    ...deck.quizzes.filter(quiz => quiz.key != quizUnsaved.key)
  ]
  deck.amountOfCards = deck.quizzes.length
  setDeck(deck).then(decks => then(decks))
})